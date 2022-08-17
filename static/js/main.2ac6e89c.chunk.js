(this["webpackJsonpreact-metamask-network-switch"]=this["webpackJsonpreact-metamask-network-switch"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(5),a=n.n(c),s=n(6),o=n(2),i=n(7),u=n(3),b=n(0);function l(e){var t=e.message;return t?Object(b.jsx)("div",{className:"alert alert-error mt-5",children:Object(b.jsxs)("div",{className:"flex-1",children:[Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-6 h-6 mx-2 stroke-current",children:Object(b.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})}),Object(b.jsx)("label",{children:t})]})}):null}var d={polygon:{chainId:"0x".concat(Number(137).toString(16)),chainName:"Polygon Mainnet",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://polygon-rpc.com/"],blockExplorerUrls:["https://polygonscan.com/"]},bsc:{chainId:"0x".concat(Number(56).toString(16)),chainName:"Binance Smart Chain Mainnet",nativeCurrency:{name:"Binance Chain Native Token",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","wss://bsc-ws-node.nariox.org"],blockExplorerUrls:["https://bscscan.com"]}},h=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){var n,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.networkName,r=t.setError,e.prev=1,window.ethereum){e.next=4;break}throw new Error("No crypto wallet found");case 4:return e.next=6,window.ethereum.request({method:"wallet_addEthereumChain",params:[Object(i.a)({},d[n])]});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.networkName,n=t.setError,e.prev=1,window.ethereum){e.next=4;break}throw new Error("No crypto wallet found");case 4:return e.next=6,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x".concat(Number(4).toString(16))}]});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();function w(){var e=Object(r.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(),e.next=3,h({networkName:t,setError:c});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(e){console.log({chainId:e})};return Object(r.useEffect)((function(){return window.ethereum.on("chainChanged",i),function(){window.ethereum.removeListener("chainChanged",i)}}),[]),Object(b.jsx)("div",{className:"credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white",children:Object(b.jsxs)("main",{className:"mt-4 p-4",children:[Object(b.jsx)("h1",{className:"text-xl font-semibold text-gray-700 text-center",children:"Force MetaMask network"}),Object(b.jsxs)("div",{className:"mt-4",children:[Object(b.jsx)("button",{onClick:function(){return a("polygon")},className:"mt-2 mb-2 btn btn-primary submit-button focus:ring focus:outline-none w-full",children:"Switch to Polygon"}),Object(b.jsx)("button",{onClick:function(){return a("bsc")},className:"mt-2 mb-2 bg-warning border-warning btn submit-button focus:ring focus:outline-none w-full",children:"Switch to BSC"}),Object(b.jsx)("button",{onClick:function(){return m("rinkeby")},className:"mt-2 mb-2 bg-warning border-warning btn submit-button focus:ring focus:outline-none w-full",children:"Switch to Rinkeby"}),Object(b.jsx)(l,{message:n})]})]})})}var p=document.getElementById("root");a.a.render(Object(b.jsx)(r.StrictMode,{children:Object(b.jsx)(w,{})}),p)}},[[13,1,2]]]);
//# sourceMappingURL=main.2ac6e89c.chunk.js.map