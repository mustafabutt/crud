// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2011-06-16
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
ws_basic= function (options){var $=jQuery;var $innerCont;var $IMGs;this.init= function (aCont){var $container=$(aCont);var $Elements=$("a",$container);$IMGs=$Elements.find("img");$innerCont=$("<div style=\"position:relative;\"></div>");$container.append($innerCont);$innerCont.append($Elements);$container.css({position:"relative",overflow:"hidden"});$innerCont.css({position:"relative",width:options.outWidth*$Elements.length*1.1+"px",left:0,top:0});$IMGs.css({position:"static"});};this.go= function (index){$innerCont.stop(true).animate({left:-$($IMGs.get(index)).position().left},options.duration,"easeInOutExpo");return true;};};ws_basic=function(options){var $=jQuery;var $innerCont;var $IMGs;this.init=function(aCont){var $container=$(aCont);var $Elements=$("a",$container);$IMGs=$Elements.find("img");$innerCont=$("<div style=\"position:relative;\"></div>");$container.append($innerCont);$innerCont.append($Elements);$container.css({position:"relative",overflow:"hidden"});$innerCont.css({position:"relative",width:options.outWidth*$Elements.length*1.1+"px",left:0,top:0});$IMGs.css({position:"static"});};this.go=function(index){$innerCont.stop(true).animate({left:-$($IMGs.get(index)).position().left},options.duration,"easeInOutExpo");return true;};};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2011-06-16
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.fn.wowSlider=function(options){var $this=this;var $=jQuery;options=$.extend({effect:function(options){var images;this.init=function(aCont){images=aCont.find("img");images.each(function(Index){if(!Index){$(this).show();}else{$(this).hide();}});};this.go=function(new_index,curIdx){$(images.get(new_index)).fadeIn(options.duration);$(images.get(curIdx)).fadeOut(options.duration);return true;};},prev:"",next:"",duration:1000,delay:2000,outWidth:960,outHeight:360,width:960,height:360,caption:true,controls:true,autoPlay:true,bullets:true,onStep:function(){},stopOnHover:0},options);options.loop=options.loop||Number.MAX_VALUE;var $Elements=$this.find(".ws_images A");var images=$Elements.find("IMG");$Elements.each(function(index){var inner=$(this).html()||"";var pos=inner.indexOf(">",inner);if(pos>=0){$(this).data("descr",inner.substr(pos+1));if(pos<inner.length-1){$(this).html(inner.substr(0,pos+1));}}$(this).css({'font-size':0});});var elementsCount=$Elements.length;var frame=$("A.ws_frame",$this).get(0);var curIdx=0;function go(index){index=(index%elementsCount+elementsCount)%elementsCount;if(curIdx==index){return;}var current=effect.go(index,curIdx);if(!current){return;}if(typeof current!="object"){current=$Elements[index];}curIdx=index;go2(index);if(options.caption){setTitle(current);}options.onStep(curIdx);}var startX,startY,isMoving=0;var _this=$this.get(0);if(_this.addEventListener){_this.addEventListener("touchmove",function(e){if(isMoving){var dx=startX-e.touches[0].pageX;var dy=startY-e.touches[0].pageY;if(Math.abs(dx)>20||Math.abs(dy)>20){startX=startY=isMoving=0;forceGo(e,curIdx+(dx+dy>0?-1:1));}}},false);_this.addEventListener("touchstart",function(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=1;}else{isMoving=0;}},false);_this.addEventListener("touchend",function(e){isMoving=0;},false);}function go2(index){if(options.bullets){setBullet(index);}if(frame){frame.setAttribute("href",$Elements.get(index).href);frame.setAttribute("target",$Elements.get(index).target);}}var autoPlayTimer;function restartPlay(){stopPlay();if(options.autoPlay){autoPlayTimer=setTimeout(function(){go(curIdx<elementsCount-1?curIdx+1:0);if(!curIdx&&!--options.loop){options.autoPlay=0;}restartPlay();},options.delay+options.duration);}}function stopPlay(){if(autoPlayTimer){clearTimeout(autoPlayTimer);}autoPlayTimer=null;}function forceGo(event,index){stopPlay();event.preventDefault();go(index);restartPlay();}$Elements.find("IMG").css("position","absolute");if(typeof options.effect=="string"){options.effect=window["ws_"+options.effect];}var effect=new options.effect(options,images);effect.init($(".ws_images",$this));$Elements.find("IMG").css("visibility","visible");var ic=c=$(".ws_images",$this);var t="WOWSlider.com";c=t?$("<div></div>"):0;if(c){c.css({position:"absolute",right:"2px",bottom:"2px",padding:"0 0 0 0"});ic.append(c);}if(c&&document.all){var f=$("<iframe src=\"javascript:false\"></iframe>");f.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"});f.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"});c.append(f);}var d=c?$(document.createElement("A")):c;if(d){d.css({position:"relative",display:"block",'background-color':"#E4EFEB",color:"#837F80",'font-family':"Lucida Grande,sans-serif",'font-size':"11px",'font-weight':"normal",'font-style':"normal",'-moz-border-radius':"5px",'border-radius':"5px",padding:"1px 5px",width:"auto",height:"auto",margin:"0 0 0 0",outline:"none"});d.attr({href:"ht"+"tp://"+t.toLowerCase()});d.html(t);d.bind("contextmenu",function(eventObject){return false;});c.append(d);}if(options.controls){var $next_photo=$("<a href=\"#\" class=\"ws_next\">"+options.next+"</a>");var $prev_photo=$("<a href=\"#\" class=\"ws_prev\">"+options.prev+"</a>");$this.append($next_photo);$this.append($prev_photo);$next_photo.bind("click",function(e){forceGo(e,curIdx+1);});$prev_photo.bind("click",function(e){forceGo(e,curIdx-1);});}function initBullets(){var $bullets_cont=$this.find(".ws_bullets>div");var $bullets=$("a",$bullets_cont);$bullets.click(function(e){forceGo(e,$(e.target).index());});var $thumbs=$bullets.find("IMG");if($thumbs.length){var mainFrame=$("<div class=\"ws_bulframe\"/>").appendTo($bullets_cont);var imgContainer=$("<div/>").css({width:$thumbs.length+1+"00%"}).appendTo($("<div/>").appendTo(mainFrame));$thumbs.appendTo(imgContainer);$("<span/>").appendTo(mainFrame);var curIndex=-1;function moveTooltip(index){if(index<0){index=0;}$($bullets.get(curIndex)).removeClass("ws_overbull");$($bullets.get(index)).addClass("ws_overbull");mainFrame.show();var mainCSS={left:$bullets.get(index).offsetLeft-mainFrame.width()/2};var contCSS={left:-$thumbs.get(index).offsetLeft};if(curIndex<0){mainFrame.css(mainCSS);imgContainer.css(contCSS);}else{if(!document.all){mainCSS.opacity=1;}mainFrame.stop().animate(mainCSS,"fast");imgContainer.stop().animate(contCSS,"fast");}curIndex=index;}$bullets.hover(function(){moveTooltip($(this).index());});var hideTime;$bullets_cont.hover(function(){if(hideTime){clearTimeout(hideTime);hideTime=0;}moveTooltip(curIndex);},function(){$bullets.removeClass("ws_overbull");if(document.all){if(!hideTime){hideTime=setTimeout(function(){mainFrame.hide();hideTime=0;},400);}}else{mainFrame.stop().animate({opacity:0},{duration:"fast",complete:function(){mainFrame.hide();}});}});$bullets_cont.click(function(e){forceGo(e,$(e.target).index());});}}function setBullet(new_index){$(".ws_bullets A",$this).each(function(index){if(index==new_index){$(this).addClass("ws_selbull");}else{$(this).removeClass("ws_selbull");}});}if(options.caption){$caption=$("<div class='ws-title' style='display:none'></div>");$this.append($caption);$caption.bind("mouseover",function(e){stopPlay();});$caption.bind("mouseout",function(e){restartPlay();});}function setTitle(A){var title=$("img",A).attr("title");var descr=$(A).data("descr");var $Title=$(".ws-title",$this);$Title.hide();if(title||descr){$Title.html((title?"<span>"+title+"</span>":"")+(descr?"<div>"+descr+"</div>":""));showWithSlide($Title,{direction:"left",easing:"easeInOutExpo",complete:function(){if($.browser.msie){$Title.get(0).style.removeAttribute("filter");}},duration:1000});}}if(options.bullets){initBullets();}go2(0);if(options.caption){setTitle($Elements[0]);}if(options.stopOnHover){this.bind("mouseover",function(e){stopPlay();});this.bind("mouseout",function(e){restartPlay();});}restartPlay();function showWithSlide(element,options){var $=jQuery;element.stop(true,true);var bkp_prop={};var props=["position","top","bottom","left","right"];for(var i=0;i<props.length;i++){bkp_prop[props[i]]=element[0].style[props[i]];}element.show();var wrap_props={width:element.outerWidth(true),height:element.outerHeight(true),'float':element.css("float"),overflow:"hidden",opacity:0},wrapper=$("<div></div>").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});element.wrap(wrapper);wrapper=element.parent();if(element.css("position")=="static"){wrapper.css({position:"relative"});element.css({position:"relative"});}else{$.extend(wrap_props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){wrap_props[pos]=element.css(pos);if(isNaN(parseInt(wrap_props[pos],10))){wrap_props[pos]="auto";}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"});}wrapper.css(wrap_props).show();var direction=options.direction||"left";var ref=direction=="up"||direction=="down"?"top":"left";var motion=direction=="up"||direction=="left"?"pos":"neg";var distance=options.distance||(ref=="top"?element.outerHeight({margin:true}):element.outerWidth({margin:true}));element.css(ref,motion=="pos"?isNaN(distance)?"-"+distance:-distance:distance);var animation={};animation[ref]=(motion=="pos"?"+=":"-=")+distance;wrapper.animate({opacity:1},{duration:options.duration,easing:options.easing});element.animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:function(){for(var p in bkp_prop){element[0].style[p]=bkp_prop[p];}element.parent().replaceWith(element);if(options.complete){options.complete();}}});}return this;};jQuery.extend(jQuery.easing,{easeInOutExpo:function(x,t,b,c,d){if(t==0){return b;}if(t==d){return b+c;}if((t/=d/2)<1){return c/2*Math.pow(2,10*(t-1))+b;}return c/2*(-Math.pow(2,-10*--t)+2)+b;}});// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2011-06-16
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container8").wowSlider({effect:"basic",prev:"",next:"",duration:12*100,delay:58*100,outWidth:304,outHeight:302,width:304,height:302,autoPlay:true,stopOnHover:true,loop:false,bullets:true,caption:false,controls:true});