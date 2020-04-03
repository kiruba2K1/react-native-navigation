/*! For license information please see cea523bd.30e2c66e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),o=(n(0),n(171)),c=n(175),i=n(176),l={id:"root-api",title:"Root",sidebar_label:"Root"},b={id:"root-api",title:"Root",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/api-root.mdx",permalink:"/react-native-navigation/../root-api",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/api-root.mdx",sidebar_label:"Root",sidebar:"api",previous:{title:"Component",permalink:"/react-native-navigation/../component-api"},next:{title:"Stack",permalink:"/react-native-navigation/../stack-api"}},s=[{value:"<code>setRoot()</code>",id:"setroot",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"setroot"},Object(o.b)("inlineCode",{parentName:"h2"},"setRoot()")),Object(o.b)("p",null,"Used to set the UI of the application. Read more about the root hierarchy level in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"docs-root"}),"docs section"),"."),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"layout"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"layout"}),"Layout")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Any type of layout. ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"bottomTabs-layout"}),"BottomTabs"),", ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"stack-layout"}),"Stack"),", ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"sideMenu-layout"}),"SideMenu"),", ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"component-layout"}),"Component"))))),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)(c.a,{defaultValue:"stack",values:[{label:"With Stack layout",value:"stack"},{label:"With BottomTabs layout",value:"bottomTabs"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"stack",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    stack: {\n      children: [{\n        component: {\n          name: 'example.FirstTabScreen',\n          passProps: {\n            text: 'This is tab 1'\n          }\n        }\n      }],\n      options: {\n        bottomTab: {\n          text: 'Tab 1',\n          icon: require('../images/one.png'),\n          testID: 'FIRST_TAB_BAR_BUTTON'\n        }\n      }\n    }\n  }\n});\n"))),Object(o.b)(i.a,{value:"bottomTabs",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    bottomTabs: {\n      children: [{\n        stack: {\n          children: [{\n            component: {\n              name: 'example.FirstTabScreen',\n              passProps: {\n                text: 'This is tab 1'\n              }\n            }\n          }],\n          options: {\n            bottomTab: {\n              text: 'Tab 1',\n              icon: require('../images/one.png'),\n              testID: 'FIRST_TAB_BAR_BUTTON'\n            }\n          }\n        }\n      },\n      {\n        component: {\n          name: 'navigation.playground.TextScreen',\n          passProps: {\n            text: 'This is tab 2'\n          },\n          options: {\n            bottomTab: {\n              text: 'Tab 2',\n              icon: require('../images/two.png'),\n              testID: 'SECOND_TAB_BAR_BUTTON'\n            }\n          }\n        }\n      }]\n    }\n  }\n});\n")))))}u.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,i({ref:t},b,{components:n})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},172:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},175:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(172),c=n.n(o),i=n(93),l=n.n(i);const b=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:i}=e,[p,u]=Object(a.useState)(o),m=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:c()("tab-item",l.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>m.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(m,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},176:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);