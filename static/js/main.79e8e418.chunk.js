(this.webpackJsonpdemos=this.webpackJsonpdemos||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(14),n(3)),l=n(4),i=n(7),u=n(5),m=n(8),d=n(6),p=n.n(d),f=(n(15),function(e){function t(e){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"startWorker",value:function(){var e;"undefined"==typeof e&&(e=new Worker("worker.js")),e.onmessage=function(e){document.getElementById("result").innerHTML=e.data},e.postMessage("you hear me?\n")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"testWorker"},r.a.createElement("button",{onClick:function(){return e.startWorker()}},"Start Worker!"))}}]),t}(r.a.Component));var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),r.a.createElement(f,null),r.a.createElement("div",{id:"result"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.79e8e418.chunk.js.map