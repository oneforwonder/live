// Compiled by ClojureScript 0.0-2197
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1730933117);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__10822__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__10822 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__10822__delegate.call(this,m,k,f,x1,x2,xs);};
G__10822.cljs$lang$maxFixedArity = 5;
G__10822.cljs$lang$applyTo = (function (arglist__10823){
var m = cljs.core.first(arglist__10823);
arglist__10823 = cljs.core.next(arglist__10823);
var k = cljs.core.first(arglist__10823);
arglist__10823 = cljs.core.next(arglist__10823);
var f = cljs.core.first(arglist__10823);
arglist__10823 = cljs.core.next(arglist__10823);
var x1 = cljs.core.first(arglist__10823);
arglist__10823 = cljs.core.next(arglist__10823);
var x2 = cljs.core.first(arglist__10823);
var xs = cljs.core.rest(arglist__10823);
return G__10822__delegate(m,k,f,x1,x2,xs);
});
G__10822.cljs$core$IFn$_invoke$arity$variadic = G__10822__delegate;
return G__10822;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var m_atom__8675__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__10832_10838 = cljs.core.seq.call(null,m);var chunk__10833_10839 = null;var count__10834_10840 = 0;var i__10835_10841 = 0;while(true){
if((i__10835_10841 < count__10834_10840))
{var vec__10836_10842 = cljs.core._nth.call(null,chunk__10833_10839,i__10835_10841);var k_10843 = cljs.core.nth.call(null,vec__10836_10842,0,null);var v_10844 = cljs.core.nth.call(null,vec__10836_10842,1,null);var m10831_10845 = cljs.core.deref.call(null,m_atom__8675__auto__);cljs.core.reset_BANG_.call(null,m_atom__8675__auto__,cljs.core.assoc_BANG_.call(null,m10831_10845,k_10843,f.call(null,v_10844)));
{
var G__10846 = seq__10832_10838;
var G__10847 = chunk__10833_10839;
var G__10848 = count__10834_10840;
var G__10849 = (i__10835_10841 + 1);
seq__10832_10838 = G__10846;
chunk__10833_10839 = G__10847;
count__10834_10840 = G__10848;
i__10835_10841 = G__10849;
continue;
}
} else
{var temp__4126__auto___10850 = cljs.core.seq.call(null,seq__10832_10838);if(temp__4126__auto___10850)
{var seq__10832_10851__$1 = temp__4126__auto___10850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10832_10851__$1))
{var c__4224__auto___10852 = cljs.core.chunk_first.call(null,seq__10832_10851__$1);{
var G__10853 = cljs.core.chunk_rest.call(null,seq__10832_10851__$1);
var G__10854 = c__4224__auto___10852;
var G__10855 = cljs.core.count.call(null,c__4224__auto___10852);
var G__10856 = 0;
seq__10832_10838 = G__10853;
chunk__10833_10839 = G__10854;
count__10834_10840 = G__10855;
i__10835_10841 = G__10856;
continue;
}
} else
{var vec__10837_10857 = cljs.core.first.call(null,seq__10832_10851__$1);var k_10858 = cljs.core.nth.call(null,vec__10837_10857,0,null);var v_10859 = cljs.core.nth.call(null,vec__10837_10857,1,null);var m10831_10860 = cljs.core.deref.call(null,m_atom__8675__auto__);cljs.core.reset_BANG_.call(null,m_atom__8675__auto__,cljs.core.assoc_BANG_.call(null,m10831_10860,k_10858,f.call(null,v_10859)));
{
var G__10861 = cljs.core.next.call(null,seq__10832_10851__$1);
var G__10862 = null;
var G__10863 = 0;
var G__10864 = 0;
seq__10832_10838 = G__10861;
chunk__10833_10839 = G__10862;
count__10834_10840 = G__10863;
i__10835_10841 = G__10864;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8675__auto__));
} else
{return null;
}
}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__8675__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__10873_10879 = cljs.core.seq.call(null,m);var chunk__10874_10880 = null;var count__10875_10881 = 0;var i__10876_10882 = 0;while(true){
if((i__10876_10882 < count__10875_10881))
{var vec__10877_10883 = cljs.core._nth.call(null,chunk__10874_10880,i__10876_10882);var k_10884 = cljs.core.nth.call(null,vec__10877_10883,0,null);var v_10885 = cljs.core.nth.call(null,vec__10877_10883,1,null);var m10872_10886 = cljs.core.deref.call(null,m_atom__8675__auto__);cljs.core.reset_BANG_.call(null,m_atom__8675__auto__,cljs.core.assoc_BANG_.call(null,m10872_10886,f.call(null,k_10884),v_10885));
{
var G__10887 = seq__10873_10879;
var G__10888 = chunk__10874_10880;
var G__10889 = count__10875_10881;
var G__10890 = (i__10876_10882 + 1);
seq__10873_10879 = G__10887;
chunk__10874_10880 = G__10888;
count__10875_10881 = G__10889;
i__10876_10882 = G__10890;
continue;
}
} else
{var temp__4126__auto___10891 = cljs.core.seq.call(null,seq__10873_10879);if(temp__4126__auto___10891)
{var seq__10873_10892__$1 = temp__4126__auto___10891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10873_10892__$1))
{var c__4224__auto___10893 = cljs.core.chunk_first.call(null,seq__10873_10892__$1);{
var G__10894 = cljs.core.chunk_rest.call(null,seq__10873_10892__$1);
var G__10895 = c__4224__auto___10893;
var G__10896 = cljs.core.count.call(null,c__4224__auto___10893);
var G__10897 = 0;
seq__10873_10879 = G__10894;
chunk__10874_10880 = G__10895;
count__10875_10881 = G__10896;
i__10876_10882 = G__10897;
continue;
}
} else
{var vec__10878_10898 = cljs.core.first.call(null,seq__10873_10892__$1);var k_10899 = cljs.core.nth.call(null,vec__10878_10898,0,null);var v_10900 = cljs.core.nth.call(null,vec__10878_10898,1,null);var m10872_10901 = cljs.core.deref.call(null,m_atom__8675__auto__);cljs.core.reset_BANG_.call(null,m_atom__8675__auto__,cljs.core.assoc_BANG_.call(null,m10872_10901,f.call(null,k_10899),v_10900));
{
var G__10902 = cljs.core.next.call(null,seq__10873_10892__$1);
var G__10903 = null;
var G__10904 = 0;
var G__10905 = 0;
seq__10873_10879 = G__10902;
chunk__10874_10880 = G__10903;
count__10875_10881 = G__10904;
i__10876_10882 = G__10905;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8675__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__8675__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__10912_10916 = cljs.core.seq.call(null,ks);var chunk__10913_10917 = null;var count__10914_10918 = 0;var i__10915_10919 = 0;while(true){
if((i__10915_10919 < count__10914_10918))
{var k_10920 = cljs.core._nth.call(null,chunk__10913_10917,i__10915_10919);var m10911_10921 = cljs.core.deref.call(null,m_atom__8675__auto__);cljs.core.reset_BANG_.call(null,m_atom__8675__auto__,cljs.core.assoc_BANG_.call(null,m10911_10921,k_10920,f.call(null,k_10920)));
{
var G__10922 = seq__10912_10916;
var G__10923 = chunk__10913_10917;
var G__10924 = count__10914_10918;
var G__10925 = (i__10915_10919 + 1);
seq__10912_10916 = G__10922;
chunk__10913_10917 = G__10923;
count__10914_10918 = G__10924;
i__10915_10919 = G__10925;
continue;
}
} else
{var temp__4126__auto___10926 = cljs.core.seq.call(null,seq__10912_10916);if(temp__4126__auto___10926)
{var seq__10912_10927__$1 = temp__4126__auto___10926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10912_10927__$1))
{var c__4224__auto___10928 = cljs.core.chunk_first.call(null,seq__10912_10927__$1);{
var G__10929 = cljs.core.chunk_rest.call(null,seq__10912_10927__$1);
var G__10930 = c__4224__auto___10928;
var G__10931 = cljs.core.count.call(null,c__4224__auto___10928);
var G__10932 = 0;
seq__10912_10916 = G__10929;
chunk__10913_10917 = G__10930;
count__10914_10918 = G__10931;
i__10915_10919 = G__10932;
continue;
}
} else
{var k_10933 = cljs.core.first.call(null,seq__10912_10927__$1);var m10911_10934 = cljs.core.deref.call(null,m_atom__8675__auto__);cljs.core.reset_BANG_.call(null,m_atom__8675__auto__,cljs.core.assoc_BANG_.call(null,m10911_10934,k_10933,f.call(null,k_10933)));
{
var G__10935 = cljs.core.next.call(null,seq__10912_10927__$1);
var G__10936 = null;
var G__10937 = 0;
var G__10938 = 0;
seq__10912_10916 = G__10935;
chunk__10913_10917 = G__10936;
count__10914_10918 = G__10937;
i__10915_10919 = G__10938;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8675__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__8675__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__10945_10949 = cljs.core.seq.call(null,vs);var chunk__10946_10950 = null;var count__10947_10951 = 0;var i__10948_10952 = 0;while(true){
if((i__10948_10952 < count__10947_10951))
{var v_10953 = cljs.core._nth.call(null,chunk__10946_10950,i__10948_10952);var m10944_10954 = cljs.core.deref.call(null,m_atom__8675__auto__);cljs.core.reset_BANG_.call(null,m_atom__8675__auto__,cljs.core.assoc_BANG_.call(null,m10944_10954,f.call(null,v_10953),v_10953));
{
var G__10955 = seq__10945_10949;
var G__10956 = chunk__10946_10950;
var G__10957 = count__10947_10951;
var G__10958 = (i__10948_10952 + 1);
seq__10945_10949 = G__10955;
chunk__10946_10950 = G__10956;
count__10947_10951 = G__10957;
i__10948_10952 = G__10958;
continue;
}
} else
{var temp__4126__auto___10959 = cljs.core.seq.call(null,seq__10945_10949);if(temp__4126__auto___10959)
{var seq__10945_10960__$1 = temp__4126__auto___10959;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10945_10960__$1))
{var c__4224__auto___10961 = cljs.core.chunk_first.call(null,seq__10945_10960__$1);{
var G__10962 = cljs.core.chunk_rest.call(null,seq__10945_10960__$1);
var G__10963 = c__4224__auto___10961;
var G__10964 = cljs.core.count.call(null,c__4224__auto___10961);
var G__10965 = 0;
seq__10945_10949 = G__10962;
chunk__10946_10950 = G__10963;
count__10947_10951 = G__10964;
i__10948_10952 = G__10965;
continue;
}
} else
{var v_10966 = cljs.core.first.call(null,seq__10945_10960__$1);var m10944_10967 = cljs.core.deref.call(null,m_atom__8675__auto__);cljs.core.reset_BANG_.call(null,m_atom__8675__auto__,cljs.core.assoc_BANG_.call(null,m10944_10967,f.call(null,v_10966),v_10966));
{
var G__10968 = cljs.core.next.call(null,seq__10945_10960__$1);
var G__10969 = null;
var G__10970 = 0;
var G__10971 = 0;
seq__10945_10949 = G__10968;
chunk__10946_10950 = G__10969;
count__10947_10951 = G__10970;
i__10948_10952 = G__10971;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8675__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__10972){var vec__10974 = p__10972;var k = cljs.core.nth.call(null,vec__10974,0,null);var ks = cljs.core.nthnext.call(null,vec__10974,1);if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3464__auto__ = ks;if(and__3464__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3464__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__8675__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__10983_10989 = cljs.core.seq.call(null,x);var chunk__10984_10990 = null;var count__10985_10991 = 0;var i__10986_10992 = 0;while(true){
if((i__10986_10992 < count__10985_10991))
{var vec__10987_10993 = cljs.core._nth.call(null,chunk__10984_10990,i__10986_10992);var k_10994 = cljs.core.nth.call(null,vec__10987_10993,0,null);var v_10995 = cljs.core.nth.call(null,vec__10987_10993,1,null);var m10982_10996 = cljs.core.deref.call(null,m_atom__8675__auto__);cljs.core.reset_BANG_.call(null,m_atom__8675__auto__,cljs.core.assoc_BANG_.call(null,m10982_10996,((typeof k_10994 === 'string')?cljs.core.keyword.call(null,k_10994):k_10994),keywordize_map.call(null,v_10995)));
{
var G__10997 = seq__10983_10989;
var G__10998 = chunk__10984_10990;
var G__10999 = count__10985_10991;
var G__11000 = (i__10986_10992 + 1);
seq__10983_10989 = G__10997;
chunk__10984_10990 = G__10998;
count__10985_10991 = G__10999;
i__10986_10992 = G__11000;
continue;
}
} else
{var temp__4126__auto___11001 = cljs.core.seq.call(null,seq__10983_10989);if(temp__4126__auto___11001)
{var seq__10983_11002__$1 = temp__4126__auto___11001;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10983_11002__$1))
{var c__4224__auto___11003 = cljs.core.chunk_first.call(null,seq__10983_11002__$1);{
var G__11004 = cljs.core.chunk_rest.call(null,seq__10983_11002__$1);
var G__11005 = c__4224__auto___11003;
var G__11006 = cljs.core.count.call(null,c__4224__auto___11003);
var G__11007 = 0;
seq__10983_10989 = G__11004;
chunk__10984_10990 = G__11005;
count__10985_10991 = G__11006;
i__10986_10992 = G__11007;
continue;
}
} else
{var vec__10988_11008 = cljs.core.first.call(null,seq__10983_11002__$1);var k_11009 = cljs.core.nth.call(null,vec__10988_11008,0,null);var v_11010 = cljs.core.nth.call(null,vec__10988_11008,1,null);var m10982_11011 = cljs.core.deref.call(null,m_atom__8675__auto__);cljs.core.reset_BANG_.call(null,m_atom__8675__auto__,cljs.core.assoc_BANG_.call(null,m10982_11011,((typeof k_11009 === 'string')?cljs.core.keyword.call(null,k_11009):k_11009),keywordize_map.call(null,v_11010)));
{
var G__11012 = cljs.core.next.call(null,seq__10983_11002__$1);
var G__11013 = null;
var G__11014 = 0;
var G__11015 = 0;
seq__10983_10989 = G__11012;
chunk__10984_10990 = G__11013;
count__10985_10991 = G__11014;
i__10986_10992 = G__11015;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8675__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x;
} else
{return null;
}
}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__8744__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__8744__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__11016 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__11017 = cljs.core.next.call(null,ks);
m = G__11016;
ks = G__11017;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
return cljs.core.into.call(null,(function (){var or__3476__auto__ = m;if(cljs.core.truth_(or__3476__auto__))
{return or__3476__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4193__auto__ = (function iter__11026(s__11027){return (new cljs.core.LazySeq(null,(function (){var s__11027__$1 = s__11027;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11027__$1);if(temp__4126__auto__)
{var s__11027__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11027__$2))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,s__11027__$2);var size__4192__auto__ = cljs.core.count.call(null,c__4191__auto__);var b__11029 = cljs.core.chunk_buffer.call(null,size__4192__auto__);if((function (){var i__11028 = 0;while(true){
if((i__11028 < size__4192__auto__))
{var vec__11032 = cljs.core._nth.call(null,c__4191__auto__,i__11028);var k = cljs.core.nth.call(null,vec__11032,0,null);var v = cljs.core.nth.call(null,vec__11032,1,null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__11029,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__11034 = (i__11028 + 1);
i__11028 = G__11034;
continue;
}
} else
{{
var G__11035 = (i__11028 + 1);
i__11028 = G__11035;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11029),iter__11026.call(null,cljs.core.chunk_rest.call(null,s__11027__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11029),null);
}
} else
{var vec__11033 = cljs.core.first.call(null,s__11027__$2);var k = cljs.core.nth.call(null,vec__11033,0,null);var v = cljs.core.nth.call(null,vec__11033,1,null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__11026.call(null,cljs.core.rest.call(null,s__11027__$2)));
} else
{{
var G__11036 = cljs.core.rest.call(null,s__11027__$2);
s__11027__$1 = G__11036;
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
});return iter__4193__auto__.call(null,cljs.core.partition.call(null,2,kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__11037){
var m = cljs.core.first(arglist__11037);
var kvs = cljs.core.rest(arglist__11037);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__11038){
var m = cljs.core.first(arglist__11038);
arglist__11038 = cljs.core.next(arglist__11038);
var key_seq = cljs.core.first(arglist__11038);
arglist__11038 = cljs.core.next(arglist__11038);
var f = cljs.core.first(arglist__11038);
var args = cljs.core.rest(arglist__11038);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4193__auto__ = ((function (s){
return (function iter__11043(s__11044){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__11044__$1 = s__11044;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11044__$1);if(temp__4126__auto__)
{var s__11044__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11044__$2))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,s__11044__$2);var size__4192__auto__ = cljs.core.count.call(null,c__4191__auto__);var b__11046 = cljs.core.chunk_buffer.call(null,size__4192__auto__);if((function (){var i__11045 = 0;while(true){
if((i__11045 < size__4192__auto__))
{var x = cljs.core._nth.call(null,c__4191__auto__,i__11045);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__11046,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__11047 = (i__11045 + 1);
i__11045 = G__11047;
continue;
}
} else
{{
var G__11048 = (i__11045 + 1);
i__11045 = G__11048;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11046),iter__11043.call(null,cljs.core.chunk_rest.call(null,s__11044__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11046),null);
}
} else
{var x = cljs.core.first.call(null,s__11044__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__11043.call(null,cljs.core.rest.call(null,s__11044__$2)));
} else
{{
var G__11049 = cljs.core.rest.call(null,s__11044__$2);
s__11044__$1 = G__11049;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4193__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__11050){
var colls = cljs.core.seq(arglist__11050);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__11051__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__11052 = conj_when.call(null,coll,x);
var G__11053 = cljs.core.first.call(null,xs);
var G__11054 = cljs.core.next.call(null,xs);
coll = G__11052;
x = G__11053;
xs = G__11054;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__11051 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11051__delegate.call(this,coll,x,xs);};
G__11051.cljs$lang$maxFixedArity = 2;
G__11051.cljs$lang$applyTo = (function (arglist__11055){
var coll = cljs.core.first(arglist__11055);
arglist__11055 = cljs.core.next(arglist__11055);
var x = cljs.core.first(arglist__11055);
var xs = cljs.core.rest(arglist__11055);
return G__11051__delegate(coll,x,xs);
});
G__11051.cljs$core$IFn$_invoke$arity$variadic = G__11051__delegate;
return G__11051;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__11057__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__11056_SHARP_){return cljs.core.apply.call(null,f,p1__11056_SHARP_,args);
}));
};
var G__11057 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11057__delegate.call(this,a,f,args);};
G__11057.cljs$lang$maxFixedArity = 2;
G__11057.cljs$lang$applyTo = (function (arglist__11058){
var a = cljs.core.first(arglist__11058);
arglist__11058 = cljs.core.next(arglist__11058);
var f = cljs.core.first(arglist__11058);
var args = cljs.core.rest(arglist__11058);
return G__11057__delegate(a,f,args);
});
G__11057.cljs$core$IFn$_invoke$arity$variadic = G__11057__delegate;
return G__11057;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__11059__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__11059 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11059__delegate.call(this,f,arg,args);};
G__11059.cljs$lang$maxFixedArity = 2;
G__11059.cljs$lang$applyTo = (function (arglist__11060){
var f = cljs.core.first(arglist__11060);
arglist__11060 = cljs.core.next(arglist__11060);
var arg = cljs.core.first(arglist__11060);
var args = cljs.core.rest(arglist__11060);
return G__11059__delegate(f,arg,args);
});
G__11059.cljs$core$IFn$_invoke$arity$variadic = G__11059__delegate;
return G__11059;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map