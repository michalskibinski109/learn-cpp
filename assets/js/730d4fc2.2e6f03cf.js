"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[196],{8920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=n(4848),r=n(8453),a=n(1470),i=n(9365);const l={},o="Classes",c={id:"classes_and_structs",title:"Classes",description:"Definition",source:"@site/docs/9-classes_and_structs.mdx",sourceDirName:".",slug:"/classes_and_structs",permalink:"/learn-cpp/docs/classes_and_structs",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/9-classes_and_structs.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"References in C++",permalink:"/learn-cpp/docs/references"},next:{title:"Enums",permalink:"/learn-cpp/docs/enums"}},u={},d=[{value:"Definition",id:"definition",level:3},{value:"Constructor and Destructor",id:"constructor-and-destructor",level:3},{value:"Initializer",id:"initializer",level:3},{value:"When to not use initializer list?",id:"when-to-not-use-initializer-list",level:4},{value:"<code>static</code> in context of classes",id:"static-in-context-of-classes",level:3},{value:"Why do we need ctructs at all.",id:"why-do-we-need-ctructs-at-all",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"classes",children:"Classes"}),"\n",(0,s.jsx)(t.h3,{id:"definition",children:"Definition"}),"\n",(0,s.jsxs)(a.A,{defaultValue:"class",values:[{label:"Class",value:"class"},{label:"Struct",value:"struct"}],children:[(0,s.jsx)(i.A,{value:"class",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"class Player {\npublic:\n        int x, y;\n        int speed;\n        \n        void Move(int xa, int ya) {\n                x += xa * speed; \n                y += ya * speed;\n        }\n};\n"})})}),(0,s.jsx)(i.A,{value:"struct",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"struct Player {\n        int x, y;\n        int speed;\n        \n        void Move(int xa, int ya) {\n                x += xa * speed; \n                y += ya * speed;\n        }\n};\n"})})})]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.mdxAdmonitionTitle,{children:["Why don't we need ",(0,s.jsx)(t.code,{children:"this"})," keyword here?"]}),(0,s.jsx)(t.p,{children:"it's not necessary to use this to access members within the object's methods, unless there's a naming conflict."})]}),"\n",(0,s.jsx)(t.h3,{id:"constructor-and-destructor",children:"Constructor and Destructor"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'\nclass Player {\npublic:\n        int x, y;\n        int speed;\n\n        // Constructor\n        Player(int x, int y) {\n                this->x = x;\n                this->y = y;\n        }\n\n        // Destructor\n        ~Player() {\n                std::cout << "Player at position (" << x << ", " << y << ") is being destroyed." << std::endl;\n        }\n};\n'})}),"\n",(0,s.jsx)(t.h3,{id:"initializer",children:"Initializer"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"Player::Player(int x, int y) : x(x), y(y) {}\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"Why initializer is better?",type:"tip",children:(0,s.jsx)(t.p,{children:"When you initialize member variables in the constructor body, the member variables are first created using their default constructor and then assigned a value. This involves two operations - construction and assignment.\nOn the other hand, when you use an initializer list, the member variables are directly initialized with the provided value, which involves only one operation. This can be more efficient, especially for classes with a large number of member variables or for member variables that are complex objects themselves."})}),"\n",(0,s.jsx)(t.h4,{id:"when-to-not-use-initializer-list",children:"When to not use initializer list?"}),"\n",(0,s.jsx)(t.p,{children:"If you need to perform some complex logic to compute the initial value of a member variable, you may need to use the constructor body to do so. However, in most cases, using an initializer list is preferred for efficiency and clarity."}),"\n",(0,s.jsxs)(t.h3,{id:"static-in-context-of-classes",children:[(0,s.jsx)(t.code,{children:"static"})," in context of classes"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"static"})," keyword in context of classes is used to define a member that is shared by all objects of the class.  It is just like"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Player:\n    speed = 2\n"})}),"\n",(0,s.jsx)(t.h2,{id:"why-do-we-need-ctructs-at-all",children:"Why do we need ctructs at all."}),"\n",(0,s.jsx)(t.p,{children:"Becouse of backward compatibility with C language. In C language there are no classes, so structs are used to define data structures. In C++ structs are used to define data structures as well, but they can also have member functions and access specifiers."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(6540),r=n(4164),a=n(3104),i=n(6347),l=n(205),o=n(7485),c=n(1682),u=n(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),v=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function y(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==s&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(g,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(6540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);