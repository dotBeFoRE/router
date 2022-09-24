"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},s=void 0,i={unversionedId:"guides/params",id:"guides/params",title:"params",description:"Ports https://reactnavigation.org/docs/params",source:"@site/docs/guides/params.md",sourceDirName:"guides",slug:"/guides/params",permalink:"/router/docs/guides/params",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nesting-navigators",permalink:"/router/docs/guides/nesting-navigators"},next:{title:"Migration",permalink:"/router/docs/category/migration"}},p={},c=[{value:"Notes",id:"notes",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ports ",(0,a.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/params"},"https://reactnavigation.org/docs/params")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"app/\n\u251c\u2500 (stack).js\n\u251c\u2500 (stack)/\n\u2502  \u251c\u2500 index.js\n\u2502  \u251c\u2500 details.js\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack).js",title:"app/(stack).js"},'import { Stack } from "expo-router";\n\nexport default function App() {\n  return <Stack initialRouteName="index" />;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack)/index.js",title:"app/(stack)/index.js"},'import { useEffect } from "react";\nimport { View, Text } from "react-native";\n\nexport default function Home({ navigation, route }) {\n  useEffect(() => {\n    if (route.params?.post) {\n      // Post updated, do something with `route.params.post`\n      // For example, send the post to the server\n    }\n  }, [route.params?.post]);\n\n  return (\n    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n      <Text>Home Screen</Text>\n      <Link\n        href={{\n          screen: "details",\n          /* 1. Navigate to the details route with query params */\n          params: { itemId: 86, otherParam: "anything you want here" },\n        }}\n      >\n        Go to Details\n      </Link>\n    </View>\n  );\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(stack)/details.js",title:"app/(stack)/details.js"},'import { View, Text } from "react-native";\n\nexport default function Details({ navigation, route }) {\n  const {\n    // NOTE(EvanBacon): Prefer default value to initialParams -- https://reactnavigation.org/docs/params#initial-params\n    itemId = 42,\n    otherParam,\n  } = route.params;\n\n  return (\n    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n      <Text\n        onPress={() => {\n          // https://reactnavigation.org/docs/params#updating-params\n          navigation.setParams({\n            query: "someText",\n          });\n\n          // https://reactnavigation.org/docs/params#passing-params-to-a-previous-screen\n          // Pass and merge params back to home screen\n          navigation.navigate({\n            name: "home",\n            params: { post: "random text" },\n            merge: true,\n          });\n        }}\n      >\n        Details Screen\n      </Text>\n    </View>\n  );\n}\n')),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prefer static route support (ex: ",(0,a.kt)("inlineCode",{parentName:"li"},'href="/foo/bar?some=data"'),") to ",(0,a.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/params#passing-params-to-nested-navigators"},"passing-params-to-nested-navigators")),(0,a.kt)("li",{parentName:"ul"},"Only serialized top level params are supported ",(0,a.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/params#what-should-be-in-params"},"https://reactnavigation.org/docs/params#what-should-be-in-params"))))}u.isMDXComponent=!0}}]);