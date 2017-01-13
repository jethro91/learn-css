(function(a,b){a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};a.expr[":"].uncached=function(b){var c=document.createElement("img");c.src=b.src;return a(b).is('img[src!=""]')&&!c.complete};a.fn.waitForImages=function(b,c,d){if(a.isPlainObject(arguments[0])){c=b.each;d=b.waitForAll;b=b.finished}b=b||a.noop;c=c||a.noop;d=!!d;if(!a.isFunction(b)||!a.isFunction(c)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var e=a(this),f=[];if(d){var g=a.waitForImages.hasImageProperties||[],h=/url\((['"]?)(.*?)\1\)/g;e.find("*").each(function(){var b=a(this);if(b.is("img:uncached")){f.push({src:b.attr("src"),element:b[0]})}a.each(g,function(a,c){var d=b.css(c);if(!d){return true}var e;while(e=h.exec(d)){f.push({src:e[2],element:b[0]})}})})}else{e.find("img:uncached").each(function(){f.push({src:this.src,element:this})})}var i=f.length,j=0;if(i==0){b.call(e[0])}a.each(f,function(d,f){var g=new Image;a(g).bind("load error",function(a){j++;c.call(f.element,j,i,a.type=="load");if(j==i){b.call(e[0]);return false}});g.src=f.src})})}
var b=["Webkit","Moz","O","Ms","Khtml",""];var c=["borderRadius","boxShadow","userSelect","transformOrigin","transformStyle","transition","transitionDuration","transitionProperty","transitionTimingFunction","backgroundOrigin","backgroundSize","animation","filter","zoom","columns","perspective","perspectiveOrigin","appearance"];a.fn.cssSetQueue=function(b,c){v=this;var d=v.data("cssQueue")?v.data("cssQueue"):[];var e=v.data("cssCall")?v.data("cssCall"):[];var f=0;var g={};a.each(c,function(a,b){g[a]=b});while(1){if(!e[f]){e[f]=g.complete;break}f++}g.complete=f;d.push([b,g]);v.data({cssQueue:d,cssRunning:true,cssCall:e})};a.fn.cssRunQueue=function(){v=this;var a=v.data("cssQueue")?v.data("cssQueue"):[];if(a[0])v.cssEngine(a[0][0],a[0][1]);else v.data("cssRunning",false);a.shift();v.data("cssQueue",a)};a.cssMerge=function(b,c,d){a.each(c,function(c,e){a.each(d,function(a,d){b[d+c]=e})});return b};a.fn.cssAnimationData=function(a,b){var c=this;var d=c.data("cssAnimations");if(!d)d={};if(!d[a])d[a]=[];d[a].push(b);c.data("cssAnimations",d);return d[a]};a.fn.cssAnimationRemove=function(){var b=this;if(b.data("cssAnimations")!=undefined){var c=b.data("cssAnimations");var d=b.data("identity");a.each(c,function(a,b){c[a]=b.splice(d+1,1)});b.data("cssAnimations",c)}};a.css3D=function(c){a("body").data("cssPerspective",isFinite(c)?c:c?1e3:0).cssOriginal(a.cssMerge({},{TransformStyle:c?"preserve-3d":"flat"},b))};a.cssPropertySupporter=function(d){a.each(c,function(c,e){if(d[e])a.each(b,function(a,b){var c=e.substr(0,1);d[b+c[b?"toUpperCase":"toLowerCase"]()+e.substr(1)]=d[e]})});return d};a.cssAnimateSupport=function(){var c=false;a.each(b,function(a,b){c=document.body.style[b+"AnimationName"]!==undefined?true:c});return c};a.fn.cssEngine=function(c,d){function e(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()}var f=this;var f=this;if(typeof d.complete=="number")f.data("cssCallIndex",d.complete);var g={linear:"linear",swing:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out"};var h={};var i=a("body").data("cssPerspective");if(c.transform)a.each(b,function(a,b){var d=b+(b?"T":"t")+"ransform";var g=f.cssOriginal(e(d));var j=c.transform;if(!g||g=="none")h[d]="scale(1)";c[d]=(i&&!/perspective/gi.test(j)?"perspective("+i+") ":"")+j});c=a.cssPropertySupporter(c);var j=[];a.each(c,function(a,b){j.push(e(a))});var k=false;var l=[];var m=[];if(j!=undefined){for(var n=0;n<j.length;n++){l.push(String(d.duration/1e3)+"s");var o=g[d.easing];m.push(o?o:d.easing)}l=f.cssAnimationData("dur",l.join(", ")).join(", ");m=f.cssAnimationData("eas",m.join(", ")).join(", ");var p=f.cssAnimationData("prop",j.join(", "));f.data("identity",p.length-1);p=p.join(", ");var q={TransitionDuration:l,TransitionProperty:p,TransitionTimingFunction:m};var r={};r=a.cssMerge(r,q,b);var s=c;a.extend(r,c);if(r.display=="callbackHide")k=true;else if(r.display)h["display"]=r.display;f.cssOriginal(h)}setTimeout(function(){f.cssOriginal(r);var b=f.data("runningCSS");b=!b?s:a.extend(b,s);f.data("runningCSS",b);setTimeout(function(){f.data("cssCallIndex","a");if(k)f.cssOriginal("display","none");f.cssAnimationRemove();if(d.queue)f.cssRunQueue();if(typeof d.complete=="number"){f.data("cssCall")[d.complete].call(f);f.data("cssCall")[d.complete]=0}else d.complete.call(f)},d.duration)},0)};a.str2Speed=function(a){return isNaN(a)?a=="slow"?1e3:a=="fast"?200:600:a};a.fn.cssAnimate=function(b,c,d,e){var f=this;var g={duration:0,easing:"swing",complete:function(){},queue:true};var h={};h=typeof c=="object"?c:{duration:c};h[d?typeof d=="function"?"complete":"easing":0]=d;h[e?"complete":0]=e;h.duration=a.str2Speed(h.duration);a.extend(g,h);if(a.cssAnimateSupport()){f.each(function(c,d){d=a(d);if(g.queue){var e=!d.data("cssRunning");d.cssSetQueue(b,g);if(e)d.cssRunQueue()}else d.cssEngine(b,g)})}else f.animate(b,g);return f};a.cssPresetOptGen=function(a,b){var c={};c[a?typeof a=="function"?"complete":"easing":0]=a;c[b?"complete":0]=b;return c};a.fn.cssFadeTo=function(b,c,d,e){var f=this;opt=a.cssPresetOptGen(d,e);var g={opacity:c};opt.duration=b;if(a.cssAnimateSupport()){f.each(function(b,d){d=a(d);if(d.data("displayOriginal")!=d.cssOriginal("display")&&d.cssOriginal("display")!="none")d.data("displayOriginal",d.cssOriginal("display")?d.cssOriginal("display"):"block");else d.data("displayOriginal","block");g.display=c?d.data("displayOriginal"):"callbackHide";d.cssAnimate(g,opt)})}else f.fadeTo(b,opt);return f};a.fn.cssFadeOut=function(b,c,d){if(a.cssAnimateSupport()){if(!this.cssOriginal("opacity"))this.cssOriginal("opacity",1);this.cssFadeTo(b,0,c,d)}else this.fadeOut(b,c,d);return this};a.fn.cssFadeIn=function(b,c,d){if(a.cssAnimateSupport()){if(this.cssOriginal("opacity"))this.cssOriginal("opacity",0);this.cssFadeTo(b,1,c,d)}else this.fadeIn(b,c,d);return this};a.cssPx2Int=function(a){return a.split("p")[0]*1};a.fn.cssStop=function(){var c=this,d=0;c.data("cssAnimations",false).each(function(e,f){f=a(f);var g={TransitionDuration:"0s"};var h=f.data("runningCSS");var i={};if(h)a.each(h,function(b,c){c=isFinite(a.cssPx2Int(c))?a.cssPx2Int(c):c;var d=[0,1];var e={color:["#000","#fff"],background:["#000","#fff"],"float":["none","left"],clear:["none","left"],border:["none","0px solid #fff"],position:["absolute","relative"],family:["Arial","Helvetica"],display:["none","block"],visibility:["hidden","visible"],transform:["translate(0,0)","scale(1)"]};a.each(e,function(a,c){if((new RegExp(a,"gi")).test(b))d=c});i[b]=d[0]!=c?d[0]:d[1]});else h={};g=a.cssMerge(i,g,b);f.cssOriginal(g);setTimeout(function(){var b=a(c[d]);b.cssOriginal(h).data({runningCSS:{},cssAnimations:{},cssQueue:[],cssRunning:false});if(typeof b.data("cssCallIndex")=="number")b.data("cssCall")[b.data("cssCallIndex")].call(b);b.data("cssCall",[]);d++},0)});return c};a.fn.cssDelay=function(a){return this.cssAnimate({},a)};a.fn.cssOriginal=a.fn.css;a.fn.css=function(c,d){var e=this,f={};if(typeof c=="string")if(d)f[a.camelCase(c)]=d;else return e.cssOriginal(c);else f=c;f=a.cssPropertySupporter(f);var g=a("body").data("cssPerspective");if(f.transform)a.each(b,function(a,b){var c=b+(b?"T":"t")+"ransform";var d=f.transform;f[c]=(g&&!/perspective/gi.test(d)?"perspective("+g+") ":"")+d});e.cssOriginal(f);return e}
a.fn.swipe=function(b){if(!this)return false;var c={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var d="left";var e="right";var f="up";var g="down";var h="none";var i="horizontal";var j="vertical";var k="auto";var l="start";var m="move";var n="end";var o="cancel";var p="ontouchstart"in window,q=p?"touchstart":"mousedown",r=p?"touchmove":"mousemove",s=p?"touchend":"mouseup",t="touchcancel";var u="start";if(b.allowPageScroll==undefined&&(b.swipe!=undefined||b.swipeStatus!=undefined))b.allowPageScroll=h;if(b)a.extend(c,b);return this.each(function(){function J(){var a=I();if(a<=45&&a>=0)return d;else if(a<=360&&a>=315)return d;else if(a>=135&&a<=225)return e;else if(a>45&&a<135)return g;else return f}function I(){var a=y.x-z.x;var b=z.y-y.y;var c=Math.atan2(b,a);var d=Math.round(c*180/Math.PI);if(d<0)d=360-Math.abs(d);return d}function H(){return Math.round(Math.sqrt(Math.pow(z.x-y.x,2)+Math.pow(z.y-y.y,2)))}function G(a,b){if(c.allowPageScroll==h){a.preventDefault()}else{var l=c.allowPageScroll==k;switch(b){case d:if(c.swipeLeft&&l||!l&&c.allowPageScroll!=i)a.preventDefault();break;case e:if(c.swipeRight&&l||!l&&c.allowPageScroll!=i)a.preventDefault();break;case f:if(c.swipeUp&&l||!l&&c.allowPageScroll!=j)a.preventDefault();break;case g:if(c.swipeDown&&l||!l&&c.allowPageScroll!=j)a.preventDefault();break}}}function F(a,b){if(c.swipeStatus)c.swipeStatus.call(v,a,b,direction||null,distance||0);if(b==o){if(c.click&&(x==1||!p)&&(isNaN(distance)||distance==0))c.click.call(v,a,a.target)}if(b==n){if(c.swipe){c.swipe.call(v,a,direction,distance)}switch(direction){case d:if(c.swipeLeft)c.swipeLeft.call(v,a,direction,distance);break;case e:if(c.swipeRight)c.swipeRight.call(v,a,direction,distance);break;case f:if(c.swipeUp)c.swipeUp.call(v,a,direction,distance);break;case g:if(c.swipeDown)c.swipeDown.call(v,a,direction,distance);break}}}function E(a){x=0;y.x=0;y.y=0;z.x=0;z.y=0;A.x=0;A.y=0}function D(a){a.preventDefault();distance=H();direction=J();if(c.triggerOnTouchEnd){u=n;if((x==c.fingers||!p)&&z.x!=0){if(distance>=c.threshold){F(a,u);E(a)}else{u=o;F(a,u);E(a)}}else{u=o;F(a,u);E(a)}}else if(u==m){u=o;F(a,u);E(a)}b.removeEventListener(r,C,false);b.removeEventListener(s,D,false)}function C(a){if(u==n||u==o)return;var b=p?a.touches[0]:a;z.x=b.pageX;z.y=b.pageY;direction=J();if(p){x=a.touches.length}u=m;G(a,direction);if(x==c.fingers||!p){distance=H();if(c.swipeStatus)F(a,u,direction,distance);if(!c.triggerOnTouchEnd){if(distance>=c.threshold){u=n;F(a,u);E(a)}}}else{u=o;F(a,u);E(a)}}function B(a){var d=p?a.touches[0]:a;u=l;if(p){x=a.touches.length}distance=0;direction=null;if(x==c.fingers||!p){y.x=z.x=d.pageX;y.y=z.y=d.pageY;if(c.swipeStatus)F(a,u)}else{E(a)}b.addEventListener(r,C,false);b.addEventListener(s,D,false)}var b=this;var v=a(this);var w=null;var x=0;var y={x:0,y:0};var z={x:0,y:0};var A={x:0,y:0};try{this.addEventListener(q,B,false);this.addEventListener(t,E)}catch(K){}})}})(jQuery)