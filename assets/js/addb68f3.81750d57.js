"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[765],{5247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(4848),a=n(8453),s=n(1470),i=n(9365);const o={},c="Vectors and arrays",l={id:"vectors",title:"Vectors and arrays",description:"A vector is a dynamic array that can grow or shrink in size. It is a sequence container that encapsulates dynamic size arrays. It is very similar to the std::array container, but it is resizable. Vectors are very efficient in terms of time complexity. They have constant time complexity for both insertion and deletion at the end of the vector. However, insertion and deletion at the beginning or in the middle of the vector have linear time complexity.",source:"@site/docs/100-vectors.md",sourceDirName:".",slug:"/vectors",permalink:"/learn-cpp/docs/vectors",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/100-vectors.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Implicit and Explicit Conversion",permalink:"/learn-cpp/docs/implicit_and_explicit"},next:{title:"Maps",permalink:"/learn-cpp/docs/maps"}},u={},d=[{value:"Storing elements as pointers or values",id:"storing-elements-as-pointers-or-values",level:2},{value:"Optimizing vector capacity",id:"optimizing-vector-capacity",level:3}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"vectors-and-arrays",children:"Vectors and arrays"}),"\n",(0,r.jsxs)(t.p,{children:["A vector is a dynamic array that can grow or shrink in size. It is a sequence container that encapsulates dynamic size arrays. It is very similar to the ",(0,r.jsx)(t.code,{children:"std::array"})," container, but it is resizable. Vectors are very efficient in terms of time complexity. They have constant time complexity for both insertion and deletion at the end of the vector. However, insertion and deletion at the beginning or in the middle of the vector have linear time complexity."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://scaler.com/topics/images/Vector-in-C.webp",alt:""})}),"\n",(0,r.jsxs)(s.A,{defaultValue:"vector",values:[{label:"Array Example",value:"array"},{label:"Vector Example",value:"vector"}],children:[(0,r.jsxs)(i.A,{value:"array",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"#include <array>\n#include <iostream>\n\nint main() {\n    std::array<int, 4> myArray = {1, 2, 3, 4};\n    myArray[0] = 5; // Possible\n    // can't add or remove elements\n    return 0;\n}\n"})}),(0,r.jsx)(t.admonition,{title:"difference between C-style arrays and std::array",type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"std::array"})," is a container that encapsulates fixed size arrays. It is a safer and more efficient alternative to C-style arrays."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"std::array"})," knows its size, so you can use the ",(0,r.jsx)(t.code,{children:"size()"})," method to get the size of the array."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"std::array"})," is a class template, so you can use it with any data type."]}),"\n"]})})]}),(0,r.jsx)(i.A,{value:"vector",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> myVector = {1, 2, 3, 4};\n    // Adding an element to the end\n    myVector.push_back(5);\n    // Removing the last element\n    myVector.pop_back();\n    return 0;\n}\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"storing-elements-as-pointers-or-values",children:"Storing elements as pointers or values"}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"struct Vertex {\n    float x, y, z;\n};\n\nint main() {\n    std::vector<Vertex> opt1;\n    std::vector<Vertex*> opt2;\n    opt1.push_back({4, 5, 6});\n    opt2.push_back({4, 5, 6});\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Usually, it is ",(0,r.jsx)(t.strong,{children:"better to store elements as values"})," because:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"elements are stored contiguously in memory. Iterating over the elements is faster."}),"\n",(0,r.jsxs)(t.li,{children:["no need to manage memory manually. The elements are automatically destroyed when the vector goes out of scope.\nHovewer: ",(0,r.jsx)(t.strong,{children:"If you want to resize the vector often, it is better to store elements as pointers."})," This way, you can avoid copying the elements every time the vector is resized."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"optimizing-vector-capacity",children:"Optimizing vector capacity"}),"\n",(0,r.jsx)(t.p,{children:"When you know the number of elements that will be stored in the vector, you can reserve the memory in advance to avoid reallocation. This can improve performance by reducing the number of reallocations and copying of elements."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"bad"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'struct Vertex {\n    float x, y, z;\n\n    Vertex(const Vertex& vertex) : x(vertex.x), y(vertex.y), z(vertex.z) {\n        std::cout << "Copied!" << std::endl;\n    }\n\n};\n\nint main() {\n    std::vector<Vertex> vertices;\n    vertices.push_back(Vertex{1, 2, 3});// Copied! \n    //(We are constructing it in the current main function scope, and then copying it to the vector)\n    vertices.push_back({4, 5, 6}); // Copied!\n    vertices.push_back({7, 8, 9}); // Copied!, Copied!, Copied!, Copied!\n    // Our vector is resized and all elements are copied to the new memory location\n}\n\n\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"good"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"int main() {\n    std::vector<Vertex> vertices;\n    vertices.reserve(3); //no need to resize the vector\n    vertices.emplace_back(1, 2, 3); // no copy\n    vertices.emplace_back(4, 5, 6); // no copy\n    vertices.emplace_back(7, 8, 9); // no copy\n}\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"emplace_back vs push_back",type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"emplace_back"})," constructs the object in place, while ",(0,r.jsx)(t.code,{children:"push_back"})," constructs the object in the current scope and then copies it to the vector."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"emplace_back"})," is more efficient because it avoids the extra copy."]}),"\n"]})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),a=n(4164),s=n(3104),i=n(6347),o=n(205),c=n(7485),l=n(1682),u=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,d]=m({queryString:n,groupId:a}),[v,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=l??v;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),y(e)}),[d,y,s]),tabValues:s}}var y=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=o[n].value;a!==r&&(l(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=v(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,f.jsx)(x,{...t,...e}),(0,f.jsx)(g,{...t,...e})]})}function k(e){const t=(0,y.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);