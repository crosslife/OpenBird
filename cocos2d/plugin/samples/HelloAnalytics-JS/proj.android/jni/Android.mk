LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := game

LOCAL_MODULE_FILENAME := libgame

LOCAL_SRC_FILES := hellocpp/main.cpp \
                   ../../Classes/AppDelegate.cpp \
                   ../../../../jsbindings/auto/jsb_pluginx_protocols_auto.cpp \
                   ../../../../jsbindings/manual/pluginxUTF8.cpp \
                   ../../../../jsbindings/manual/jsb_pluginx_basic_conversions.cpp \
                   ../../../../jsbindings/manual/jsb_pluginx_manual_protocols.cpp \
                   ../../../../jsbindings/manual/jsb_pluginx_manual_callback.cpp \
                   ../../../../jsbindings/manual/jsb_pluginx_extension_registration.cpp \
                   ../../../../jsbindings/manual/jsb_pluginx_spidermonkey_specifics.cpp 
                   
LOCAL_C_INCLUDES := $(LOCAL_PATH)/../../Classes \
                    $(LOCAL_PATH)/../../../../jsbindings \
                    $(LOCAL_PATH)/../../../../jsbindings/auto \
                    $(LOCAL_PATH)/../../../../jsbindings/manual 

LOCAL_WHOLE_STATIC_LIBRARIES := cocos_jsb_static \
        jsb_extension_static \
        jsb_localstorage_static \
        jsb_chipmunk_static \
        PluginProtocolStatic

include $(BUILD_SHARED_LIBRARY)

$(call import-module,scripting/javascript/bindings)
$(call import-module,scripting/javascript/bindings/extension)
$(call import-module,scripting/javascript/bindings/localstorage)
$(call import-module,scripting/javascript/bindings/chipmunk)
$(call import-module,protocols/android)
