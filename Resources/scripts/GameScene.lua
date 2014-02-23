--
-- Author: GeZiyang
-- Date: 2014-02-10
--

local midX = visibleSize.width / 2
local midY = visibleSize.height / 2
--config
local birdX = 90
local birdSize = 15

local pipeCount = 5
local pipeHeight = 320
local pipeDistance = 100

local landHeight = 112

local tapV = 260
local systemGravity = -900
--config end

-- vars
local PIPE_NEW = 0
local PIPE_PASS = 1

g_initFlag = false

local gameOver = false
local sceneGame = nil
local scoreNode = nil
local pipes = {}

-- for score calcs 0 for
local pipeState = {}


local totalScore = 0

local checkFunc = 0
local createPipeFunc = 0
local birdRotateFunc = 0

local gameLayerListener = nil
local overLayerListener = nil

-- functions
local function showGameOverLayer()
    

    local overLayer = cc.Layer:create()
    local actionNode = cc.Node:create()
    overLayer:addChild(actionNode)

    local gameOverLogo = createAtlasSprite("text_game_over")
    local scorePanel = createAtlasSprite("score_panel")

    local nowScoreNode = cc.Node:create()
    local bestScoreNode = cc.Node:create()
    local newInfoSprite = createAtlasSprite("new")

    local playButton = createAtlasSprite("button_play")
    local rankButton = createAtlasSprite("button_score")

    local function initOverItems()
        -- game over
        gameOverLogo:setPosition(cc.p(midX, midY + 100))
        gameOverLogo:setVisible(false)

        overLayer:addChild(gameOverLogo)

        -- score panel
        scorePanel:setPosition(cc.p(midX, midY))
        scorePanel:setVisible(false)

        -- score node
        nowScoreNode:setPosition(cc.p(200, 80))
        scorePanel:addChild(nowScoreNode)

        bestScoreNode:setPosition(cc.p(200, 40))
        scorePanel:addChild(bestScoreNode)

        -- new info
        newInfoSprite:setPosition(cc.p(155, 60))
        newInfoSprite:setVisible(false)
        scorePanel:addChild(newInfoSprite)


        overLayer:addChild(scorePanel)
        
        --bottom buttons

        -- play button      
        playButton:setPosition(cc.p(midX / 2, midY - 120))
        playButton:setVisible(false)

        overLayer:addChild(playButton, 1000)


        g_playButton = playButton

        -- rank button
        rankButton:setPosition(cc.p(visibleSize.width * 3 / 4, midY - 120))
        rankButton:setVisible(false)

        overLayer:addChild(rankButton, 1000)

        g_rankButton = rankButton
    end

    local function showOverItems()
        local function showGameOverLogo()
            cc.SimpleAudioEngine:getInstance():playEffect(uiPath)
            scoreNode:setVisible(false)

            gameOverLogo:setVisible(true)

            local place = cc.Place:create(cc.p(midX, midY + 120))
            local move1 = cc.MoveTo:create(0.2, cc.p(midX, midY + 96))
            local move2 = cc.MoveTo:create(0.2, cc.p(midX, midY + 100))

            gameOverLogo:runAction(cc.Sequence:create(place, move1, move2))
        end

        local function showScorePanel()
            cc.SimpleAudioEngine:getInstance():playEffect(uiPath)
            scorePanel:setVisible(true)

            local place = cc.Place:create(cc.p(midX, -100))
            local move1 = cc.MoveTo:create(0.1, cc.p(midX, midY))

            scorePanel:runAction(cc.Sequence:create(place, move1))
        end

        local function showNewRecordInfo()
            newInfoSprite:setVisible(true)
        end

        local function showMedal()
            if totalScore < 10 then
                return
            end

            local medalStr = "medals_"..(math.max(4 - math.floor(totalScore / 10), 0))
            local medalSprite = createAtlasSprite(medalStr)

            medalSprite:setPosition(cc.p(55, 60))
            scorePanel:addChild(medalSprite)

        end

        local function showScoreNumber()
            --CreateSpriteScore(nowScoreNode, totalScore, 2, 2)
            local savedBestScore = cc.UserDefault:getInstance():getIntegerForKey("bestScore", 0)
            if totalScore > savedBestScore then
                savedBestScore = totalScore
                -- show new
                showNewRecordInfo()
                -- save score
                cc.UserDefault:getInstance():setIntegerForKey("bestScore", totalScore)
            end

            CreateSpriteScore(bestScoreNode, savedBestScore, 2, 2)
            CreateSpriteScore(nowScoreNode, 0, 2, 2)

            local tmpScore = 0
            local showSingleNumberFunc = 0
            local function showSingleNumber()
                CreateSpriteScore(nowScoreNode, tmpScore, 2, 2)
                tmpScore = tmpScore + 1

                if tmpScore > totalScore then
                    cc.Director:getInstance():getScheduler():unscheduleScriptEntry(showSingleNumberFunc)
                end
            end

            showSingleNumberFunc = cc.Director:getInstance():getScheduler():scheduleScriptFunc(showSingleNumber, 0.5 / totalScore, false)
        end

        local function showBottomButton()
            playButton:setVisible(true)
            rankButton:setVisible(true)
        end

        local delay1 = cc.DelayTime:create(1)
        local showOverLogoFunc = cc.CallFunc:create(showGameOverLogo)
        local showScorePanelFunc = cc.CallFunc:create(showScorePanel)
        local showMedalFunc = cc.CallFunc:create(showMedal)
        local showScoreNumberFunc = cc.CallFunc:create(showScoreNumber)
        local showBottomButtonFunc = cc.CallFunc:create(showBottomButton)

        local action = cc.Sequence:create(delay1, showOverLogoFunc, delay1, showScorePanelFunc, showMedalFunc, 
            showScoreNumberFunc, delay1, showBottomButtonFunc)
        actionNode:runAction(action)
    end

    initOverItems()
    showOverItems()
    -- listener

    g_rateButton = nil
    overLayerListener = cc.EventListenerTouchOneByOne:create()
    overLayerListener:registerScriptHandler(onCommonMenuLayerTouchBegan,cc.Handler.EVENT_TOUCH_BEGAN )
    overLayerListener:registerScriptHandler(onCommonMenuLayerTouchEnded,cc.Handler.EVENT_TOUCH_ENDED )
    overLayer:getEventDispatcher():addEventListenerWithSceneGraphPriority(overLayerListener, overLayer)


    sceneGame:addChild(overLayer)
end

local function createPipes(layer)
    local function initPipe()
    	for i = 1, pipeCount do
    		local downPipe = createAtlasSprite("pipe_down")
			local upPipe = createAtlasSprite("pipe_up")

			downPipe:setPosition(cc.p(0, pipeHeight + pipeDistance))

			local singlePipe = cc.Node:create()
			singlePipe:addChild(downPipe)
			singlePipe:addChild(upPipe)

			singlePipe:setPosition(cc.p(- visibleSize.width * 2, 0))

			layer:addChild(singlePipe, 10)

			pipes[i] = singlePipe
            pipeState[i] = PIPE_PASS			
    	end
    	
    end

    local function createPipe()
    	for i = 1, pipeCount do
            print(i)
    		if pipes[i]:getPositionX() < -100 then
    			local pipeNode = pipes[i]
                pipeState[i] = PIPE_NEW

    			pipeNode:stopAllActions()

    			local randomHeight = math.random(0,3)

    			pipeNode:setPosition(cc.p(visibleSize.width * 2, 50 * randomHeight))
    			pipeNode:setTag(randomHeight)

    			local move = cc.MoveTo:create(8, cc.p(- visibleSize.width * 2, 50 * randomHeight))
				pipeNode:runAction(move)
				break
    		end
    	end
	end

	initPipe()
	createPipeFunc = cc.Director:getInstance():getScheduler():scheduleScriptFunc(createPipe, 1.3, false)
end



local function createLayerBg()
    local layerBg, land_1, land_2 = createCommonBackLayer()

    local groudNode = cc.Node:create()
    groudNode:setPhysicsBody(cc.PhysicsBody:createEdgeSegment(cc.p(0, landHeight), cc.p(288, landHeight)))
    layerBg:addChild(groudNode)

    -- add bird
    local spriteBird = createBird()
    spriteBird:setPosition(birdX, visibleSize.height / 2 + 10)
    spriteBird:setPhysicsBody(cc.PhysicsBody:createCircle(birdSize))
    spriteBird:getPhysicsBody():setEnable(false)

    spriteBird:runAction(createFlyAction(cc.p(spriteBird:getPosition())))

    layerBg:addChild(spriteBird, 1000)

    -- add blink white
    local whiteBlinkSprite = createAtlasSprite("white")
    whiteBlinkSprite:setScale(100)
    whiteBlinkSprite:setOpacity(0)
    layerBg:addChild(whiteBlinkSprite, 2000)  

    -- init ready info   
    local rNode = nil 
    local rTextSprite = nil
    local rImage = nil
    local function initReady()
    	local readyTextSprite = createAtlasSprite("text_ready")
    	readyTextSprite:setPosition(cc.p(0, 100))

    	local readyImage = createAtlasSprite("tutorial")

    	local readyNode = cc.Node:create()
    	readyNode:addChild(readyTextSprite)
    	readyNode:addChild(readyImage)

    	readyNode:setPosition(cc.p(visibleSize.width / 2, visibleSize.height / 2))

    	rNode = readyNode
    	rTextSprite = readyTextSprite
    	rImage = readyImage

    	layerBg:addChild(readyNode)
    end  

    local function hideReady()
        spriteBird:stopActionByTag(g_flyTag)
    	rTextSprite:runAction(cc.FadeOut:create(0.2))
    	rImage:runAction(cc.FadeOut:create(0.2))

    end

    initReady()

    -- score
    scoreNode = cc.Node:create()
    local function initScore()
        
        scoreNode:setPosition(cc.p(visibleSize.width / 2, visibleSize.height * 4 / 5 + 10))
        layerBg:addChild(scoreNode, 10000)
    end

    local function refreshScore()
        CreateSpriteScore(scoreNode, totalScore, 1, 1)
    end

    initScore()
    refreshScore()
    

	local function blinkWhite()
		local fadeIn = cc.FadeIn:create(0.1)
		local fadeOut = cc.FadeOut:create(0.1)

		whiteBlinkSprite:runAction(cc.Sequence:create(fadeIn, fadeOut))
	end

	local function GameOver()
        gameOver = true

		cc.SimpleAudioEngine:getInstance():playEffect(hitPath)

		for i = 1, pipeCount do
			pipes[i]:stopAllActions()
		end

		land_1:stopAllActions()
		land_2:stopAllActions()

        spriteBird:getPhysicsBody():setVelocity(cc.p(0, 0))      

		cc.Director:getInstance():getScheduler():unscheduleScriptEntry(createPipeFunc)
		cc.Director:getInstance():getScheduler():unscheduleScriptEntry(checkFunc)

		blinkWhite()
        layerBg:getEventDispatcher():removeEventListener(gameLayerListener)

        showGameOverLayer()
	end	

	-- check hit and calc score
    local function rotateBird()
        local v = spriteBird:getPhysicsBody():getVelocity()
        spriteBird:setRotation(math.min(math.max(-90, v.y * 0.2 + 60), 30))
    end

	
	local function checkHit()


        -- check hit
		if spriteBird:getPositionY() < landHeight + birdSize then
			GameOver()
			return
		end
        -- calc score
        for i=1, pipeCount do

            -- check hit
            if math.abs(pipes[i]:getPositionX() - birdX) < (birdSize + 26) then
                -- check down
                if spriteBird:getPositionY() < pipes[i]:getPositionY() + pipeHeight / 2 + birdSize then
                    cc.SimpleAudioEngine:getInstance():playEffect(fallPath)
                    GameOver()
                    return 
                end
                -- check up
                if spriteBird:getPositionY() > pipes[i]:getPositionY() + pipeHeight / 2 + pipeDistance - birdSize then
                    cc.SimpleAudioEngine:getInstance():playEffect(fallPath)
                    GameOver()
                    return
                end
            end

            if pipeState[i] == PIPE_NEW and pipes[i]:getPositionX() < birdX then
                pipeState[i] = PIPE_PASS
                totalScore = totalScore + 1
                cc.SimpleAudioEngine:getInstance():playEffect(scorePath)
                refreshScore()
                return
            end
        end
	end
	

	-- listener
    local touchBeginPoint = nil
    local ready = false

    local function onTouchBegan(touch, event)
        local location = touch:getLocation()
        -- cclog("onTouchBegan: %0.2f, %0.2f", location.x, location.y)
        touchBeginPoint = {x = location.x, y = location.y}

        if not ready then
        	ready = true
        	hideReady()
        	createPipes(layerBg)
        	spriteBird:getPhysicsBody():setEnable(true)
            spriteBird:getPhysicsBody():setVelocity(cc.p(0, tapV))

        	checkFunc = cc.Director:getInstance():getScheduler():scheduleScriptFunc(checkHit, 0, false)
            birdRotateFunc = cc.Director:getInstance():getScheduler():scheduleScriptFunc(rotateBird, 0, false)
        else
            -- spriteBird:setPosition(cc.p(birdX, spriteBird:getPositionY() + 10))
            spriteBird:getPhysicsBody():setVelocity(cc.p(0, tapV))
            -- spriteBird:getPhysicsBody():applyImpulse(cc.p(0, 20000))
            print(spriteBird:getPhysicsBody():getVelocity().y)
        end


        cc.SimpleAudioEngine:getInstance():playEffect(wingPath)

         -- CCTOUCHBEGAN event must return true
        return true
    end

    gameLayerListener = cc.EventListenerTouchOneByOne:create()
    gameLayerListener:registerScriptHandler(onTouchBegan,cc.Handler.EVENT_TOUCH_BEGAN )
    layerBg:getEventDispatcher():addEventListenerWithSceneGraphPriority(gameLayerListener, layerBg)

    local function onContactBegin(event, contact)
        cclog("onContactBegin")
        if not gameOver then
            gameOver = true
            GameOver()
        end
        spriteBird:getPhysicsBody():setEnable(false)
        spriteBird:stopAllActions()
        spriteBird:setRotation(-90) 
        
        cc.Director:getInstance():getScheduler():unscheduleScriptEntry(birdRotateFunc)
        birdRotateFunc = 0
    end

    local contactListener = cc.EventListenerPhysicsContactWithBodies:create(groudNode:getPhysicsBody(), spriteBird:getPhysicsBody())
    contactListener:registerScriptHandler(onContactBegin, cc.Handler.EVENT_PHYSICS_CONTACT_BEGIN)
    layerBg:getEventDispatcher():addEventListenerWithSceneGraphPriority(contactListener, layerBg)
	
    return layerBg
end

local function resetGameSceneValue()
    totalScore = 0
    gameOver = false

    if birdRotateFunc ~= 0 then
        cc.Director:getInstance():getScheduler():unscheduleScriptEntry(birdRotateFunc)
        birdRotateFunc = 0
    end
end
-- run
function createGameScene()

    resetGameSceneValue()

    local scene = cc.Scene:createWithPhysics()
    -- scene:getPhysicsWorld():setDebugDrawMask(cc.PhysicsWorld.DEBUGDRAW_ALL)
    scene:getPhysicsWorld():setGravity(cc.p(0, systemGravity))

    local gravity = scene:getPhysicsWorld():getGravity()
    print("gravity : "..gravity.x.." "..gravity.y)

    local layerBg = createLayerBg()
    scene:addChild(layerBg)
    sceneGame = scene

    return scene
end

return createGameScene()