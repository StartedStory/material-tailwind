_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{"+QRC":function(e,t,n){"use strict";var r=n("E9nw"),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,c,i,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(c=r(),i=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),s&&document.body.removeChild(s),c()}return u}},"7ItQ":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("q1tI");var r=n("uUdh"),o=n("c2c2"),a=n("P5Jw"),c=n("nKUr"),i=["blue-gray","gray","brown","deep-orange","orange","amber","yellow","lime","light-green","green","teal","cyan","light-blue","blue","indigo","deep-purple","purple","pink","red"],l=["blueGray","gray","brown","deepOrange","orange","amber","yellow","lime","lightGreen","green","teal","cyan","lightBlue","blue","indigo","deepPurple","purple","pink","red"];function s(e){var t=e.children,n=e.activeColor,s=(e.activeFramework,e.onColorClick),u=(e.onFrameworkClick,e.onCopy),p=e.codeToShow,d=e.copyText;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"border border-solid border-gray-200 rounded my-4 p-4 relative",children:[n?Object(c.jsx)("div",{id:"colors",className:"flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",style:{width:"100%",bottom:"-14px"},children:Object(c.jsx)("div",{className:"flex flew-wrap justify-center items-center bg-white px-2",children:i.map((function(e,t){return Object(c.jsx)("span",{className:"cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-".concat(e).concat(n===l[t]?"".concat("yellow"===e?"-600":"-500"," shadow-md"):"-200"),onClick:function(){s(l[t]),u(!1)}},t)}))})}):null,t,Object(c.jsxs)("div",{className:"relative mt-4",children:[Object(c.jsx)(a.CopyToClipboard,{text:p,onCopy:function(){return u(!0)},children:Object(c.jsx)("button",{className:"text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",type:"button",children:d})}),Object(c.jsx)(r.a,{language:"jsx",style:o.a11yDark,children:p})]})]})})}},DAQv:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("q1tI"),o=n("wEh6"),a=n("Blfr"),c=n("uCv7"),i=n("zQxQ"),l=n("7ItQ"),s=n("bn+Z"),u=n("xTYM"),p=n("nKUr");function d(e){var t=e.copyText,n=e.onCopy,o=(e.value,e.percentage,Object(r.useState)("lightBlue")),a=o[0],c=o[1],i=Object(r.useState)("react")[0],d=Object(r.useState)(!1),f=d[0],b=d[1],y=Object(r.useState)(),m=y[0],x=y[1],g=Object(s.a)(i,b,x),h='import React from "react";\nimport LeadText from "@material-tailwind/react/LeadText";\n\nexport default function LeadText() {\n  return (\n    <LeadText color="'.concat(a,"\">\n      Lorem Ipsum is simply dummy text of the printing and typesetting\n      industry. Lorem Ipsum has been the industry's standard dummy\n      text ever since the 1500s, when an unknown printer took a galley\n      of type and scrambled it to make a type specimen book.\n    </LeadText>\n  );\n}");return Object(p.jsxs)(p.Fragment,{children:[f?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",onClick:function(){return b(!1)},children:Object(p.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-sm",children:Object(p.jsxs)("div",{className:"border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(p.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",children:[Object(p.jsx)("h5",{className:"text-2xl font-normal mt-0 mb-0 ",children:"Component not supported"}),Object(p.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:function(){return b(!1)},children:Object(p.jsx)("span",{className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),Object(p.jsx)("div",{className:"relative p-6 flex-auto",children:Object(p.jsxs)("p",{className:"text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",children:["At the moment we do not support the choosen framework (",m,") for this component."]})})]})})}),Object(p.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null,Object(p.jsx)(l.a,{copyText:t,onCopy:n,activeColor:a,activeFramework:i,codeToShow:h,onColorClick:function(e){return c(e)},onFrameworkClick:g,children:Object(p.jsx)(u.a,{color:a,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})})]})}function f(){var e=Object(r.useState)(null),t=e[0],n=e[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.a,{title:"React Lead Text"}),Object(p.jsx)(c.a,{}),Object(p.jsxs)(a.a,{children:[Object(p.jsx)(i.a,{title:"React Lead Text",description:"Show important content using Material Tailwind lead text."}),Object(p.jsx)(d,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")}})]})]})}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},P5Jw:function(e,t,n){"use strict";var r=n("rHrb").CopyToClipboard;r.CopyToClipboard=r,e.exports=r},RbAF:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/react/typography/leadText",function(){return n("DAQv")}])},"bn+Z":function(e,t,n){"use strict";function r(e,t,n){switch(e){case"react":case"angular":case"html":case"vue":case"javascript":break;default:t(!0),n(e)}}n.d(t,"a",(function(){return r}))},rHrb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n("q1tI")),o=a(n("+QRC"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?f(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n;s(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return y(f(n=p(this,(e=d(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=n.props,a=t.text,c=t.onCopy,i=t.children,l=t.options,s=r.default.Children.only(i),u=(0,o.default)(a,l);c&&c(a,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),n}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,a),c&&u(n,c),t}(r.default.PureComponent);t.CopyToClipboard=m,y(m,"defaultProps",{onCopy:void 0,options:void 0})},xTYM:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("rePB"),o=n("Ff2n"),a=(n("q1tI"),n("nKUr"));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={white:"text-gray-200",blueGray:"text-blue-gray-700",gray:"text-gray-700",brown:"text-brown-700",deepOrange:"text-deep-orange-700",orange:"text-orange-700",amber:"text-amber-700",yellow:"text-yellow-600",lime:"text-lime-700",lightGreen:"text-light-green-700",green:"text-green-700",teal:"text-teal-700",cyan:"text-cyan-700",lightBlue:"text-light-blue-700",blue:"text-blue-700",indigo:"text-indigo-700",deepPurple:"text-deep-purple-700",purple:"text-purple-700",pink:"text-pink-700",red:"text-red-700"};function s(e){var t=e.children,n=e.color,r=Object(o.a)(e,["children","color"]);return Object(a.jsx)("p",i(i({},r),{},{className:"".concat(l[n]," text-lg font-light leading-relaxed mt-6 mb-4"),children:t}))}}},[["RbAF",0,1,2,3,4,5]]]);