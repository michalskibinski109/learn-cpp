"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[944],{8293:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=e(4848),i=e(8453);const r={},o="\ud83d\udd27 Functions",c={id:"functions",title:"\ud83d\udd27 Functions",description:"\ud83d\udce6 Passing Class Objects to Functions",source:"@site/docs/4-functions.md",sourceDirName:".",slug:"/functions",permalink:"/learn-cpp/docs/functions",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/4-functions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddc3\ufe0f Variables",permalink:"/learn-cpp/docs/variables"},next:{title:"\ud83d\udd04 Ternary Operators",permalink:"/learn-cpp/docs/ternary_operators"}},a={},d=[{value:"\ud83d\udce6 Passing Class Objects to Functions",id:"-passing-class-objects-to-functions",level:3}];function l(n){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"-functions",children:"\ud83d\udd27 Functions"}),"\n",(0,s.jsx)(t.h3,{id:"-passing-class-objects-to-functions",children:"\ud83d\udce6 Passing Class Objects to Functions"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'void PrintString(std::string string) { // it takes a copy of the string\n    string += " Doe";\n    std::cout << string << std::endl;\n}\n\nint main() {\n    std::string name = "John ";\n    PrintString(name);  // John Doe\n    std::cout << name << std::endl;  // John (original string is not changed)\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"A more efficient way is to pass by reference:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'void PrintString(std::string& string) { // it takes a reference to the string\n    std::cout << string << std::endl;\n}\n\nint main() {\n    std::string name = "John ";\n    PrintString(name);  // John\n}\n'})})]})}function u(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>o,x:()=>c});var s=e(6540);const i={},r=s.createContext(i);function o(n){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);