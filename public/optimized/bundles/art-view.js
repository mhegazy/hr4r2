define("js/data-stores/redux-store",["require","exports","redux","module"],function(e,t,o,n){"use strict";var r=function(e,t){switch(void 0===e&&(e={}),console.log("userReducer was called with state",e,"and action",t),t.type){default:return e}},s=function(e,t){switch(void 0===e&&(e=[]),console.log("itemsReducer was called with state",e,"and action",t),t.type){default:return e}},i=o.combineReducers({user:r,items:s}),c=o.createStore(i);return console.log("store_0 state after initialization:",c.getState()),console.log(n.id),c});var __extends=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)};define("/home/oleg/WebstormProjects/oresoftware/hr4r2/public/js/views/art.js",["require","exports","react","js/data-stores/redux-store"],function(e,t,o,n){"use strict";return function(e){function t(t){return e.call(this,t)||this}return __extends(t,e),t.prototype.componentDidMount=function(){n.getState();this.unsubscribe=n.subscribe(function(){console.log("home is subscribed.")})},t.prototype.componentWillUnmount=function(){console.log("component will unsubscribe"),this.unsubscribe()},t.prototype.render=function(){return o.createElement("div",null,"Wekkkpp zoom peaches")},t}(o.Component)}),define("undefined",function(){});