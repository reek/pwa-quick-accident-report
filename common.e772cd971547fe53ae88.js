(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"4PX9":function(t,e,n){"use strict";var r=n("CcnG"),i=n("oBZk"),o=n("ZZ/e");n("89Le"),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return c});var u=r.nb({encapsulation:0,styles:[["#map[_ngcontent-%COMP%]{position:relative}"]],data:{}});function c(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,6,"div",[["id","map"]],[[4,"width",null],[4,"height",null]],null,null,null,null)),(t()(),r.pb(1,0,null,null,5,"ion-fab",[["horizontal","end"],["vertical","bottom"]],null,null,null,i.fb,i.o)),r.ob(2,49152,null,0,o.v,[r.h,r.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(t()(),r.pb(3,0,null,0,3,"ion-fab-button",[["color","light"],["size","small"],["type","button"]],null,[[null,"click"]],function(t,e,n){var r=!0;return"click"===e&&(r=!1!==t.component.getCurrentPosition()&&r),r},i.eb,i.p)),r.ob(4,49152,null,0,o.w,[r.h,r.k],{color:[0,"color"],type:[1,"type"],size:[2,"size"]},null),(t()(),r.pb(5,0,null,0,1,"ion-icon",[["name","locate"]],null,null,null,i.jb,i.t)),r.ob(6,49152,null,0,o.B,[r.h,r.k],{name:[0,"name"]},null)],function(t,e){t(e,2,0,"end","bottom"),t(e,4,0,"light","button","small"),t(e,6,0,"locate")},function(t,e){var n=e.component;t(e,0,0,n.width,n.height)})}},"6bLf":function(t,e,n){"use strict";n.d(e,"a",function(){return g}),n.d(e,"b",function(){return m}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return w});var r=n("B5Ai"),i=n("awvO"),o=function(){return n.e(66).then(n.bind(null,"rSHd"))},u=function(){return n.e(67).then(n.bind(null,"NJz6"))};function c(t){return new Promise(function(e,n){t.queue.write(function(){(function(t){var e=t.enteringEl,n=t.leavingEl;(function(t,e,n){void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")})(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),n&&w(n,!1)})(t),function(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return[4,s(t)];case 1:return[2,(e=n.sent())?l(e,t):d(t)]}})})}(t).then(function(n){n.animation&&n.animation.destroy(),a(t),e(n)},function(e){a(t),n(e)})})})}function a(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}function s(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,o()]:[2,void 0];case 1:return e=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,u()];case 3:e=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,e]}})})}function l(t,e){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return[4,f(e,!0)];case 1:return r.sent(),[4,n.e(2).then(n.bind(null,"LWFY")).then(function(n){return n.create(t,e.baseEl,e)})];case 2:return i=r.sent(),v(e.enteringEl,e.leavingEl),[4,p(i,e)];case 3:return r.sent(),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&b(e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function d(t){return r.a(this,void 0,void 0,function(){var e,n;return r.c(this,function(r){switch(r.label){case 0:return e=t.enteringEl,n=t.leavingEl,[4,f(t,!1)];case 1:return r.sent(),v(e,n),b(e,n),[2,{hasCompleted:!0}]}})})}function f(t,e){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(r){switch(r.label){case 0:return n=(void 0!==t.deepWait?t.deepWait:e)?[g(t.enteringEl),g(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)],[4,Promise.all(n)];case 1:return r.sent(),[4,h(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})}function h(t,e){return r.a(this,void 0,void 0,function(){return r.c(this,function(n){switch(n.label){case 0:return t?[4,t(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function p(t,e){var n=e.progressCallback,r=new Promise(function(e){return t.onFinish(e)});return n?(t.progressStart(),n(t)):t.play(),r}function v(t,e){m(e,i.a),m(t,i.b)}function b(t,e){m(t,i.c),m(e,i.d)}function m(t,e){if(t){var n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}}function y(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function g(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(g))];case 3:n.sent(),n.label=4;case 4:return[2]}})})}function w(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}},"9APP":function(t,e,n){"use strict";n.d(e,"a",function(){return d});var r=n("AytR"),i=n("26FU"),o=n("xMyE"),u=n("67Y/"),c=n("k7jt"),a=n("CcnG"),s=n("t/Na"),l=n("ZYCi"),d=function(){function t(t,e,n){this.http=t,this.router=e,this.notifyService=n,this.vehiclesSubject=new i.a([]),this.vehicles$=this.vehiclesSubject.asObservable(),this.getUserVehiclesDB()}return t.prototype.getUserPersonal=function(){return this.http.get(r.a.apiEndpoint+"/users/personal").pipe(Object(o.a)(function(t){return console.log("user personal data",t)}),Object(u.a)(function(t){return t.personal}))},t.prototype.updateUserPersonal=function(t){var e=this;this.http.put(r.a.apiEndpoint+"/users/personal",t).subscribe(function(t){t.user&&t.token&&e.notifyService.show("Data saved successfully \ud83d\ude04")},function(t){return console.error("updateUserPersonal",t)})},t.prototype.sendUserFeedback=function(t){return this.http.post(r.a.apiEndpoint+"/users/feedback",t)},t.prototype.getUserVehiclesDB=function(){var t=this,e=this.http.get(r.a.apiEndpoint+"/users/vehicles").pipe(Object(o.a)(function(t){return console.log("getUserVehiclesDB",t)})).subscribe(function(e){return t.vehiclesSubject.next(e)},function(t){return console.error("getUserVehiclesDB",t)},function(){return e.unsubscribe()})},t.prototype.getUserVehicles=function(){return this.vehicles$},t.prototype.getUserVehicle=function(t){return this.vehicles$.pipe(Object(u.a)(function(e){return e.find(function(e){return e._id===t})}))},t.prototype.deleteUserVehicle=function(t){var e=this,n=this.http.delete(r.a.apiEndpoint+"/users/vehicle/"+t).pipe(Object(o.a)(function(e){return console.log("deleteUserVehicle",t,e)})).subscribe(function(n){var r=e.vehiclesSubject.getValue().filter(function(e){return e._id!==t});e.vehiclesSubject.next(r),e.router.navigateByUrl("/vehicles")},function(t){return console.error("deleteUserVehicle",t)},function(){return n.unsubscribe()})},t.prototype.newUserVehicle=function(t){var e=this,n=this.http.post(r.a.apiEndpoint+"/users/vehicles/",t).pipe(Object(o.a)(function(t){return console.log("newUserVehicle",t)})).subscribe(function(t){e.vehiclesSubject.next(t),e.router.navigateByUrl("/vehicles")},function(t){return console.error("newUserVehicle",t)},function(){return n.unsubscribe()})},t.prototype.updateUserVehicle=function(t){var e=this,n=this.http.put(r.a.apiEndpoint+"/users/vehicle/"+t._id,t).pipe(Object(o.a)(function(t){return console.log("updateUserVehicle",t)})).subscribe(function(n){var r=e.vehiclesSubject.getValue().map(function(e){return e._id===t._id?t:e});e.vehiclesSubject.next(r),e.notifyService.show("Data saved successfully \ud83d\ude04")},function(t){return console.error("updateUserVehicle",t)},function(){return n.unsubscribe()})},t.ngInjectableDef=a.S({factory:function(){return new t(a.W(s.c),a.W(l.m),a.W(c.a))},token:t,providedIn:"root"}),t}()},B5Ai:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return u});var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t,e,n,r){return new(n||(n=Promise))(function(i,o){function u(t){try{a(r.next(t))}catch(e){o(e)}}function c(t){try{a(r.throw(t))}catch(e){o(e)}}function a(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(u,c)}a((r=r.apply(t,e||[])).next())})}function u(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(t,u)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}},Bs4g:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t,e){return function(t){return i(t)}(t).includes(e)},i=function(t){t.Ionic=t.Ionic||{};var e=t.Ionic.platforms;return null==e&&(e=t.Ionic.platforms=o(t)).forEach(function(e){return t.document.documentElement.classList.add("plt-"+e)}),e},o=function(t){return Object.keys(p).filter(function(e){return p[e](t)})},u=function(t){return f(t,/iPad/i)},c=function(t){return f(t,/android|sink/i)},a=function(t){return h(t,"(any-pointer:coarse)")},s=function(t){return l(t)||d(t)},l=function(t){return!!(t.cordova||t.phonegap||t.PhoneGap)},d=function(t){var e=t.Capacitor;return!(!e||!e.isNative)},f=function(t,e){return!(!t.navigator||!t.navigator.userAgent)&&e.test(t.navigator.userAgent)},h=function(t,e){return!!t.matchMedia&&t.matchMedia(e).matches},p={ipad:u,iphone:function(t){return f(t,/iPhone/i)},ios:function(t){return f(t,/iPad|iPhone|iPod/i)},android:c,phablet:function(t){var e=t.innerWidth,n=t.innerHeight,r=Math.min(e,n),i=Math.max(e,n);return r>390&&r<520&&i>620&&i<800},tablet:function(t){var e=t.innerWidth,n=t.innerHeight,r=Math.min(e,n),i=Math.max(e,n);return u(t)||function(t){return c(t)&&!f(t,/mobile/i)}(t)||r>460&&r<820&&i>780&&i<1400},cordova:l,capacitor:d,electron:function(t){return f(t,/electron/)},pwa:function(t){return!!t.matchMedia&&(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone)},mobile:a,mobileweb:function(t){return a(t)&&!s(t)},desktop:function(t){return!a(t)},hybrid:s}},JvIM:function(t,e,n){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function u(t,e,n,r,o){if(t||i(e)){var u=e.querySelector("input.aux-input");u||((u=e.ownerDocument.createElement("input")).type="hidden",u.classList.add("aux-input"),e.appendChild(u)),u.disabled=o,u.name=n,u.value=r||""}}function c(t,e,n){return Math.max(t,Math.min(e,n))}function a(t){return t.timeStamp||Date.now()}function s(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,e){var n=t._original||t;return{_original:t,emit:f(n.emit.bind(n),e)}}function f(t,e){var n;return void 0===e&&(e=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(r))}}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return u}),n.d(e,"f",function(){return d}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return c}),n.d(e,"i",function(){return f}),n.d(e,"j",function(){return s})},"Wfx+":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){try{if("string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach(function(t){for(var n=e.querySelectorAll(t),r=n.length-1;r>=0;r--){var u=n[r];u.parentNode?u.parentNode.removeChild(u):e.removeChild(u);for(var c=o(u),a=0;a<c.length;a++)i(c[a])}});for(var r=o(e),u=0;u<r.length;u++)i(r[u]);var a=document.createElement("div");a.appendChild(e);var s=a.querySelector("div");return null!==s?s.innerHTML:a.innerHTML}catch(t){return console.error(t),""}},i=function(t){if(!t.nodeType||1===t.nodeType){for(var e=t.attributes.length-1;e>=0;e--){var n=t.attributes[e],r=n.name;if(u.includes(r.toLowerCase())){var c=n.value;null!=c&&c.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}else t.removeAttribute(r)}var a=o(t);for(e=0;e<a.length;e++)i(a[e])}},o=function(t){return null!=t.children?t.children:t.childNodes},u=["class","id","href","src"],c=["script","style","iframe","meta","link","object","embed"]},awvO:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return u}),n.d(e,"e",function(){return c});var r="ionViewWillEnter",i="ionViewDidEnter",o="ionViewWillLeave",u="ionViewDidLeave",c="ionViewWillUnload"},d6Vy:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return i});var r=n("B5Ai");function i(t,e){return null!==e.closest(t)}function o(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function u(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}var c=/^[a-z][a-z0-9+\-.]*:/;function a(t,e,n,i){return r.a(this,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:return null==e||"#"===e[0]||c.test(e)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(e,i)];case 2:return[2,!1]}})})}},dYSE:function(t,e,n){"use strict";n.d(e,"a",function(){return p}),n.d(e,"b",function(){return h}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return f}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return c});var r=n("B5Ai"),i=0;function o(t,e){var n=t.ownerDocument;(function(t){0===i&&(i=1,t.addEventListener("focusin",function(e){var n=c(t);if(n&&n.backdropDismiss&&!function(t,e){for(;e;){if(e===t)return!0;e=e.parentElement}return!1}(n,e.target)){var r=n.querySelector("input,button");r&&r.focus()}}),t.addEventListener("ionBackButton",function(e){var n=c(t);n&&n.backdropDismiss&&e.detail.register(100,function(){return n.dismiss(void 0,p)})}),t.addEventListener("keyup",function(e){if("Escape"===e.key){var n=c(t);n&&n.backdropDismiss&&n.dismiss(void 0,p)}}))})(n),Object.assign(t,e),t.classList.add("overlay-hidden");var r=i++;return t.overlayIndex=r,t.hasAttribute("id")||(t.id="ion-overlay-"+r),l(n).appendChild(t),t.componentOnReady()}function u(t,e,n,r,i){var o=c(t,r,i);return o?o.dismiss(e,n):Promise.reject("overlay does not exist")}function c(t,e,n){var r=function(t,e){var n=Array.from(l(t).children).filter(function(t){return t.overlayIndex>0});return void 0===e?n:(e=e.toUpperCase(),n.filter(function(t){return t.tagName===e}))}(t,e);return void 0===n?r[r.length-1]:r.find(function(t){return t.id===n})}function a(t,e,n,i,o){return r.a(this,void 0,void 0,function(){var u;return r.c(this,function(r){switch(r.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),u=t.enterAnimation?t.enterAnimation:t.config.get(e,"ios"===t.mode?n:i),[4,d(t,u,t.el,o)]);case 1:return r.sent()&&t.didPresent.emit(),[2]}})})}function s(t,e,n,i,o,u,c){return r.a(this,void 0,void 0,function(){var a,s;return r.c(this,function(r){switch(r.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,r.label=1;case 1:return r.trys.push([1,3,,4]),t.willDismiss.emit({data:e,role:n}),a=t.leaveAnimation?t.leaveAnimation:t.config.get(i,"ios"===t.mode?o:u),[4,d(t,a,t.el,c)];case 2:return r.sent(),t.didDismiss.emit({data:e,role:n}),[3,4];case 3:return s=r.sent(),console.error(s),[3,4];case 4:return t.el.remove(),[2,!0]}})})}function l(t){return t.querySelector("ion-app")||t.body}function d(t,e,i,o){return r.a(this,void 0,void 0,function(){var u,c,a,s;return r.c(this,function(r){switch(r.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):(i.classList.remove("overlay-hidden"),u=i.shadowRoot||t.el,a=t,[4,n.e(2).then(n.bind(null,"LWFY")).then(function(t){return t.create(e,u,o)})]);case 1:return c=a.animation=r.sent(),t.animation=c,t.animated&&t.config.getBoolean("animated",!0)||c.duration(0),t.keyboardClose&&c.beforeAddWrite(function(){var t=i.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}),[4,c.playAsync()];case 2:return r.sent(),s=c.hasCompleted,c.destroy(),t.animation=void 0,[2,s]}})})}function f(t,e){var n,r=new Promise(function(t){return n=t});return function(t,e,n){var r=function(i){t.removeEventListener(e,r),n(i)};t.addEventListener(e,r)}(t,e,function(t){n(t.detail)}),r}function h(t){return"cancel"===t||t===p}var p="backdrop"},jT1R:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n("B5Ai");function i(t,e,n,i,o){return r.a(this,void 0,void 0,function(){var u;return r.c(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(e,n,o,i)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n,i&&i.forEach(function(t){return u.classList.add(t)}),o&&Object.assign(u,o),e.appendChild(u),u.componentOnReady?[4,u.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,u]}})})}function o(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},k6lV:function(t,e,n){"use strict";n.r(e),n.d(e,"createGesture",function(){return f}),n.d(e,"GESTURE_CONTROLLER",function(){return a});var r,i=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new u(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===n){this.capturedId=e,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(o),!0}return r.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(c)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(c)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,e,n,r,i){this.id=e,this.name=n,this.disableScroll=i,this.priority=1e6*r+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),u=function(){function t(t,e,n,r){this.id=e,this.disable=n,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),c="backdrop-no-scroll",a=new i(document);function s(t,e,n,i){var o,u,c=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){r=!1}return!!r}(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",u="__zone_symbol__removeEventListener"):(o="addEventListener",u="removeEventListener"),t[o](e,n,c),function(){t[u](e,n,c)}}var l=2e3;function d(t){return t instanceof Document?t:t.ownerDocument}function f(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),n=e.canStart,r=e.onWillStart,i=e.onStart,o=e.onEnd,u=e.notCaptured,c=e.onMove,f=e.threshold,b=e.queue,m={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},y=function(t,e,n,r,i){var o,u,c,a,f,h,p,v=0;function b(r){v=Date.now()+l,e(r)&&(!u&&n&&(u=s(t,"touchmove",n,i)),c||(c=s(t,"touchend",y,i)),a||(a=s(t,"touchcancel",y,i)))}function m(r){v>Date.now()||e(r)&&(!h&&n&&(h=s(d(t),"mousemove",n,i)),p||(p=s(d(t),"mouseup",g,i)))}function y(t){w(),r&&r(t)}function g(t){S(),r&&r(t)}function w(){u&&u(),c&&c(),a&&a(),u=c=a=void 0}function S(){h&&h(),p&&p(),h=p=void 0}function E(){w(),S()}function k(e){e?(o&&o(),f&&f(),o=f=void 0,E()):(o||(o=s(t,"touchstart",b,i)),f||(f=s(t,"mousedown",m,i)))}return{setDisabled:k,stop:E,destroy:function(){k(!0),r=n=e=void 0}}}(e.el,function(t){var e=v(t);return!(E||!k)&&(p(t,m),m.startX=m.currentX,m.startY=m.currentY,m.startTimeStamp=m.timeStamp=e,m.velocityX=m.velocityY=m.deltaX=m.deltaY=0,m.event=t,(!n||!1!==n(m))&&(w.release(),!!w.start()&&(E=!0,0===f?C():(g.start(m.startX,m.startY),!0))))},function(t){S?!D&&k&&(D=!0,h(m,t),b.write(L)):(h(m,t),g.detect(m.currentX,m.currentY)&&(g.isGesture()&&C()||(P(),y.stop(),u&&u(m))))},j,{capture:!1}),g=function(t,e,n){var r=n*(Math.PI/180),i="x"===t,o=Math.cos(r),u=e*e,c=0,a=0,s=!1,l=0;return{start:function(t,e){c=t,a=e,l=0,s=!0},detect:function(t,e){if(!s)return!1;var n=t-c,r=e-a,d=n*n+r*r;if(d<u)return!1;var f=Math.sqrt(d),h=(i?n:r)/f;return l=h>o?1:h<-o?-1:0,s=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(e.direction,e.threshold,e.maxAngle),w=a.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),S=!1,E=!1,k=!0,D=!1;function L(){S&&(D=!1,c&&c(m))}function C(){return!(w&&!w.capture()||(S=!0,k=!1,m.startX=m.currentX,m.startY=m.currentY,m.startTimeStamp=m.timeStamp,r?r(m).then(_):_(),0))}function _(){i&&i(m),k=!0}function P(){S=!1,E=!1,D=!1,k=!0,w.release()}function j(t){var e=S,n=k;P(),n&&(h(m,t),e?o&&o(m):u&&u(m))}return{setDisabled:function(t){t&&S&&j(void 0),y.setDisabled(t)},destroy:function(){w.destroy(),y.destroy()}}}function h(t,e){if(e){var n=t.currentX,r=t.currentY,i=t.timeStamp;p(e,t);var o=t.currentX,u=t.currentY,c=(t.timeStamp=v(e))-i;if(c>0&&c<100){var a=(u-r)/c;t.velocityX=(o-n)/c*.7+.3*t.velocityX,t.velocityY=.7*a+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=u-t.startY,t.event=e}}function p(t,e){var n=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];n=o.clientX,r=o.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r}function v(t){return t.timeStamp||Date.now()}},ySCp:function(t,e,n){"use strict";function r(){var t=window.TapticEngine;t&&t.selection()}function i(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function o(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function u(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return r})}}]);