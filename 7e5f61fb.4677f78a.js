(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{177:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return s})),a.d(e,"rightToc",(function(){return p})),a.d(e,"default",(function(){return f}));var r=a(1),n=a(9),i=(a(0),a(195)),c=a(204),l=a(209),o={id:"standard-lips",title:"Standard LIPs",title_toc_label:"Intro"},s={id:"standard-lips",title:"Standard LIPs",description:"const types = [",source:"@site/all-docs__GENERATED/standard-lips.mdx",permalink:"/standard-lips",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/standard-lips.mdx",sidebar:"standardLips"},u=[c.LIP_TYPE.CORE,c.LIP_TYPE.NETWORKING,c.LIP_TYPE.INTERFACE,c.LIP_TYPE.APPLICATION],p=[{value:"Draft",id:"draft",children:[]},{value:"Last Call",id:"last-call",children:[]},{value:"Accepted",id:"accepted",children:[]},{value:"Final",id:"final",children:[]},{value:"Rejected",id:"rejected",children:[]}],d={rightToc:p};function f(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",{className:"description"},"Standard LIPs describe any change or addition that affects the Libra payment network, such as a change to the blockchain core, a change to transaction processing, proposed application standards or conventions, or any change or addition that affects the interoperability of applications built on the Libra Blockchain. There are four subcategories: core, networking, interface, or application."),Object(i.b)("h2",{id:"draft"},"Draft"),Object(i.b)(l.a,{status:c.LIP_STATUS.DRAFT,types:u,mdxType:"LIPTable"}),Object(i.b)("h2",{id:"last-call"},"Last Call"),Object(i.b)(l.a,{status:c.LIP_STATUS.LAST_CALL,types:u,mdxType:"LIPTable"}),Object(i.b)("h2",{id:"accepted"},"Accepted"),Object(i.b)(l.a,{status:c.LIP_STATUS.ACCEPTED,types:u,mdxType:"LIPTable"}),Object(i.b)("h2",{id:"final"},"Final"),Object(i.b)(l.a,{status:c.LIP_STATUS.FINAL,types:u,mdxType:"LIPTable"}),Object(i.b)("h2",{id:"rejected"},"Rejected"),Object(i.b)(l.a,{status:c.LIP_STATUS.REJECTED,types:u,mdxType:"LIPTable"}))}f.isMDXComponent=!0},195:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return b}));var r=a(0),n=a.n(r);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=n.a.createContext({}),u=function(t){var e=n.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l({},e,{},t)),a},p=function(t){var e=u(t.components);return n.a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},f=Object(r.forwardRef)((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=u(a),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return a?n.a.createElement(b,l({ref:e},s,{components:a})):n.a.createElement(b,l({ref:e},s))}));function b(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,c=new Array(i);c[0]=f;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:r,c[1]=l;for(var s=2;s<i;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},196:function(t,e,a){"use strict";var r=a(0),n=a(52);e.a=function(){return Object(r.useContext)(n.a)}},198:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a(200);var r=a(196);function n(t){var e=(Object(r.a)().siteConfig||{}).baseUrl,a=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?a+t.slice(1):a+t}},200:function(t,e,a){"use strict";var r=a(12),n=a(25),i=a(201),c="".startsWith;r(r.P+r.F*a(202)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),a=n(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return c?c.call(e,r,a):e.slice(a,a+r.length)===r}})},201:function(t,e,a){var r=a(79),n=a(27);t.exports=function(t,e,a){if(r(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(n(t))}},202:function(t,e,a){var r=a(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[r]=!1,!"/./"[t](e)}catch(n){}}return!0}},204:function(t,e){e.LIP_STATUS={DRAFT:"draft",LAST_CALL:"last call",ACCEPTED:"accepted",FINAL:"final",REJECTED:"rejected"},e.LIP_TYPE={CORE:"core",NETWORKING:"networking",INTERFACE:"interface",APPLICATION:"application",INFORMATIONAL:"informational",META:"meta"}},206:function(t,e,a){"use strict";var r=a(12),n=a(28),i=a(26),c=a(14),l=[].sort,o=[1,2,3];r(r.P+r.F*(c((function(){o.sort(void 0)}))||!c((function(){o.sort(null)}))||!a(207)(l)),"Array",{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),n(t))}})},207:function(t,e,a){"use strict";var r=a(14);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},209:function(t,e,a){"use strict";a(24),a(19),a(20),a(78),a(206);var r=a(0),n=a.n(r),i=a(13),c=a.n(i),l=a(196),o=a(198),s=a(210),u=a(204),p=a(133),d=a.n(p),f=function(t){var e=t.author,a=t.num,r=t.title;Object(l.a)().siteConfig.themeConfig;return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("a",{href:Object(o.a)("/lip-"+a)},a)),n.a.createElement("td",null,r),n.a.createElement("td",null,n.a.createElement("a",{href:"https://github.com/"+e,target:"_blank"},e)))},b=function(t){var e=t.status,a=(t.title,function(t,e){return e.reduce((function(e,a){return e.concat(s[a][t])}),[]).sort((function(t,e){return t.lip<e.lip?1:-1}))}(e,t.types));return n.a.createElement("table",{className:d.a.table},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Number"),n.a.createElement("th",{className:d.a.title},"Title"),n.a.createElement("th",null,"Author(s)"))),n.a.createElement("tbody",null,a.map((function(t){var e=t.lip,a=t.author,r=t.title;return n.a.createElement(f,{author:a,key:e,num:e,title:r})}))))};b.propTypes={status:c.a.oneOf(Object.values(u.LIP_STATUS)).isRequired,types:c.a.arrayOf(c.a.oneOf(Object.values(u.LIP_TYPE)))},b.defaultProps={types:Object.values(u.LIP_TYPE)},e.a=b},210:function(t){t.exports=JSON.parse('{"core":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"networking":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"interface":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"application":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"informational":{"draft":[{"lip":1,"title":"Off-chain API","author":"Kevin Hurley (@kphfb), Dmitry Pimenov, George Danezis","status":"draft","type":"informational","created":"05/29/2020"},{"lip":2,"title":"Libra Roles and Permissions","author":"Sam Blackshear, Tim Zakian","status":"draft","type":"informational","created":"06/26/2020"},{"lip":3,"title":"Libra Upgrade Management","author":"Zekun Li (@zekun000)","status":"draft","type":"informational","created":"06/09/2020"},{"lip":4,"title":"Transaction Metadata Specification","author":"Kevin Hurley (@kphfb)","status":"draft","type":"informational","created":"06/26/2020"}],"last call":[],"accepted":[],"final":[{"lip":0,"title":"Libra Improvement Proposals","author":"libra","status":"final","type":"informational","created":"2/26/20"}],"rejected":[]},"meta":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]}}')}}]);