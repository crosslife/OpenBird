--
-- Author: GeZiyang
-- Date: 2014-02-10
--

-- config
local sceneStart = nil

local function createStartBackLayer()
	local backLayer = createCommonBackLayer()

	-- logo
	local spriteLogo = createAtlasSprite("title")
	spriteLogo:setPosition(cc.p(visibleSize.width / 2, visibleSize.height * 2 / 3))
	backLayer:addChild(spriteLogo)

	-- flappy bird
	local spriteBird = createBird()
	spriteBird:setPosition(cc.p(visibleSize.width / 2, visibleSize.height / 2 + 25))

	spriteBird:runAction(createFlyAction(cc.p(spriteBird:getPosition())))

	backLayer:addChild(spriteBird)

	-- rate button
	local rateButton = createAtlasSprite("button_rate")
	rateButton:setPosition(cc.p(visibleSize.width / 2, visibleSize.height / 2 - 35))
	backLayer:addChild(rateButton)

	-- play button
	local playButton = createAtlasSprite("button_play")
	playButton:setPosition(cc.p(visibleSize.width / 4, visibleSize.height / 2 - 120))
	backLayer:addChild(playButton, 1000)

	-- rank button
	local rankButton = createAtlasSprite("button_score")
	rankButton:setPosition(cc.p(visibleSize.width * 3 / 4, visibleSize.height / 2 - 120))
	backLayer:addChild(rankButton, 1000)

	-- copy right
	local spriteCopyright = createAtlasSprite("brand_copyright")
	spriteCopyright:setPosition(cc.p(visibleSize.width / 2, visibleSize.height / 2 - 170))
	backLayer:addChild(spriteCopyright, 1000)	

	-- for common listener
	g_rateButton = rateButton
	g_playButton = playButton
	g_rankButton = rankButton

    local listener = cc.EventListenerTouchOneByOne:create()
    listener:registerScriptHandler(onCommonMenuLayerTouchBegan,cc.Handler.EVENT_TOUCH_BEGAN )
    listener:registerScriptHandler(onCommonMenuLayerTouchEnded,cc.Handler.EVENT_TOUCH_ENDED )
    local eventDispatcher = backLayer:getEventDispatcher()
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener, backLayer)

	return backLayer
end

-- run
if sceneStart == nil then
	sceneStart = cc.Scene:create()

	local backLayer = createStartBackLayer()
	sceneStart:addChild(backLayer)
end

return sceneStart