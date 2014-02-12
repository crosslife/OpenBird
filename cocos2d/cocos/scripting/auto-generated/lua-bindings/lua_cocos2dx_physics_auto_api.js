/**
 * @module cocos2dx_physics
 */
var cc = cc || {};

/**
 * @class PhysicsShape
 */
cc.PhysicsShape = {

/**
 * @method getFriction
 * @return A value converted from C/C++ "float"
 */
getFriction : function () {},

/**
 * @method setGroup
 * @param {int}
 */
setGroup : function () {},

/**
 * @method setDensity
 * @param {float}
 */
setDensity : function () {},

/**
 * @method getMass
 * @return A value converted from C/C++ "float"
 */
getMass : function () {},

/**
 * @method getMaterial
 * @return A value converted from C/C++ "const cocos2d::PhysicsMaterial&"
 */
getMaterial : function () {},

/**
 * @method getCollisionBitmask
 * @return A value converted from C/C++ "int"
 */
getCollisionBitmask : function () {},

/**
 * @method getArea
 * @return A value converted from C/C++ "float"
 */
getArea : function () {},

/**
 * @method setCategoryBitmask
 * @param {int}
 */
setCategoryBitmask : function () {},

/**
 * @method getGroup
 * @return A value converted from C/C++ "int"
 */
getGroup : function () {},

/**
 * @method setMoment
 * @param {float}
 */
setMoment : function () {},

/**
 * @method containsPoint
 * @return A value converted from C/C++ "bool"
 * @param {const cocos2d::Point&}
 */
containsPoint : function () {},

/**
 * @method getCategoryBitmask
 * @return A value converted from C/C++ "int"
 */
getCategoryBitmask : function () {},

/**
 * @method getType
 * @return A value converted from C/C++ "cocos2d::PhysicsShape::Type"
 */
getType : function () {},

/**
 * @method getContactTestBitmask
 * @return A value converted from C/C++ "int"
 */
getContactTestBitmask : function () {},

/**
 * @method getCenter
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getCenter : function () {},

/**
 * @method getDensity
 * @return A value converted from C/C++ "float"
 */
getDensity : function () {},

/**
 * @method setMass
 * @param {float}
 */
setMass : function () {},

/**
 * @method getTag
 * @return A value converted from C/C++ "int"
 */
getTag : function () {},

/**
 * @method calculateDefaultMoment
 * @return A value converted from C/C++ "float"
 */
calculateDefaultMoment : function () {},

/**
 * @method setCollisionBitmask
 * @param {int}
 */
setCollisionBitmask : function () {},

/**
 * @method getMoment
 * @return A value converted from C/C++ "float"
 */
getMoment : function () {},

/**
 * @method getOffset
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getOffset : function () {},

/**
 * @method getRestitution
 * @return A value converted from C/C++ "float"
 */
getRestitution : function () {},

/**
 * @method setFriction
 * @param {float}
 */
setFriction : function () {},

/**
 * @method setMaterial
 * @param {const cocos2d::PhysicsMaterial&}
 */
setMaterial : function () {},

/**
 * @method setTag
 * @param {int}
 */
setTag : function () {},

/**
 * @method setContactTestBitmask
 * @param {int}
 */
setContactTestBitmask : function () {},

/**
 * @method setRestitution
 * @param {float}
 */
setRestitution : function () {},

/**
 * @method getBody
 * @return A value converted from C/C++ "cocos2d::PhysicsBody*"
 */
getBody : function () {},

};

/**
 * @class PhysicsShapeCircle
 */
cc.PhysicsShapeCircle = {

/**
 * @method getRadius
 * @return A value converted from C/C++ "float"
 */
getRadius : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::PhysicsShapeCircle*"
 * @param {float}
 * @param {const cocos2d::PhysicsMaterial&}
 * @param {const cocos2d::Point&}
 */
create : function () {},

/**
 * @method calculateArea
 * @return A value converted from C/C++ "float"
 * @param {float}
 */
calculateArea : function () {},

/**
 * @method calculateMoment
 * @return A value converted from C/C++ "float"
 * @param {float}
 * @param {float}
 * @param {const cocos2d::Point&}
 */
calculateMoment : function () {},

};

/**
 * @class PhysicsShapeBox
 */
cc.PhysicsShapeBox = {

/**
 * @method getPointsCount
 * @return A value converted from C/C++ "int"
 */
getPointsCount : function () {},

/**
 * @method getSize
 * @return A value converted from C/C++ "cocos2d::Size"
 */
getSize : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::PhysicsShapeBox*"
 * @param {const cocos2d::Size&}
 * @param {const cocos2d::PhysicsMaterial&}
 * @param {const cocos2d::Point&}
 */
create : function () {},

/**
 * @method calculateArea
 * @return A value converted from C/C++ "float"
 * @param {const cocos2d::Size&}
 */
calculateArea : function () {},

/**
 * @method calculateMoment
 * @return A value converted from C/C++ "float"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {const cocos2d::Point&}
 */
calculateMoment : function () {},

};

/**
 * @class PhysicsShapePolygon
 */
cc.PhysicsShapePolygon = {

/**
 * @method getPointsCount
 * @return A value converted from C/C++ "int"
 */
getPointsCount : function () {},

/**
 * @method getPoint
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {int}
 */
getPoint : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::PhysicsShapePolygon*"
 * @param {const cocos2d::Point*}
 * @param {int}
 * @param {const cocos2d::PhysicsMaterial&}
 * @param {const cocos2d::Point&}
 */
create : function () {},

/**
 * @method calculateArea
 * @return A value converted from C/C++ "float"
 * @param {const cocos2d::Point*}
 * @param {int}
 */
calculateArea : function () {},

/**
 * @method calculateMoment
 * @return A value converted from C/C++ "float"
 * @param {float}
 * @param {const cocos2d::Point*}
 * @param {int}
 * @param {const cocos2d::Point&}
 */
calculateMoment : function () {},

};

/**
 * @class PhysicsShapeEdgeSegment
 */
cc.PhysicsShapeEdgeSegment = {

/**
 * @method getPointB
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getPointB : function () {},

/**
 * @method getPointA
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getPointA : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::PhysicsShapeEdgeSegment*"
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::PhysicsMaterial&}
 * @param {float}
 */
create : function () {},

};

/**
 * @class PhysicsShapeEdgeBox
 */
cc.PhysicsShapeEdgeBox = {

/**
 * @method getPointsCount
 * @return A value converted from C/C++ "int"
 */
getPointsCount : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::PhysicsShapeEdgeBox*"
 * @param {const cocos2d::Size&}
 * @param {const cocos2d::PhysicsMaterial&}
 * @param {float}
 * @param {const cocos2d::Point&}
 */
create : function () {},

};

/**
 * @class PhysicsShapeEdgePolygon
 */
cc.PhysicsShapeEdgePolygon = {

/**
 * @method getPointsCount
 * @return A value converted from C/C++ "int"
 */
getPointsCount : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::PhysicsShapeEdgePolygon*"
 * @param {const cocos2d::Point*}
 * @param {int}
 * @param {const cocos2d::PhysicsMaterial&}
 * @param {float}
 */
create : function () {},

};

/**
 * @class PhysicsShapeEdgeChain
 */
cc.PhysicsShapeEdgeChain = {

/**
 * @method getPointsCount
 * @return A value converted from C/C++ "int"
 */
getPointsCount : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::PhysicsShapeEdgeChain*"
 * @param {const cocos2d::Point*}
 * @param {int}
 * @param {const cocos2d::PhysicsMaterial&}
 * @param {float}
 */
create : function () {},

};

/**
 * @class PhysicsBody
 */
cc.PhysicsBody = {

/**
 * @method isGravityEnabled
 * @return A value converted from C/C++ "bool"
 */
isGravityEnabled : function () {},

/**
 * @method resetForces
 */
resetForces : function () {},

/**
 * @method getVelocityLimit
 * @return A value converted from C/C++ "float"
 */
getVelocityLimit : function () {},

/**
 * @method setGroup
 * @param {int}
 */
setGroup : function () {},

/**
 * @method getMass
 * @return A value converted from C/C++ "float"
 */
getMass : function () {},

/**
 * @method getCollisionBitmask
 * @return A value converted from C/C++ "int"
 */
getCollisionBitmask : function () {},

/**
 * @method getRotation
 * @return A value converted from C/C++ "float"
 */
getRotation : function () {},

/**
 * @method isResting
 * @return A value converted from C/C++ "bool"
 */
isResting : function () {},

/**
 * @method addShape
 * @return A value converted from C/C++ "cocos2d::PhysicsShape*"
 * @param {cocos2d::PhysicsShape*}
 * @param {bool}
 */
addShape : function () {},

/**
 * @method applyTorque
 * @param {float}
 */
applyTorque : function () {},

/**
 * @method getAngularVelocityLimit
 * @return A value converted from C/C++ "float"
 */
getAngularVelocityLimit : function () {},

/**
 * @method setAngularVelocityLimit
 * @param {float}
 */
setAngularVelocityLimit : function () {},

/**
 * @method getVelocity
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getVelocity : function () {},

/**
 * @method getLinearDamping
 * @return A value converted from C/C++ "float"
 */
getLinearDamping : function () {},

/**
 * @method removeAllShapes
 */
removeAllShapes : function () {},

/**
 * @method setAngularDamping
 * @param {float}
 */
setAngularDamping : function () {},

/**
 * @method setVelocityLimit
 * @param {float}
 */
setVelocityLimit : function () {},

/**
 * @method setEnable
 * @param {bool}
 */
setEnable : function () {},

/**
 * @method setCategoryBitmask
 * @param {int}
 */
setCategoryBitmask : function () {},

/**
 * @method getWorld
 * @return A value converted from C/C++ "cocos2d::PhysicsWorld*"
 */
getWorld : function () {},

/**
 * @method getAngularVelocity
 * @return A value converted from C/C++ "float"
 */
getAngularVelocity : function () {},

/**
 * @method getPosition
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getPosition : function () {},

/**
 * @method setGravityEnable
 * @param {bool}
 */
setGravityEnable : function () {},

/**
 * @method getGroup
 * @return A value converted from C/C++ "int"
 */
getGroup : function () {},

/**
 * @method setMoment
 * @param {float}
 */
setMoment : function () {},

/**
 * @method getTag
 * @return A value converted from C/C++ "int"
 */
getTag : function () {},

/**
 * @method local2World
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {const cocos2d::Point&}
 */
local2World : function () {},

/**
 * @method getCategoryBitmask
 * @return A value converted from C/C++ "int"
 */
getCategoryBitmask : function () {},

/**
 * @method getMoment
 * @return A value converted from C/C++ "float"
 * @param {float}
 */
getMoment : function () {},

/**
 * @method getFirstShape
 * @return A value converted from C/C++ "cocos2d::PhysicsShape*"
 */
getFirstShape : function () {},

/**
 * @method getShapes
 * @return A value converted from C/C++ "const cocos2d::Vector<cocos2d::PhysicsShape *>&"
 */
getShapes : function () {},

/**
 * @method getContactTestBitmask
 * @return A value converted from C/C++ "int"
 */
getContactTestBitmask : function () {},

/**
 * @method setAngularVelocity
 * @param {float}
 */
setAngularVelocity : function () {},

/**
 * @method world2Local
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {const cocos2d::Point&}
 */
world2Local : function () {},

/**
 * @method isEnabled
 * @return A value converted from C/C++ "bool"
 */
isEnabled : function () {},

/**
 * @method setMass
 * @param {float}
 */
setMass : function () {},

/**
 * @method addMoment
 * @param {float}
 */
addMoment : function () {},

/**
 * @method setVelocity
 * @param {const cocos2d::Vect&}
 */
setVelocity : function () {},

/**
 * @method setLinearDamping
 * @param {float}
 */
setLinearDamping : function () {},

/**
 * @method setCollisionBitmask
 * @param {int}
 */
setCollisionBitmask : function () {},

/**
 * @method setDynamic
 * @param {bool}
 */
setDynamic : function () {},

/**
 * @method setRotationEnable
 * @param {bool}
 */
setRotationEnable : function () {},

/**
 * @method getAngularDamping
 * @return A value converted from C/C++ "float"
 */
getAngularDamping : function () {},

/**
 * @method getVelocityAtLocalPoint
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {const cocos2d::Point&}
 */
getVelocityAtLocalPoint : function () {},

/**
 * @method isRotationEnabled
 * @return A value converted from C/C++ "bool"
 */
isRotationEnabled : function () {},

/**
 * @method addMass
 * @param {float}
 */
addMass : function () {},

/**
 * @method getShape
 * @return A value converted from C/C++ "cocos2d::PhysicsShape*"
 * @param {int}
 */
getShape : function () {},

/**
 * @method setTag
 * @param {int}
 */
setTag : function () {},

/**
 * @method getVelocityAtWorldPoint
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {const cocos2d::Point&}
 */
getVelocityAtWorldPoint : function () {},

/**
 * @method setContactTestBitmask
 * @param {int}
 */
setContactTestBitmask : function () {},

/**
 * @method removeFromWorld
 */
removeFromWorld : function () {},

/**
 * @method isDynamic
 * @return A value converted from C/C++ "bool"
 */
isDynamic : function () {},

/**
 * @method getNode
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getNode : function () {},

/**
 * @method createBox
 * @return A value converted from C/C++ "cocos2d::PhysicsBody*"
 * @param {const cocos2d::Size&}
 * @param {const cocos2d::PhysicsMaterial&}
 * @param {const cocos2d::Point&}
 */
createBox : function () {},

/**
 * @method createEdgeSegment
 * @return A value converted from C/C++ "cocos2d::PhysicsBody*"
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::PhysicsMaterial&}
 * @param {float}
 */
createEdgeSegment : function () {},

/**
 * @method createEdgeBox
 * @return A value converted from C/C++ "cocos2d::PhysicsBody*"
 * @param {const cocos2d::Size&}
 * @param {const cocos2d::PhysicsMaterial&}
 * @param {float}
 * @param {const cocos2d::Point&}
 */
createEdgeBox : function () {},

/**
 * @method createCircle
 * @return A value converted from C/C++ "cocos2d::PhysicsBody*"
 * @param {float}
 * @param {const cocos2d::PhysicsMaterial&}
 * @param {const cocos2d::Point&}
 */
createCircle : function () {},

};

/**
 * @class PhysicsWorld
 */
cc.PhysicsWorld = {

/**
 * @method getGravity
 * @return A value converted from C/C++ "cocos2d::Vect"
 */
getGravity : function () {},

/**
 * @method getAllBodies
 * @return A value converted from C/C++ "const cocos2d::Vector<cocos2d::PhysicsBody *>&"
 */
getAllBodies : function () {},

/**
 * @method setGravity
 * @param {const cocos2d::Vect&}
 */
setGravity : function () {},

/**
 * @method getSpeed
 * @return A value converted from C/C++ "float"
 */
getSpeed : function () {},

/**
 * @method removeJoint
 * @param {cocos2d::PhysicsJoint*}
 * @param {bool}
 */
removeJoint : function () {},

/**
 * @method getUpdateRate
 * @return A value converted from C/C++ "int"
 */
getUpdateRate : function () {},

/**
 * @method setSpeed
 * @param {float}
 */
setSpeed : function () {},

/**
 * @method getShapes
 * @return A value converted from C/C++ "cocos2d::Vector<cocos2d::PhysicsShape *>"
 * @param {const cocos2d::Point&}
 */
getShapes : function () {},

/**
 * @method removeAllJoints
 * @param {bool}
 */
removeAllJoints : function () {},

/**
 * @method getShape
 * @return A value converted from C/C++ "cocos2d::PhysicsShape*"
 * @param {const cocos2d::Point&}
 */
getShape : function () {},

/**
 * @method removeAllBodies
 */
removeAllBodies : function () {},

/**
 * @method getDebugDrawMask
 * @return A value converted from C/C++ "int"
 */
getDebugDrawMask : function () {},

/**
 * @method setDebugDrawMask
 * @param {int}
 */
setDebugDrawMask : function () {},

/**
 * @method getBody
 * @return A value converted from C/C++ "cocos2d::PhysicsBody*"
 * @param {int}
 */
getBody : function () {},

/**
 * @method setUpdateRate
 * @param {int}
 */
setUpdateRate : function () {},

/**
 * @method addJoint
 * @param {cocos2d::PhysicsJoint*}
 */
addJoint : function () {},

};

/**
 * @class PhysicsDebugDraw
 */
cc.PhysicsDebugDraw = {

};

/**
 * @class PhysicsContact
 */
cc.PhysicsContact = {

/**
 * @method getContactData
 * @return A value converted from C/C++ "const cocos2d::PhysicsContactData*"
 */
getContactData : function () {},

/**
 * @method getEventCode
 * @return A value converted from C/C++ "cocos2d::PhysicsContact::EventCode"
 */
getEventCode : function () {},

/**
 * @method getShapeA
 * @return A value converted from C/C++ "cocos2d::PhysicsShape*"
 */
getShapeA : function () {},

/**
 * @method getShapeB
 * @return A value converted from C/C++ "cocos2d::PhysicsShape*"
 */
getShapeB : function () {},

};

/**
 * @class PhysicsContactPreSolve
 */
cc.PhysicsContactPreSolve = {

/**
 * @method getFriction
 * @return A value converted from C/C++ "float"
 */
getFriction : function () {},

/**
 * @method getElasticity
 * @return A value converted from C/C++ "float"
 */
getElasticity : function () {},

/**
 * @method setElasticity
 * @param {float}
 */
setElasticity : function () {},

/**
 * @method setFriction
 * @param {float}
 */
setFriction : function () {},

/**
 * @method ignore
 */
ignore : function () {},

/**
 * @method getSurfaceVelocity
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getSurfaceVelocity : function () {},

/**
 * @method setSurfaceVelocity
 * @param {const cocos2d::Vect&}
 */
setSurfaceVelocity : function () {},

};

/**
 * @class PhysicsContactPostSolve
 */
cc.PhysicsContactPostSolve = {

/**
 * @method getFriction
 * @return A value converted from C/C++ "float"
 */
getFriction : function () {},

/**
 * @method getSurfaceVelocity
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getSurfaceVelocity : function () {},

/**
 * @method getElasticity
 * @return A value converted from C/C++ "float"
 */
getElasticity : function () {},

};

/**
 * @class EventListenerPhysicsContact
 */
cc.EventListenerPhysicsContact = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EventListenerPhysicsContact*"
 */
create : function () {},

};

/**
 * @class EventListenerPhysicsContactWithBodies
 */
cc.EventListenerPhysicsContactWithBodies = {

/**
 * @method hitTest
 * @return A value converted from C/C++ "bool"
 * @param {cocos2d::PhysicsShape*}
 * @param {cocos2d::PhysicsShape*}
 */
hitTest : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EventListenerPhysicsContactWithBodies*"
 * @param {cocos2d::PhysicsBody*}
 * @param {cocos2d::PhysicsBody*}
 */
create : function () {},

};

/**
 * @class EventListenerPhysicsContactWithShapes
 */
cc.EventListenerPhysicsContactWithShapes = {

/**
 * @method hitTest
 * @return A value converted from C/C++ "bool"
 * @param {cocos2d::PhysicsShape*}
 * @param {cocos2d::PhysicsShape*}
 */
hitTest : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EventListenerPhysicsContactWithShapes*"
 * @param {cocos2d::PhysicsShape*}
 * @param {cocos2d::PhysicsShape*}
 */
create : function () {},

};

/**
 * @class EventListenerPhysicsContactWithGroup
 */
cc.EventListenerPhysicsContactWithGroup = {

/**
 * @method hitTest
 * @return A value converted from C/C++ "bool"
 * @param {cocos2d::PhysicsShape*}
 * @param {cocos2d::PhysicsShape*}
 */
hitTest : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EventListenerPhysicsContactWithGroup*"
 * @param {int}
 */
create : function () {},

};

/**
 * @class PhysicsJoint
 */
cc.PhysicsJoint = {

/**
 * @method getBodyA
 * @return A value converted from C/C++ "cocos2d::PhysicsBody*"
 */
getBodyA : function () {},

/**
 * @method getBodyB
 * @return A value converted from C/C++ "cocos2d::PhysicsBody*"
 */
getBodyB : function () {},

/**
 * @method getMaxForce
 * @return A value converted from C/C++ "float"
 */
getMaxForce : function () {},

/**
 * @method setMaxForce
 * @param {float}
 */
setMaxForce : function () {},

/**
 * @method isEnabled
 * @return A value converted from C/C++ "bool"
 */
isEnabled : function () {},

/**
 * @method setEnable
 * @param {bool}
 */
setEnable : function () {},

/**
 * @method setCollisionEnable
 * @param {bool}
 */
setCollisionEnable : function () {},

/**
 * @method getWorld
 * @return A value converted from C/C++ "cocos2d::PhysicsWorld*"
 */
getWorld : function () {},

/**
 * @method setTag
 * @param {int}
 */
setTag : function () {},

/**
 * @method removeFormWorld
 */
removeFormWorld : function () {},

/**
 * @method isCollisionEnabled
 * @return A value converted from C/C++ "bool"
 */
isCollisionEnabled : function () {},

/**
 * @method getTag
 * @return A value converted from C/C++ "int"
 */
getTag : function () {},

/**
 * @method destroy
 * @param {cocos2d::PhysicsJoint*}
 */
destroy : function () {},

};

/**
 * @class PhysicsJointFixed
 */
cc.PhysicsJointFixed = {

/**
 * @method construct
 * @return A value converted from C/C++ "cocos2d::PhysicsJointFixed*"
 * @param {cocos2d::PhysicsBody*}
 * @param {cocos2d::PhysicsBody*}
 * @param {const cocos2d::Point&}
 */
construct : function () {},

};

/**
 * @class PhysicsJointLimit
 */
cc.PhysicsJointLimit = {

/**
 * @method setAnchr2
 * @param {const cocos2d::Point&}
 */
setAnchr2 : function () {},

/**
 * @method setAnchr1
 * @param {const cocos2d::Point&}
 */
setAnchr1 : function () {},

/**
 * @method setMax
 * @param {float}
 */
setMax : function () {},

/**
 * @method getAnchr2
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getAnchr2 : function () {},

/**
 * @method getAnchr1
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getAnchr1 : function () {},

/**
 * @method getMin
 * @return A value converted from C/C++ "float"
 */
getMin : function () {},

/**
 * @method getMax
 * @return A value converted from C/C++ "float"
 */
getMax : function () {},

/**
 * @method setMin
 * @param {float}
 */
setMin : function () {},

};

/**
 * @class PhysicsJointPin
 */
cc.PhysicsJointPin = {

/**
 * @method construct
 * @return A value converted from C/C++ "cocos2d::PhysicsJointPin*"
 * @param {cocos2d::PhysicsBody*}
 * @param {cocos2d::PhysicsBody*}
 * @param {const cocos2d::Point&}
 */
construct : function () {},

};

/**
 * @class PhysicsJointDistance
 */
cc.PhysicsJointDistance = {

/**
 * @method setDistance
 * @param {float}
 */
setDistance : function () {},

/**
 * @method getDistance
 * @return A value converted from C/C++ "float"
 */
getDistance : function () {},

/**
 * @method construct
 * @return A value converted from C/C++ "cocos2d::PhysicsJointDistance*"
 * @param {cocos2d::PhysicsBody*}
 * @param {cocos2d::PhysicsBody*}
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 */
construct : function () {},

};

/**
 * @class PhysicsJointSpring
 */
cc.PhysicsJointSpring = {

/**
 * @method setAnchr2
 * @param {const cocos2d::Point&}
 */
setAnchr2 : function () {},

/**
 * @method setAnchr1
 * @param {const cocos2d::Point&}
 */
setAnchr1 : function () {},

/**
 * @method getDamping
 * @return A value converted from C/C++ "float"
 */
getDamping : function () {},

/**
 * @method setStiffness
 * @param {float}
 */
setStiffness : function () {},

/**
 * @method getRestLength
 * @return A value converted from C/C++ "float"
 */
getRestLength : function () {},

/**
 * @method getAnchr2
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getAnchr2 : function () {},

/**
 * @method getAnchr1
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getAnchr1 : function () {},

/**
 * @method getStiffness
 * @return A value converted from C/C++ "float"
 */
getStiffness : function () {},

/**
 * @method setRestLength
 * @param {float}
 */
setRestLength : function () {},

/**
 * @method setDamping
 * @param {float}
 */
setDamping : function () {},

/**
 * @method construct
 * @return A value converted from C/C++ "cocos2d::PhysicsJointSpring*"
 * @param {cocos2d::PhysicsBody*}
 * @param {cocos2d::PhysicsBody*}
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 * @param {float}
 * @param {float}
 */
construct : function () {},

};

/**
 * @class PhysicsJointGroove
 */
cc.PhysicsJointGroove = {

/**
 * @method setAnchr2
 * @param {const cocos2d::Point&}
 */
setAnchr2 : function () {},

/**
 * @method setGrooveA
 * @param {const cocos2d::Point&}
 */
setGrooveA : function () {},

/**
 * @method setGrooveB
 * @param {const cocos2d::Point&}
 */
setGrooveB : function () {},

/**
 * @method getGrooveA
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getGrooveA : function () {},

/**
 * @method getGrooveB
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getGrooveB : function () {},

/**
 * @method getAnchr2
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getAnchr2 : function () {},

/**
 * @method construct
 * @return A value converted from C/C++ "cocos2d::PhysicsJointGroove*"
 * @param {cocos2d::PhysicsBody*}
 * @param {cocos2d::PhysicsBody*}
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 */
construct : function () {},

};

/**
 * @class PhysicsJointRotarySpring
 */
cc.PhysicsJointRotarySpring = {

/**
 * @method getDamping
 * @return A value converted from C/C++ "float"
 */
getDamping : function () {},

/**
 * @method setRestAngle
 * @param {float}
 */
setRestAngle : function () {},

/**
 * @method getStiffness
 * @return A value converted from C/C++ "float"
 */
getStiffness : function () {},

/**
 * @method setStiffness
 * @param {float}
 */
setStiffness : function () {},

/**
 * @method setDamping
 * @param {float}
 */
setDamping : function () {},

/**
 * @method getRestAngle
 * @return A value converted from C/C++ "float"
 */
getRestAngle : function () {},

/**
 * @method construct
 * @return A value converted from C/C++ "cocos2d::PhysicsJointRotarySpring*"
 * @param {cocos2d::PhysicsBody*}
 * @param {cocos2d::PhysicsBody*}
 * @param {float}
 * @param {float}
 */
construct : function () {},

};

/**
 * @class PhysicsJointRotaryLimit
 */
cc.PhysicsJointRotaryLimit = {

/**
 * @method getMax
 * @return A value converted from C/C++ "float"
 */
getMax : function () {},

/**
 * @method setMin
 * @param {float}
 */
setMin : function () {},

/**
 * @method setMax
 * @param {float}
 */
setMax : function () {},

/**
 * @method getMin
 * @return A value converted from C/C++ "float"
 */
getMin : function () {},

};

/**
 * @class PhysicsJointRatchet
 */
cc.PhysicsJointRatchet = {

/**
 * @method getAngle
 * @return A value converted from C/C++ "float"
 */
getAngle : function () {},

/**
 * @method setAngle
 * @param {float}
 */
setAngle : function () {},

/**
 * @method setPhase
 * @param {float}
 */
setPhase : function () {},

/**
 * @method getPhase
 * @return A value converted from C/C++ "float"
 */
getPhase : function () {},

/**
 * @method setRatchet
 * @param {float}
 */
setRatchet : function () {},

/**
 * @method getRatchet
 * @return A value converted from C/C++ "float"
 */
getRatchet : function () {},

/**
 * @method construct
 * @return A value converted from C/C++ "cocos2d::PhysicsJointRatchet*"
 * @param {cocos2d::PhysicsBody*}
 * @param {cocos2d::PhysicsBody*}
 * @param {float}
 * @param {float}
 */
construct : function () {},

};

/**
 * @class PhysicsJointGear
 */
cc.PhysicsJointGear = {

/**
 * @method setRatio
 * @param {float}
 */
setRatio : function () {},

/**
 * @method getPhase
 * @return A value converted from C/C++ "float"
 */
getPhase : function () {},

/**
 * @method setPhase
 * @param {float}
 */
setPhase : function () {},

/**
 * @method getRatio
 * @return A value converted from C/C++ "float"
 */
getRatio : function () {},

/**
 * @method construct
 * @return A value converted from C/C++ "cocos2d::PhysicsJointGear*"
 * @param {cocos2d::PhysicsBody*}
 * @param {cocos2d::PhysicsBody*}
 * @param {float}
 * @param {float}
 */
construct : function () {},

};

/**
 * @class PhysicsJointMotor
 */
cc.PhysicsJointMotor = {

/**
 * @method setRate
 * @param {float}
 */
setRate : function () {},

/**
 * @method getRate
 * @return A value converted from C/C++ "float"
 */
getRate : function () {},

/**
 * @method construct
 * @return A value converted from C/C++ "cocos2d::PhysicsJointMotor*"
 * @param {cocos2d::PhysicsBody*}
 * @param {cocos2d::PhysicsBody*}
 * @param {float}
 */
construct : function () {},

};
