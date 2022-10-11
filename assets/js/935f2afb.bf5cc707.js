"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[683],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/router/docs/","docId":"intro"},{"type":"category","label":"Features","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Routes","href":"/router/docs/features/routes","docId":"features/routes"},{"type":"link","label":"Linking","href":"/router/docs/features/linking","docId":"features/linking"},{"type":"link","label":"Layout Routes","href":"/router/docs/features/layout-routes","docId":"features/layout-routes"},{"type":"link","label":"Layouts","href":"/router/docs/features/layouts","docId":"features/layouts"},{"type":"link","label":"Dynamic Routes","href":"/router/docs/features/dynamic-routes","docId":"features/dynamic-routes"},{"type":"link","label":"Screen Options","href":"/router/docs/features/options","docId":"features/options"},{"type":"link","label":"Navigation Container","href":"/router/docs/features/container","docId":"features/container"},{"type":"link","label":"Error handling","href":"/router/docs/features/errors","docId":"features/errors"},{"type":"link","label":"Unmatched Routes","href":"/router/docs/features/unmatched","docId":"features/unmatched"},{"type":"link","label":"Splash Screen","href":"/router/docs/features/splash","docId":"features/splash"}],"href":"/router/docs/category/features"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Building a layout","href":"/router/docs/guides/","docId":"guides/index"},{"type":"link","label":"Moving between screens","href":"/router/docs/guides/navigating","docId":"guides/navigating"},{"type":"link","label":"Passing parameters to the routes","href":"/router/docs/guides/params","docId":"guides/params"},{"type":"link","label":"Configuring the header bar","href":"/router/docs/guides/headers","docId":"guides/headers"},{"type":"link","label":"Header buttons","href":"/router/docs/guides/header-buttons","docId":"guides/header-buttons"},{"type":"link","label":"Nesting navigators","href":"/router/docs/guides/nesting-navigators","docId":"guides/nesting-navigators"},{"type":"link","label":"Authentication","href":"/router/docs/guides/auth","docId":"guides/auth"},{"type":"link","label":"Drawer","href":"/router/docs/guides/drawer","docId":"guides/drawer"},{"type":"link","label":"Hosting","href":"/router/docs/guides/hosting","docId":"guides/hosting"},{"type":"link","label":"Modals","href":"/router/docs/guides/modals","docId":"guides/modals"},{"type":"link","label":"Tabs","href":"/router/docs/guides/tabs","docId":"guides/tabs"}],"href":"/router/docs/category/guides"},{"type":"category","label":"Migration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"From React Navigation","href":"/router/docs/migration/from-react-navigation","docId":"migration/from-react-navigation"}],"href":"/router/docs/category/migration"},{"type":"link","label":"FAQ","href":"/router/docs/faq","docId":"faq"},{"type":"link","label":"Future work","href":"/router/docs/future","docId":"future"},{"type":"link","label":"Troubleshooting","href":"/router/docs/troubleshooting","docId":"troubleshooting"}]},"docs":{"faq":{"id":"faq","title":"FAQ","description":"Discuss them with us on GitHub.","sidebar":"tutorialSidebar"},"features/container":{"id":"features/container","title":"Navigation Container","description":"The global React Navigation ` is managed by Expo Router, you can pass it props like theme and initialState from any screen by using the ` component.","sidebar":"tutorialSidebar"},"features/dynamic-routes":{"id":"features/dynamic-routes","title":"Dynamic Routes","description":"Dynamic routes match any unmatched path at a given segment level. For example, /blog/[id] is a dynamic route. The variable part ([id]) is called a \\"slug\\". Routes with higher specificity will be matched before a dynamic route. For example, /blog/bacon will match blog/bacon.js before blog/[id].js.","sidebar":"tutorialSidebar"},"features/errors":{"id":"features/errors","title":"Error handling","description":"Expo Router enables fine-tuned error handling to enable a more opinionated data loading strategy in the future. You can export a nested ErrorBoundary component from any route to intercept and format component-level errors using React Error Boundaries:","sidebar":"tutorialSidebar"},"features/layout-routes":{"id":"features/layout-routes","title":"Layout Routes","description":"To render shared navigation elements like a header, tab bar, or drawer, you can use a layout route.","sidebar":"tutorialSidebar"},"features/layouts":{"id":"features/layouts","title":"Layouts","description":"Layouts are parent components that provide a shared UI-driven navigation experience across multiple screens.","sidebar":"tutorialSidebar"},"features/linking":{"id":"features/linking","title":"Linking","description":"The expo-router Link component supports client-side navigation to a route. It is similar to the Link component in react-router-dom and next/link.","sidebar":"tutorialSidebar"},"features/options":{"id":"features/options","title":"Screen Options","description":"Qualified layouts, like the ones found in expo-router (Stack, Tabs, Layout) have a static Screen component which can be used to configure the behavior of a route declaratively.","sidebar":"tutorialSidebar"},"features/routes":{"id":"features/routes","title":"Routes","description":"Expo Router is in the earliest stage of development. The API is subject to breaking changes. The documentation is incomplete and may be inaccurate. The project is not yet ready for production use. Please contribute to the discussion if you have any ideas or suggestions on how we can improve the convention.","sidebar":"tutorialSidebar"},"features/splash":{"id":"features/splash","title":"Splash Screen","description":"Expo Router automatically orchestrates the native splash screen to keep it visible until the first route is rendered, this applies to any route that the user deep links into. To enable this functionality, install expo-splash-screen in your project.","sidebar":"tutorialSidebar"},"features/unmatched":{"id":"features/unmatched","title":"Unmatched Routes","description":"Native apps don\'t have a server so there are technically no 404s. However, if you\'re implementing a router universally, then it makes sense to handle missing routes. This is done automatically for each app, but you can also customize it.","sidebar":"tutorialSidebar"},"future":{"id":"future","title":"Future work","description":"The following are out of scope for the initial version, but carefully considered to ensure we don\'t make any decisions that would make them impossible in the future (we may move some of these features into v1):","sidebar":"tutorialSidebar"},"guides/auth":{"id":"guides/auth","title":"Authentication","description":"It\'s common to restrict certain routes to users who are not authenticated. In expo-router, you can use the redirect prop on the `` component to prevent access to a route.","sidebar":"tutorialSidebar"},"guides/drawer":{"id":"guides/drawer","title":"Drawer","description":"To use drawer navigator you\'ll need to install some extra dependencies.","sidebar":"tutorialSidebar"},"guides/header-buttons":{"id":"guides/header-buttons","title":"Header buttons","description":"Ports the guide React Navigation: header buttons to Expo Router.","sidebar":"tutorialSidebar"},"guides/headers":{"id":"guides/headers","title":"Configuring the header bar","description":"Ports the guide React Navigation: header buttons to Expo Router.","sidebar":"tutorialSidebar"},"guides/hosting":{"id":"guides/hosting","title":"Hosting","description":"The current behavior of web is to export as a single-page application or (SPA). This means you need to redirect incoming URL requests on the server to the root index.html file.","sidebar":"tutorialSidebar"},"guides/index":{"id":"guides/index","title":"Building a layout","description":"First create a layout route in app/stack.js which uses the pre-built Stack component from expo-router to render a native stack navigator.","sidebar":"tutorialSidebar"},"guides/modals":{"id":"guides/modals","title":"Modals","description":"Modals are a common pattern in mobile apps. They are a way to present a new screen on top of the current screen. They are often used for things like creating a new account, or for a user to select an option from a list.","sidebar":"tutorialSidebar"},"guides/navigating":{"id":"guides/navigating","title":"Moving between screens","description":"Ports the guide React Navigation: Navigating to Expo Router.","sidebar":"tutorialSidebar"},"guides/nesting-navigators":{"id":"guides/nesting-navigators","title":"Nesting navigators","description":"Ports the guide React Navigation: Nesting navigators to Expo Router.","sidebar":"tutorialSidebar"},"guides/params":{"id":"guides/params","title":"Passing parameters to the routes","description":"Ports the guide React Navigation: Params to Expo Router.","sidebar":"tutorialSidebar"},"guides/tabs":{"id":"guides/tabs","title":"Tabs","description":"Expo Router adds an additional href screen option which can only be used with screen options that are an object (e.g. screenOptions={{ href: \\"/path\\" }}) and cannot be used simultaneously with tabBarButton.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"File System-based Routing for React Native apps","sidebar":"tutorialSidebar"},"migration/from-react-navigation":{"id":"migration/from-react-navigation","title":"From React Navigation","description":"Prefer using index routes to setting initialRouteName in the navigator.","sidebar":"tutorialSidebar"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"Fixing common issues with Expo Router beta setup.","sidebar":"tutorialSidebar"}}}')}}]);