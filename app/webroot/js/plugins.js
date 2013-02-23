// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
 * Default text - jQuery plugin for html5 dragging files from desktop to browser
 *
 * Author: Weixi Yen
 *
 * Email: [Firstname][Lastname]@gmail.com
 * 
 * Copyright (c) 2010 Resopollution
 * 
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function(e){function a(e){t.drop(e);u=e.dataTransfer.files;if(u===null||u===undefined){t.error(r[0]);return false}o=u.length;c();e.preventDefault();return false}function f(n,r,i){var s="--",o="\r\n",u="";e.each(t.data,function(e,t){if(typeof t==="function")t=t();u+=s;u+=i;u+=o;u+='Content-Disposition: form-data; name="'+e+'"';u+=o;u+=o;u+=t;u+=o});u+=s;u+=i;u+=o;u+='Content-Disposition: form-data; name="'+t.paramname+'"';u+='; filename="'+n+'"';u+=o;u+="Content-Type: application/octet-stream";u+=o;u+=o;u+=r;u+=o;u+=s;u+=i;u+=s;u+=o;return u}function l(e){if(e.lengthComputable){var n=Math.round(e.loaded*100/e.total);if(this.currentProgress!=n){this.currentProgress=n;t.progressUpdated(this.index,this.file,this.currentProgress);var r=(new Date).getTime();var i=r-this.currentStart;if(i>=t.refresh){var s=e.loaded-this.startData;var o=s/i;t.speedUpdated(this.index,this.file,o);this.startData=e.loaded;this.currentStart=r}}}}function c(){function g(r){if(r.target.index==undefined){r.target.index=h(r.total)}var i=new XMLHttpRequest,a=i.upload,c=u[r.target.index],d=r.target.index,m=(new Date).getTime(),g="------multipartformboundary"+(new Date).getTime(),y;newName=p(c.name);if(typeof newName==="string"){y=f(newName,r.target.result,g)}else{y=f(c.name,r.target.result,g)}a.index=d;a.file=c;a.downloadStartTime=m;a.currentStart=m;a.currentProgress=0;a.startData=0;a.addEventListener("progress",l,false);i.open("POST",t.url,true);i.setRequestHeader("content-type","multipart/form-data; boundary="+g);i.sendAsBinary(y);t.uploadStarted(d,c,o);i.onload=function(){if(i.responseText){var r=(new Date).getTime(),u=r-m,a=t.uploadFinished(d,c,jQuery.parseJSON(i.responseText),u);e++;if(e==o-n){v()}if(a===false)s=true}}}s=false;if(!u){t.error(r[0]);return false}var e=0,n=0;if(o>t.maxfiles){t.error(r[1]);return false}for(var i=0;i<o;i++){if(s)return false;try{if(d(u[i])!=false){if(i===o)return;var a=new FileReader,c=1048576*t.maxfilesize;a.index=i;if(u[i].size>c){t.error(r[2],u[i],i);n++;continue}a.onloadend=g;a.readAsBinaryString(u[i])}else{n++}}catch(m){t.error(r[0]);return false}}}function h(e){for(var t=0;t<o;t++){if(u[t].size==e){return t}}return undefined}function p(e){return t.rename(e)}function d(e){return t.beforeEach(e)}function v(){return t.afterAll()}function m(e){clearTimeout(i);e.preventDefault();t.dragEnter(e)}function g(e){clearTimeout(i);e.preventDefault();t.docOver(e);t.dragOver(e)}function y(e){clearTimeout(i);t.dragLeave(e);e.stopPropagation()}function b(e){e.preventDefault();t.docLeave(e);return false}function w(e){clearTimeout(i);e.preventDefault();t.docEnter(e);return false}function E(e){clearTimeout(i);e.preventDefault();t.docOver(e);return false}function S(e){i=setTimeout(function(){t.docLeave(e)},200)}function x(){}jQuery.event.props.push("dataTransfer");var t={},n={url:"",refresh:1e3,paramname:"userfile",maxfiles:25,maxfilesize:1,data:{},drop:x,dragEnter:x,dragOver:x,dragLeave:x,docEnter:x,docOver:x,docLeave:x,beforeEach:x,afterAll:x,rename:x,error:function(e,t,n){alert(e)},uploadStarted:x,uploadFinished:x,progressUpdated:x,speedUpdated:x},r=["BrowserNotSupported","TooManyFiles","FileTooLarge"],i,s=false,o=0,u;e.fn.filedrop=function(r){t=e.extend({},n,r);this.bind("drop",a).bind("dragenter",m).bind("dragover",g).bind("dragleave",y);e(document).bind("drop",b).bind("dragenter",w).bind("dragover",E).bind("dragleave",S)};try{if(XMLHttpRequest.prototype.sendAsBinary)return;XMLHttpRequest.prototype.sendAsBinary=function(e){function t(e){return e.charCodeAt(0)&255}var n=Array.prototype.map.call(e,t);var r=new Uint8Array(n);this.send(r.buffer)}}catch(T){}})(jQuery);

/*!
 * Infinite Ajax Scroll, a jQuery plugin
 * Version v0.1.6
 * http://webcreate.nl/
 *
 * Copyright (c) 2011-2012 Jeroen Fiege
 * Licensed under the MIT License:
 * http://webcreate.nl/license
 */
(function(b){b.ias=function(d){var m=b.extend({},b.ias.defaults,d);var c=new b.ias.util();var j=new b.ias.paging(m.scrollContainer);var h=(m.history?new b.ias.history():false);var f=this;r();function r(){j.onChangePage(function(x,v,w){if(h){h.setPage(x,w)}m.onPageChange.call(this,x,w,v)});s();if(h&&h.havePage()){q();pageNum=h.getPage();c.forceScrollTop(function(){if(pageNum>1){l(pageNum);curTreshold=p(true);b("html,body").scrollTop(curTreshold)}else{s()}})}return f}function s(){n();m.scrollContainer.scroll(g)}function g(){if(m.scrollContainer==b.ias.defaults.scrollContainer){scrTop=m.scrollContainer.scrollTop()}else{scrTop=m.scrollContainer.offset().top}wndHeight=m.scrollContainer.height();curScrOffset=scrTop+wndHeight;if(curScrOffset>=p()){t(curScrOffset)}}function q(){m.scrollContainer.unbind("scroll",g)}function n(){b(m.pagination).hide()}function p(v){el=b(m.container).find(m.item).last();if(el.size()==0){return 0}treshold=el.offset().top+el.height();if(!v){treshold+=m.tresholdMargin}return treshold}function t(w,v){urlNextPage=b(m.next).attr("href");if(!urlNextPage){if(m.noneleft){b(m.container).find(m.item).last().after(m.noneleft)}return q()}if(m.beforePageChange&&b.isFunction(m.beforePageChange)){if(m.beforePageChange(w,urlNextPage)===false){return}}j.pushPages(w,urlNextPage);q();o();e(urlNextPage,function(y,x){result=m.onLoadItems.call(this,x);if(result!==false){b(x).hide();curLastItem=b(m.container).find(m.item).last();curLastItem.after(x);b(x).fadeIn()}b(m.pagination).replaceWith(b(m.pagination,y));k();s();m.onRenderComplete.call(this,x);if(v){v.call(this)}})}function e(w,x){var v=[];b.get(w,null,function(y){container=b(m.container,y).eq(0);if(0==container.length){container=b(y).filter(m.container).eq(0)}if(container){container.find(m.item).each(function(){v.push(this)})}if(x){x.call(this,y,v)}},"html")}function l(v){curTreshold=p(true);if(curTreshold>0){t(curTreshold,function(){q();if((j.getCurPageNum(curTreshold)+1)<v){l(v);b("html,body").animate({scrollTop:curTreshold},400,"swing")}else{b("html,body").animate({scrollTop:curTreshold},1000,"swing");s()}})}}function u(){loader=b(".ias_loader");if(loader.size()==0){loader=b("<div class='ias_loader'>"+m.loader+"</div>");loader.hide()}return loader}function o(){loader=u();if(m.customLoaderProc!==false){m.customLoaderProc(loader)}else{el=b(m.container).find(m.item).last();el.after(loader);loader.fadeIn()}}function k(){loader=u();loader.remove()}};function a(c){if(window.console&&window.console.log){window.console.log(c)}}b.ias.defaults={container:"#container",scrollContainer:b(window),item:".item",pagination:"#pagination",next:".next",noneleft:false,loader:'<img src="images/loader.gif"/>',tresholdMargin:0,history:true,onPageChange:function(){},beforePageChange:function(){},onLoadItems:function(){},onRenderComplete:function(){},customLoaderProc:false};b.ias.util=function(){var d=false;var f=false;var c=this;e();function e(){b(window).load(function(){d=true})}this.forceScrollTop=function(g){b("html,body").scrollTop(0);if(!f){if(!d){setTimeout(function(){c.forceScrollTop(g)},1)}else{g.call();f=true}}}};b.ias.paging=function(){var e=[[0,document.location.toString()]];var h=function(){};var d=1;j();function j(){b(window).scroll(g)}function g(){scrTop=b(window).scrollTop();wndHeight=b(window).height();curScrOffset=scrTop+wndHeight;curPageNum=c(curScrOffset);curPagebreak=f(curScrOffset);if(d!=curPageNum){h.call(this,curPageNum,curPagebreak[0],curPagebreak[1])}d=curPageNum}function c(k){for(i=(e.length-1);i>0;i--){if(k>e[i][0]){return i+1}}return 1}this.getCurPageNum=function(k){return c(k)};function f(k){for(i=(e.length-1);i>=0;i--){if(k>e[i][0]){return e[i]}}return null}this.onChangePage=function(k){h=k};this.pushPages=function(k,l){e.push([k,l])}};b.ias.history=function(){var d=false;var c=false;e();function e(){c=!!(window.history&&history.pushState&&history.replaceState);c=false}this.setPage=function(g,f){this.updateState({page:g},"",f)};this.havePage=function(){return(this.getState()!=false)};this.getPage=function(){if(this.havePage()){stateObj=this.getState();return stateObj.page}return 1};this.getState=function(){if(c){stateObj=history.state;if(stateObj&&stateObj.ias){return stateObj.ias}}else{haveState=(window.location.hash.substring(0,7)=="#/page/");if(haveState){pageNum=parseInt(window.location.hash.replace("#/page/",""));return{page:pageNum}}}return false};this.updateState=function(g,h,f){if(d){this.replaceState(g,h,f)}else{this.pushState(g,h,f)}};this.pushState=function(g,h,f){if(c){history.pushState({ias:g},h,f)}else{hash=(g.page>0?"#/page/"+g.page:"");window.location.hash=hash}d=true};this.replaceState=function(g,h,f){if(c){history.replaceState({ias:g},h,f)}else{this.pushState(g,h,f)}}}})(jQuery);
