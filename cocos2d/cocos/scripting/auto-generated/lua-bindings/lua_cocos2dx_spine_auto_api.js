/**
 * @module cocos2dx_spine
 */
var sp = sp || {};

/**
 * @class Skeleton
 */
sp.Skeleton = {

/**
 * @method setToSetupPose
 */
setToSetupPose : function () {},

/**
 * @method setBlendFunc
 * @param {const cocos2d::BlendFunc&}
 */
setBlendFunc : function () {},

/**
 * @method onDraw
 */
onDraw : function () {},

/**
 * @method setSlotsToSetupPose
 */
setSlotsToSetupPose : function () {},

/**
 * @method getBlendFunc
 * @return A value converted from C/C++ "const cocos2d::BlendFunc&"
 */
getBlendFunc : function () {},

/**
 * @method setSkin
 * @return A value converted from C/C++ "bool"
 * @param {const char*}
 */
setSkin : function () {},

/**
 * @method setBonesToSetupPose
 */
setBonesToSetupPose : function () {},

};

/**
 * @class SkeletonAnimation
 */
sp.SkeletonAnimation = {

/**
 * @method addAnimation
 * @return A value converted from C/C++ "spTrackEntry*"
 * @param {int}
 * @param {const char*}
 * @param {bool}
 * @param {float}
 */
addAnimation : function () {},

/**
 * @method getCurrent
 * @return A value converted from C/C++ "spTrackEntry*"
 */
getCurrent : function () {},

/**
 * @method setMix
 * @param {const char*}
 * @param {const char*}
 * @param {float}
 */
setMix : function () {},

/**
 * @method setAnimation
 * @return A value converted from C/C++ "spTrackEntry*"
 * @param {int}
 * @param {const char*}
 * @param {bool}
 */
setAnimation : function () {},

/**
 * @method clearTracks
 */
clearTracks : function () {},

/**
 * @method clearTrack
 */
clearTrack : function () {},

/**
 * @method onAnimationStateEvent
 * @param {int}
 * @param {spEventType}
 * @param {spEvent*}
 * @param {int}
 */
onAnimationStateEvent : function () {},

};
