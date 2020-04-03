/*! For license information please see b7e5c2a0.037a4933.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(6),o=(n(0),n(171)),r=n(175),s=n(176),l=n(174),c={id:"docs-animations",title:"Animations",sidebar_label:"Animations"},p={id:"docs-animations",title:"Animations",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/animations.mdx",permalink:"/react-native-navigation/../docs-animations",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/animations.mdx",sidebar_label:"Animations",sidebar:"docs",previous:{title:"Orientation",permalink:"/react-native-navigation/../orientation"},next:{title:"Changing fonts",permalink:"/react-native-navigation/../fonts"}},b=[{value:"Layout animations",id:"layout-animations",children:[{value:"Stack animations",id:"stack-animations",children:[]},{value:"Modal animations",id:"modal-animations",children:[]}]},{value:"Shared element transitions",id:"shared-element-transitions",children:[{value:"Transition breakdown",id:"transition-breakdown",children:[]},{value:"Implementing shared element transitions",id:"implementing-shared-element-transitions",children:[]}]},{value:"Element Transitions",id:"element-transitions",children:[{value:"Recreating",id:"recreating",children:[]}]},{value:"Peek and Pop (iOS 11.4+)",id:"peek-and-pop-ios-114",children:[]}],m={rightToc:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Various UI elements can be animated by declaring animation options.\nYou can change the default animations for various commands, like push and pop, and even animate elements in\nyour screens during screen transitions."),Object(o.b)("h4",{id:"animation-properties"},"Animation properties"),Object(o.b)("p",null,"The following properties can be animated with our animation framework:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"x")," - Translate the view to a coordinate along the x axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"y")," - Translate the view to a coordinate along the y axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"translationX")," - Translate the view along the x axis relative to its current x position."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"translationY")," - Translate the view along the y axis relative to its current y position."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"alpha")," - Apply alpha animation to the view. A value of 0 means the view is not visible, 1 means it's visible."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"scaleX")," - Scale the view on the x axis. A value of 1 means that no scaling is applied."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"scaleY")," - Scale the view on the y axis. A value of 1 means that no scaling is applied."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rotationX")," - Applies rotation around the x axis (in degrees, passed as a float)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rotationY")," - Applies rotation around the y axis (in degrees, passed as a float)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rotation")," - Rotates the view on all axis. Positive values result in clockwise rotation.")),Object(o.b)("h2",{id:"layout-animations"},"Layout animations"),Object(o.b)("h3",{id:"stack-animations"},"Stack animations"),Object(o.b)("p",null,"When animating screens in and out of a stack, there are three elements you can work with: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"content")," - screen being pushed or popped"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"topBar")," - stack's TopBar"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"bottomTabs")," - if stack is a child of a bottomTabs layout, we can control the ",Object(o.b)("inlineCode",{parentName:"li"},"hide")," and ",Object(o.b)("inlineCode",{parentName:"li"},"show")," animations of the bottomTabs.")),Object(o.b)("p",null,"The following example demonstrates how to replace the default push and pop animations with slide animations."),Object(o.b)(r.a,{defaultValue:"push",values:[{label:"Push",value:"push"},{label:"Pop",value:"pop"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"push",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"options: {\n  animations: {\n    push: {\n      content: {\n        translationX: {\n          from: require('react-native').Dimensions.get('window').width,\n          to: 0,\n          duration: 300\n        }\n      }\n    }\n  }\n}\n"))),Object(o.b)(s.a,{value:"pop",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"options: {\n  animations: {\n    pop: {\n      content: {\n        translationX: {\n          from: 0,\n          to: -require('react-native').Dimensions.get('window').width,\n          duration: 300\n        }\n      }\n    }\n  }\n}\n")))),Object(o.b)("h3",{id:"modal-animations"},"Modal animations"),Object(o.b)("p",null,"Modal animations are declared similarly to stack animations, only this time we animate the entire view and not only part of the UI (content)."),Object(o.b)(r.a,{defaultValue:"show",values:[{label:"Show",value:"show"},{label:"Dismiss",value:"dismiss"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"show",mdxType:"TabItem"},Object(o.b)("p",null,"The following example demonstrates how to show a modal with a fade-in animation."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"options: {\n  showModal: {\n    alpha: {\n      from: 0,\n      to: 1,\n      duration: 300\n    }\n  }\n}\n"))),Object(o.b)(s.a,{value:"dismiss",mdxType:"TabItem"},Object(o.b)("p",null,"The following example demonstrates how to dismiss a modal with a fade-out animation."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"options: {\n  dismissModal: {\n    alpha: {\n      from: 1,\n      to: 0,\n      duration: 300\n    }\n  }\n}\n")))),Object(o.b)("h2",{id:"shared-element-transitions"},"Shared element transitions"),Object(o.b)("p",null,"Shared element transitions allow us to provide visual continuity when navigating between destinations. This also focuses user attention on a particular significant element, which then also gives such user better context when transitioning to some other destination."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"At the moment, the transition is available on iOS for push and pop while on Android it's available only for push commands. We are working on adding parity and expanding supported commands to show/dismiss modal and change BottomTabs."))),Object(o.b)("h3",{id:"transition-breakdown"},"Transition breakdown"),Object(o.b)("p",null,"Let's take a more in-depth look at the following example, which you can find in the playground app:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix/react-native-navigation/blob/master/playground/src/screens/sharedElementTransition/CocktailsList.js"}),"Source screen")," and the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix/react-native-navigation/blob/master/playground/src/screens/sharedElementTransition/CocktailDetailsScreen.js"}),"Destination screen"))),Object(o.b)("p",{align:"center"},Object(o.b)("img",{alt:"Shared Element Transition",src:Object(l.a)("img/sharedElement.gif")})),Object(o.b)("p",null,"Four elements are animated in this example. Let's list the elements involved in the transition and note which properties are being animated."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"image")," - the item image is animated to the next screen."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"image scale (resizeMode)"),Object(o.b)("li",{parentName:"ul"},"position on screen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"image background"),' - each item has a "shadow" view which transitions to the next screen and turns into a colorful header.'),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"scale"),Object(o.b)("li",{parentName:"ul"},"position on screen"),Object(o.b)("li",{parentName:"ul"},"color"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"title")," - the title of the item is animated to the next screen."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"font size"),Object(o.b)("li",{parentName:"ul"},"font color"),Object(o.b)("li",{parentName:"ul"},"position on screen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Description")," - the description of the item in the destination screen."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"fade-in"),Object(o.b)("li",{parentName:"ul"},"translation y")))),Object(o.b)("h3",{id:"implementing-shared-element-transitions"},"Implementing shared element transitions"),Object(o.b)("h4",{id:"step-1---set-a-nativeid-prop-to-elements-in-the-source-screen"},"Step 1 - set a nativeID prop to elements in the source screen"),Object(o.b)("p",null,"In order for RNN to be able to detect the corresponding native views of the elements,\neach element must include a unique ",Object(o.b)("inlineCode",{parentName:"p"},"nativeID")," prop."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Image\n  source={item.image}\n  nativeID={`image${item.id}`}\n  style={styles.image}\n  resizeMode={'contain'} />\n")),Object(o.b)("h4",{id:"step-2---set-a-nativeid-prop-to-elements-in-the-destination-screen"},"Step 2 - set a nativeID prop to elements in the destination screen"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Image\n  source={this.props.image}\n  nativeID={`image${this.props.id}Dest`}\n  style={styles.image} />\n")),Object(o.b)("h4",{id:"step-3---declare-the-shared-element-animation-when-pushing-the-screen"},"Step 3 - Declare the shared element animation when pushing the screen"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"Navigation.push(this.props.componentId, {\n  component: {\n    name: Screens.CocktailDetailsScreen,\n    passProps: { ...item },\n    options: {\n      animations: {\n        push: {\n          sharedElementTransitions: [\n            {\n              fromId: `image${item.id}`,\n              toId: `image${item.id}Dest`\n            }\n          ]\n        }\n      }\n    }\n  }\n});\n")),Object(o.b)("h2",{id:"element-transitions"},"Element Transitions"),Object(o.b)("p",null,"Element transitions also allow you to animate elements during shared element transitions."),Object(o.b)("h3",{id:"recreating"},"Recreating"),Object(o.b)("h4",{id:"step-1---set-a-nativeid-prop-to-the-element-youd-like-to-animate"},"Step 1 - Set a nativeID prop to the element you'd like to animate"),Object(o.b)("p",null,"An element can either be in the source or destination screen."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Text\n  nativeID='description'\n  style={styles.description}>\n  {this.props.description}\n</Text>\n")),Object(o.b)("h4",{id:"step-2---declare-the-element-animation-when-pushing-the-screen"},"Step 2 - Declare the element animation when pushing the screen"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"Navigation.push(this.props.componentId, {\n  component: {\n    name: Screens.CocktailDetailsScreen,\n    passProps: { ...item },\n    options: {\n      animations: {\n        push: {\n          elementTransitions: [\n            {\n              id: 'description',\n              alpha: {\n                from: 0, // We don't declare 'to' value as that is the element's current alpha value, here we're essentially animating from 0 to 1\n                duration: SHORT_DURATION\n              },\n              translationY: {\n                from: 16, // Animate translationY from 16dp to 0dp\n                duration: SHORT_DURATION\n              }\n            }\n          ]\n        }\n      }\n    }\n  }\n});\n")),Object(o.b)("h2",{id:"peek-and-pop-ios-114"},"Peek and Pop (iOS 11.4+)"),Object(o.b)("p",null,"react-native-navigation supports ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/#//apple_ref/doc/uid/TP40016543-CH1-SW3"}),"Peek and pop")," feature in iOS 11.4 and newer."),Object(o.b)("p",null,"This works by passing a ref to a component you want to transform into peek view. We have included a handy component to handle all the touches and ref for you:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const handlePress ({ reactTag }) => {\n  Navigation.push(this.props.componentId, {\n    component {\n      name: 'previewed.screen',\n      options: {\n        preview: {\n          reactTag,\n          height: 300,\n          width: 300,\n          commit: true,\n          actions: [{\n            title: \"Displayed Name\",\n            id: \"actionId\",\n            style: 'default', /* or 'selected', 'destructive'*/\n            actions: [/*define a submenu of actions with the same options*/]\n          }]\n        },\n      },\n    },\n  });\n};\n\nconst Button = (\n  <Navigation.TouchablePreview\n    touchableComponent={TouchableHighlight}\n    onPress={handlePress}\n    onPressIn={handlePress}\n  >\n    <Text>My button</Text>\n  </Navigation.TouchablePreview>\n);\n")),Object(o.b)("p",null,"All options except for reactTag are optional. Actions trigger the same event as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/#/docs/topBar-buttons?id=handling-button-press-events"}),"navigation button presses"),". To react when a preview is committed, listen to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/#/docs/events?id=previewcompleted-ios-114-only"}),"previewCompleted")," event."))}u.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(r,".").concat(u)]||b[u]||m[u]||o;return n?i.a.createElement(d,s({ref:t},c,{components:n})):i.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},172:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var r=i.apply(null,a);r&&e.push(r)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},173:function(e,t,n){"use strict";var a=n(0),i=n(35);t.a=function(){return Object(a.useContext)(i.a)}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(173);function i(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},175:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(172),r=n.n(o),s=n(93),l=n.n(s);const c=37,p=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:s}=e,[b,m]=Object(a.useState)(o),u=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===e,className:r()("tab-item",l.a.tabItem,{"tab-item--active":b===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>m(e),onClick:()=>m(e)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===b)[0]))}},176:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);