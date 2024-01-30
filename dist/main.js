(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&!t;)t=n[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var t={};e.r(t);var r={};e.r(r);const n=e.p+"8921ac5edaf24c2fbe69.png",a=(e,t,r,n,a="")=>{const o=document.createElement(t);o.classList.add(r),a?(o.src=a,o.alt=n):o.innerHTML=n,e.appendChild(o)},o=[["h1","welcome","Welcome to the Restaurant"],["img","logo","hazbin restaurant logo",n],["p","about-us","<p>Welcome to Hazbin, where culinary excellence meets unparalleled ambiance.</p>\n\t\tNestled in the heart of New York, Hazbin is a haven for food enthusiasts seeking an extraordinary dining experience.Step into a world where every dish tells a story, crafted with passion and precision by our master chefs.From the moment you enter, be prepared to embark on a gastronomic journey that tantalizes your taste buds and captivates your senses.Whether you're craving innovative fusion cuisine or classic favorites with a modern twist, Hazbin promises to delight even the most discerning palates.\n\t\t<p>Join us and discover why Hazbin is not just a restaurant but a destination for unforgettable culinary adventures.</p>"]],i=document.querySelector("nav"),s=document.querySelector("#content");i.addEventListener("click",(e=>{let n=e.target.textContent;if(n)switch(s.innerHTML="",n){case"Home":(e=>{((e,t)=>{for(let r of t)a(e,...r)})(e,o)})(s);break;case"Menu":(0,t.renderMenuPage)(s);break;case"About":(0,r.renderAboutPage)(s)}}))})();