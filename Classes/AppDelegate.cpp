#include "AppDelegate.h"
#include "CCLuaEngine.h"
#include "SimpleAudioEngine.h"
#include "lua_tinker.h"

#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
#include "AdmobHelper.h"

void showAds()
{
	AdmobHelper::showAds();
}
#endif

using namespace CocosDenshion;

USING_NS_CC;

AppDelegate::AppDelegate()
{
}

AppDelegate::~AppDelegate()
{
    SimpleAudioEngine::end();
}

bool AppDelegate::applicationDidFinishLaunching()
{
    // initialize director
    auto director = Director::getInstance();
    director->setOpenGLView(EGLView::getInstance());

    EGLView::getInstance()->setDesignResolutionSize(288, 512, ResolutionPolicy::EXACT_FIT);

    // turn on display FPS
    director->setDisplayStats(false);

    // set FPS. the default value is 1.0/60 if you don't call this
    director->setAnimationInterval(1.0 / 60);

    // register lua engine
    auto engine = LuaEngine::getInstance();
    ScriptEngineManager::getInstance()->setScriptEngine(engine);
    
    //The call was commented because it will lead to ZeroBrane Studio can't find correct context when debugging
    //engine->executeScriptFile("hello.lua");
    engine->executeString("require 'main.lua'");

#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
	//AdmobHelper::showAds();
	//bind func to lua
	lua_State * L = LuaEngine::getInstance()->getLuaStack()->getLuaState();
	lua_tinker::def(L, "showAds", showAds);
#endif
    
    return true;
}

// This function will be called when the app is inactive. When comes a phone call,it's be invoked too
void AppDelegate::applicationDidEnterBackground()
{
    Director::getInstance()->stopAnimation();

    SimpleAudioEngine::getInstance()->pauseBackgroundMusic();
}

// this function will be called when the app is active again
void AppDelegate::applicationWillEnterForeground()
{
    Director::getInstance()->startAnimation();

    SimpleAudioEngine::getInstance()->resumeBackgroundMusic();
}
