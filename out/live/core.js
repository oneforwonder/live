// Compiled by ClojureScript 0.0-2197
goog.provide('live.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('goog.net.cookies');
goog.require('goog.net.cookies');
goog.require('om.core');
goog.require('om.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_tools.core');
live.core.cooky = (new goog.net.Cookies(Document));
live.core.setcookie_BANG_ = (function setcookie_BANG_(n){live.core.cooky.set("saved-count",n,500);
return console.log("set cookie");
});
live.core.change_count = (function change_count(owner,f,n){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"n","n",1013904352),f.call(null,n));
return live.core.setcookie_BANG_.call(null,f.call(null,n));
});
/**
* 
*/
live.core.Counter = schema.core.schema_with_name.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),live.core.number], null),new cljs.core.Symbol(null,"Counter","Counter",981952405,null));
var ufv___10909 = schema.utils.use_fn_validation;var output_schema10893_10910 = schema.core.Any;var input_schema10894_10911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker10895_10912 = schema.core.checker.call(null,input_schema10894_10911);var output_checker10896_10913 = schema.core.checker.call(null,output_schema10893_10910);/**
* Inputs: [data owner]
*/
live.core.widget = ((function (ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function widget(G__10897,G__10898){var validate__7174__auto__ = ufv___10909.get_cell();if(cljs.core.truth_(validate__7174__auto__))
{var args__7175__auto___10914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10897,G__10898], null);var temp__4126__auto___10915 = input_checker10895_10912.call(null,args__7175__auto___10914);if(cljs.core.truth_(temp__4126__auto___10915))
{var error__7176__auto___10916 = temp__4126__auto___10915;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widget","widget",1866388477,null),cljs.core.pr_str.call(null,error__7176__auto___10916)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema10894_10911,new cljs.core.Keyword(null,"value","value",1125876963),args__7175__auto___10914,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10916], null));
} else
{}
} else
{}
var o__7177__auto__ = (function (){var data = G__10897;var owner = G__10898;while(true){
if(typeof live.core.t10904 !== 'undefined')
{} else
{
/**
* @constructor
*/
live.core.t10904 = (function (input_schema10894,input_checker10895,owner,data,G__10897,validate__7174__auto__,output_checker10896,output_schema10893,widget,G__10898,ufv__,meta10905){
this.input_schema10894 = input_schema10894;
this.input_checker10895 = input_checker10895;
this.owner = owner;
this.data = data;
this.G__10897 = G__10897;
this.validate__7174__auto__ = validate__7174__auto__;
this.output_checker10896 = output_checker10896;
this.output_schema10893 = output_schema10893;
this.widget = widget;
this.G__10898 = G__10898;
this.ufv__ = ufv__;
this.meta10905 = meta10905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
live.core.t10904.cljs$lang$type = true;
live.core.t10904.cljs$lang$ctorStr = "live.core/t10904";
live.core.t10904.cljs$lang$ctorPrWriter = ((function (validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function (this__4043__auto__,writer__4044__auto__,opt__4045__auto__){return cljs.core._write.call(null,writer__4044__auto__,"live.core/t10904");
});})(validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
;
live.core.t10904.prototype.om$core$IRenderState$ = true;
live.core.t10904.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function (_,p__10907){var self__ = this;
var map__10908 = p__10907;var map__10908__$1 = ((cljs.core.seq_QMARK_.call(null,map__10908))?cljs.core.apply.call(null,cljs.core.hash_map,map__10908):map__10908);var n = cljs.core.get.call(null,map__10908__$1,new cljs.core.Keyword(null,"n","n",1013904352));var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.span,[cljs.core.str("Count: "),cljs.core.str(n)].join(''),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.PersistentVector.EMPTY),React.DOM.button({"onClick": ((function (___$1,map__10908,map__10908__$1,n,validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function (){return live.core.change_count.call(null,self__.owner,cljs.core.inc,n);
});})(___$1,map__10908,map__10908__$1,n,validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
},"+"),React.DOM.button({"onClick": ((function (___$1,map__10908,map__10908__$1,n,validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function (){return live.core.change_count.call(null,self__.owner,cljs.core.dec,n);
});})(___$1,map__10908,map__10908__$1,n,validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
},"-"),React.DOM.button({"onClick": ((function (___$1,map__10908,map__10908__$1,n,validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function (){return live.core.change_count.call(null,self__.owner,((function (___$1,map__10908,map__10908__$1,n,validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function (a){return (a * a);
});})(___$1,map__10908,map__10908__$1,n,validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
,n);
});})(___$1,map__10908,map__10908__$1,n,validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
},"^2"),React.DOM.button({"onClick": ((function (___$1,map__10908,map__10908__$1,n,validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function (){return live.core.change_count.call(null,self__.owner,((function (___$1,map__10908,map__10908__$1,n,validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function (a){return (a * 0);
});})(___$1,map__10908,map__10908__$1,n,validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
,n);
});})(___$1,map__10908,map__10908__$1,n,validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
},"Reset")],null)));
});})(validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
;
live.core.t10904.prototype.om$core$IWillMount$ = true;
live.core.t10904.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"n","n",1013904352),new cljs.core.Keyword(null,"init","init",1017141378).cljs$core$IFn$_invoke$arity$1(self__.data));
});})(validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
;
live.core.t10904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function (_10906){var self__ = this;
var _10906__$1 = this;return self__.meta10905;
});})(validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
;
live.core.t10904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function (_10906,meta10905__$1){var self__ = this;
var _10906__$1 = this;return (new live.core.t10904(self__.input_schema10894,self__.input_checker10895,self__.owner,self__.data,self__.G__10897,self__.validate__7174__auto__,self__.output_checker10896,self__.output_schema10893,self__.widget,self__.G__10898,self__.ufv__,meta10905__$1));
});})(validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
;
live.core.__GT_t10904 = ((function (validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913){
return (function __GT_t10904(input_schema10894__$1,input_checker10895__$1,owner__$1,data__$1,G__10897__$1,validate__7174__auto____$1,output_checker10896__$1,output_schema10893__$1,widget__$1,G__10898__$1,ufv____$1,meta10905){return (new live.core.t10904(input_schema10894__$1,input_checker10895__$1,owner__$1,data__$1,G__10897__$1,validate__7174__auto____$1,output_checker10896__$1,output_schema10893__$1,widget__$1,G__10898__$1,ufv____$1,meta10905));
});})(validate__7174__auto__,ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
;
}
return (new live.core.t10904(input_schema10894_10911,input_checker10895_10912,owner,data,G__10897,validate__7174__auto__,output_checker10896_10913,output_schema10893_10910,widget,G__10898,ufv___10909,null));
break;
}
})();if(cljs.core.truth_(validate__7174__auto__))
{var temp__4126__auto___10917 = output_checker10896_10913.call(null,o__7177__auto__);if(cljs.core.truth_(temp__4126__auto___10917))
{var error__7176__auto___10918 = temp__4126__auto___10917;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widget","widget",1866388477,null),cljs.core.pr_str.call(null,error__7176__auto___10918)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema10893_10910,new cljs.core.Keyword(null,"value","value",1125876963),o__7177__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__7176__auto___10918], null));
} else
{}
} else
{}
return o__7177__auto__;
});})(ufv___10909,output_schema10893_10910,input_schema10894_10911,input_checker10895_10912,output_checker10896_10913))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,live.core.widget),schema.core.make_fn_schema.call(null,output_schema10893_10910,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10894_10911], null)));
live.core.__GT_widget = (function() {
var __GT_widget = null;
var __GT_widget__1 = (function (cursor__8942__auto__){return om.core.build.call(null,live.core.widget,cursor__8942__auto__);
});
var __GT_widget__2 = (function (cursor__8942__auto__,m10892){return om.core.build.call(null,live.core.widget,cursor__8942__auto__,m10892);
});
__GT_widget = function(cursor__8942__auto__,m10892){
switch(arguments.length){
case 1:
return __GT_widget__1.call(this,cursor__8942__auto__);
case 2:
return __GT_widget__2.call(this,cursor__8942__auto__,m10892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widget.cljs$core$IFn$_invoke$arity$1 = __GT_widget__1;
__GT_widget.cljs$core$IFn$_invoke$arity$2 = __GT_widget__2;
return __GT_widget;
})()
;
console.log(live.core.cooky);
om.core.root.call(null,live.core.widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.reader.read_string.call(null,live.core.cooky.get("saved-count"))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("my-app")], null));

//# sourceMappingURL=core.js.map