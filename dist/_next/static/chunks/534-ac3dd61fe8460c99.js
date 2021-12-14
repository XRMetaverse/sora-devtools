"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{8324:function(e,n,t){t.d(n,{T:function(){return r},C:function(){return i}});var a=t(5617),r=function(){return(0,a.I0)()},i=a.v9},7167:function(e,n,t){t.d(n,{P:function(){return f}});var a=t(5893),r=t(7294),i=t(1776),s=t(8324),o=t(9693),l=t(9384);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=function(){var e=(0,s.T)(),n=(0,s.C)((function(e){return e.soraContents.reconnectingTrials}));return(0,r.useEffect)((function(){e((0,o.eX)())}),[]),(0,a.jsxs)(i.Z,{delay:2e4,onClose:function(){e((0,o.XH)(!1))},children:[(0,a.jsx)(i.Z.Header,{className:"bg-warning text-white",children:(0,a.jsx)("strong",{className:"me-auto",children:"Reconnect"})}),(0,a.jsx)(i.Z.Body,{className:"bg-light",children:(0,a.jsxs)("p",{className:"text-break font-weight-bold mb-0",children:["Reconnecting... (trials ",n,")"]})})]})},d=function(e){var n=(0,s.T)(),t="error"===e.type?"bg-danger":"bg-info";return(0,a.jsxs)(i.Z,{autohide:!0,delay:2e4,onClose:function(){n((0,o.b_)(e.timestamp))},children:[(0,a.jsxs)(i.Z.Header,{className:"".concat(t," text-white"),children:[(0,a.jsx)("strong",{className:"me-auto",children:e.title}),(0,a.jsx)("span",{children:(0,l.o5)(e.timestamp)})]}),(0,a.jsx)(i.Z.Body,{className:"bg-light",children:(0,a.jsx)("p",{className:"text-break font-weight-bold mb-0",children:e.message})})]})},f=function(){var e=(0,s.C)((function(e){return e.alertMessages})),n=(0,s.C)((function(e){return e.soraContents.reconnecting}));return(0,a.jsxs)("div",{className:"alert-messages",children:[n?(0,a.jsx)(u,{}):null,e.map((function(e){return(0,a.jsx)(d,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){c(e,n,t[n])}))}return e}({},e),e.timestamp)}))]})}},846:function(e,n,t){t.d(n,{l:function(){return s}});var a=t(5893),r=(t(7294),t(8324)),i=t(9693),s=function(){var e=(0,r.C)((function(e){return e.soraContents.connectionStatus})),n=(0,r.T)();return(0,a.jsx)("div",{className:"col-auto mb-1",children:(0,a.jsx)("input",{className:"btn btn-secondary",type:"button",name:"connect",defaultValue:"connect",onClick:function(){n((0,i.Yr)())},disabled:"disconnecting"===e||"connecting"===e})})}},204:function(e,n,t){t.d(n,{c:function(){return s}});var a=t(5893),r=(t(7294),t(8324)),i=t(9693),s=function(){var e=(0,r.C)((function(e){return e.soraContents.connectionStatus})),n=(0,r.T)();return(0,a.jsx)("div",{className:"col-auto mb-1",children:(0,a.jsx)("input",{className:"btn btn-secondary",type:"button",name:"disconnect",defaultValue:"disconnect",onClick:function(){n((0,i.E1)())},disabled:"disconnecting"===e||"connecting"===e})})}},1564:function(e,n,t){t.d(n,{n:function(){return he}});var a=t(5893),r=t(7294),i=t(5509),s=t(3192),o=t(8324),l=t(9693),c=t(6518),u=t(3498),d=t(9384),f=function(e){return e.disabled?(0,a.jsx)("div",{style:{height:"31px"}}):(0,a.jsx)("button",{className:"btn btn-sm btn-dark",onClick:function(n){(0,d.f7)(e.text),n.currentTarget.blur()},children:(0,a.jsx)(u.R,{})})},m=function(e){var n=e.description;return void 0===n?null:"object"!==typeof n?(0,a.jsx)("div",{className:"debug-message",children:(0,a.jsx)("div",{className:"col-sm-12",children:(0,a.jsx)("pre",{className:e.wordBreak?"word-break":"",children:n})})}):(0,a.jsx)("div",{className:"debug-message",children:(0,a.jsx)("div",{className:"col-sm-12",children:(0,a.jsx)("pre",{className:e.wordBreak?"word-break":"",children:JSON.stringify(n,null,2)})})})},h=function(e){var n=e.defaultShow,t=e.description,i=e.title,s=e.timestamp,o=e.label,l=(0,r.useState)(void 0!==n&&n),u=l[0],h=l[1],g=s?i+s:i,x=void 0===t;return(0,a.jsxs)("div",{className:"border border-light rounded mb-1 bg-dark",children:[(0,a.jsxs)("div",{className:"d-flex justify-content-between align-items-center text-break",children:[(0,a.jsxs)("a",{className:"debug-title ".concat(x?"disabled":""),onClick:function(){return h(!u)},"aria-controls":g,"aria-expanded":u,children:[(0,a.jsx)("i",{className:"".concat(u?"arrow-bottom":"arrow-right"," ").concat(x?"disabled":"")})," ",s?(0,a.jsxs)("span",{className:"text-white-50 me-1",children:["[",(0,d.o5)(s),"]"]}):null,o,(0,a.jsx)("span",{children:i})]}),(0,a.jsx)("div",{className:"border-left",children:(0,a.jsx)(f,{text:"string"===typeof t?t:JSON.stringify(t,null,2),disabled:x})})]}),(0,a.jsx)(c.Z,{in:u,children:(0,a.jsx)("div",{className:"border-top",children:(0,a.jsx)(m,{description:t,wordBreak:e.wordBreak})})})]})};function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){g(e,n,t[n])}))}return e}var b=function(){var e=(0,o.T)();return(0,a.jsx)("input",{className:"btn btn-secondary",type:"button",name:"clear",defaultValue:"clear",onClick:function(){e((0,l.eO)())}})},j=function(e){var n=e.data,t=e.label,r=e.timestamp;if("ZAKURO"===(new TextDecoder).decode(n.slice(0,6))){var i=(new TextDecoder).decode(n.slice(22,48)),s=new DataView(n),o=s.getBigInt64(6),l=s.getBigInt64(14),c=n.byteLength,u="connectionId: ".concat(i,"\nUnixTimeMicro: ").concat(o,"\nCounter: ").concat(l,"\nByteLength: ").concat(c);return(0,a.jsx)(h,{title:t+" ZAKURO",timestamp:r,description:u,defaultShow:!0,wordBreak:!0})}var d=new Uint8Array(n).toString()+"\n(".concat((new TextDecoder).decode(n),")");return(0,a.jsx)(h,{title:t,timestamp:r,description:d,defaultShow:!0,wordBreak:!0})},p=r.memo((function(e){return(0,a.jsx)(j,x({},e))})),v=function(){var e=(0,o.C)((function(e){return e.dataChannelMessages}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"py-1",children:(0,a.jsx)(b,{})}),(0,a.jsx)("div",{className:"debug-messages",children:e.map((function(e){var n=e.label+e.timestamp;return(0,a.jsx)(p,x({},e),n)}))})]})},y=t(6986),C=t(1341),N=t(4716),w=function(){var e=(0,o.C)((function(e){return e.debugFilterText})),n=(0,o.T)();return(0,a.jsxs)(y.Z,{className:"form-inline debug-filter",controlId:"channelId",children:[(0,a.jsx)(C.Z,{className:"text-white",children:"Filter:"}),(0,a.jsx)(N.Z,{type:"text",placeholder:"Filter",value:e,onChange:function(e){n((0,l.eU)(e.target.value))},autoComplete:"off"})]})};function Z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){Z(e,n,t[n])}))}return e}var k=function(e){var n=e.message,t=e.timestamp;return(0,a.jsx)(h,{title:n.title,timestamp:t,description:JSON.parse(n.description)})},S=r.memo((function(e){return(0,a.jsx)(k,O({},e))})),T=function(){var e=(0,o.C)((function(e){return e.logMessages})),n=(0,o.C)((function(e){return e.debugFilterText})),t=e.filter((function(e){return n.split(" ").every((function(n){return""===n||0<=JSON.stringify(e).indexOf(n)}))}));return(0,a.jsx)("div",{className:"debug-messages",children:t.map((function(e){return(0,a.jsx)(S,O({},e),e.message.title+e.timestamp)}))})};function I(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var D={websocket:"#00ff00",datachannel:"#ff00ff"},M=function(e){var n=e.text,t=Object.keys(D).includes(n)?D[n]:void 0;return(0,a.jsxs)("span",{className:"me-1",style:t?{color:t}:{},children:["[",n,"]"]})},P=function(e){var n=e.notify,t=n.transportType?(0,a.jsx)(M,{text:n.transportType}):null;return(0,a.jsx)(h,{title:n.message.event_type,timestamp:n.timestamp,description:n.message,label:t})},R=r.memo((function(e){return(0,a.jsx)(P,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){I(e,n,t[n])}))}return e}({},e))})),U=function(){var e=(0,o.C)((function(e){return e.notifyMessages})),n=(0,o.C)((function(e){return e.debugFilterText})),t=e.filter((function(e){return n.split(" ").every((function(n){return""===n||0<=JSON.stringify(e).indexOf(n)}))}));return(0,a.jsx)("div",{className:"debug-messages",children:t.map((function(e){return(0,a.jsx)(R,{notify:e},e.message.type+e.timestamp)}))})};function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var B={websocket:"#00ff00",datachannel:"#ff00ff"},H=function(e){var n=e.text,t=Object.keys(B).includes(n)?B[n]:void 0;return(0,a.jsxs)("span",{style:t?{color:t}:{},children:["[",n,"]"]})},L=function(e){var n=e.push,t=n.transportType?(0,a.jsx)(H,{text:n.transportType}):null;return(0,a.jsx)(h,{title:n.message.type,timestamp:n.timestamp,description:n.message,label:t})},V=r.memo((function(e){return(0,a.jsx)(L,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){F(e,n,t[n])}))}return e}({},e))})),E=function(){var e=(0,o.C)((function(e){return e.pushMessages})),n=(0,o.C)((function(e){return e.debugFilterText})),t=e.filter((function(e){return n.split(" ").every((function(n){return""===n||0<=JSON.stringify(e).indexOf(n)}))}));return(0,a.jsx)("div",{className:"debug-messages",children:t.map((function(e,n){var t="".concat(e.timestamp,"-").concat(n);return(0,a.jsx)(V,{ariaControls:t,push:e},t)}))})},A=t(469),J=t(5005),K=function(){var e=(0,r.useRef)(null),n=(0,r.useRef)(null),t=(0,o.C)((function(e){return e.soraContents.sora})),i=(0,o.C)((function(e){return e.soraContents.datachannels}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"d-flex mt-2",children:[(0,a.jsx)(y.Z,{className:"me-1",controlId:"sendDataChannelMessageLabel",children:(0,a.jsx)(A.Z,{name:"sendDataChannelMessageLabel",ref:e,children:i.map((function(e){return(0,a.jsx)("option",{value:e.label,children:e.label},e.label)}))})}),(0,a.jsx)(y.Z,{className:"flex-grow-1 me-1",controlId:"sendDataChannelMessage",children:(0,a.jsx)(N.Z,{className:"flex-fill",placeholder:"sendDataChannelMessage\u3092\u6307\u5b9a",type:"text",ref:n})}),(0,a.jsx)(J.Z,{variant:"secondary",onClick:function(){if(null!==e.current&&null!==n.current){var a=e.current.value;t&&t.sendMessage(a,(new TextEncoder).encode(n.current.value))}},disabled:0===i.length,children:"send"})]}),0<i.length?(0,a.jsx)("pre",{className:"form-control mt-2",style:{color:"#fff",backgroundColor:"#222222",maxHeight:"250px",minHeight:"250px"},children:JSON.stringify(i,null,2)}):null]})};function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){_(e,n,t[n])}))}return e}var G={websocket:"#00ff00",datachannel:"#ff00ff"},z=function(e){var n=e.text,t=Object.keys(G).includes(n)?G[n]:void 0;return(0,a.jsxs)("span",{className:"me-1",style:t?{color:t}:{},children:["[",n,"]"]})},X=function(e){var n=e.data,t=e.type,r=e.timestamp,i=e.transportType,s=i?(0,a.jsx)(z,{text:i}):null;return(0,a.jsx)(h,{title:t,timestamp:r,description:n,label:s})},q=r.memo((function(e){return(0,a.jsx)(X,W({},e))})),Y=function(){var e=(0,o.C)((function(e){return e.signalingMessages})),n=(0,o.C)((function(e){return e.debugFilterText})),t=e.filter((function(e){return n.split(" ").every((function(n){return""===n||0<=JSON.stringify(e).indexOf(n)}))}));return(0,a.jsx)("div",{className:"debug-messages",children:t.map((function(e){var n=e.type+e.timestamp;return(0,a.jsx)(q,W({},e),n)}))})};function $(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){$(e,n,t[n])}))}return e}var ee=function(e){return(0,a.jsx)(h,{title:"".concat(e.id,"(").concat(e.type,")"),timestamp:null,description:e})},ne=r.memo((function(e){return(0,a.jsx)(ee,Q({},e))})),te=function(){var e=(0,o.C)((function(e){return e.soraContents.statsReport})),n=(0,o.C)((function(e){return e.debugFilterText})),t=e.filter((function(e){return n.split(" ").every((function(n){return""===n||0<=JSON.stringify(e).indexOf(n)}))}));return(0,a.jsx)("div",{className:"debug-messages",children:t.map((function(e){return(0,a.jsx)(ne,Q({},e),e.id)}))})};function ae(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){ae(e,n,t[n])}))}return e}var ie={signaling:"#ff00ff",notify:"#ffff00",push:"#98fb98",e2ee:"#00ffff",stats:"#ffc0cb"},se=function(){return(0,a.jsx)("span",{className:"me-1",style:{color:"#00ff00"},children:"[websocket]"})},oe=function(){return(0,a.jsx)("span",{className:"me-1",style:{color:"#ff8c00"},children:"[peerconnection]"})},le=function(){return(0,a.jsx)("span",{className:"me-1",style:{color:"#bce2e8"},children:"[sora]"})},ce=function(){return(0,a.jsx)("span",{className:"me-1",style:{color:"#73b8e2"},children:"[sora-devtools]"})},ue=function(e){var n=e.label,t=e.id,r=n&&Object.keys(ie).includes(n)?ie[n]:void 0;return(0,a.jsxs)("span",{className:"me-1",style:r?{color:r}:{},children:["[datachannel]",n?"[".concat(n,"]"):"","number"===typeof t?"[".concat(t,"]"):""]})},de=function(e){var n,t=e.timestamp,r=e.logType,i=e.dataChannelId,s=e.dataChannelLabel,o=e.type,l=e.data,c="".concat(o);return"websocket"===r?n=(0,a.jsx)(se,{}):"datachannel"===r?n=(0,a.jsx)(ue,{id:i,label:s}):"peerconnection"===r?n=(0,a.jsx)(oe,{}):"sora"===r?n=(0,a.jsx)(le,{}):"sora-devtools"===r&&(n=(0,a.jsx)(ce,{})),(0,a.jsx)(h,{title:c,timestamp:t,description:l,label:n})},fe=r.memo((function(e){return(0,a.jsx)(de,re({},e))})),me=function(){var e=(0,o.C)((function(e){return e.timelineMessages})),n=(0,o.C)((function(e){return e.debugFilterText})),t=e.filter((function(e){return n.split(" ").every((function(n){return""===n||0<=JSON.stringify(e).indexOf(n)}))}));return(0,a.jsx)("div",{className:"debug-messages",children:t.map((function(e){var n="".concat(e.timestamp,"-").concat(e.type);return e.dataChannelLabel&&(n+="-".concat(e.dataChannelLabel)),(0,a.jsx)(fe,re({},e),n)}))})},he=function(){var e=(0,o.C)((function(e){return e.debug})),n=(0,o.C)((function(e){return e.debugType})),t=(0,o.T)();if(!e)return null;return(0,a.jsx)("div",{className:"col-debug col-6",children:(0,a.jsxs)(i.Z,{id:"debug-tab",activeKey:n,defaultActiveKey:"timeline",onSelect:function(e){"log"!==e&&"notify"!==e&&"push"!==e&&"stats"!==e&&"timeline"!==e&&"signaling"!==e&&"messaging"!==e||t((0,l.pD)(e))},children:[(0,a.jsxs)(s.Z,{eventKey:"timeline",title:"Timeline",children:[(0,a.jsx)(w,{}),(0,a.jsx)(me,{})]}),(0,a.jsxs)(s.Z,{eventKey:"signaling",title:"Signaling",children:[(0,a.jsx)(w,{}),(0,a.jsx)(Y,{})]}),(0,a.jsxs)(s.Z,{eventKey:"notify",title:"Notfiy",children:[(0,a.jsx)(w,{}),(0,a.jsx)(U,{})]}),(0,a.jsxs)(s.Z,{eventKey:"push",title:"Push",children:[(0,a.jsx)(w,{}),(0,a.jsx)(E,{})]}),(0,a.jsxs)(s.Z,{eventKey:"stats",title:"Stats",children:[(0,a.jsx)(w,{}),(0,a.jsx)(te,{})]}),(0,a.jsxs)(s.Z,{eventKey:"log",title:"Log",children:[(0,a.jsx)(w,{}),(0,a.jsx)(T,{})]}),(0,a.jsxs)(s.Z,{eventKey:"messaging",title:"Messaging",children:[(0,a.jsx)(K,{}),(0,a.jsx)(v,{})]})]})})}},4447:function(e,n,t){t.d(n,{$:function(){return u}});var a=t(5893),r=(t(7294),t(8452)),i=t(7547),s=t(2923),o=t(8324),l=t(9693),c=function(){var e=(0,o.C)((function(e){return e.debug})),n=(0,o.T)(),t=e?"btn btn-footer-debug-mode active":"btn btn-footer-debug-mode";return(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:t,onClick:function(){n((0,l.ew)(!e))},children:"debug"})})},u=function(){var e=(0,o.C)((function(e){return e.version}));return(0,a.jsxs)("footer",{children:[(0,a.jsxs)(r.Z,{variant:"dark",bg:"sora",expand:"md",fixed:"bottom",children:[(0,a.jsx)(i.Z,{className:"me-auto"}),(0,a.jsx)(i.Z,{children:(0,a.jsxs)(r.Z.Collapse,{id:"navbar-collapse",children:[(0,a.jsxs)("a",{href:"https://github.com/shiguredo/sora-devtools",className:"btn btn-outline-light m-1",children:["GitHub: shiguredo/sora-devtools: ",e]}),(0,a.jsxs)("a",{href:"https://github.com/shiguredo/sora-js-sdk",className:"btn btn-outline-light m-1",children:["GitHub: shiguredo/sora-js-sdk: ",s.Z.version()]})]})})]}),(0,a.jsx)(c,{})]})}},8186:function(e,n,t){t.d(n,{P:function(){return m}});var a=t(5893),r=(t(7294),t(4051)),i=t(1555),s=t(6986),o=t(1341),l=t(4716),c=t(8324),u=t(9693),d=t(9384),f=function(){var e=(0,c.C)((function(e){return e.channelId})),n=(0,c.C)((function(e){return e.soraContents.connectionStatus})),t=(0,d.nh)(n),r=(0,c.T)();return(0,a.jsxs)(s.Z,{className:"form-inline",controlId:"channelId",children:[(0,a.jsx)(o.Z,{children:"channelId:"}),(0,a.jsx)(l.Z,{type:"text",placeholder:"ChannelId\u3092\u6307\u5b9a",value:e,onChange:function(e){r((0,u.cA)(e.target.value))},disabled:t})]})},m=function(){return(0,a.jsx)(r.Z,{className:"form-row",xs:"auto",children:(0,a.jsx)(i.Z,{children:(0,a.jsx)(f,{})})})}},4295:function(e,n,t){t.d(n,{V:function(){return S}});var a=t(5893),r=t(7294),i=t(4051),s=t(1555),o=t(6518),l=t(8324),c=t(6986),u=t(6316),d=t(4716),f=t(9693),m=t(9384),h=function(){var e=(0,l.C)((function(e){return e.enabledClientId})),n=(0,l.C)((function(e){return e.clientId})),t=(0,l.C)((function(e){return e.soraContents.connectionStatus})),r=(0,m.nh)(t),i=(0,l.T)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{className:"form-inline",controlId:"enabledClientId",children:(0,a.jsx)(u.Z,{type:"switch",name:"enabledClientId",label:"clientId",checked:e,onChange:function(e){i((0,f.pv)(e.target.checked))},disabled:r})}),e?(0,a.jsx)(c.Z,{className:"form-inline",controlId:"clientId",children:(0,a.jsx)(d.Z,{className:"flex-fill w-500",type:"text",placeholder:"ClientId\u3092\u6307\u5b9a",value:n,onChange:function(e){i((0,f.Xk)(e.target.value))},disabled:r})}):null]})},g=t(1341),x=t(469),b=t(2660),j=function(e){var n=(0,l.C)((function(e){return e.ignoreDisconnectWebSocket})),t=(0,l.T)();return(0,a.jsxs)(c.Z,{className:"form-inline",controlId:"ignoreDisconnectWebSocket",children:[(0,a.jsx)(g.Z,{children:"ignoreDisconnectWebSocket:"}),(0,a.jsx)(x.Z,{name:"ignoreDisconnectWebSocket",value:n,onChange:function(e){(0,m.to)(e.target.value)&&t((0,f.b3)(e.target.value))},disabled:e.disabled,children:b.kt.map((function(e){return(0,a.jsx)("option",{value:e,children:""===e?"\u672a\u6307\u5b9a":e},e)}))})]})},p=function(e){var n=(0,l.C)((function(e){return e.dataChannelSignaling})),t=(0,l.T)();return(0,a.jsxs)(c.Z,{className:"form-inline",controlId:"dataChannelSignaling",children:[(0,a.jsx)(g.Z,{children:"dataChannelSignaling:"}),(0,a.jsx)(x.Z,{name:"dataChannelSignaling",value:n,onChange:function(e){(0,m.ug)(e.target.value)&&t((0,f.Gc)(e.target.value))},disabled:e.disabled,children:b.l9.map((function(e){return(0,a.jsx)("option",{value:e,children:""===e?"\u672a\u6307\u5b9a":e},e)}))})]})},v=function(){var e=(0,l.C)((function(e){return e.enabledDataChannel})),n=(0,l.C)((function(e){return e.soraContents.connectionStatus})),t=(0,m.nh)(n),r=(0,l.T)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{className:"form-inline",controlId:"enabledDataChannel",children:(0,a.jsx)(u.Z,{type:"switch",name:"enabledDataChannel",label:"dataChannel",checked:e,onChange:function(e){r((0,f.rY)(e.target.checked))},disabled:t})}),e?(0,a.jsxs)(i.Z,{xs:"auto",children:[(0,a.jsx)(s.Z,{children:(0,a.jsx)(p,{disabled:t})}),(0,a.jsx)(s.Z,{children:(0,a.jsx)(j,{disabled:t})})]}):null]})},y=function(){var e=(0,l.C)((function(e){return e.enabledDataChannels})),n=(0,l.C)((function(e){return e.dataChannels})),t=(0,l.C)((function(e){return e.soraContents.connectionStatus})),r=(0,m.nh)(t),i=(0,l.T)(),s="dataChannels\u3092\u6307\u5b9a\n(\u4f8b)\n"+JSON.stringify([{label:"#spam",maxPacketLifeTime:10,ordered:!0,protocol:"efg",compress:!1,direction:"sendrecv"}],null,2);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{className:"form-inline",controlId:"enabledDataChannels",children:(0,a.jsx)(u.Z,{type:"switch",name:"enabledDataChannels",label:"dataChannels",checked:e,onChange:function(e){i((0,f.VI)(e.target.checked))},disabled:r})}),e?(0,a.jsx)(c.Z,{className:"form-inline",controlId:"dataChannels",children:(0,a.jsx)(d.Z,{className:"flex-fill w-500",as:"textarea",placeholder:s,value:n,onChange:function(e){i((0,f.bl)(e.target.value))},rows:12,disabled:r})}):null]})},C=t(6968),N=function(){var e=(0,r.useState)(!1),n=e[0],t=e[1],i=(0,l.C)((function(e){return e.e2ee})),s=(0,l.C)((function(e){return e.soraContents.connectionStatus})),o=(0,m.nh)(s),d=(0,l.T)();return(0,r.useEffect)((function(){i&&t(!1)}),[i]),(0,a.jsxs)(c.Z,{className:"form-inline",controlId:"e2ee",children:[(0,a.jsx)(u.Z,{type:"switch",name:"e2ee",label:"e2ee",checked:i,onChange:function(e){e.target.checked&&t(!0),d((0,f.c0)(e.target.checked))},disabled:o}),n?(0,a.jsx)(C.Z,{className:"spinner-status",variant:"primary",animation:"border",role:"status"}):null]})},w=function(){var e=(0,l.C)((function(e){return e.enabledMetadata})),n=(0,l.C)((function(e){return e.metadata})),t=(0,l.C)((function(e){return e.soraContents.connectionStatus})),r=(0,m.nh)(t),i=(0,l.T)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{className:"form-inline",controlId:"enabledMetadata",children:(0,a.jsx)(u.Z,{type:"switch",name:"enabledMetadata",label:"metadata",checked:e,onChange:function(e){i((0,f.yq)(e.target.checked))},disabled:r})}),e?(0,a.jsx)(c.Z,{className:"form-inline",controlId:"metadata",children:(0,a.jsx)(d.Z,{className:"flex-fill w-500",as:"textarea",placeholder:"Metadata\u3092\u6307\u5b9a",value:n,onChange:function(e){i((0,f.yC)(e.target.value))},rows:10,disabled:r})}):null]})},Z=function(){var e=(0,l.C)((function(e){return e.reconnect})),n=(0,l.C)((function(e){return e.soraContents.connectionStatus})),t=(0,m.nh)(n),r=(0,l.T)();return(0,a.jsx)(c.Z,{className:"form-inline",controlId:"reconnect",children:(0,a.jsx)(u.Z,{type:"switch",name:"reconnect",label:"reconnect",checked:e,onChange:function(e){r((0,f.sk)(e.target.checked))},disabled:t})})},O=function(){var e=(0,l.C)((function(e){return e.enabledSignalingNotifyMetadata})),n=(0,l.C)((function(e){return e.signalingNotifyMetadata})),t=(0,l.C)((function(e){return e.soraContents.connectionStatus})),r=(0,m.nh)(t),i=(0,l.T)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{className:"form-inline",controlId:"enabledSignalingNotifyMetadata",children:(0,a.jsx)(u.Z,{type:"switch",name:"enabledSignalingNotifyMetadata",label:"signalingNotifyMetadata",checked:e,onChange:function(e){i((0,f.vq)(e.target.checked))},disabled:r})}),e?(0,a.jsx)(c.Z,{className:"form-inline",controlId:"signalingNotifyMetadata",children:(0,a.jsx)(d.Z,{className:"flex-fill w-500",as:"textarea",placeholder:"signalingNotifyMetadata\u3092\u6307\u5b9a",value:n,onChange:function(e){i((0,f.H6)(e.target.value))},rows:10,disabled:r})}):null]})},k=function(){var e=(0,l.C)((function(e){return e.enabledSignalingUrlCandidates})),n=(0,l.C)((function(e){return e.signalingUrlCandidates})),t=(0,l.C)((function(e){return e.soraContents.connectionStatus})),r=(0,m.nh)(t),i=(0,l.T)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{className:"form-inline",controlId:"enabledSignalingUrlCandidates",children:(0,a.jsx)(u.Z,{type:"switch",name:"enabledSignalingUrlCandidates",label:"signalingUrlCandidates",checked:e,onChange:function(e){i((0,f.Nd)(e.target.checked))},disabled:r})}),e?(0,a.jsx)(c.Z,{className:"form-inline",controlId:"signalingNotifyMetadata",children:(0,a.jsx)(d.Z,{className:"flex-fill w-500",as:"textarea",placeholder:"signalingUrlCandidates\u3092\u6307\u5b9a",value:n.join("\n"),onChange:function(e){i((0,f.l7)(e.target.value.split("\n")))},rows:5,disabled:r})}):null]})},S=function(){var e=(0,r.useState)(!0),n=e[0],t=e[1],c=[(0,l.C)((function(e){return e.e2ee})),(0,l.C)((function(e){return e.enabledClientId})),(0,l.C)((function(e){return e.enabledDataChannel})),(0,l.C)((function(e){return e.enabledDataChannels})),(0,l.C)((function(e){return e.enabledMetadata})),(0,l.C)((function(e){return e.enabledSignalingNotifyMetadata})),(0,l.C)((function(e){return e.enabledSignalingUrlCandidates})),(0,l.C)((function(e){return e.reconnect}))].some((function(e){return e})),u=["btn-collapse-options"];n&&u.push("collapsed"),c&&u.push("fw-bold");return(0,a.jsxs)(i.Z,{className:"form-row",children:[(0,a.jsx)(s.Z,{children:(0,a.jsx)("a",{href:"#",className:u.join(" "),onClick:function(e){e.preventDefault(),t(!n)},children:"Signaling options"})}),(0,a.jsx)(o.Z,{in:!n,children:(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{className:"form-row",children:(0,a.jsx)(s.Z,{className:"col-auto d-flex flex-column align-items-start",children:(0,a.jsx)(N,{})})}),(0,a.jsx)(i.Z,{className:"form-row",children:(0,a.jsx)(s.Z,{className:"col-auto d-flex flex-column align-items-start",children:(0,a.jsx)(Z,{})})}),(0,a.jsx)(i.Z,{className:"form-row",children:(0,a.jsx)(s.Z,{className:"col-auto d-flex flex-column align-items-start",children:(0,a.jsx)(h,{})})}),(0,a.jsx)(i.Z,{className:"form-row",children:(0,a.jsx)(s.Z,{className:"col-auto d-flex flex-column align-items-start",children:(0,a.jsx)(w,{})})}),(0,a.jsx)(i.Z,{className:"form-row",children:(0,a.jsx)(s.Z,{className:"col-auto d-flex flex-column align-items-start",children:(0,a.jsx)(O,{})})}),(0,a.jsx)(i.Z,{className:"form-row",children:(0,a.jsx)(s.Z,{className:"col-auto d-flex flex-column align-items-start",children:(0,a.jsx)(k,{})})}),(0,a.jsx)(i.Z,{className:"form-row",children:(0,a.jsx)(s.Z,{className:"col-auto d-flex flex-column align-items-start",children:(0,a.jsx)(y,{})})}),(0,a.jsx)(i.Z,{className:"form-row",children:(0,a.jsx)(s.Z,{className:"col-auto d-flex flex-column align-items-start",children:(0,a.jsx)(v,{})})})]})})]})}},8854:function(e,n,t){t.d(n,{F:function(){return i}});var a=t(5893),r=t(9008),i=(t(7294),function(e){return(0,a.jsx)(r.default,{children:(0,a.jsxs)("title",{children:["Sora DevTools ",e.title]})})})},2421:function(e,n,t){t.d(n,{h:function(){return p}});var a=t(5893),r=t(7294),i=t(8452),s=t(682),o=t(7547),l=t(8324),c=t(9693),u=function(){var e=(0,l.T)();return(0,a.jsx)("input",{className:"btn btn-light btn-sm ms-1",type:"button",name:"copyUrl",defaultValue:"copy URL",onClick:function(){e((0,c.Hi)())}})},d=t(8520),f=t.n(d),m=t(2923),h=t(7353);function g(e,n,t,a,r,i,s){try{var o=e[i](s),l=o.value}catch(c){return void t(c)}o.done?n(l):Promise.resolve(l).then(a,r)}function x(e){var n=h.h.getState(),t={audio:n.audio,audioBitRate:n.audioBitRate,audioCodecType:n.audioCodecType,audioContentHint:n.audioContentHint,audioInput:n.audioInput,audioInputDevices:n.audioInputDevices,audioOutput:n.audioOutput,audioOutputDevices:n.audioOutputDevices,autoGainControl:n.autoGainControl,clientId:n.clientId,channelId:n.channelId,googCpuOveruseDetection:n.googCpuOveruseDetection,debug:n.debug,dataChannelSignaling:n.dataChannelSignaling,dataChannels:n.dataChannels,displayResolution:n.displayResolution,e2ee:n.e2ee,echoCancellation:n.echoCancellation,echoCancellationType:n.echoCancellationType,enabledClientId:n.enabledClientId,enabledDataChannel:n.enabledDataChannel,enabledDataChannels:n.enabledDataChannels,enabledMetadata:n.enabledMetadata,enabledSignalingNotifyMetadata:n.enabledSignalingNotifyMetadata,enabledSignalingUrlCandidates:n.enabledSignalingUrlCandidates,fakeVolume:n.fakeVolume,frameRate:n.frameRate,ignoreDisconnectWebSocket:n.ignoreDisconnectWebSocket,mediaType:n.mediaType,metadata:n.metadata,multistream:n.multistream,noiseSuppression:n.noiseSuppression,reconnect:n.reconnect,resolution:n.resolution,simulcast:n.simulcast,spotlight:n.spotlight,signalingNotifyMetadata:n.signalingNotifyMetadata,signalingUrlCandidates:n.signalingUrlCandidates,simulcastRid:n.simulcastRid,spotlightNumber:n.spotlightNumber,spotlightFocusRid:n.spotlightFocusRid,spotlightUnfocusRid:n.spotlightUnfocusRid,video:n.video,videoBitRate:n.videoBitRate,videoCodecType:n.videoCodecType,videoContentHint:n.videoContentHint,videoInput:n.videoInput,videoInputDevices:n.videoInputDevices,cameraDevice:n.cameraDevice,videoTrack:n.videoTrack,micDevice:n.micDevice,audioTrack:n.audioTrack,role:n.role};return{userAgent:navigator.userAgent,pageName:e,"sora-devtools":n.version,"sora-js-sdk":m.Z.version(),parameters:t,timeline:n.timelineMessages.map((function(e){return{timestamp:e.timestamp,message:e}})),notify:n.notifyMessages,stats:n.soraContents.statsReport}}var b=function(e){var n,t=(0,r.useRef)(null),i=(n=f().mark((function n(){var a,r,i,s;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=x(e.pageName),r=JSON.stringify(a),i=new Blob([r],{type:"text/plain"}),window.URL=window.URL||window.webkitURL,t.current&&(s=(new Date).toISOString().replaceAll(":","_").replaceAll(".","_"),t.current.download="sora-devtools-report-".concat(s,".json"),t.current.href=window.URL.createObjectURL(i),t.current.click());case 5:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(a,r){var i=n.apply(e,t);function s(e){g(i,a,r,s,o,"next",e)}function o(e){g(i,a,r,s,o,"throw",e)}s(void 0)}))});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{className:"btn btn-light btn-sm ms-1",type:"button",name:"downloadReport",defaultValue:"Download report",onClick:i}),(0,a.jsx)("a",{ref:t,style:{display:"none"}})]})},j=function(){var e=(0,l.C)((function(e){return e.debug})),n=(0,l.T)(),t=["btn","btn-header-debug-mode","btn-sm","ms-1"];return e&&t.push("active"),(0,a.jsx)("input",{className:t.join(" "),type:"button",name:"debug",defaultValue:"debug",onClick:function(){n((0,c.ew)(!e))}})},p=function(e){var n=(0,l.C)((function(e){return e.soraContents.sora}));return(0,a.jsx)("header",{children:(0,a.jsx)(i.Z,{variant:"dark",bg:"sora",expand:"md",fixed:"top",children:(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(i.Z.Brand,{href:"/",children:"Sora DevTools"}),(0,a.jsx)(o.Z,{children:(0,a.jsx)(i.Z.Text,{children:e.pageName})}),(0,a.jsx)(i.Z.Toggle,{"aria-controls":"navbar-collapse"}),(0,a.jsxs)(i.Z.Collapse,{id:"navbar-collapse",children:[(0,a.jsx)(o.Z,{className:"me-auto"}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(i.Z.Text,{className:"py-0 my-1 mx-1",children:(0,a.jsx)("p",{className:"navbar-signaling-url border rounded",children:n?n.connectedSignalingUrl:"\u672a\u63a5\u7d9a"})}),(0,a.jsx)(i.Z.Text,{className:"py-0 my-1 mx-1",children:(0,a.jsx)(j,{})}),(0,a.jsx)(i.Z.Text,{className:"py-0 my-1 mx-1",children:(0,a.jsx)(b,{pageName:e.pageName})}),(0,a.jsx)(i.Z.Text,{className:"py-0 my-1 ms-1",children:(0,a.jsx)(u,{})})]})]})]})})})}},3498:function(e,n,t){t.d(n,{R:function(){return r}});var a=t(5893),r=(t(7294),function(){return(0,a.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-clipboard",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{fillRule:"evenodd",d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),(0,a.jsx)("path",{fillRule:"evenodd",d:"M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"})]})})}}]);