"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,m=d["".concat(u,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Tabs"},i=void 0,s={unversionedId:"guides/tabs",id:"guides/tabs",title:"Tabs",description:'Expo Router adds an additional href screen option which can only be used with screen options that are an object (e.g. screenOptions={{ href: "/path" }}) and cannot be used simultaneously with tabBarButton.',source:"@site/docs/guides/tabs.md",sourceDirName:"guides",slug:"/guides/tabs",permalink:"/router/docs/guides/tabs",draft:!1,editUrl:"https://github.com/expo/router/tree/main/docs/docs/guides/tabs.md",tags:[],version:"current",frontMatter:{title:"Tabs"},sidebar:"tutorialSidebar",previous:{title:"Root Layout",permalink:"/router/docs/guides/root-layout"},next:{title:"Universal Links",permalink:"/router/docs/guides/universal-links"}},u={},l=[{value:"Hiding a tab",id:"hiding-a-tab",level:2},{value:"Dynamic routes",id:"dynamic-routes",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Expo Router adds an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," screen option which can only be used with screen options that are an object (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'screenOptions={{ href: "/path" }}'),") and cannot be used simultaneously with ",(0,a.kt)("inlineCode",{parentName:"p"},"tabBarButton"),"."),(0,a.kt)("h2",{id:"hiding-a-tab"},"Hiding a tab"),(0,a.kt)("p",null,"Sometimes you want a route to exist but not show up in the tab bar, you can pass ",(0,a.kt)("inlineCode",{parentName:"p"},"href: null")," to disable the button:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Tabs } from "expo-router";\n\nexport default function AppLayout() {\n  return (\n    <Tabs>\n      <Tabs.Screen\n        // Name of the route to hide.\n        name="index"\n        options={{\n          // This tab will no longer show up in the tab bar.\n          href: null,\n        }}\n      />\n    </Tabs>\n  );\n}\n')),(0,a.kt)("h2",{id:"dynamic-routes"},"Dynamic routes"),(0,a.kt)("p",null,"You may want to use a dynamic route in your tab bar (for example a profile tab). For this case, you'll want the button to always link to a specific href."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Link, Tabs } from "expo-router";\n\nexport default function AppLayout() {\n  return (\n    <Tabs>\n      <Tabs.Screen\n        // Name of the dynamic route.\n        name="[user]"\n        options={{\n          // Ensure the tab always links to the same href.\n          href: "/evanbacon",\n\n          // OR you can use the Href object:\n          href: {\n            pathname: "/[user]",\n            params: {\n              user: "evanbacon",\n            },\n          },\n        }}\n      />\n    </Tabs>\n  );\n}\n')))}p.isMDXComponent=!0}}]);