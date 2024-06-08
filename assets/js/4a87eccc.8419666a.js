"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[783],{2972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=n(4848),r=n(8453),i=n(1470),s=n(9365);const l={},o="Variables",c={id:"variables",title:"Variables",description:"- Declaration: A variable declaration provides assurance to the compiler that there exists a variable with the given type and name so that the compiler can proceed for further compilation without requiring the complete detail about the variable. A variable declaration has its meaning at the time of compilation only, the compiler needs actual variable declaration at the time of linking the program.",source:"@site/docs/3-variables.mdx",sourceDirName:".",slug:"/variables",permalink:"/learn-cpp/docs/variables",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/3-variables.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linker",permalink:"/learn-cpp/docs/linker"},next:{title:"functions",permalink:"/learn-cpp/docs/functions"}},d={},h=[{value:"sizeof",id:"sizeof",level:2},{value:"Primitive Casting",id:"primitive-casting",level:2},{value:"Arrays",id:"arrays",level:2},{value:"Pointers arithmetic",id:"pointers-arithmetic",level:3},{value:"New and Delete",id:"new-and-delete",level:3},{value:"Good and bad practices",id:"good-and-bad-practices",level:3},{value:"Standard Arrays",id:"standard-arrays",level:2}];function u(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"variables",children:"Variables"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Declaration"}),": A variable declaration provides assurance to the compiler that there exists a variable with the given type and name so that the compiler can proceed for further compilation without requiring the complete detail about the variable. A variable declaration has its meaning at the time of compilation only, the compiler needs actual variable declaration at the time of linking the program."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Definition"}),": A variable definition means to tell the compiler where to create the variable's storage, and to reserve the appropriate amount of space in memory. The difference between declaration and definition is that declaration is like introducing the variable and definition is like creating the variable."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Initialization"}),": Initialization of a variable is to give a value to the variable at the time of declaration. The initial value may be provided in the declaration, and in the case of class types, this initial value is used to initialize the object."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Scope"}),": The scope of a variable determines the portion of the code where a variable can be accessed. The three types of scopes in C++ are global scope, local scope, and class scope."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Lifetime"}),": The lifetime of a variable refers to the period during which the variable exits in the memory while the program is executing. The lifetime of variables inside a function is as long as the function executes, they are destroyed as soon as the function returns. The variable that is declared outside of all the functions is destroyed only when the main function has run to completion."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"sizeof",children:"sizeof"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"sizeof(int); // 4\nsizeof(char); // 1\n"})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Size (bytes)"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"int"})}),(0,a.jsx)(t.td,{children:"4"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"char"})}),(0,a.jsx)(t.td,{children:"1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"float"})}),(0,a.jsx)(t.td,{children:"4"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"double"})}),(0,a.jsx)(t.td,{children:"8"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"long"})}),(0,a.jsx)(t.td,{children:"8"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"short"})}),(0,a.jsx)(t.td,{children:"2"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"bool"})}),(0,a.jsx)(t.td,{children:"1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"long long"})}),(0,a.jsx)(t.td,{children:"8"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"If you want to get length of the array you can use:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"int array[] = {1, 2, 3, 4, 5};\nint length = sizeof(array) / sizeof(array[0]); // 20/4 = 5\n"})}),"\n",(0,a.jsx)(t.h2,{id:"primitive-casting",children:"Primitive Casting"}),"\n",(0,a.jsx)(t.p,{children:"In C++, you can perform casting between primitive types. This is often necessary when you want to convert one primitive type to another. There are two types of casting available for primitive types:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Implicit Casting (Automatic)"}),": This is performed by the compiler without the programmer's intervention. It usually happens when a smaller data type is promoted to a larger data type."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"int i = 45;\ndouble d = i;  // Implicit conversion from int to double\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Explicit Casting (Manual)"}),": This is performed by the programmer using casting operators. It is required when you want to convert a larger type to a smaller type, or a type to another type that could lead to data loss."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"double d = 45.67;\nint i = static_cast<int>(d);  // Explicit conversion from double to int\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In explicit casting, you can use the ",(0,a.jsx)(t.code,{children:"static_cast"})," operator for safe casting. However, if you are sure about the types and want to force a conversion, you can use C-style casting:"]}),"\n",(0,a.jsx)(t.admonition,{title:"Why static_cast is better than C-style casting?",type:"tip",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"static_cast"})," is safer than C-style casting because it performs additional checks during compilation to ensure type safety. It is also more readable and less error-prone. C-style casting can lead to undefined behavior if used incorrectly."]})}),"\n",(0,a.jsx)(t.h2,{id:"arrays",children:"Arrays"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Arrays are basically collection of variables in one variable."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"double d = 45.67;\nint i = (int)d;  // C-style casting from double to int\n\n```cpp\nint array[5] = {1, 2, 3, 4, 5};\n"})}),"\n",(0,a.jsx)(t.admonition,{title:"Can you trust the size of the array?",type:"warning",children:(0,a.jsx)(t.p,{children:"The size of the array is not always reliable. If you pass an array to a function, it decays into a pointer, and the size information is lost. You should always pass the size of the array along with the array to avoid buffer overflows and other memory-related issues."})}),"\n",(0,a.jsx)(t.h3,{id:"pointers-arithmetic",children:"Pointers arithmetic"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"int array[5] = {1, 2, 3, 4, 5};\nint* ptr = array;\n\nstd::cout << *ptr << std::endl;  // 1\nstd::cout << *(ptr + 1) << std::endl;  // 2\n"})}),"\n",(0,a.jsx)(t.admonition,{title:"How many bytes were added to the pointer?",type:"warning",children:(0,a.jsxs)(t.p,{children:["When you add an integer ",(0,a.jsx)(t.code,{children:"1"})," to a pointer, the pointer is incremented by the size of the type it points to. In this case, ",(0,a.jsx)(t.code,{children:"ptr"})," is an ",(0,a.jsx)(t.code,{children:"int*"}),", so adding ",(0,a.jsx)(t.code,{children:"1"})," to it increments the pointer by ",(0,a.jsx)(t.code,{children:"sizeof(int)"}),"  (4) bytes."]})}),"\n",(0,a.jsx)(t.h3,{id:"new-and-delete",children:"New and Delete"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"When to use new keyword?"}),"\nThe ",(0,a.jsx)(t.code,{children:"new"})," keyword is used to dynamically allocate memory on the heap. It is used when you need to allocate memory at runtime, and the size of the memory is not known at compile time. When you use ",(0,a.jsx)(t.code,{children:"new"}),", you are responsible for releasing the memory using the ",(0,a.jsx)(t.code,{children:"delete"})," keyword."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"int main() {\nint createdOnTheStack = 5; // this will get deleted automatically when it goes out of scope\nint* ptr = new int[5];\nstd::cout << *ptr << std::endl;  // 5\n\ndelete ptr; \n} // createdOnTheStack is deleted here\n"})}),"\n",(0,a.jsx)(t.admonition,{title:"What happens if you forget to delete the memory?",type:"warning",children:(0,a.jsxs)(t.p,{children:["If you forget to delete the memory allocated using ",(0,a.jsx)(t.code,{children:"new"}),", it will lead to a memory leak. A memory leak occurs when memory is allocated but not deallocated, causing the program to consume more memory than necessary. This can lead to performance issues and crashes in the long run."]})}),"\n",(0,a.jsx)(t.h3,{id:"good-and-bad-practices",children:"Good and bad practices"}),"\n",(0,a.jsxs)(i.A,{defaultValue:"tab1",values:[{label:"Dynamic Array",value:"tab1"},{label:"Static Array",value:"tab2"}],children:[(0,a.jsx)(s.A,{value:"tab1",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"class Entity {\n    int *example = new int[5];\n\n    Entity() {\n        for (int i = 0; i < 5; i++) {\n            example[i] = 2;\n        }\n    }\n\n    ~Entity() {\n        delete[] example;\n    }\n};\n"})})}),(0,a.jsx)(s.A,{value:"tab2",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"class Entity {\n    int  example[5];\n    Entity() {\n        for (int i = 0; i < 5; i++) {\n            example[i] = 2;\n        }\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(t.admonition,{title:"Which one is better?",type:"tip",children:(0,a.jsxs)(t.p,{children:["Using a static array is better than a dynamic array because it is more efficient and less error-prone. Static arrays are allocated on the stack, which is faster than dynamic memory allocation on the heap. Static arrays are also automatically deallocated when they go out of scope, whereas dynamic arrays require manual deallocation using ",(0,a.jsx)(t.code,{children:"delete"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"standard-arrays",children:"Standard Arrays"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"#include <array>\n\nstd::array<int, 5> arr = {1, 2, 3, 4, 5};\n"})}),"\n",(0,a.jsx)(t.p,{children:"Why is it better than a regular array?"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"It knows its size"}),"\n",(0,a.jsx)(t.li,{children:"It can be passed by value"}),"\n",(0,a.jsx)(t.li,{children:"It has some useful methods"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"std::array<int, 5> arr = {1, 2, 3, 4, 5};\nauto size = arr.size(); // 5\narr.fill(0); // {0, 0, 0, 0, 0}\narr.at(2); // 0\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var i=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),r=n(4164),i=n(3104),s=n(6347),l=n(205),o=n(7485),c=n(1682),d=n(679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=u(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,h]=m({queryString:n,groupId:r}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),y=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{y&&o(y)}),[y]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==a&&(c(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(6540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);