(function framework7ComponentLoader(t,e){void 0===e&&(e=!0);var s=t.$,a=t.utils,o=(t.getDevice,t.getSupport,t.Class,t.Modal,t.ConstructorMethods,t.ModalMethods,a.bindMethods),n=a.getTranslate,f=a.nextFrame;const r={morphOpen(t,e){const a=this,o=s(t),r=s(e);if(0===r.length)return;r.transition(0).addClass("fab-morph-target-visible");const i={width:r[0].offsetWidth,height:r[0].offsetHeight,offset:r.offset(),borderRadius:r.css("border-radius"),zIndex:r.css("z-index")},h={width:o[0].offsetWidth,height:o[0].offsetHeight,offset:o.offset(),translateX:n(o[0],"x"),translateY:n(o[0],"y")};o[0].f7FabMorphData={$targetEl:r,target:i,fab:h};const l=h.offset.left+h.width/2-(i.offset.left+i.width/2)-h.translateX,d=h.offset.top+h.height/2-(i.offset.top+i.height/2)-h.translateY,p=i.width/h.width,b=i.height/h.height;let c=Math.ceil(parseInt(i.borderRadius,10)/Math.max(p,b));c>0&&(c+=2),o[0].f7FabMorphResizeHandler=function(){o.transition(0).transform(""),r.transition(0),i.width=r[0].offsetWidth,i.height=r[0].offsetHeight,i.offset=r.offset(),h.offset=o.offset();const t=h.offset.left+h.width/2-(i.offset.left+i.width/2)-h.translateX,e=h.offset.top+h.height/2-(i.offset.top+i.height/2)-h.translateY,s=i.width/h.width,a=i.height/h.height;o.transform(`translate3d(${-t}px, ${-e}px, 0) scale(${s}, ${a})`)},r.css("opacity",0).transform(`scale(${1/p}, ${1/b})`),o.addClass("fab-opened").css("z-index",i.zIndex-1).transform(`translate3d(${-l}px, ${-d}px, 0)`),o.transitionEnd((()=>{r.transition(""),f((()=>{r.css("opacity",1).transform("scale(1,1)"),o.transform(`translate3d(${-l}px, ${-d}px, 0) scale(${p}, ${b})`).css("border-radius",`${c}px`).css("box-shadow","none").css("opacity","0")})),a.on("resize",o[0].f7FabMorphResizeHandler),r.parents(".page-content").length>0&&r.parents(".page-content").on("scroll",o[0].f7FabMorphResizeHandler)}))},morphClose(t){const e=s(t),a=e[0].f7FabMorphData;if(!a)return;const{$targetEl:o,target:n,fab:r}=a;if(0===o.length)return;const i=r.offset.left+r.width/2-(n.offset.left+n.width/2)-r.translateX,h=r.offset.top+r.height/2-(n.offset.top+n.height/2)-r.translateY,l=n.width/r.width,d=n.height/r.height;this.off("resize",e[0].f7FabMorphResizeHandler),o.parents(".page-content").length>0&&o.parents(".page-content").off("scroll",e[0].f7FabMorphResizeHandler),o.css("opacity",0).transform(`scale(${1/l}, ${1/d})`),e.transition("").css("box-shadow","").css("border-radius","").css("opacity","1").transform(`translate3d(${-i}px, ${-h}px, 0)`),e.transitionEnd((()=>{e.css("z-index","").removeClass("fab-opened").transform(""),f((()=>{e.transitionEnd((()=>{o.removeClass("fab-morph-target-visible").css("opacity","").transform("").transition("")}))}))}))},open(t,e){const a=this,o=s(t).eq(0),n=o.find(".fab-buttons");if(o.length&&!o.hasClass("fab-opened")&&(n.length||o.hasClass("fab-morph"))){if(a.fab.openedEl){if(a.fab.openedEl===o[0])return;a.fab.close(a.fab.openedEl)}a.fab.openedEl=o[0],o.hasClass("fab-morph")?a.fab.morphOpen(o,e||o.attr("data-morph-to")):o.addClass("fab-opened"),o.siblings(".fab-backdrop").addClass("backdrop-in"),o.trigger("fab:open")}},close(t=".fab-opened"){const e=this,a=s(t).eq(0),o=a.find(".fab-buttons");a.length&&a.hasClass("fab-opened")&&(o.length||a.hasClass("fab-morph"))&&(e.fab.openedEl=null,a.hasClass("fab-morph")?e.fab.morphClose(a):a.removeClass("fab-opened"),a.siblings(".fab-backdrop").removeClass("backdrop-in"),a.trigger("fab:close"))},toggle(t){s(t).hasClass("fab-opened")?this.fab.close(t):this.fab.open(t)}};var i={name:"fab",create(){o(this,{fab:{openedEl:null,...r}})},clicks:{".fab > a":function(t){this.fab.toggle(t.parents(".fab"))},".fab-open":function(t,e={}){this.fab.open(e.fab)},".fab-close":function(t,e={}){this.fab.close(e.fab)},".fab-backdrop":function(){this.fab.close()}}};if(e){if(t.prototype.modules&&t.prototype.modules[i.name])return;t.use(i),t.instance&&(t.instance.useModuleParams(i,t.instance.params),t.instance.useModule(i))}return i}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))