function launchParticlesJS(a,b){function k(){pJS.fn.canvasInit(),pJS.fn.canvasSize(),pJS.fn.canvasPaint(),pJS.fn.particlesCreate(),pJS.fn.particlesDraw()}function l(){pJS.fn.particlesDraw(),pJS.fn.requestAnimFrame=requestAnimFrame(l)}var c=document.querySelector("#"+a+" > canvas");if(pJS={canvas:{el:c,w:c.offsetWidth,h:c.offsetHeight},particles:{color:"#fff",shape:"circle",opacity:1,size:2.5,size_random:!0,nb:200,line_linked:{enable_auto:!0,distance:100,color:"#fff",opacity:1,width:1,condensed_mode:{enable:!0,rotateX:65e3,rotateY:65e3}},anim:{enable:!0,speed:1},array:[]},interactivity:{enable:!0,mouse:{distance:100},detect_on:"canvas",mode:"grab",line_linked:{opacity:1},events:{onclick:{enable:!0,mode:"push",nb:4}}},retina_detect:!1,fn:{vendors:{interactivity:{}}}},b){if(b.particles){var d=b.particles;if(d.color&&(pJS.particles.color=d.color),d.shape&&(pJS.particles.shape=d.shape),d.opacity&&(pJS.particles.opacity=d.opacity),d.size&&(pJS.particles.size=d.size),0==d.size_random&&(pJS.particles.size_random=d.size_random),d.nb&&(pJS.particles.nb=d.nb),d.line_linked){var e=d.line_linked;if(0==e.enable_auto&&(pJS.particles.line_linked.enable_auto=e.enable_auto),e.distance&&(pJS.particles.line_linked.distance=e.distance),e.color&&(pJS.particles.line_linked.color=e.color),e.opacity&&(pJS.particles.line_linked.opacity=e.opacity),e.width&&(pJS.particles.line_linked.width=e.width),e.condensed_mode){var f=e.condensed_mode;0==f.enable&&(pJS.particles.line_linked.condensed_mode.enable=f.enable),f.rotateX&&(pJS.particles.line_linked.condensed_mode.rotateX=f.rotateX),f.rotateY&&(pJS.particles.line_linked.condensed_mode.rotateY=f.rotateY)}}if(d.anim){var g=d.anim;0==g.enable&&(pJS.particles.anim.enable=g.enable),g.speed&&(pJS.particles.anim.speed=g.speed)}}if(b.interactivity){var h=b.interactivity;if(0==h.enable&&(pJS.interactivity.enable=h.enable),h.mouse&&h.mouse.distance&&(pJS.interactivity.mouse.distance=h.mouse.distance),h.detect_on&&(pJS.interactivity.detect_on=h.detect_on),h.mode&&(pJS.interactivity.mode=h.mode),h.line_linked&&h.line_linked.opacity&&(pJS.interactivity.line_linked.opacity=h.line_linked.opacity),h.events){var i=h.events;if(i.onclick){var j=i.onclick;0==j.enable&&(pJS.interactivity.events.onclick.enable=!1),"push"!=j.mode&&(pJS.interactivity.events.onclick.mode=j.mode),j.nb&&(pJS.interactivity.events.onclick.nb=j.nb)}}}pJS.retina_detect=b.retina_detect}pJS.particles.color_rgb=hexToRgb(pJS.particles.color),pJS.particles.line_linked.color_rgb_line=hexToRgb(pJS.particles.line_linked.color),pJS.retina_detect&&window.devicePixelRatio>1&&(pJS.retina=!0,pJS.canvas.pxratio=window.devicePixelRatio,pJS.canvas.w=pJS.canvas.el.offsetWidth*pJS.canvas.pxratio,pJS.canvas.h=pJS.canvas.el.offsetHeight*pJS.canvas.pxratio,pJS.particles.anim.speed=pJS.particles.anim.speed*pJS.canvas.pxratio,pJS.particles.line_linked.distance=pJS.particles.line_linked.distance*pJS.canvas.pxratio,pJS.particles.line_linked.width=pJS.particles.line_linked.width*pJS.canvas.pxratio,pJS.interactivity.mouse.distance=pJS.interactivity.mouse.distance*pJS.canvas.pxratio),pJS.fn.canvasInit=function(){pJS.canvas.ctx=pJS.canvas.el.getContext("2d")},pJS.fn.canvasSize=function(){pJS.canvas.el.width=pJS.canvas.w,pJS.canvas.el.height=pJS.canvas.h,window.onresize=function(){pJS&&(pJS.canvas.w=pJS.canvas.el.offsetWidth,pJS.canvas.h=pJS.canvas.el.offsetHeight,pJS.retina&&(pJS.canvas.w*=pJS.canvas.pxratio,pJS.canvas.h*=pJS.canvas.pxratio),pJS.canvas.el.width=pJS.canvas.w,pJS.canvas.el.height=pJS.canvas.h,pJS.fn.canvasPaint(),pJS.particles.anim.enable||(pJS.fn.particlesRemove(),pJS.fn.canvasRemove(),k()))}},pJS.fn.canvasPaint=function(){pJS.canvas.ctx.fillRect(0,0,pJS.canvas.w,pJS.canvas.h)},pJS.fn.canvasRemove=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h)},pJS.fn.particle=function(a,b,c){this.x=c?c.x:Math.random()*pJS.canvas.w,this.y=c?c.y:Math.random()*pJS.canvas.h,this.radius=(pJS.particles.size_random?Math.random():1)*pJS.particles.size,pJS.retina&&(this.radius*=pJS.canvas.pxratio),this.color=a,this.opacity=b,this.vx=-.5+Math.random(),this.vy=-.5+Math.random(),this.draw=function(){switch(pJS.canvas.ctx.fillStyle="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.opacity+")",pJS.canvas.ctx.beginPath(),pJS.particles.shape){case"circle":pJS.canvas.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1);break;case"edge":pJS.canvas.ctx.rect(this.x,this.y,2*this.radius,2*this.radius);break;case"triangle":pJS.canvas.ctx.moveTo(this.x,this.y-this.radius),pJS.canvas.ctx.lineTo(this.x+this.radius,this.y+this.radius),pJS.canvas.ctx.lineTo(this.x-this.radius,this.y+this.radius),pJS.canvas.ctx.closePath()}pJS.canvas.ctx.fill()}},pJS.fn.particlesCreate=function(){for(var a=0;a<pJS.particles.nb;a++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb,pJS.particles.opacity))},pJS.fn.particlesAnimate=function(){for(var a=0;a<pJS.particles.array.length;a++){var b=pJS.particles.array[a];b.x+=b.vx*(pJS.particles.anim.speed/2),b.y+=b.vy*(pJS.particles.anim.speed/2),b.x-b.radius>pJS.canvas.w?b.x=b.radius:b.x+b.radius<0&&(b.x=pJS.canvas.w+b.radius),b.y-b.radius>pJS.canvas.h?b.y=b.radius:b.y+b.radius<0&&(b.y=pJS.canvas.h+b.radius);for(var c=a+1;c<pJS.particles.array.length;c++){var d=pJS.particles.array[c];if(pJS.particles.line_linked.enable_auto&&pJS.fn.vendors.distanceParticles(b,d),pJS.interactivity.enable)switch(pJS.interactivity.mode){case"grab":pJS.fn.vendors.interactivity.grabParticles(b,d)}}}},pJS.fn.particlesDraw=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h),pJS.fn.particlesAnimate();for(var a=0;a<pJS.particles.array.length;a++){var b=pJS.particles.array[a];b.draw("rgba("+b.color.r+","+b.color.g+","+b.color.b+","+b.opacity+")")}},pJS.fn.particlesRemove=function(){pJS.particles.array=[]},pJS.fn.vendors.distanceParticles=function(a,b){var c=a.x-b.x,d=a.y-b.y,e=Math.sqrt(c*c+d*d);if(e<=pJS.particles.line_linked.distance){var f=pJS.particles.line_linked.color_rgb_line;if(pJS.canvas.ctx.beginPath(),pJS.canvas.ctx.strokeStyle="rgba("+f.r+","+f.g+","+f.b+","+(pJS.particles.line_linked.opacity-e/pJS.particles.line_linked.distance)+")",pJS.canvas.ctx.moveTo(a.x,a.y),pJS.canvas.ctx.lineTo(b.x,b.y),pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width,pJS.canvas.ctx.stroke(),pJS.canvas.ctx.closePath(),pJS.particles.line_linked.condensed_mode.enable){var c=a.x-b.x,d=a.y-b.y,g=c/(1e3*pJS.particles.line_linked.condensed_mode.rotateX),h=d/(1e3*pJS.particles.line_linked.condensed_mode.rotateY);b.vx+=g,b.vy+=h}}},pJS.fn.vendors.interactivity.listeners=function(){if("window"==pJS.interactivity.detect_on)var a=window;else var a=pJS.canvas.el;if(a.onmousemove=function(b){if(a==window)var c=b.clientX,d=b.clientY;else var c=b.offsetX||b.clientX,d=b.offsetY||b.clientY;pJS&&(pJS.interactivity.mouse.pos_x=c,pJS.interactivity.mouse.pos_y=d,pJS.retina&&(pJS.interactivity.mouse.pos_x*=pJS.canvas.pxratio,pJS.interactivity.mouse.pos_y*=pJS.canvas.pxratio),pJS.interactivity.status="mousemove")},a.onmouseleave=function(a){pJS&&(pJS.interactivity.mouse.pos_x=0,pJS.interactivity.mouse.pos_y=0,pJS.interactivity.status="mouseleave")},pJS.interactivity.events.onclick.enable)switch(pJS.interactivity.events.onclick.mode){case"push":a.onclick=function(a){if(pJS)for(var b=0;b<pJS.interactivity.events.onclick.nb;b++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb,pJS.particles.opacity,{x:pJS.interactivity.mouse.pos_x,y:pJS.interactivity.mouse.pos_y}))};break;case"remove":a.onclick=function(a){pJS.particles.array.splice(0,pJS.interactivity.events.onclick.nb)}}},pJS.fn.vendors.interactivity.grabParticles=function(a,b){var c=a.x-b.x,d=a.y-b.y,e=Math.sqrt(c*c+d*d),f=a.x-pJS.interactivity.mouse.pos_x,g=a.y-pJS.interactivity.mouse.pos_y,h=Math.sqrt(f*f+g*g);if(e<=pJS.particles.line_linked.distance&&h<=pJS.interactivity.mouse.distance&&"mousemove"==pJS.interactivity.status){var i=pJS.particles.line_linked.color_rgb_line;pJS.canvas.ctx.beginPath(),pJS.canvas.ctx.strokeStyle="rgba("+i.r+","+i.g+","+i.b+","+(pJS.interactivity.line_linked.opacity-h/pJS.interactivity.mouse.distance)+")",pJS.canvas.ctx.moveTo(a.x,a.y),pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x,pJS.interactivity.mouse.pos_y),pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width,pJS.canvas.ctx.stroke(),pJS.canvas.ctx.closePath()}},pJS.fn.vendors.destroy=function(){cancelAnimationFrame(pJS.fn.requestAnimFrame),c.remove(),delete pJS},k(),pJS.particles.anim.enable&&l(),pJS.interactivity.enable&&pJS.fn.vendors.interactivity.listeners()}function hexToRgb(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(b,function(a,b,c,d){return b+b+c+c+d+d});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return c?{r:parseInt(c[1],16),g:parseInt(c[2],16),b:parseInt(c[3],16)}:null}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.particlesJS=function(a,b){"string"!=typeof a&&(b=a,a="particles-js"),a||(a="particles-js");var c=document.createElement("canvas");c.style.width="100%",c.style.height="100%";var d=document.getElementById(a).appendChild(c);null!=d&&launchParticlesJS(a,b)},particlesJS("particles-js",{particles:{color:"#fff",shape:"circle",opacity:1,size:4,size_random:!0,nb:150,line_linked:{enable_auto:!0,distance:100,color:"#fff",opacity:1,width:1,condensed_mode:{enable:!1,rotateX:600,rotateY:600}},anim:{enable:!0,speed:1}},interactivity:{enable:!0,mouse:{distance:250},detect_on:"canvas",mode:"grab",line_linked:{opacity:.5},events:{onclick:{enable:!0,mode:"push",nb:4}}},retina_detect:!0});