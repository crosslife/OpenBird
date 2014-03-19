--
-- Author: GeZiyang
-- Date: 2014-02-10
--

-- config
local flySpeed  = 2.5
local flyOffset = 5

-- vars
g_flyTag = 1000

g_rateButton = nil
g_playButton = nil
g_rankButton = nil

cc.FileUtils:getInstance():addSearchPath("res/")
local textureAtlas = cc.Director:getInstance():getTextureCache():addImage("atlas.png")

wingPath = cc.FileUtils:getInstance():fullPathForFilename("sfx_wing.wav")
hitPath = cc.FileUtils:getInstance():fullPathForFilename("sfx_hit.wav")
scorePath = cc.FileUtils:getInstance():fullPathForFilename("sfx_point.wav")
fallPath = cc.FileUtils:getInstance():fullPathForFilename("sfx_die.wav")
uiPath = cc.FileUtils:getInstance():fullPathForFilename("sfx_swooshing.wav")

cc.SimpleAudioEngine:getInstance():preloadEffect(wingPath)
cc.SimpleAudioEngine:getInstance():preloadEffect(hitPath)
cc.SimpleAudioEngine:getInstance():preloadEffect(scorePath)
cc.SimpleAudioEngine:getInstance():preloadEffect(fallPath)
cc.SimpleAudioEngine:getInstance():preloadEffect(uiPath)

visibleSize = cc.Director:getInstance():getVisibleSize()
print("visibleSize :"..visibleSize.width.." "..visibleSize.height)

local function generateSpriteLuaFile()
    -- body
    local atlasFile = io.open("atlas.txt", "r")
    local outFile = io.open("out.lua","w")
    outFile:write("a = {}\n")

    local line, tmpSprite

    for line in atlasFile:lines() do
        tmpSprite = {}
        for i in string.gmatch(line, "%S+") do
            tmpSprite[#tmpSprite + 1] = i
            cclog(i)
        end
        local name = tmpSprite[1]
        local width = tmpSprite[2]
        local height = tmpSprite[3]
        local x = math.floor(1024 * (tonumber(tmpSprite[4])) + 0.1)
        local y = math.floor(1024 * (tonumber(tmpSprite[5])) + 0.1)
        outFile:write(string.format("a[\"%s\"]={width=%s, height=%s, x=%s, y=%s}\n", name, width, height, x, y))
    end   
    outFile.close()
end

function createAtlasSprite(name)
    local tmpTable = a[name]

    local rectX = tmpTable.x
    local rectY = tmpTable.y
    local rectWidth = tmpTable.width
    local rectHeight = tmpTable.height

    -- fix 1px edge bug
    if name == "land" then
        rectX = rectX + 1            
    end

    local rect = cc.rect(rectX, rectY, rectWidth, rectHeight)
    local frame = cc.SpriteFrame:createWithTexture(textureAtlas, rect)
    local atlasSprite = cc.Sprite:createWithSpriteFrame(frame)

    return atlasSprite
end

function getSpriteSize(name)
    return cc.size(a[name].width, a[name].height)
end

function createBird()
    local randomIndex = math.random(0, 2)

    local birdFrames = {}
    for i=1,3 do
        local tmpTable = a["bird"..randomIndex.."_"..(i-1)]
        local rect = cc.rect(tmpTable.x, tmpTable.y, tmpTable.width, tmpTable.height)
        local frame = cc.SpriteFrame:createWithTexture(textureAtlas, rect)
        birdFrames[#birdFrames + 1] = frame
    end

    local spriteBird = cc.Sprite:createWithSpriteFrame(birdFrames[1])       

    local animation = cc.Animation:createWithSpriteFrames(birdFrames, 0.1)
    local animate = cc.Animate:create(animation);
    spriteBird:runAction(cc.RepeatForever:create(animate))

    return spriteBird
end

function createCommonBackLayer()
    local layerBg = cc.Layer:create()

    local randomBgIndex = math.random(1, 2)
    local bgName = "bg_day"
    if randomBgIndex == 2 then
        bgName = "bg_night"
    end

    local bg = createAtlasSprite(bgName)
    bg:setPosition(cc.p(visibleSize.width / 2, visibleSize.height / 2))
    layerBg:addChild(bg)

    local landHeight = getSpriteSize("land").height

    -- first moving land
    local land_1 = createAtlasSprite("land")
    land_1:setPosition(visibleSize.width / 2, landHeight / 2)
    layerBg:addChild(land_1, 100)

    local move1 = cc.MoveTo:create(2, cc.p(- visibleSize.width / 2, landHeight / 2))
    local reset1 = cc.Place:create(cc.p(visibleSize.width / 2, landHeight / 2))
    land_1:runAction(cc.RepeatForever:create(cc.Sequence:create(move1, reset1)))

    -- second moving land
    local land_2 = createAtlasSprite("land")
    land_2:setPosition(visibleSize.width * 3 / 2, landHeight / 2)
    layerBg:addChild(land_2, 100)

    local move2 = cc.MoveTo:create(2, cc.p(visibleSize.width / 2, landHeight / 2))
    local reset2 = cc.Place:create(cc.p(visibleSize.width * 3 / 2, landHeight / 2))
    land_2:runAction(cc.RepeatForever:create(cc.Sequence:create(move2, reset2)))

    return layerBg, land_1, land_2
end

function createFlyAction(position)
    local moveUp   = cc.MoveTo:create(1.0 / flySpeed, cc.p(position.x, position.y + flyOffset))
    local moveDown = cc.MoveTo:create(1.0 / flySpeed, cc.p(position.x, position.y - flyOffset))

    local flyAction = cc.RepeatForever:create(cc.Sequence:create(moveUp, moveDown))
    flyAction:setTag(g_flyTag)
    return flyAction
end

local clickedButton = nil
local function checkMenuButton(button, name, point)
    cclog("checkMenuButton : "..name)
    local buttonSize = getSpriteSize(name)
    local buttonX = button:getPositionX()
    local buttonY = button:getPositionY()

    if math.abs(point.x - buttonX) < buttonSize.width / 2 and 
        math.abs(point.y - buttonY) < buttonSize.height / 2 then
        clickedButton = button
        return true
    end
    return false
end

-- listener
local touchBeginPoint = nil
function onCommonMenuLayerTouchBegan(touch, event)
    local location = touch:getLocation()
    cclog("onCommonMenuLayerTouchBegan: %0.2f, %0.2f", location.x, location.y)
    touchBeginPoint = {x = location.x, y = location.y}
    
    if g_rateButton ~= nil then
        checkMenuButton(g_rateButton, "button_rate", touchBeginPoint)
    end

    if g_playButton ~= nil then
        checkMenuButton(g_playButton, "button_play", touchBeginPoint)
    end

    if g_rankButton ~= nil then
        checkMenuButton(g_rankButton, "button_score", touchBeginPoint) 
    end     
    
    if clickedButton ~= nil then
        clickedButton:setPosition(cc.p(clickedButton:getPositionX(), clickedButton:getPositionY() - 3))
    end

     -- CCTOUCHBEGAN event must return true
    return true
end

function onCommonMenuLayerTouchEnded(touch, event)
    local location = touch:getLocation()
    cclog("onCommonMenuLayerTouchEnded: %0.2f, %0.2f", location.x, location.y)
    touchBeginPoint = nil

    if clickedButton ~= nil then
        clickedButton:setPosition(cc.p(clickedButton:getPositionX(), clickedButton:getPositionY() + 3))
        if clickedButton == g_rateButton then

        elseif clickedButton == g_playButton then
            local gameScene = nil 
            if g_initFlag == nil then
                gameScene = require("scripts.GameScene")
            else
                gameScene = createGameScene()
            end
            local trans = cc.TransitionFade:create(0.5, gameScene, cc.c3b(0,0,0))
            cc.Director:getInstance():replaceScene(trans)
            cc.SimpleAudioEngine:getInstance():playEffect(uiPath)
        elseif clickedButton == g_rankButton then
            showAds()
        end

        clickedButton = nil
    end

end

--size : 1.big 2.small
--alignType : 1. mid 2. right
function CreateSpriteScore(rootNode, score, size, alignType)
    local function createScoreDigit(digit)
        if size == 1 then
            return createAtlasSprite("font_0"..(48 + digit))
        end
        return createAtlasSprite("number_score_0"..digit)
    end

    rootNode:removeAllChildren()

    local distance = 20
    if size == 2 then
        distance = 15
    end

    local digits = {}
    local tmpScore = score
    local dig = math.fmod(tmpScore, 10)
    digits[#digits + 1] = dig
    while math.floor(tmpScore / 10) ~= 0 do            
        tmpScore = math.floor(tmpScore / 10)
        dig = math.fmod(tmpScore, 10)
        digits[#digits + 1] = dig
    end

    local nowOffset = (#digits - 1) * distance / 2
    if alignType == 2 then
        nowOffset = 0
    end

    for i=1, #digits do
        local digitSprite = createScoreDigit(digits[i])
        digitSprite:setPosition(cc.p(nowOffset, 0))
        rootNode:addChild(digitSprite)
        nowOffset = nowOffset - distance
    end

end