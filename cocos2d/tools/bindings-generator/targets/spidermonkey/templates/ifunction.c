## ===== instance function implementation template
JSBool ${signature_name}(JSContext *cx, uint32_t argc, jsval *vp)
{
#if len($arguments) > 0
	jsval *argv = JS_ARGV(cx, vp);
	JSBool ok = JS_TRUE;
#end if
#if not $is_constructor
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	${namespaced_class_name}* cobj = (${namespaced_class_name} *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, JS_FALSE, "${signature_name} : Invalid Native Object");
#end if
#if len($arguments) >= $min_args
	#set arg_count = len($arguments)
	#set arg_idx = $min_args
	#while $arg_idx <= $arg_count
	if (argc == ${arg_idx}) {
		#set $count = 0
		#while $count < $arg_idx
			#set $arg = $arguments[$count]
		${arg.to_string($generator)} arg${count};
			#set $count = $count + 1
		#end while
		#set $count = 0
		#set arg_list = ""
		#set arg_array = []
		#while $count < $arg_idx
			#set $arg = $arguments[$count]
		${arg.to_native({"generator": $generator,
							 "in_value": "argv[" + str(count) + "]",
							 "out_value": "arg" + str(count),
							 "class_name": $class_name,
							 "level": 2,
							 "ntype": str($arg)})};
			#set $arg_array += ["arg"+str(count)]
			#set $count = $count + 1
		#end while
		#if $arg_idx > 0
		JSB_PRECONDITION2(ok, cx, JS_FALSE, "${signature_name} : Error processing arguments");
		#end if
		#set $arg_list = ", ".join($arg_array)
		#if $is_constructor
		${namespaced_class_name}* cobj = new ${namespaced_class_name}($arg_list);
#if not $generator.script_control_cpp
		cocos2d::Object *_ccobj = dynamic_cast<cocos2d::Object *>(cobj);
		if (_ccobj) {
			_ccobj->autorelease();
		}
#end if
		TypeTest<${namespaced_class_name}> t;
		js_type_class_t *typeClass = nullptr;
		std::string typeName = t.s_name();
		auto typeMapIter = _js_global_type_map.find(typeName);
		CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
		typeClass = typeMapIter->second;
		CCASSERT(typeClass, "The value is null.");
		JSObject *obj = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
		JS_SET_RVAL(cx, vp, OBJECT_TO_JSVAL(obj));
		// link the native object with the javascript object
		js_proxy_t* p = jsb_new_proxy(cobj, obj);
#if not $generator.script_control_cpp
		JS_AddNamedObjectRoot(cx, &p->obj, "${namespaced_class_name}");
#end if
		#else
			#if $ret_type.name != "void"
				#if $ret_type.is_enum
		int ret = (int)cobj->${func_name}($arg_list);
				#else
		${ret_type.get_whole_name($generator)} ret = cobj->${func_name}($arg_list);
				#end if
		jsval jsret = JSVAL_NULL;
		${ret_type.from_native({"generator": $generator,
									"in_value": "ret",
									"out_value": "jsret",
									"ntype": str($ret_type),
									"level": 2})};
		JS_SET_RVAL(cx, vp, jsret);
			#else
		cobj->${func_name}($arg_list);
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
			#end if
		#end if
		return JS_TRUE;
	}
		#set $arg_idx = $arg_idx + 1
	#end while
#end if

	JS_ReportError(cx, "${signature_name} : wrong number of arguments: %d, was expecting %d", argc, ${min_args});
	return JS_FALSE;
}
