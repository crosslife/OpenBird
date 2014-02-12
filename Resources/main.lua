require "Cocos2d"
require "scripts.out"
require "scripts.tools"

-- cclog
cclog = function(...)
    print(string.format(...))
end

-- for CCLuaEngine traceback
function __G__TRACKBACK__(msg)
    cclog("----------------------------------------")
    cclog("LUA ERROR: " .. tostring(msg) .. "\n")
    cclog(debug.traceback())
    cclog("----------------------------------------")
end

local function main()
    -- avoid memory leak
    collectgarbage("setpause", 100)
    collectgarbage("setstepmul", 5000)

    local startScene = require("scripts.StartScene")
    cc.Director:getInstance():runWithScene(startScene)
end

xpcall(main, __G__TRACKBACK__)
