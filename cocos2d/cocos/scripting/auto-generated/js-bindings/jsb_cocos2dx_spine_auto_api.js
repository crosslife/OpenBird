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
 * @method getAttachment
 * @return A value converted from C/C++ "spAttachment*"
 * @param {const char*}
 * @param {const char*}
 */
getAttachment : function () {},

/**
 * @method setAttachment
 * @return A value converted from C/C++ "bool"
 * @param {const char*}
 * @param {const char*}
 */
setAttachment : function () {},

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
 * @method findSlot
 * @return A value converted from C/C++ "spSlot*"
 * @param {const char*}
 */
findSlot : function () {},

/**
 * @method updateWorldTransform
 */
updateWorldTransform : function () {},

/**
 * @method setBonesToSetupPose
 */
setBonesToSetupPose : function () {},

/**
 * @method findBone
 * @return A value converted from C/C++ "spBone*"
 * @param {const char*}
 */
findBone : function () {},

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
 * @method setAnimationStateData
 * @param {spAnimationStateData*}
 */
setAnimationStateData : function () {},

/**
 * @method update
 * @param {float}
 */
update : function () {},

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
