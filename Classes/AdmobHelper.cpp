#include <cocos2d.h>

#if CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID
#include "AdmobHelper.h"
#include "platform/android/jni/JniHelper.h"
#include <jni.h>
#include <android/log.h>

const char* NativeActivityClassName = "org/cocos2dx/lua/Cocos2dxActivity";

void AdmobHelper::showAds(){
	cocos2d::JniMethodInfo t;
	if (cocos2d::JniHelper::getStaticMethodInfo(t
                                                , NativeActivityClassName
                                                , "showAdPopup"
                                                , "()V"))
	{
		t.env->CallStaticVoidMethod(t.classID, t.methodID);
		t.env->DeleteLocalRef(t.classID);
	}
}

#endif