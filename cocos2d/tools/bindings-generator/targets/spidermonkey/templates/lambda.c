do {
	std::shared_ptr<JSFunctionWrapper> func(new JSFunctionWrapper(cx, JS_THIS_OBJECT(cx, vp), ${in_value}));
	auto lambda = [=](${lambda_parameters}) -> ${ret_type.name} {
		#set arg_count = len($param_types)
		#if $arg_count > 0
		jsval largv[${arg_count}];
		#end if
		#set $count = 0
		#while $count < $arg_count
			#set $arg = $param_types[$count]
		${arg.from_native({"generator": $generator,
							 "in_value": "larg" + str(count),
							 "out_value": "largv[" + str(count) + "]",
							 "class_name": $class_name,
							 "level": 2,
							 "ntype": str($arg)})};
			#set $count = $count + 1
		#end while
		jsval rval;
		#if $arg_count > 0
		JSBool ok = func->invoke(${arg_count}, &largv[0], rval);
		#else
		JSBool ok = func->invoke(${arg_count}, nullptr, rval);
		#end if
		if (!ok && JS_IsExceptionPending(cx)) {
			JS_ReportPendingException(cx);
		}
		#if $ret_type.name != "void"
		${ret_type.get_whole_name($generator)} ret;
		${ret_type.to_native({"generator": $generator,
							 "in_value": "rval",
							 "out_value": "ret",
							 "ntype": str($ret_type),
							 "level": 2})};
		return ret;
		#end if
	};
	${out_value} = lambda;
} while(0)
