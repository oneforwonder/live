// Compiled by ClojureScript 0.0-2197
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",4707957972),new cljs.core.Symbol("s","Schema","s/Schema",830322725,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",3860323928),(function (p1__7204__7205__auto__){var G__10284 = p1__7204__7205__auto__;if(G__10284)
{var bit__4126__auto__ = null;if(cljs.core.truth_((function (){var or__3476__auto__ = bit__4126__auto__;if(cljs.core.truth_(or__3476__auto__))
{return or__3476__auto__;
} else
{return G__10284.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__10284.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__10284);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__10284);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__10285_SHARP_){return (cljs.core.val.call(null,p1__10285_SHARP_) > 1);
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__10287 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__10287,0,null);var v = cljs.core.nth.call(null,vec__10287,1,null);var p = vec__10287;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"missing-key","missing-key",2360894698),new cljs.core.Keyword(null,"key","key",1014010321),k,new cljs.core.Keyword(null,"map","map",1014012110),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return schema.core.both.call(null,s1,s2);
} else
{return null;
}
}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___10293 = schema.utils.use_fn_validation;var output_schema10288_10294 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema10289_10295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-1640531420,null))], null);var input_checker10290_10296 = schema.core.checker.call(null,input_schema10289_10295);var output_checker10291_10297 = schema.core.checker.call(null,output_schema10288_10294);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___10293,output_schema10288_10294,input_schema10289_10295,input_checker10290_10296,output_checker10291_10297){
return (function unwrap_schema_form_key(G__10292){var validate__7174__auto__ = ufv___10293.get_cell();if(cljs.core.truth_(validate__7174__auto__))
{var args__7175__auto___10298 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10292], null);var temp__4126__auto___10299 = input_checker10290_10296.call(null,args__7175__auto___10298);if(cljs.core.truth_(temp__4126__auto___10299))
{var error__7176__auto___10300 = temp__4126__auto___10299;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__7176__auto___10300)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema10289_10295,new cljs.core.Keyword(null,"value","value",1125876963),args__7175__auto___10298,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10300], null));
} else
{}
} else
{}
var o__7177__auto__ = (function (){var k = G__10292;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),2)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-54341422,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__7174__auto__))
{var temp__4126__auto___10301 = output_checker10291_10297.call(null,o__7177__auto__);if(cljs.core.truth_(temp__4126__auto___10301))
{var error__7176__auto___10302 = temp__4126__auto___10301;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__7176__auto___10302)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema10288_10294,new cljs.core.Keyword(null,"value","value",1125876963),o__7177__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10302], null));
} else
{}
} else
{}
return o__7177__auto__;
});})(ufv___10293,output_schema10288_10294,input_schema10289_10295,input_checker10290_10296,output_checker10291_10297))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema10288_10294,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10289_10295], null)));
var ufv___10308 = schema.utils.use_fn_validation;var output_schema10303_10309 = schema.core.Any;var input_schema10304_10310 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker10305_10311 = schema.core.checker.call(null,input_schema10304_10310);var output_checker10306_10312 = schema.core.checker.call(null,output_schema10303_10309);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___10308,output_schema10303_10309,input_schema10304_10310,input_checker10305_10311,output_checker10306_10312){
return (function explicit_schema_key_map(G__10307){var validate__7174__auto__ = ufv___10308.get_cell();if(cljs.core.truth_(validate__7174__auto__))
{var args__7175__auto___10313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10307], null);var temp__4126__auto___10314 = input_checker10305_10311.call(null,args__7175__auto___10313);if(cljs.core.truth_(temp__4126__auto___10314))
{var error__7176__auto___10315 = temp__4126__auto___10314;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__7176__auto___10315)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema10304_10310,new cljs.core.Keyword(null,"value","value",1125876963),args__7175__auto___10313,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10315], null));
} else
{}
} else
{}
var o__7177__auto__ = (function (){var s = G__10307;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__7174__auto__))
{var temp__4126__auto___10316 = output_checker10306_10312.call(null,o__7177__auto__);if(cljs.core.truth_(temp__4126__auto___10316))
{var error__7176__auto___10317 = temp__4126__auto___10316;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__7176__auto___10317)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema10303_10309,new cljs.core.Keyword(null,"value","value",1125876963),o__7177__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10317], null));
} else
{}
} else
{}
return o__7177__auto__;
});})(ufv___10308,output_schema10303_10309,input_schema10304_10310,input_checker10305_10311,output_checker10306_10312))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema10303_10309,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10304_10310], null)));
var ufv___10323 = schema.utils.use_fn_validation;var output_schema10318_10324 = schema.core.Any;var input_schema10319_10325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker10320_10326 = schema.core.checker.call(null,input_schema10319_10325);var output_checker10321_10327 = schema.core.checker.call(null,output_schema10318_10324);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___10323,output_schema10318_10324,input_schema10319_10325,input_checker10320_10326,output_checker10321_10327){
return (function split_schema_keys(G__10322){var validate__7174__auto__ = ufv___10323.get_cell();if(cljs.core.truth_(validate__7174__auto__))
{var args__7175__auto___10328 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10322], null);var temp__4126__auto___10329 = input_checker10320_10326.call(null,args__7175__auto___10328);if(cljs.core.truth_(temp__4126__auto___10329))
{var error__7176__auto___10330 = temp__4126__auto___10329;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__7176__auto___10330)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema10319_10325,new cljs.core.Keyword(null,"value","value",1125876963),args__7175__auto___10328,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10330], null));
} else
{}
} else
{}
var o__7177__auto__ = (function (){var s = G__10322;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-2033670824,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-1719548647,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__7174__auto__))
{var temp__4126__auto___10331 = output_checker10321_10327.call(null,o__7177__auto__);if(cljs.core.truth_(temp__4126__auto___10331))
{var error__7176__auto___10332 = temp__4126__auto___10331;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__7176__auto___10332)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema10318_10324,new cljs.core.Keyword(null,"value","value",1125876963),o__7177__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10332], null));
} else
{}
} else
{}
return o__7177__auto__;
});})(ufv___10323,output_schema10318_10324,input_schema10319_10325,input_checker10320_10326,output_checker10321_10327))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema10318_10324,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10319_10325], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__10336){var vec__10337 = p__10336;var k = cljs.core.nth.call(null,vec__10337,0,null);var v = cljs.core.nth.call(null,vec__10337,1,null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__10338 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__10338,0,null);var ov = cljs.core.nth.call(null,vec__10338,1,null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__10339){
var key_project = cljs.core.first(arglist__10339);
arglist__10339 = cljs.core.next(arglist__10339);
var key_combine = cljs.core.first(arglist__10339);
arglist__10339 = cljs.core.next(arglist__10339);
var val_combine = cljs.core.first(arglist__10339);
var maps = cljs.core.rest(arglist__10339);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___10347 = schema.utils.use_fn_validation;var output_schema10341_10348 = plumbing.fnk.schema.InputSchema;var input_schema10342_10349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-1640528223,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",-1640528222,null))], null);var input_checker10343_10350 = schema.core.checker.call(null,input_schema10342_10349);var output_checker10344_10351 = schema.core.checker.call(null,output_schema10341_10348);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___10347,output_schema10341_10348,input_schema10342_10349,input_checker10343_10350,output_checker10344_10351){
return (function union_input_schemata(G__10345,G__10346){var validate__7174__auto__ = ufv___10347.get_cell();if(cljs.core.truth_(validate__7174__auto__))
{var args__7175__auto___10352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10345,G__10346], null);var temp__4126__auto___10353 = input_checker10343_10350.call(null,args__7175__auto___10352);if(cljs.core.truth_(temp__4126__auto___10353))
{var error__7176__auto___10354 = temp__4126__auto___10353;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__7176__auto___10354)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema10342_10349,new cljs.core.Keyword(null,"value","value",1125876963),args__7175__auto___10352,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10354], null));
} else
{}
} else
{}
var o__7177__auto__ = (function (){var i1 = G__10345;var i2 = G__10346;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__7174__auto__,ufv___10347,output_schema10341_10348,input_schema10342_10349,input_checker10343_10350,output_checker10344_10351){
return (function (p1__10340_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__10340_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__10340_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1110869890);
}
});})(validate__7174__auto__,ufv___10347,output_schema10341_10348,input_schema10342_10349,input_checker10343_10350,output_checker10344_10351))
,((function (validate__7174__auto__,ufv___10347,output_schema10341_10348,input_schema10342_10349,input_checker10343_10350,output_checker10344_10351){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"k1","k1",-1640528161,null),new cljs.core.Symbol(null,"k2","k2",-1640528160,null))))].join('')));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));
}
} else
{return null;
}
}
}
}
}
});})(validate__7174__auto__,ufv___10347,output_schema10341_10348,input_schema10342_10349,input_checker10343_10350,output_checker10344_10351))
,((function (validate__7174__auto__,ufv___10347,output_schema10341_10348,input_schema10342_10349,input_checker10343_10350,output_checker10344_10351){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__7174__auto__,ufv___10347,output_schema10341_10348,input_schema10342_10349,input_checker10343_10350,output_checker10344_10351))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__7174__auto__))
{var temp__4126__auto___10355 = output_checker10344_10351.call(null,o__7177__auto__);if(cljs.core.truth_(temp__4126__auto___10355))
{var error__7176__auto___10356 = temp__4126__auto___10355;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__7176__auto___10356)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema10341_10348,new cljs.core.Keyword(null,"value","value",1125876963),o__7177__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10356], null));
} else
{}
} else
{}
return o__7177__auto__;
});})(ufv___10347,output_schema10341_10348,input_schema10342_10349,input_checker10343_10350,output_checker10344_10351))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema10341_10348,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10342_10349], null)));
var ufv___10362 = schema.utils.use_fn_validation;var output_schema10357_10363 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema10358_10364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",-1943844163,null))], null);var input_checker10359_10365 = schema.core.checker.call(null,input_schema10358_10364);var output_checker10360_10366 = schema.core.checker.call(null,output_schema10357_10363);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___10362,output_schema10357_10363,input_schema10358_10364,input_checker10359_10365,output_checker10360_10366){
return (function required_toplevel_keys(G__10361){var validate__7174__auto__ = ufv___10362.get_cell();if(cljs.core.truth_(validate__7174__auto__))
{var args__7175__auto___10367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10361], null);var temp__4126__auto___10368 = input_checker10359_10365.call(null,args__7175__auto___10367);if(cljs.core.truth_(temp__4126__auto___10368))
{var error__7176__auto___10369 = temp__4126__auto___10368;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__7176__auto___10369)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema10358_10364,new cljs.core.Keyword(null,"value","value",1125876963),args__7175__auto___10367,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10369], null));
} else
{}
} else
{}
var o__7177__auto__ = (function (){var input_schema = G__10361;while(true){
return cljs.core.keep.call(null,((function (validate__7174__auto__,ufv___10362,output_schema10357_10363,input_schema10358_10364,input_checker10359_10365,output_checker10360_10366){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__7174__auto__,ufv___10362,output_schema10357_10363,input_schema10358_10364,input_checker10359_10365,output_checker10360_10366))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__7174__auto__))
{var temp__4126__auto___10370 = output_checker10360_10366.call(null,o__7177__auto__);if(cljs.core.truth_(temp__4126__auto___10370))
{var error__7176__auto___10371 = temp__4126__auto___10370;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__7176__auto___10371)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema10357_10363,new cljs.core.Keyword(null,"value","value",1125876963),o__7177__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10371], null));
} else
{}
} else
{}
return o__7177__auto__;
});})(ufv___10362,output_schema10357_10363,input_schema10358_10364,input_checker10359_10365,output_checker10360_10366))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema10357_10363,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10358_10364], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4193__auto__ = (function iter__10380(s__10381){return (new cljs.core.LazySeq(null,(function (){var s__10381__$1 = s__10381;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10381__$1);if(temp__4126__auto__)
{var s__10381__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10381__$2))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,s__10381__$2);var size__4192__auto__ = cljs.core.count.call(null,c__4191__auto__);var b__10383 = cljs.core.chunk_buffer.call(null,size__4192__auto__);if((function (){var i__10382 = 0;while(true){
if((i__10382 < size__4192__auto__))
{var vec__10386 = cljs.core._nth.call(null,c__4191__auto__,i__10382);var k = cljs.core.nth.call(null,vec__10386,0,null);var v = cljs.core.nth.call(null,vec__10386,1,null);cljs.core.chunk_append.call(null,b__10383,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__10388 = (i__10382 + 1);
i__10382 = G__10388;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10383),iter__10380.call(null,cljs.core.chunk_rest.call(null,s__10381__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10383),null);
}
} else
{var vec__10387 = cljs.core.first.call(null,s__10381__$2);var k = cljs.core.nth.call(null,vec__10387,0,null);var v = cljs.core.nth.call(null,vec__10387,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__10380.call(null,cljs.core.rest.call(null,s__10381__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4193__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",271859124,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),(function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1637187556,null));
}))),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4193__auto__ = (function iter__10397(s__10398){return (new cljs.core.LazySeq(null,(function (){var s__10398__$1 = s__10398;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10398__$1);if(temp__4126__auto__)
{var s__10398__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10398__$2))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,s__10398__$2);var size__4192__auto__ = cljs.core.count.call(null,c__4191__auto__);var b__10400 = cljs.core.chunk_buffer.call(null,size__4192__auto__);if((function (){var i__10399 = 0;while(true){
if((i__10399 < size__4192__auto__))
{var vec__10403 = cljs.core._nth.call(null,c__4191__auto__,i__10399);var k = cljs.core.nth.call(null,vec__10403,0,null);var v = cljs.core.nth.call(null,vec__10403,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__10400,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__10405 = (i__10399 + 1);
i__10399 = G__10405;
continue;
}
} else
{{
var G__10406 = (i__10399 + 1);
i__10399 = G__10406;
continue;
}
}
} else
{{
var G__10407 = (i__10399 + 1);
i__10399 = G__10407;
continue;
}
}
} else
{{
var G__10408 = (i__10399 + 1);
i__10399 = G__10408;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10400),iter__10397.call(null,cljs.core.chunk_rest.call(null,s__10398__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10400),null);
}
} else
{var vec__10404 = cljs.core.first.call(null,s__10398__$2);var k = cljs.core.nth.call(null,vec__10404,0,null);var v = cljs.core.nth.call(null,vec__10404,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__10397.call(null,cljs.core.rest.call(null,s__10398__$2)));
} else
{{
var G__10409 = cljs.core.rest.call(null,s__10398__$2);
s__10398__$1 = G__10409;
continue;
}
}
} else
{{
var G__10410 = cljs.core.rest.call(null,s__10398__$2);
s__10398__$1 = G__10410;
continue;
}
}
} else
{{
var G__10411 = cljs.core.rest.call(null,s__10398__$2);
s__10398__$1 = G__10411;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4193__auto__.call(null,input_schema);
})()));
} else
{return null;
}
}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",2405949387),new cljs.core.Keyword(null,"failures","failures",1689842587),fails], null));
} else
{return null;
}
});
var ufv___10434 = schema.utils.use_fn_validation;var output_schema10412_10435 = schema.core.Any;var input_schema10413_10436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker10414_10437 = schema.core.checker.call(null,input_schema10413_10436);var output_checker10415_10438 = schema.core.checker.call(null,output_schema10412_10435);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___10434,output_schema10412_10435,input_schema10413_10436,input_checker10414_10437,output_checker10415_10438){
return (function compose_schemata(G__10416,G__10417){var validate__7174__auto__ = true;if(validate__7174__auto__)
{var args__7175__auto___10439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10416,G__10417], null);var temp__4126__auto___10440 = input_checker10414_10437.call(null,args__7175__auto___10439);if(cljs.core.truth_(temp__4126__auto___10440))
{var error__7176__auto___10441 = temp__4126__auto___10440;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__7176__auto___10441)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema10413_10436,new cljs.core.Keyword(null,"value","value",1125876963),args__7175__auto___10439,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10441], null));
} else
{}
} else
{}
var o__7177__auto__ = (function (){var G__10428 = G__10416;var vec__10430 = G__10428;var i2 = cljs.core.nth.call(null,vec__10430,0,null);var o2 = cljs.core.nth.call(null,vec__10430,1,null);var G__10429 = G__10417;var vec__10431 = G__10429;var i1 = cljs.core.nth.call(null,vec__10431,0,null);var o1 = cljs.core.nth.call(null,vec__10431,1,null);var G__10428__$1 = G__10428;var G__10429__$1 = G__10429;while(true){
var vec__10432 = G__10428__$1;var i2__$1 = cljs.core.nth.call(null,vec__10432,0,null);var o2__$1 = cljs.core.nth.call(null,vec__10432,1,null);var vec__10433 = G__10429__$1;var i1__$1 = cljs.core.nth.call(null,vec__10433,0,null);var o1__$1 = cljs.core.nth.call(null,vec__10433,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__7174__auto__)
{var temp__4126__auto___10442 = output_checker10415_10438.call(null,o__7177__auto__);if(cljs.core.truth_(temp__4126__auto___10442))
{var error__7176__auto___10443 = temp__4126__auto___10442;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__7176__auto___10443)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema10412_10435,new cljs.core.Keyword(null,"value","value",1125876963),o__7177__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10443], null));
} else
{}
} else
{}
return o__7177__auto__;
});})(ufv___10434,output_schema10412_10435,input_schema10413_10436,input_checker10414_10437,output_checker10415_10438))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema10412_10435,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10413_10436], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___10522 = schema.utils.use_fn_validation;var output_schema10444_10523 = schema.core.Any;var input_schema10445_10524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-1640531412,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-1640528095,null))], null);var input_checker10446_10525 = schema.core.checker.call(null,input_schema10445_10524);var output_checker10447_10526 = schema.core.checker.call(null,output_schema10444_10523);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526){
return (function split_schema(G__10448,G__10449){var validate__7174__auto__ = ufv___10522.get_cell();if(cljs.core.truth_(validate__7174__auto__))
{var args__7175__auto___10527 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10448,G__10449], null);var temp__4126__auto___10528 = input_checker10446_10525.call(null,args__7175__auto___10527);if(cljs.core.truth_(temp__4126__auto___10528))
{var error__7176__auto___10529 = temp__4126__auto___10528;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__7176__auto___10529)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema10445_10524,new cljs.core.Keyword(null,"value","value",1125876963),args__7175__auto___10527,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10529], null));
} else
{}
} else
{}
var o__7177__auto__ = (function (){var s = G__10448;var ks = G__10449;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4193__auto__ = ((function (ks__$1,validate__7174__auto__,ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526){
return (function iter__10486(s__10487){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__7174__auto__,ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526){
return (function (){var s__10487__$1 = s__10487;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10487__$1);if(temp__4126__auto__)
{var s__10487__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10487__$2))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,s__10487__$2);var size__4192__auto__ = cljs.core.count.call(null,c__4191__auto__);var b__10489 = cljs.core.chunk_buffer.call(null,size__4192__auto__);if((function (){var i__10488 = 0;while(true){
if((i__10488 < size__4192__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4191__auto__,i__10488);cljs.core.chunk_append.call(null,b__10489,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4193__auto__ = ((function (i__10488,in_QMARK_,c__4191__auto__,size__4192__auto__,b__10489,s__10487__$2,temp__4126__auto__,ks__$1,validate__7174__auto__,ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526){
return (function iter__10506(s__10507){return (new cljs.core.LazySeq(null,((function (i__10488,in_QMARK_,c__4191__auto__,size__4192__auto__,b__10489,s__10487__$2,temp__4126__auto__,ks__$1,validate__7174__auto__,ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526){
return (function (){var s__10507__$1 = s__10507;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10507__$1);if(temp__4126__auto____$1)
{var s__10507__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10507__$2))
{var c__4191__auto____$1 = cljs.core.chunk_first.call(null,s__10507__$2);var size__4192__auto____$1 = cljs.core.count.call(null,c__4191__auto____$1);var b__10509 = cljs.core.chunk_buffer.call(null,size__4192__auto____$1);if((function (){var i__10508 = 0;while(true){
if((i__10508 < size__4192__auto____$1))
{var vec__10512 = cljs.core._nth.call(null,c__4191__auto____$1,i__10508);var k = cljs.core.nth.call(null,vec__10512,0,null);var v = cljs.core.nth.call(null,vec__10512,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__10509,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__10530 = (i__10508 + 1);
i__10508 = G__10530;
continue;
}
} else
{{
var G__10531 = (i__10508 + 1);
i__10508 = G__10531;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10509),iter__10506.call(null,cljs.core.chunk_rest.call(null,s__10507__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10509),null);
}
} else
{var vec__10513 = cljs.core.first.call(null,s__10507__$2);var k = cljs.core.nth.call(null,vec__10513,0,null);var v = cljs.core.nth.call(null,vec__10513,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__10506.call(null,cljs.core.rest.call(null,s__10507__$2)));
} else
{{
var G__10532 = cljs.core.rest.call(null,s__10507__$2);
s__10507__$1 = G__10532;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__10488,in_QMARK_,c__4191__auto__,size__4192__auto__,b__10489,s__10487__$2,temp__4126__auto__,ks__$1,validate__7174__auto__,ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526))
,null,null));
});})(i__10488,in_QMARK_,c__4191__auto__,size__4192__auto__,b__10489,s__10487__$2,temp__4126__auto__,ks__$1,validate__7174__auto__,ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526))
;return iter__4193__auto__.call(null,s);
})()));
{
var G__10533 = (i__10488 + 1);
i__10488 = G__10533;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10489),iter__10486.call(null,cljs.core.chunk_rest.call(null,s__10487__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10489),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__10487__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4193__auto__ = ((function (in_QMARK_,s__10487__$2,temp__4126__auto__,ks__$1,validate__7174__auto__,ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526){
return (function iter__10514(s__10515){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__10487__$2,temp__4126__auto__,ks__$1,validate__7174__auto__,ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526){
return (function (){var s__10515__$1 = s__10515;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10515__$1);if(temp__4126__auto____$1)
{var s__10515__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10515__$2))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,s__10515__$2);var size__4192__auto__ = cljs.core.count.call(null,c__4191__auto__);var b__10517 = cljs.core.chunk_buffer.call(null,size__4192__auto__);if((function (){var i__10516 = 0;while(true){
if((i__10516 < size__4192__auto__))
{var vec__10520 = cljs.core._nth.call(null,c__4191__auto__,i__10516);var k = cljs.core.nth.call(null,vec__10520,0,null);var v = cljs.core.nth.call(null,vec__10520,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__10517,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__10534 = (i__10516 + 1);
i__10516 = G__10534;
continue;
}
} else
{{
var G__10535 = (i__10516 + 1);
i__10516 = G__10535;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10517),iter__10514.call(null,cljs.core.chunk_rest.call(null,s__10515__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10517),null);
}
} else
{var vec__10521 = cljs.core.first.call(null,s__10515__$2);var k = cljs.core.nth.call(null,vec__10521,0,null);var v = cljs.core.nth.call(null,vec__10521,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__10514.call(null,cljs.core.rest.call(null,s__10515__$2)));
} else
{{
var G__10536 = cljs.core.rest.call(null,s__10515__$2);
s__10515__$1 = G__10536;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__10487__$2,temp__4126__auto__,ks__$1,validate__7174__auto__,ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526))
,null,null));
});})(in_QMARK_,s__10487__$2,temp__4126__auto__,ks__$1,validate__7174__auto__,ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526))
;return iter__4193__auto__.call(null,s);
})()),iter__10486.call(null,cljs.core.rest.call(null,s__10487__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__7174__auto__,ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526))
,null,null));
});})(ks__$1,validate__7174__auto__,ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526))
;return iter__4193__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__7174__auto__))
{var temp__4126__auto___10537 = output_checker10447_10526.call(null,o__7177__auto__);if(cljs.core.truth_(temp__4126__auto___10537))
{var error__7176__auto___10538 = temp__4126__auto___10537;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__7176__auto___10538)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema10444_10523,new cljs.core.Keyword(null,"value","value",1125876963),o__7177__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10538], null));
} else
{}
} else
{}
return o__7177__auto__;
});})(ufv___10522,output_schema10444_10523,input_schema10445_10524,input_checker10446_10525,output_checker10447_10526))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema10444_10523,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10445_10524], null)));
var ufv___10569 = schema.utils.use_fn_validation;var output_schema10539_10570 = plumbing.fnk.schema.GraphIOSchemata;var input_schema10540_10571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker10541_10572 = schema.core.checker.call(null,input_schema10540_10571);var output_checker10542_10573 = schema.core.checker.call(null,output_schema10539_10570);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___10569,output_schema10539_10570,input_schema10540_10571,input_checker10541_10572,output_checker10542_10573){
return (function sequence_schemata(G__10543,G__10544){var validate__7174__auto__ = ufv___10569.get_cell();if(cljs.core.truth_(validate__7174__auto__))
{var args__7175__auto___10574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10543,G__10544], null);var temp__4126__auto___10575 = input_checker10541_10572.call(null,args__7175__auto___10574);if(cljs.core.truth_(temp__4126__auto___10575))
{var error__7176__auto___10576 = temp__4126__auto___10575;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__7176__auto___10576)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema10540_10571,new cljs.core.Keyword(null,"value","value",1125876963),args__7175__auto___10574,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10576], null));
} else
{}
} else
{}
var o__7177__auto__ = (function (){var G__10560 = G__10543;var vec__10562 = G__10560;var i1 = cljs.core.nth.call(null,vec__10562,0,null);var o1 = cljs.core.nth.call(null,vec__10562,1,null);var G__10561 = G__10544;var vec__10563 = G__10561;var k = cljs.core.nth.call(null,vec__10563,0,null);var vec__10564 = cljs.core.nth.call(null,vec__10563,1,null);var i2 = cljs.core.nth.call(null,vec__10564,0,null);var o2 = cljs.core.nth.call(null,vec__10564,1,null);var G__10560__$1 = G__10560;var G__10561__$1 = G__10561;while(true){
var vec__10565 = G__10560__$1;var i1__$1 = cljs.core.nth.call(null,vec__10565,0,null);var o1__$1 = cljs.core.nth.call(null,vec__10565,1,null);var vec__10566 = G__10561__$1;var k__$1 = cljs.core.nth.call(null,vec__10566,0,null);var vec__10567 = cljs.core.nth.call(null,vec__10566,1,null);var i2__$1 = cljs.core.nth.call(null,vec__10567,0,null);var o2__$1 = cljs.core.nth.call(null,vec__10567,1,null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__10568 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__10568,0,null);var unused = cljs.core.nth.call(null,vec__10568,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__7174__auto__))
{var temp__4126__auto___10577 = output_checker10542_10573.call(null,o__7177__auto__);if(cljs.core.truth_(temp__4126__auto___10577))
{var error__7176__auto___10578 = temp__4126__auto___10577;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__7176__auto___10578)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema10539_10570,new cljs.core.Keyword(null,"value","value",1125876963),o__7177__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10578], null));
} else
{}
} else
{}
return o__7177__auto__;
});})(ufv___10569,output_schema10539_10570,input_schema10540_10571,input_checker10541_10572,output_checker10542_10573))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema10539_10570,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10540_10571], null)));

//# sourceMappingURL=schema.js.map