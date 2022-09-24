"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/router/docs/intro","docId":"intro"},{"type":"category","label":"Features","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Routes","href":"/router/docs/features/routes","docId":"features/routes"},{"type":"link","label":"Layouts","href":"/router/docs/features/layouts","docId":"features/layouts"},{"type":"link","label":"Linking","href":"/router/docs/features/linking","docId":"features/linking"},{"type":"link","label":"Exports","href":"/router/docs/features/exports","docId":"features/exports"},{"type":"link","label":"Navigation Container","href":"/router/docs/features/container","docId":"features/container"},{"type":"link","label":"Error handling","href":"/router/docs/features/errors","docId":"features/errors"},{"type":"link","label":"Unmatched Routes","href":"/router/docs/features/unmatched","docId":"features/unmatched"},{"type":"link","label":"Layout Options","href":"/router/docs/features/layout-options","docId":"features/layout-options"}],"href":"/router/docs/category/features"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Building a layout","href":"/router/docs/guides/","docId":"guides/index"},{"type":"link","label":"header-buttons","href":"/router/docs/guides/header-buttons","docId":"guides/header-buttons"},{"type":"link","label":"headers","href":"/router/docs/guides/headers","docId":"guides/headers"},{"type":"link","label":"navigating","href":"/router/docs/guides/navigating","docId":"guides/navigating"},{"type":"link","label":"nesting-navigators","href":"/router/docs/guides/nesting-navigators","docId":"guides/nesting-navigators"},{"type":"link","label":"params","href":"/router/docs/guides/params","docId":"guides/params"}],"href":"/router/docs/category/guides"},{"type":"category","label":"Migration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"From React Navigation","href":"/router/docs/migration/from-react-navigation","docId":"migration/from-react-navigation"}],"href":"/router/docs/category/migration"},{"type":"link","label":"FAQ","href":"/router/docs/faq","docId":"faq"},{"type":"link","label":"Future work","href":"/router/docs/future","docId":"future"}]},"docs":{"faq":{"id":"faq","title":"FAQ","description":"Discuss them with us on GitHub.","sidebar":"tutorialSidebar"},"features/container":{"id":"features/container","title":"Navigation Container","description":"The global React Navigation ` is managed by Expo router, you can pass it props like theme and initialState from any screen by using the ` component.","sidebar":"tutorialSidebar"},"features/errors":{"id":"features/errors","title":"Error handling","description":"Expo router enables fine-tuned error handling to enable a more opinionated data loading strategy in the future. You can export a nested ErrorBoundary component from any route to intercept and format component-level errors using React Error Boundaries:","sidebar":"tutorialSidebar"},"features/exports":{"id":"features/exports","title":"Exports","description":"The router supports the following exports per page:","sidebar":"tutorialSidebar"},"features/layout-options":{"id":"features/layout-options","title":"Layout Options","description":"In React Navigation, you often use screenOptions to configure layout options. In expo-router, you can use the `` component from any built-in layout to configure the nearest layout.","sidebar":"tutorialSidebar"},"features/layouts":{"id":"features/layouts","title":"Layouts","description":"Layouts are parent components that provide a shared UI-driven navigation experience across multiple screens.","sidebar":"tutorialSidebar"},"features/linking":{"id":"features/linking","title":"Linking","description":"The expo-router Link component supports client-side navigation to a route. It is similar to the Link component in react-router-dom and next/link.","sidebar":"tutorialSidebar"},"features/routes":{"id":"features/routes","title":"Routes","description":"This convention is still a work-in-progress and subject to breaking changes! Please contribute to the discussion if you have any ideas or suggestions on how we can improve the convention.","sidebar":"tutorialSidebar"},"features/unmatched":{"id":"features/unmatched","title":"Unmatched Routes","description":"Native apps don\'t have a server so there are technically no 404s. However, if you\'re implementing a router universally, then it makes sense to handle missing routes. This is done automatically for each app, but you can also customize it.","sidebar":"tutorialSidebar"},"future":{"id":"future","title":"Future work","description":"The following are out of scope for the initial version, but carefully considered to ensure we don\'t make any decisions that would make them impossible in the future (we may move some of these features into v1):","sidebar":"tutorialSidebar"},"guides/header-buttons":{"id":"guides/header-buttons","title":"header-buttons","description":"Ports https://reactnavigation.org/docs/header-buttons","sidebar":"tutorialSidebar"},"guides/headers":{"id":"guides/headers","title":"headers","description":"Ports https://reactnavigation.org/docs/headers","sidebar":"tutorialSidebar"},"guides/index":{"id":"guides/index","title":"Building a layout","description":"First create a layout route in app/stack.js which uses the pre-built Stack component from expo-router to render a native stack navigator.","sidebar":"tutorialSidebar"},"guides/navigating":{"id":"guides/navigating","title":"navigating","description":"Ports https://reactnavigation.org/docs/navigating","sidebar":"tutorialSidebar"},"guides/nesting-navigators":{"id":"guides/nesting-navigators","title":"nesting-navigators","description":"Ports https://reactnavigation.org/docs/nesting-navigators","sidebar":"tutorialSidebar"},"guides/params":{"id":"guides/params","title":"params","description":"Ports https://reactnavigation.org/docs/params","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Expo Router is in the earliest stage of development. The API is subject to breaking changes. The documentation is incomplete and may be inaccurate. The project is not yet ready for production use.","sidebar":"tutorialSidebar"},"migration/from-react-navigation":{"id":"migration/from-react-navigation","title":"From React Navigation","description":"Prefer using index routes to setting initialRouteName in the navigator.","sidebar":"tutorialSidebar"}}}')}}]);