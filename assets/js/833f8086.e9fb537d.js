"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[733],{9087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(4848),o=t(8453);const i={},s="Raw pointers",a={id:"pointers",title:"Raw pointers",description:"Pointer is just memory address of a variable.",source:"@site/docs/7-pointers.md",sourceDirName:".",slug:"/pointers",permalink:"/learn-cpp/docs/pointers",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/7-pointers.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debugging",permalink:"/learn-cpp/docs/memory"},next:{title:"References in C++",permalink:"/learn-cpp/docs/references"}},c={},p=[];function d(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"raw-pointers",children:"Raw pointers"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Pointer is just memory address of a variable."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"int a = 5;\nint* pointer = &a; // pointer is now pointing to a\nvoid* voidPointer = &a; // void pointer can point to any type.\n\nint b = *pointer; // b is now 5\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"int a = 5;\nvoid* pointer = &a; // pointer is now pointing to a\n*pointer = 10; // error. void pointer can't be dereferenced.\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp"})}),"\n",(0,r.jsx)(n.admonition,{title:"setting type of pointer",type:"tip",children:(0,r.jsx)(n.p,{children:"It is not needed to set the type of pointer. You can do it for better readability."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"char* buffer = new char[8]; // buffer is now pointing to the first element of the array. (8 bytes)\n\nmemset(buffer, 0, 8); // set all 8 bytes to 0.\n\ndelete[] buffer; // delete the array.\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Why do we need to delete the array?",type:"warning",children:(0,r.jsx)(n.p,{children:"If we don't delete the array, it will cause memory leak.\nIt will take up memory until the program is closed."})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);