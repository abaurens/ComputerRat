/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./maps sync recursive ^\\.\\/.*\\.txt$":
/*!*********************************!*\
  !*** ./maps sync ^\.\/.*\.txt$ ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./01.txt\": \"./maps/01.txt\",\n\t\"./02.txt\": \"./maps/02.txt\",\n\t\"./03.txt\": \"./maps/03.txt\",\n\t\"./04.txt\": \"./maps/04.txt\",\n\t\"./t1.txt\": \"./maps/t1.txt\",\n\t\"./t10.txt\": \"./maps/t10.txt\",\n\t\"./t2.txt\": \"./maps/t2.txt\",\n\t\"./t3.txt\": \"./maps/t3.txt\",\n\t\"./t4.txt\": \"./maps/t4.txt\",\n\t\"./t5.txt\": \"./maps/t5.txt\",\n\t\"./t6.txt\": \"./maps/t6.txt\",\n\t\"./t7.txt\": \"./maps/t7.txt\",\n\t\"./t8.txt\": \"./maps/t8.txt\",\n\t\"./t9.txt\": \"./maps/t9.txt\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./maps sync recursive ^\\\\.\\\\/.*\\\\.txt$\";\n\n//# sourceURL=webpack:///./maps_sync_^\\.\\/.*\\.txt$?");

/***/ }),

/***/ "./maps/01.txt":
/*!*********************!*\
  !*** ./maps/01.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"eRGSBS5E\\n\";\n\n//# sourceURL=webpack:///./maps/01.txt?");

/***/ }),

/***/ "./maps/02.txt":
/*!*********************!*\
  !*** ./maps/02.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"S###Ss \\n#   SSS\\nSP#S  #\\n##   #S\\n## ####\\n#  S##S\\nE#PS   \\n\";\n\n//# sourceURL=webpack:///./maps/02.txt?");

/***/ }),

/***/ "./maps/03.txt":
/*!*********************!*\
  !*** ./maps/03.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"   s   \\n   R   \\nS##S##S\\n#     B\\nSS#BPSS\\n#     #\\nS#4E5#S\";\n\n//# sourceURL=webpack:///./maps/03.txt?");

/***/ }),

/***/ "./maps/04.txt":
/*!*********************!*\
  !*** ./maps/04.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"#SR##S\\nSe#B#S\\n#SSG#S\\nS##   \\nSS#53E\\n###   \\n\";\n\n//# sourceURL=webpack:///./maps/04.txt?");

/***/ }),

/***/ "./maps/t1.txt":
/*!*********************!*\
  !*** ./maps/t1.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"       \\n e###E \\n       \";\n\n//# sourceURL=webpack:///./maps/t1.txt?");

/***/ }),

/***/ "./maps/t10.txt":
/*!**********************!*\
  !*** ./maps/t10.txt ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"      \\n sE#S \\n #  # \\n #  P \\n S##S \\n      \\n\";\n\n//# sourceURL=webpack:///./maps/t10.txt?");

/***/ }),

/***/ "./maps/t2.txt":
/*!*********************!*\
  !*** ./maps/t2.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"       \\n Ee##b \\n       \";\n\n//# sourceURL=webpack:///./maps/t2.txt?");

/***/ }),

/***/ "./maps/t3.txt":
/*!*********************!*\
  !*** ./maps/t3.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"       \\n Ee##S \\n       \";\n\n//# sourceURL=webpack:///./maps/t3.txt?");

/***/ }),

/***/ "./maps/t4.txt":
/*!*********************!*\
  !*** ./maps/t4.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"       \\n E4B#w \\n       \";\n\n//# sourceURL=webpack:///./maps/t4.txt?");

/***/ }),

/***/ "./maps/t5.txt":
/*!*********************!*\
  !*** ./maps/t5.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"       \\n E#4Rw \\n       \";\n\n//# sourceURL=webpack:///./maps/t5.txt?");

/***/ }),

/***/ "./maps/t6.txt":
/*!*********************!*\
  !*** ./maps/t6.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"        \\n eRB+5E \\n        \";\n\n//# sourceURL=webpack:///./maps/t6.txt?");

/***/ }),

/***/ "./maps/t7.txt":
/*!*********************!*\
  !*** ./maps/t7.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"        \\n eGBS3E \\n        \";\n\n//# sourceURL=webpack:///./maps/t7.txt?");

/***/ }),

/***/ "./maps/t8.txt":
/*!*********************!*\
  !*** ./maps/t8.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"         \\n eGBS21E \\n         \";\n\n//# sourceURL=webpack:///./maps/t8.txt?");

/***/ }),

/***/ "./maps/t9.txt":
/*!*********************!*\
  !*** ./maps/t9.txt ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"      \\n sE#S \\n #  # \\n #  # \\n S##S \\n      \\n\";\n\n//# sourceURL=webpack:///./maps/t9.txt?");

/***/ }),

/***/ "./node_modules/three-dragcontrols/lib/index.module.js":
/*!*************************************************************!*\
  !*** ./node_modules/three-dragcontrols/lib/index.module.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n/*\n * @author zz85 / https://github.com/zz85\n * @author mrdoob / http://mrdoob.com\n * Running this will allow you to drag three.js objects around the screen.\n */\n\nfunction DragControls(_objects, _camera, _domElement) {\n\n  if (_objects.isCamera) {\n\n    console.warn('THREE.DragControls: Constructor now expects ( objects, camera, domElement )');\n    var temp = _objects;\n    _objects = _camera;\n    _camera = temp;\n\n  }\n\n  var _plane = new three__WEBPACK_IMPORTED_MODULE_0__[\"Plane\"]();\n  var _raycaster = new three__WEBPACK_IMPORTED_MODULE_0__[\"Raycaster\"]();\n\n  var _mouse = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\n  var _offset = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n  var _intersection = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n\n  var _selected = null,\n    _hovered = null;\n\n  //\n\n  var scope = this;\n\n  function activate() {\n\n    _domElement.addEventListener('mousemove', onDocumentMouseMove, false);\n    _domElement.addEventListener('mousedown', onDocumentMouseDown, false);\n    _domElement.addEventListener('mouseup', onDocumentMouseCancel, false);\n    _domElement.addEventListener('mouseleave', onDocumentMouseCancel, false);\n    _domElement.addEventListener('touchmove', onDocumentTouchMove, false);\n    _domElement.addEventListener('touchstart', onDocumentTouchStart, false);\n    _domElement.addEventListener('touchend', onDocumentTouchEnd, false);\n\n  }\n\n  function deactivate() {\n\n    _domElement.removeEventListener('mousemove', onDocumentMouseMove, false);\n    _domElement.removeEventListener('mousedown', onDocumentMouseDown, false);\n    _domElement.removeEventListener('mouseup', onDocumentMouseCancel, false);\n    _domElement.removeEventListener('mouseleave', onDocumentMouseCancel, false);\n    _domElement.removeEventListener('touchmove', onDocumentTouchMove, false);\n    _domElement.removeEventListener('touchstart', onDocumentTouchStart, false);\n    _domElement.removeEventListener('touchend', onDocumentTouchEnd, false);\n\n  }\n\n  function dispose() {\n\n    deactivate();\n\n  }\n\n  function onDocumentMouseMove(event) {\n\n    event.preventDefault();\n\n    var rect = _domElement.getBoundingClientRect();\n\n    _mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;\n    _mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;\n\n    _raycaster.setFromCamera(_mouse, _camera);\n\n    if (_selected && scope.enabled) {\n\n      if (_raycaster.ray.intersectPlane(_plane, _intersection)) {\n\n        _selected.position.copy(_intersection.sub(_offset));\n\n      }\n\n      scope.dispatchEvent({\n        type: 'drag',\n        object: _selected\n      });\n\n      return;\n\n    }\n\n    _raycaster.setFromCamera(_mouse, _camera);\n\n    var intersects = _raycaster.intersectObjects(_objects);\n\n    if (intersects.length > 0) {\n\n      var object = intersects[0].object;\n\n      _plane.setFromNormalAndCoplanarPoint(_camera.getWorldDirection(_plane.normal), object.position);\n\n      if (_hovered !== object) {\n\n        scope.dispatchEvent({\n          type: 'hoveron',\n          object: object\n        });\n\n        _domElement.style.cursor = 'pointer';\n        _hovered = object;\n\n      }\n\n    } else {\n\n      if (_hovered !== null) {\n\n        scope.dispatchEvent({\n          type: 'hoveroff',\n          object: _hovered\n        });\n\n        _domElement.style.cursor = 'auto';\n        _hovered = null;\n\n      }\n\n    }\n\n  }\n\n  function onDocumentMouseDown(event) {\n\n    event.preventDefault();\n\n    _raycaster.setFromCamera(_mouse, _camera);\n\n    var intersects = _raycaster.intersectObjects(_objects);\n\n    if (intersects.length > 0) {\n\n      _selected = intersects[0].object;\n\n      if (_raycaster.ray.intersectPlane(_plane, _intersection)) {\n\n        _offset.copy(_intersection).sub(_selected.position);\n\n      }\n\n      _domElement.style.cursor = 'move';\n\n      scope.dispatchEvent({\n        type: 'dragstart',\n        object: _selected\n      });\n\n    }\n\n\n  }\n\n  function onDocumentMouseCancel(event) {\n\n    event.preventDefault();\n\n    if (_selected) {\n\n      scope.dispatchEvent({\n        type: 'dragend',\n        object: _selected\n      });\n\n      _selected = null;\n\n    }\n\n    _domElement.style.cursor = 'auto';\n\n  }\n\n  function onDocumentTouchMove(event) {\n\n    event.preventDefault();\n    event = event.changedTouches[0];\n\n    var rect = _domElement.getBoundingClientRect();\n\n    _mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;\n    _mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;\n\n    _raycaster.setFromCamera(_mouse, _camera);\n\n    if (_selected && scope.enabled) {\n\n      if (_raycaster.ray.intersectPlane(_plane, _intersection)) {\n\n        _selected.position.copy(_intersection.sub(_offset));\n\n      }\n\n      scope.dispatchEvent({\n        type: 'drag',\n        object: _selected\n      });\n\n      return;\n\n    }\n\n  }\n\n  function onDocumentTouchStart(event) {\n\n    event.preventDefault();\n    event = event.changedTouches[0];\n\n    var rect = _domElement.getBoundingClientRect();\n\n    _mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;\n    _mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;\n\n    _raycaster.setFromCamera(_mouse, _camera);\n\n    var intersects = _raycaster.intersectObjects(_objects);\n\n    if (intersects.length > 0) {\n\n      _selected = intersects[0].object;\n\n      _plane.setFromNormalAndCoplanarPoint(_camera.getWorldDirection(_plane.normal), _selected.position);\n\n      if (_raycaster.ray.intersectPlane(_plane, _intersection)) {\n\n        _offset.copy(_intersection).sub(_selected.position);\n\n      }\n\n      _domElement.style.cursor = 'move';\n\n      scope.dispatchEvent({\n        type: 'dragstart',\n        object: _selected\n      });\n\n    }\n\n\n  }\n\n  function onDocumentTouchEnd(event) {\n\n    event.preventDefault();\n\n    if (_selected) {\n\n      scope.dispatchEvent({\n        type: 'dragend',\n        object: _selected\n      });\n\n      _selected = null;\n\n    }\n\n    _domElement.style.cursor = 'auto';\n\n  }\n\n  activate();\n\n  // API\n\n  this.enabled = true;\n\n  this.activate = activate;\n  this.deactivate = deactivate;\n  this.dispose = dispose;\n\n  // Backward compatibility\n\n  this.setObjects = function() {\n\n    console.error('THREE.DragControls: setObjects() has been removed.');\n\n  };\n\n  this.on = function(type, listener) {\n\n    console.warn('THREE.DragControls: on() has been deprecated. Use addEventListener() instead.');\n    scope.addEventListener(type, listener);\n\n  };\n\n  this.off = function(type, listener) {\n\n    console.warn('THREE.DragControls: off() has been deprecated. Use removeEventListener() instead.');\n    scope.removeEventListener(type, listener);\n\n  };\n\n  this.notify = function(type) {\n\n    console.error('THREE.DragControls: notify() has been deprecated. Use dispatchEvent() instead.');\n    scope.dispatchEvent({\n      type: type\n    });\n\n  };\n\n}\n\nDragControls.prototype = Object.create(three__WEBPACK_IMPORTED_MODULE_0__[\"EventDispatcher\"].prototype);\nDragControls.prototype.constructor = DragControls;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DragControls);\n\n//# sourceURL=webpack:///./node_modules/three-dragcontrols/lib/index.module.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DirectionalLightShadow, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontFaceDirectionCCW, FrontFaceDirectionCW, FrontSide, Frustum, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, LightShadow, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBIntegerFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, SRGB8_ALPHA8_ASTC_10x10_Format, SRGB8_ALPHA8_ASTC_10x5_Format, SRGB8_ALPHA8_ASTC_10x6_Format, SRGB8_ALPHA8_ASTC_10x8_Format, SRGB8_ALPHA8_ASTC_12x10_Format, SRGB8_ALPHA8_ASTC_12x12_Format, SRGB8_ALPHA8_ASTC_4x4_Format, SRGB8_ALPHA8_ASTC_5x4_Format, SRGB8_ALPHA8_ASTC_5x5_Format, SRGB8_ALPHA8_ASTC_6x5_Format, SRGB8_ALPHA8_ASTC_6x6_Format, SRGB8_ALPHA8_ASTC_8x5_Format, SRGB8_ALPHA8_ASTC_8x6_Format, SRGB8_ALPHA8_ASTC_8x8_Format, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SphericalReflectionMapping, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, SpotLightShadow, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uncharted2ToneMapping, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VideoTexture, WebGLCubeRenderTarget, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/GameScene.js":
/*!**************************!*\
  !*** ./src/GameScene.js ***!
  \**************************/
/*! exports provided: GameScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameScene\", function() { return GameScene; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map */ \"./src/Map.js\");\n/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Robot */ \"./src/Robot.js\");\n/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Stack */ \"./src/Stack.js\");\n/* harmony import */ var _ToolBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToolBox */ \"./src/ToolBox.js\");\n\n\n\n\n\n\n\nconst levels = [\"01\", \"02\", \"03\", \"04\"];\n\nconst tutos = [{\n\tmap : \"t1\",\n\tmsg : \"Click on play button and watch the robot go to the end !\",\n\tcanRetry : false,\n\tcanEdit : false\n}, {\n\tmap : \"t2\",\n\tmsg : \"Sometimes the robot will need some help !\",\n\tcanRetry : false,\n\tcanEdit : false\n}, {\n\tmap : \"t3\",\n\tmsg : \"The blue go back tile made the robot turn back ! Try to reproduce what you saw !\",\n\tcanRetry : true,\n\tcanEdit : true\n}, {\n\tmap : \"t4\",\n\tmsg : \"The robot will meet some colored gate and paint bucket. If the first stacked color is not the same, you die !\",\n\tcanRetry : false,\n\tcanEdit : false\n}, {\n\tmap : \"t5\",\n\tmsg : \"If the color is the same, the robot will pass !\",\n\tcanRetry : false,\n\tcanEdit : false\n}, {\n\tmap : \"t6\",\n\tmsg : \"The robot will perform operations on 2 last stacked colors !\",\n\tcanRetry : false,\n\tcanEdit : false\n}, {\n\tmap : \"t7\",\n\tmsg : \"Just like arrows, You can add them on the map !\",\n\tcanRetry : true,\n\tcanEdit : true\n}, {\n\tmap : \"t8\",\n\tmsg : \"Test the swap, it swap 2 last stacked colors !\",\n\tcanRetry : true,\n\tcanEdit : true\n}, {\n\tmap : \"t9\",\n\tmsg : \"Be carefull not to get out of power !\",\n\tcanRetry : true,\n\tcanEdit : true\n}, {\n\tmap : \"t10\",\n\tmsg : \"Maybe this plug will help you ?\",\n\tcanRetry : true,\n\tcanEdit : true\n}];\n\nclass GameScene extends three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"] {\n\tconstructor(camera, renderer, mouse, abortCallback, victoryCallback, endCallback) {\n\t\tsuper();\n\n\t\tthis.state = 0;\n\t\tthis.level = 0;\n\t\tthis.tick = 0;\n\t\tthis.isTuto = true;\n\t\tthis.canRetry = false;\n\n\t\tthis.map = null;\n\t\tthis.loadMap();\n\n\t\tthis.stack = new _Stack__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"](this);\n\t\tthis.add(this.stack);\n\n\t\t\n\t\tthis.toolbox = new _ToolBox__WEBPACK_IMPORTED_MODULE_4__[\"ToolBox\"](camera, renderer, this, mouse);\n\t\tthis.add(this.toolbox);\n\t\t\n\t\tthis.abortCallback = abortCallback;\n\t\tthis.victoryCallback = victoryCallback;\n\t\tthis.endCallback = endCallback;\n\t}\n\n\tupdate(mouse) {\n\t\tthis.map.update(mouse);\n\t}\n\n\ttriggerAbort(allert = true) {\n\t\tif (allert)\n\t\t{\n\t\t\talert(\"You die!\");\n\t\t\tlet passNine = (this.isTuto && this.level == 9\n\t\t\t\t\t\t\t&& this.map.getRobot().energy < 0); //validate tuto 09 if dead by power loss\n\t\t\tif ((!this.canRetry || passNine) && !this.loadMap())\n\t\t\t{\n\t\t\t\tthis.state = 2;\n\t\t\t\tthis.endCallback();\n\t\t\t}\n\t\t}\n\n\t\tthis.tick = 0;\n\t\tthis.state = 0;\n\t\tthis.abortCallback();\n\t}\n\n\ttriggerVictory() {\n\t\tthis.tick = 0;\n\t\tthis.state = 0;\n\t\tthis.victoryCallback();\n\n\t\tif (!this.loadMap())\n\t\t{\n\t\t\tthis.state = 2;\n\t\t\tthis.endCallback();\n\t\t}\n\t}\n\n\tgetMap() { return this.map; }\n\n\tloadMap() {\n\t\tlet level = \"\";\n\t\tlet canEdit = true;\n\t\tdocument.querySelector(\"#flash\").innerHTML = \"\";\n\n\t\tif (this.isTuto && this.level < tutos.length)\n\t\t{\n\t\t\tlet tuto = tutos[this.level++];\n\t\t\tlevel = tuto.map;\n\t\t\tthis.canRetry = tuto.canRetry;\n\t\t\tcanEdit = tuto.canEdit;\n\n\t\t\tdocument.querySelector(\"#flash\").innerHTML = tuto.msg;\n\t\t}\n\t\telse\n\t\t{\n\t\t\tif (this.isTuto)\n\t\t\t{\n\t\t\t\tthis.level = 0;\n\t\t\t\tthis.isTuto = false;\n\t\t\t\tthis.canRetry = true;\n\t\t\t\talert(\"Well done ! You have finished the tutorial !\");\n\t\t\t}\n\t\t\tif (this.level >= levels.length)\n\t\t\t\treturn false;\n\t\t\tlevel = levels[this.level++];\n\t\t}\n\t\t\n\t\t// Last map succeeded\n\t\tif (this.map)\n\t\t\tthis.remove(this.map);\n\t\tthis.map = _Map__WEBPACK_IMPORTED_MODULE_1__[\"loadMap\"](level, canEdit);\n\t\tthis.add(this.map);\n\n\t\tthis.map.getRobot().chargeMax();\n\n\t\tif (this.stack)\n\t\t{\n\t\t\tthis.stack.flush();\n\t\t\tthis.stack.update();\n\t\t}\n\n\t\tif (this.toolbox)\n\t\t{\n\t\t\tthis.toolbox.update();\n\t\t}\n\n\t\tthis.tick = 0;\n\n\t\treturn true;\n\t}\n\n\tgetRobot() { return this.map.getRobot(); }\n\n\tgetStack() { return this.stack; }\n\n\trunSimulation() { this.state = 1; }\n\tstopSimulation() { this.state = 0; }\n\tisRunning() { return this.state === 1; }\n\n\tgetLevel() { return levels[this.level]; }\n\n\tswitchTick() { this.tick ^= 1; }\n\tgetTick() { return this.tick; }\n\n\tgetToolbox() { return this.toolbox; }\n}\n\n//# sourceURL=webpack:///./src/GameScene.js?");

/***/ }),

/***/ "./src/Map.js":
/*!********************!*\
  !*** ./src/Map.js ***!
  \********************/
/*! exports provided: Map, loadMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMap\", function() { return loadMap; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile */ \"./src/Tile.js\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./texture */ \"./src/texture.js\");\n/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Robot */ \"./src/Robot.js\");\n\n\n\n\n\n\nconst tilesMap = {\n\t//tools\n\t\"+\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"Add\"],\n\t\"-\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"Sub\"],\n\t\"=\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"Swap\"],\n\t\"h\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TurnHoraire\"],\n\t\"t\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TurnTrigo\"],\n\t\"b\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TurnBack\"],\n\t//tiles\n\t\"P\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"Plug\"],\n\t\"S\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"Slot\"],\n\t\" \": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"Lava\"],\n\t\"E\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"Exit\"],\n\t\"#\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"Ground\"],\n\t//paint\n\t\"R\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"PaintRed\"],\n\t\"G\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"PaintGreen\"],\n\t\"B\": _Tile__WEBPACK_IMPORTED_MODULE_1__[\"PaintBlue\"]\n}\n\nclass Map extends three__WEBPACK_IMPORTED_MODULE_0__[\"Object3D\"] {\n\tconstructor(width, height) {\n\t\tsuper();\n\t\tthis.table = new Array(height);\n\t\tthis.size = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](width, height);\n\n\t\tthis.locked = false;\n\n\t\tthis.position.set(0, 0, -2);\n\n\t\tfor (let y = 0; y < height; ++y) {\n\t\t\tthis.table[y] = new Array(width);\n\t\t\tfor (let x = 0; x < width; ++x) {\n\t\t\t\tthis.table[y][x] = null;\n\t\t\t\tthis.setTile(x, y, new _Tile__WEBPACK_IMPORTED_MODULE_1__[\"Tile\"]());\n\t\t\t}\n\t\t}\n\n\t\tthis.hover = new _Sprite__WEBPACK_IMPORTED_MODULE_2__[\"Sprite\"](_texture__WEBPACK_IMPORTED_MODULE_3__[\"HOVER\"]);\n\t\tthis.hover.material.transparent = true;\n\t\tthis.hover.material.opacity = 0.2;\n\t\tthis.hover.material.color.set(0xFFFF88);\n\n\t\tthis.add(this.hover);\n\n\t\tthis.robot = new _Robot__WEBPACK_IMPORTED_MODULE_4__[\"Robot\"]();\n\n\t\tthis.robotTransform = new three__WEBPACK_IMPORTED_MODULE_0__[\"Object3D\"]();\n\t\tthis.robot.setPos(0, 0, 1);\n\n\t\tthis.add(this.robotTransform);\n\t\tthis.robotTransform.add(this.robot);\n\t\t\n\t\tthis.offset = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](\n\t\t\t(_Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"] / 2) * !(this.size.width % 2),\n\t\t\t(_Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"] / 2) * !(this.size.height % 2));\n\t\tthis.robotTransform.position.set(this.offset.x, this.offset.y, 0);\n\t}\n\n\tupdate(mouse) {\n\t\tthis.hover.position.set(0, 0, -2);\n\t\tlet hovered = this.getHovered(mouse);\n\t\tif (!this.isLocked() && hovered && hovered.tile.isEditable())\n\t\t\tthis.hover.position.set(hovered.tile.position.x, hovered.tile.position.y, 1);\n\t}\n\n\tsetTile(x, y, tile) {\n\t\tif (this.table[y][x])\n\t\t\tthis.remove(this.table[y][x]);\n\t\tthis.table[y][x] = tile;\n\t\tthis.table[y][x].setPos(x - (this.size.width / 2), y - (this.size.height / 2));\n\t\tthis.add(this.table[y][x]);\n\t}\n\n\tgetHovered(mouse)\n\t{\n\t\tlet boundW = _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"] * this.size.width;\n\t\tlet boundH = _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"] * this.size.height;\n\n\t\tlet txx = mouse.x + (boundW / 2);\n\t\tlet tyy = mouse.y + (boundH / 2);\n\t\tif (txx < 0 || txx >= boundW || tyy < 0 || tyy >= boundH)\n\t\t\treturn null;\n\n\t\tlet tx = Math.floor(txx / _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"]);\n\t\tlet ty = Math.floor(tyy / _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"]);\n\t\treturn { x : tx, y : ty, tile : this.table[ty][tx] };\n\t}\n\n\tgetRobot() {\n\t\treturn (this.robot);\n\t}\n\n\tgetTile(x, y)\n\t{\n\t\tif (x < 0 || y < 0 || x >= this.size.width || y > this.size.height)\n\t\t\treturn null;\n\t\treturn (this.table[y][x]);\n\t}\n\n\tlock() { this.locked = true; }\n\tunlock() { this.locked = false; }\n\tisLocked() { return this.locked ; }\n\n\n\ttoMapCoord(x, y) {\n\t\tlet res = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](0, 0);\n\t\n\t\tlet boundW = _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"] * this.size.width;\n\t\tlet boundH = _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"] * this.size.height;\n\t\n\t\tlet txx = x + (boundW / 2);\n\t\tlet tyy = y + (boundH / 2);\n\t\n\t\tres.x = Math.floor(txx / _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"]);\n\t\tres.y = Math.floor(tyy / _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"]);\n\t\treturn (res);\n\t}\n\t\n\ttoWorldCoord(x, y) {\n\t\ty = (this.size.height - (y + 1));\n\t\tlet boundW = _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"] * this.size.width;\n\t\tlet boundH = _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"] * this.size.height;\n\t\tlet res = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](0, 0);\n\t\n\t\tres.x = (x * _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"]) - boundW / 2;\n\t\tres.y = (y * _Tile__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"]) - boundH / 2;\n\t\treturn (res);\n\t}\n\n\tgetSize() {\n\t\treturn this.size;\n\t}\n}\n\nconst dirs = \"nesw\";\nconst colors = \"01234567\";\n\nfunction loadMap(mapName, canEdit = true) {\n\tif(!mapName)\n\t\treturn null;\n\t\n\tlet mapString = __webpack_require__(\"./maps sync recursive ^\\\\.\\\\/.*\\\\.txt$\")(`./${mapName}.txt`);\n\tlet size = mapString.length + (mapString[mapString.length - 1] !== \"\\n\");\n\tlet width = mapString.indexOf('\\n');\n\tif(width < 0) width = size - 1;\n\tlet height = size / (width + 1);\n\n\tmapString = mapString.replace(/\\r?\\n|\\r/gm, \"\");\n\tsize -= height;\n\n\tlet map = new Map(width, height);\n\n\tfor (let y = 0; y < height; ++y) {\n\t\tfor (let x = 0; x < width; x++) {\n\t\t\tif (dirs.includes(mapString[x + y * width]))\n\t\t\t{\n\t\t\t\tmap.setTile(x, height - (y + 1), new _Tile__WEBPACK_IMPORTED_MODULE_1__[\"Plug\"]());\n\t\t\t\tmap.getRobot().setPos(x - Math.floor(width / 2), height - (y + 1) - Math.floor(height / 2), 1);\n\t\t\t\tmap.getRobot().setDirection(_Robot__WEBPACK_IMPORTED_MODULE_4__[\"DIRECTIONS\"][dirs.indexOf(mapString[x + y * width])]);\n\t\t\t\tmap.getRobot().setDefault();\n\t\t\t}\n\t\t\telse if (colors.includes(mapString[x + y * width]))\n\t\t\t{\n\t\t\t\tlet value = parseInt(mapString[x + y * width]);\n\n\t\t\t\tlet r = (value >> 2) & 0x01;\n\t\t\t\tlet g = (value >> 1) & 0x01;\n\t\t\t\tlet b = (value >> 0) & 0x01;\n\n\t\t\t\tlet color = (b) ? 0x0000FF : 0x00;\n\t\t\t\tcolor |= (g) ? 0x00FF00  : 0x00;\n\t\t\t\tcolor |= (r) ? 0xFF0000  : 0x00;\n\n\t\t\t\tmap.setTile(x, height - (y + 1), new _Tile__WEBPACK_IMPORTED_MODULE_1__[\"Conditional\"](color));\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\tlet tile = new tilesMap[mapString[x + y * width]];\n\t\t\t\tif (!canEdit && tile.isEditable())\n\t\t\t\t\ttile.editable = false;\n\t\t\t\tmap.setTile(x, height - (y + 1), tile);\n\t\t\t}\n\t\t}\n\t}\n\treturn map;\n}\n\n//# sourceURL=webpack:///./src/Map.js?");

/***/ }),

/***/ "./src/Robot.js":
/*!**********************!*\
  !*** ./src/Robot.js ***!
  \**********************/
/*! exports provided: SPRITE_SIZE, NORTH, EAST, SOUTH, WEST, DIRECTIONS, Robot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPRITE_SIZE\", function() { return SPRITE_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NORTH\", function() { return NORTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EAST\", function() { return EAST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SOUTH\", function() { return SOUTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WEST\", function() { return WEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIRECTIONS\", function() { return DIRECTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Robot\", function() { return Robot; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./texture */ \"./src/texture.js\");\n\n\n\n\nconst SPRITE_SIZE = 50;\n\nconst NORTH\t= 0;\nconst EAST\t= 1;\nconst SOUTH\t= 2;\nconst WEST\t= 3;\n\nconst DIRECTIONS = [\n\t{ id: NORTH,\tvec: new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](0, 1),\tang: 0},\n\t{ id: EAST,\t\tvec: new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](1, 0),\tang: -Math.PI / 2},\n\t{ id: SOUTH,\tvec: new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](0, -1),\tang: Math.PI},\n\t{ id: WEST,\t\tvec: new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](-1, 0),\tang: Math.PI / 2}\n];\n\nconst energyMax = 10;\n\nclass Robot extends _Sprite__WEBPACK_IMPORTED_MODULE_1__[\"Sprite\"] {\n\tconstructor(direction = DIRECTIONS[SOUTH]) {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_2__[\"ROBOT\"]);\n\n\t\tthis.energyBar = document.querySelector(\"#energy-bar\");\n\t\tthis.setEnergy(energyMax);\n\n\t\tthis.material.transparent = true;\n\n\t\tthis.setDirection(direction);\n\t\tthis.defaultDir = direction;\n\t\tthis.defaultPos = this.pos;\n\t}\n\n\tupdate() {\n\t\tthis.energy--;\n\t\tthis.energyBar.value = this.energy * (100 / energyMax);\n\t\tthis.setPos(this.pos.x + this.dir.vec.x, this.pos.y + this.dir.vec.y, this.position.z);\n\t}\n\n\tsetDirection(direction) {\n\t\tthis.dir = direction;\n\t\tthis.material.rotation = direction.ang;\n\t}\n\n\tturnRight() {\n\t\tthis.setDirection(DIRECTIONS[(this.dir.id + 1) % 4]);\n\t}\n\n\tturnBack() {\n\t\tthis.setDirection(DIRECTIONS[(this.dir.id + 2) % 4]);\n\t}\n\n\tturnLeft() {\n\t\tthis.setDirection(DIRECTIONS[(this.dir.id + 3) % 4]);\n\t}\n\n\tsetDefault() {\n\t\tthis.defaultPos = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](this.pos.x, this.pos.y);\n\t\tthis.defaultDir = this.dir;\n\t}\n\n\tcharge(energy) {\n\t\tthis.setEnergy(this.energy + energy);\n\t}\n\n\tchargeMax() {\n\t\tthis.setEnergy(energyMax);\n\t}\n\n\tsetEnergy(energy) {\n\t\tif(energy < 0)\n\t\t\tenergy = 0;\n\t\tthis.energy = (energy > energyMax) ? energyMax : energy;\n\n\t\tthis.energyBar.value = this.energy * (100 / energyMax);\n\t}\n\n\tisAlive() { return this.energy >= 0; }\n\n\treset() {\n\t\tthis.setPos(this.defaultPos.x, this.defaultPos.y, this.position.z);\n\t\tthis.setDirection(this.defaultDir);\n\n\t\tthis.setEnergy(energyMax);\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/Robot.js?");

/***/ }),

/***/ "./src/Sprite.js":
/*!***********************!*\
  !*** ./src/Sprite.js ***!
  \***********************/
/*! exports provided: SPRITE_SIZE, Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPRITE_SIZE\", function() { return SPRITE_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sprite\", function() { return Sprite; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nconst SPRITE_SIZE = 64;\n\nclass Sprite extends three__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"]{\n\tconstructor(texture, width = SPRITE_SIZE, height = SPRITE_SIZE) {\n\t\tsuper(new three__WEBPACK_IMPORTED_MODULE_0__[\"SpriteMaterial\"]({ map: texture }));\n\n\t\tthis.material.transparent = true\n\n\t\tthis.scale.set(width, height, 1);\n\n\t\tthis.pos = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](0, 0);\n\t}\n\n\tsetPos(x, y, z = 0) {\n\t\tthis.pos.set(x,y);\n\t\tthis.position.set(x * SPRITE_SIZE, y * SPRITE_SIZE, z);\n\t}\n\n\tgetPos() { return this.pos; }\n}\n\n\n//# sourceURL=webpack:///./src/Sprite.js?");

/***/ }),

/***/ "./src/Stack.js":
/*!**********************!*\
  !*** ./src/Stack.js ***!
  \**********************/
/*! exports provided: Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Stack\", function() { return Stack; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./texture */ \"./src/texture.js\");\n/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tile */ \"./src/Tile.js\");\n\n\n\n\n\nconst maxSize = 5;\nconst CONTAINER_WIDTH = 100;\nconst CONTAINER_HEIGHT = 30;\nconst CONTAINER_SPACE = 10;\n\nclass Stack extends three__WEBPACK_IMPORTED_MODULE_0__[\"Object3D\"] {\n\tconstructor(state) {\n\t\tsuper();\n\n\t\tthis.state = state;\n\n\t\tthis.background = new _Sprite__WEBPACK_IMPORTED_MODULE_1__[\"Sprite\"](_texture__WEBPACK_IMPORTED_MODULE_2__[\"STACK_BG\"]);\n\t\tthis.background.scale.set(140, 320, 1);\n\t\tthis.background.position.set(0, ((maxSize + 1) / 2) * (CONTAINER_HEIGHT + CONTAINER_SPACE), 0);\n\t\tthis.add(this.background);\n\n\t\tthis.cheatSheet = new _Sprite__WEBPACK_IMPORTED_MODULE_1__[\"Sprite\"](Object(_texture__WEBPACK_IMPORTED_MODULE_2__[\"getTexture\"])(\"color_cheat_sheet.png\"))\n\t\tthis.cheatSheet.position.set(-210, ((maxSize + 1) / 2) * (CONTAINER_HEIGHT + CONTAINER_SPACE), 0);\n\t\tthis.cheatSheet.scale.set(256, 128, 1);\n\n\t\tthis.add(this.cheatSheet);\n\t\t\n\t\tthis.update();\n\n\t\tthis.stack = [];\n\t\tthis.stackSprites = [];\n\t}\n\n\tpush(color) {\n\t\tif(this.stack.length >= maxSize)\n\t\t{\n\t\t\talert(\"Stack Overflow\");\n\t\t\tthis.state.triggerAbort();\n\t\t\treturn null;\n\t\t}\n\n\t\tthis.stack.push(color);\n\n\t\tlet container = new _Sprite__WEBPACK_IMPORTED_MODULE_1__[\"Sprite\"](_texture__WEBPACK_IMPORTED_MODULE_2__[\"STACK_CONTAINER\"]);\n\t\tcontainer.material.color.set(color);\n\t\tcontainer.scale.set(CONTAINER_WIDTH, CONTAINER_HEIGHT, 1);\n\t\tcontainer.position.set(0, this.stack.length * (CONTAINER_HEIGHT + CONTAINER_SPACE), 0);\n\n\t\tthis.add(container);\n\t\tthis.stackSprites.push(container);\n\t}\n\n\tpop() {\n\t\tif(this.stack.length <= 0)\n\t\t{\n\t\t\talert(\"Stack Underflow\");\n\t\t\tthis.state.triggerAbort();\n\t\t\treturn null;\n\t\t}\n\n\t\tlet container = this.stackSprites.pop();\n\t\tthis.remove(container);\n\n\t\treturn this.stack.pop();\n\t}\n\n\tdoOp(callback) {\n\t\tlet a, b;\n\t\t\n\t\tif(!(a = this.pop()))\n\t\t\treturn;\n\t\tif(!(b = this.pop()))\n\t\t\treturn;\n\n\t\tthis.push(callback(a, b));\n\t}\n\n\tswap() {\n\t\tlet a, b;\n\t\t\n\t\tif(!(a = this.pop()))\n\t\t\treturn;\n\t\tif(!(b = this.pop()))\n\t\t\treturn;\n\n\t\tthis.push(a);\n\t\tthis.push(b);\n\t}\n\n\tflush() {\n\t\tthis.stackSprites.forEach(stackSprite => this.remove(stackSprite));\n\t\tthis.stackSprites = [];\n\t\tthis.stack = [];\n\t}\n\n\tupdate() {\n\t\tlet mapSize = this.state.getMap().getSize();\n\t\tthis.position.set(-(mapSize.x + 3) * _Tile__WEBPACK_IMPORTED_MODULE_3__[\"TILE_SIZE\"] / 2, -((maxSize + 1) / 2) * (CONTAINER_HEIGHT + CONTAINER_SPACE), 0);\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/Stack.js?");

/***/ }),

/***/ "./src/Tile.js":
/*!*********************!*\
  !*** ./src/Tile.js ***!
  \*********************/
/*! exports provided: TILE_SIZE, HALF_TILE, Tile, Ground, Exit, Plug, Slot, Lava, TurnTrigo, TurnHoraire, TurnBack, PaintRed, PaintGreen, PaintBlue, Swap, Add, Sub, Conditional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TILE_SIZE\", function() { return TILE_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HALF_TILE\", function() { return HALF_TILE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tile\", function() { return Tile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ground\", function() { return Ground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Exit\", function() { return Exit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Plug\", function() { return Plug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slot\", function() { return Slot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Lava\", function() { return Lava; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TurnTrigo\", function() { return TurnTrigo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TurnHoraire\", function() { return TurnHoraire; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TurnBack\", function() { return TurnBack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PaintRed\", function() { return PaintRed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PaintGreen\", function() { return PaintGreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PaintBlue\", function() { return PaintBlue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Swap\", function() { return Swap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Add\", function() { return Add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sub\", function() { return Sub; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Conditional\", function() { return Conditional; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./texture */ \"./src/texture.js\");\n\n\n\nconst TILE_SIZE = 64;\nconst HALF_TILE = (TILE_SIZE / 2);\n\nclass Tile extends three__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"] {\n\tconstructor(texture) {\n\t\tsuper(new three__WEBPACK_IMPORTED_MODULE_0__[\"SpriteMaterial\"]({ map: texture ? texture : _texture__WEBPACK_IMPORTED_MODULE_1__[\"TILE\"]}));\n\t\tthis.scale.set(TILE_SIZE, TILE_SIZE, 1);\n\t\tthis.editable = false;\n\t}\n\n\tsetPos(x, y, z = 0) {\n\t\tthis.position.set(x * TILE_SIZE + HALF_TILE, y * TILE_SIZE + HALF_TILE, z);\n\t}\n\n\tisEditable() { return this.editable; }\n\n\tonRobotEnter(state) { return true; }\n\tonRobotHover(state) { return true; }\n\tonRobotLeave(state) { return true; }\n}\n\nclass Ground extends Tile\n{\n\tconstructor() {\n\t\tsuper();\n\t}\n}\n\nclass Exit extends Tile\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"FLAG\"]);\n\t}\n\n\tonRobotHover(state) {\n\t\tstate.triggerVictory();\n\t\treturn false;\n\t}\n}\n\nclass Plug extends Tile\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"PLUG\"]);\n\t}\n\n\tonRobotHover(state) {\n\t\tstate.getRobot().chargeMax();\n\t\treturn true;\n\t}\n}\n\nclass Slot extends Tile\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"SLOT\"]);\n\t\tthis.editable = true;\n\t}\n}\n\nclass Lava extends Tile\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"LAVA\"]);\n\t}\n\n\tonRobotHover(state) {\n\t\tstate.triggerAbort();\n\t\treturn false;\n\t}\n}\n\nclass TurnTrigo extends Tile\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"TURN_TRIG\"]);\n\t\tthis.editable = true;\n\t}\n\n\tonRobotHover(state) {\n\t\tstate.getRobot().turnLeft();\n\t\treturn true;\n\t}\n}\n\nclass TurnHoraire extends Tile\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"TURN_HORA\"]);\n\t\tthis.editable = true;\n\t}\n\n\tonRobotHover(state) {\n\t\tstate.getRobot().turnRight();\n\t\treturn true;\n\t}\n}\n\nclass TurnBack extends Tile\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"TURN_BACK\"]);\n\t\tthis.editable = true;\n\t}\n\n\tonRobotHover(state) {\n\t\tstate.getRobot().turnBack();\n\t\treturn true;\n\t}\n}\n\nclass TilePaint extends Tile {\n\tconstructor(texture, color) {\n\t\tsuper(texture);\n\t\tthis.color = color;\n\t}\n\n\tgetColor() { return this.color; }\n\n\tonRobotHover(state) {\n\t\tstate.getStack().push(this.color);\n\t\treturn true;\n\t}\n}\n\nclass PaintRed extends TilePaint {\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"PAINT_RED\"], 0xFF0000);\n\t}\n}\n\nclass PaintGreen extends TilePaint {\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"PAINT_GREEN\"], 0x00FF00);\n\t}\n}\n\nclass PaintBlue extends TilePaint {\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"PAINT_BLUE\"], 0x0000FF);\n\t}\n}\n\nclass Swap extends Tile {\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"SWAP\"], 0x0000FF);\n\t\tthis.editable = true;\n\t}\n\n\tonRobotHover(state) {\n\t\tstate.getStack().swap();\n\t\treturn true;\n\t}\n}\n\nclass Add extends Tile {\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"ADD\"], 0x0000FF);\n\t\tthis.editable = true;\n\t}\n\n\tonRobotHover(state) {\n\t\tstate.getStack().doOp((a, b) => a | b);\n\t\treturn true;\n\t}\n}\n\nclass Sub extends Tile {\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"SUB\"], 0x0000FF);\n\t\tthis.editable = true;\n\t}\n\n\tonRobotHover(state) {\n\t\tstate.getStack().doOp((a, b) => b & ~a);\n\t\treturn true;\n\t}\n}\n\nclass Conditional extends Tile {\n\tconstructor(color) {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"WHITE_TILE\"]);\n\n\t\tthis.color = color;\n\n\t\tthis.material.color.set(color);\n\t}\n\n\tonRobotHover(state) {\n\t\tlet color = state.getStack().pop();\n\n\t\tif(this.color !== color)\n\t\t{\n\t\t\tstate.triggerAbort();\n\t\t\treturn false;\n\t\t}\n\t\treturn true;\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/Tile.js?");

/***/ }),

/***/ "./src/ToolBox.js":
/*!************************!*\
  !*** ./src/ToolBox.js ***!
  \************************/
/*! exports provided: ToolBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToolBox\", function() { return ToolBox; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_dragcontrols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-dragcontrols */ \"./node_modules/three-dragcontrols/lib/index.module.js\");\n/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tools */ \"./src/Tools.js\");\n/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tile */ \"./src/Tile.js\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./texture */ \"./src/texture.js\");\n\n\n\n\n\n\n\n\nclass ToolBox extends three__WEBPACK_IMPORTED_MODULE_0__[\"Object3D\"] {\n\tconstructor(camera, renderer, state, mouse) {\n\t\tsuper();\n\n\t\tthis.state = state;\n\t\tthis.mouse = mouse;\n\n\t\tthis.background = new _Sprite__WEBPACK_IMPORTED_MODULE_4__[\"Sprite\"](_texture__WEBPACK_IMPORTED_MODULE_5__[\"TOOLBOX_BG\"]);\n\t\tthis.background.scale.set(256, 256, 1);\n\t\tthis.background.position.set((3 / 2) * _Tools__WEBPACK_IMPORTED_MODULE_2__[\"TOOL_SIZE\"], 0, 0);\n\t\tthis.add(this.background);\n\n\t\tthis.tools = [];\n\n\t\tthis.update();\n\n\t\tthis.addTool(new _Tools__WEBPACK_IMPORTED_MODULE_2__[\"TurnLeft\"]());\n\t\tthis.addTool(new _Tools__WEBPACK_IMPORTED_MODULE_2__[\"TurnRight\"]());\n\t\tthis.addTool(new _Tools__WEBPACK_IMPORTED_MODULE_2__[\"HalfTurn\"]());\n\t\tthis.addTool(new _Tools__WEBPACK_IMPORTED_MODULE_2__[\"Swap\"]());\n\t\tthis.addTool(new _Tools__WEBPACK_IMPORTED_MODULE_2__[\"Add\"]());\n\t\tthis.addTool(new _Tools__WEBPACK_IMPORTED_MODULE_2__[\"Sub\"]());\n\n\t\tlet controls = new three_dragcontrols__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.tools, camera, renderer.domElement);\n\n\t\tcontrols.addEventListener('dragstart', () => {});\n\t\tcontrols.addEventListener('dragend', (event) =>{\n\t\t\tlet tool = event.object;\n\t\t\tlet map = this.state.getMap();\n\n\t\t\ttool.setPos(tool.getAnchor().x, tool.getAnchor().y);\n\t\n\t\t\tlet hovered = map.getHovered(mouse);\n\t\n\t\t\tif(!map.isLocked() && hovered !== null && hovered.tile.isEditable())\n\t\t\t\tmap.setTile(hovered.x, hovered.y, tool.getTileInstance());\n\t\t});\n\t}\n\n\taddTool(tool)\n\t{\n\t\tlet i = this.tools.length;\n\n\t\tif(this.tools[i])\n\t\t\tthis.remove(this.tools[i]);\n\t\t\n\t\tthis.tools[i] = tool;\n\n\t\tlet x = (i % 3);\n\t\tlet y = - Math.floor(i / 3);\n\n\t\tthis.tools[i].setPos(x, y);\n\t\tthis.add(this.tools[i]);\n\t}\n\n\tupdate() {\n\t\tlet mapSize = this.state.getMap().getSize();\n\t\tthis.position.set((mapSize.x + 2) * _Tile__WEBPACK_IMPORTED_MODULE_3__[\"TILE_SIZE\"] / 2, 0, 0);\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/ToolBox.js?");

/***/ }),

/***/ "./src/Tools.js":
/*!**********************!*\
  !*** ./src/Tools.js ***!
  \**********************/
/*! exports provided: TOOL_SIZE, Tool, TurnRight, TurnLeft, HalfTurn, Swap, Add, Sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOOL_SIZE\", function() { return TOOL_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tool\", function() { return Tool; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TurnRight\", function() { return TurnRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TurnLeft\", function() { return TurnLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HalfTurn\", function() { return HalfTurn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Swap\", function() { return Swap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Add\", function() { return Add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sub\", function() { return Sub; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./texture */ \"./src/texture.js\");\n/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ \"./src/Tile.js\");\n\n\n\n\nconst TOOL_SIZE = 64;\n\nclass Tool extends three__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"] {\n\tconstructor(texture, tileClass) {\n\t\tsuper(new three__WEBPACK_IMPORTED_MODULE_0__[\"SpriteMaterial\"]({ map: texture ? texture : _texture__WEBPACK_IMPORTED_MODULE_1__[\"TILE\"]}));\n\t\tthis.scale.set(TOOL_SIZE, TOOL_SIZE, 1);\n\n\t\tthis.anchor = three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](0, 0);\n\t\tthis.tileClass = tileClass;\n\t}\n\n\tsetPos(x, y) {\n\t\tthis.position.set(x * TOOL_SIZE + TOOL_SIZE / 2, y * TOOL_SIZE + TOOL_SIZE / 2, 0);\n\t\tthis.anchor = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](x, y);\n\t}\n\n\tgetAnchor() { return this.anchor; }\n\t\n\tgetTileInstance() { return new this.tileClass(); }\n}\n\nclass TurnRight extends Tool\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"TURN_HORA_TOOL\"], _Tile__WEBPACK_IMPORTED_MODULE_2__[\"TurnHoraire\"]);\n\t}\n}\n\nclass TurnLeft extends Tool\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"TURN_TRIG_TOOL\"], _Tile__WEBPACK_IMPORTED_MODULE_2__[\"TurnTrigo\"]);\n\t}\n}\n\nclass HalfTurn extends Tool\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"TURN_BACK_TOOL\"], _Tile__WEBPACK_IMPORTED_MODULE_2__[\"TurnBack\"]);\n\t}\n}\n\nclass Swap extends Tool\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"SWAP_TOOL\"], _Tile__WEBPACK_IMPORTED_MODULE_2__[\"Swap\"]);\n\t}\n}\n\nclass Add extends Tool\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"ADD_TOOL\"], _Tile__WEBPACK_IMPORTED_MODULE_2__[\"Add\"]);\n\t}\n}\n\nclass Sub extends Tool\n{\n\tconstructor() {\n\t\tsuper(_texture__WEBPACK_IMPORTED_MODULE_1__[\"SUB_TOOL\"], _Tile__WEBPACK_IMPORTED_MODULE_2__[\"Sub\"]);\n\t}\n}\n\n//# sourceURL=webpack:///./src/Tools.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile */ \"./src/Tile.js\");\n/* harmony import */ var _GameScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameScene */ \"./src/GameScene.js\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./texture */ \"./src/texture.js\");\n\n\n\n\n\n\n\nlet timer;\nlet startButton = document.querySelector(\"#start\")\n\nlet camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"OrthographicCamera\"](window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1, 2);\nlet renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({ alpha: true });\nlet mouse = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](0, 0);\n\nlet scene = new _GameScene__WEBPACK_IMPORTED_MODULE_2__[\"GameScene\"](camera, renderer, mouse, () => {\n\tclearInterval(timer);\n\n\tscene.getMap().unlock();\n\n\tscene.getRobot().reset();\n\tscene.getStack().flush();\n\n\tstartButton.classList.add('btn-start');\n\tstartButton.classList.remove('btn-stop');\n\tstartButton.innerHTML = \"<i class='fas fa-play'></i>\";\n}, () => {\n\tclearInterval(timer);\n\n\talert(\"You stay alive !\");\n\n\tstartButton.classList.add('btn-start');\n\tstartButton.classList.remove('btn-stop');\n\tstartButton.innerHTML = \"<i class='fas fa-play'></i>\";\n}, () => {\n\tstartButton.disabled = true;\n\n\talert(\"You stayed alive all along the game ! I'll give you a cake next time !\");\n});\n\nwindow.addEventListener('mousemove', (event) => {\n\tmouse.x = Math.round(event.clientX - window.innerWidth / 2);\n\tmouse.y = Math.round(-event.clientY + window.innerHeight / 2);\n}, false);\n\nwindow.addEventListener('mousedown', (event) => {\n\tlet hovered = scene.getMap().getHovered(mouse);\n\n\tif(!scene.getMap().isLocked() && hovered !== null && hovered.tile.isEditable())\n\t\tscene.getMap().setTile(hovered.x, hovered.y, new _Tile__WEBPACK_IMPORTED_MODULE_1__[\"Slot\"]());\n});\n\nstartButton.addEventListener('click', (event) => {\n\tif (!scene.isRunning()) {\n\t\tscene.runSimulation();\n\t\tscene.getMap().lock();\n\n\t\ttimer = setInterval(() => {\n\t\t\tscene.switchTick();\n\t\t\tlet hovered = scene.getMap().getHovered(scene.getRobot().position);\n\n\t\t\tif (!hovered)\n\t\t\t{\n\t\t\t\tscene.triggerAbort();\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tif (scene.getTick()) // once over two from first\n\t\t\t{\n\t\t\t\thovered.tile.onRobotLeave(scene);\n\t\t\t\tscene.getRobot().update();\n\t\t\t\thovered = scene.getMap().getHovered(scene.getRobot().position);\n\t\t\t\tif (hovered)\n\t\t\t\t\thovered.tile.onRobotEnter(scene);\n\t\t\t}\n\t\t\telse // once over two from second\n\t\t\t\thovered.tile.onRobotHover(scene);\n\n\t\t\tif(!scene.getRobot().isAlive())\n\t\t\t\tscene.triggerAbort();\n\t\t}, 1000 / 4);\n\n\t\tstartButton.classList.add('btn-stop');\n\t\tstartButton.classList.remove('btn-start');\n\t\tstartButton.innerHTML = \"<i class='fas fa-stop'></i>\";\n\t}\n\telse if (scene.isRunning()) {\n\t\tscene.triggerAbort(false);\n\t}\n});\n\n// Render\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.domElement);\n\nlet animate = function () {\n\trequestAnimationFrame(animate);\n\n\tscene.update(mouse);\n\n\trenderer.render(scene, camera);\n};\n\nanimate();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/texture.js":
/*!************************!*\
  !*** ./src/texture.js ***!
  \************************/
/*! exports provided: PLUG, TILE, SLOT, LAVA, FLAG, HOVER, BATTERY, WHITE_TILE, PAINT_RED, PAINT_GREEN, PAINT_BLUE, ROBOT, STACK_CONTAINER, TURN_BACK, TURN_TRIG, TURN_HORA, SWAP, ADD, SUB, TURN_BACK_TOOL, TURN_TRIG_TOOL, TURN_HORA_TOOL, SWAP_TOOL, ADD_TOOL, SUB_TOOL, STACK_BG, TOOLBOX_BG, getTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLUG\", function() { return PLUG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TILE\", function() { return TILE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SLOT\", function() { return SLOT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LAVA\", function() { return LAVA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FLAG\", function() { return FLAG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOVER\", function() { return HOVER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BATTERY\", function() { return BATTERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WHITE_TILE\", function() { return WHITE_TILE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAINT_RED\", function() { return PAINT_RED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAINT_GREEN\", function() { return PAINT_GREEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAINT_BLUE\", function() { return PAINT_BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROBOT\", function() { return ROBOT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STACK_CONTAINER\", function() { return STACK_CONTAINER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TURN_BACK\", function() { return TURN_BACK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TURN_TRIG\", function() { return TURN_TRIG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TURN_HORA\", function() { return TURN_HORA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SWAP\", function() { return SWAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD\", function() { return ADD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUB\", function() { return SUB; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TURN_BACK_TOOL\", function() { return TURN_BACK_TOOL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TURN_TRIG_TOOL\", function() { return TURN_TRIG_TOOL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TURN_HORA_TOOL\", function() { return TURN_HORA_TOOL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SWAP_TOOL\", function() { return SWAP_TOOL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TOOL\", function() { return ADD_TOOL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUB_TOOL\", function() { return SUB_TOOL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STACK_BG\", function() { return STACK_BG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOOLBOX_BG\", function() { return TOOLBOX_BG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTexture\", function() { return getTexture; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nconst PLUG = getTexture(\"plug.png\");\nconst TILE = getTexture(\"tile.png\");\nconst SLOT = getTexture(\"slot.png\");\nconst LAVA = getTexture(\"lava.png\");\nconst FLAG = getTexture(\"flag.png\");\nconst HOVER = getTexture(\"white.png\");\nconst BATTERY = getTexture(\"battery.png\");\nconst WHITE_TILE = getTexture(\"white_tile.png\");\n\n\nconst PAINT_RED = getTexture(\"paint_red.png\");\nconst PAINT_GREEN = getTexture(\"paint_green.png\");\nconst PAINT_BLUE = getTexture(\"paint_blue.png\");\n\nconst ROBOT = getTexture(\"pyramid_head.png\");\n\nconst STACK_CONTAINER = getTexture(\"stack_container.png\");\n\n//\tTOOLS_TILES\nconst TURN_BACK = getTexture(\"turn_back.png\");\nconst TURN_TRIG = getTexture(\"turn_t.png\");\nconst TURN_HORA = getTexture(\"turn_h.png\");\nconst SWAP = getTexture(\"swap.png\");\nconst ADD = getTexture(\"add.png\");\nconst SUB = getTexture(\"sub.png\");\n\n//\tTOOLS\nconst TURN_BACK_TOOL = getTexture(\"tool_turn_back.png\");\nconst TURN_TRIG_TOOL = getTexture(\"tool_turn_t.png\");\nconst TURN_HORA_TOOL = getTexture(\"tool_turn_h.png\");\nconst SWAP_TOOL = getTexture(\"tool_swap.png\");\nconst ADD_TOOL = getTexture(\"tool_add.png\");\nconst SUB_TOOL = getTexture(\"tool_sub.png\");\n\nconst STACK_BG = getTexture(\"stack_bg.png\");\nconst TOOLBOX_BG = getTexture(\"toolbox_bg.png\");\n\nfunction getTexture(path) {\n\tlet tex = new three__WEBPACK_IMPORTED_MODULE_0__[\"TextureLoader\"]().load(path);\n\ttex.magFilter = three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"];\n\ttex.minFilter = three__WEBPACK_IMPORTED_MODULE_0__[\"NearestFilter\"];\n\n\treturn tex;\n}\n\n\n//# sourceURL=webpack:///./src/texture.js?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/app.js */\"./src/app.js\");\n\n\n//# sourceURL=webpack:///multi_./src/app.js?");

/***/ })

/******/ });