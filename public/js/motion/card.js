class Card extends HTMLElement{constructor(){super();const r=this.attachShadow({mode:"open"});r.innerHTML='<div class="f7-motion f7-motion-card"><div class="f7-el-page"><div class="f7-el-card"><div class="f7-el-card-body"><div class="f7-el-card-header-block"><div class="f7-el-card-header"></div></div><div class="f7-el-card-divider"></div><div class="f7-el-card-content"><div class="f7-el-card-text"><div></div><div></div><div></div><div></div></div></div><div class="f7-el-card-divider"></div><div class="f7-el-card-footer-block"><div class="f7-el-card-footer"></div></div></div></div></div></div></div>';const e=document.createElement("style");e.textContent="*{box-sizing:border-box;font-family:-apple-system,system-ui,Helvetica Neue,Helvetica,Arial,sans-serif}:host{--color-primary-shade:#ff927b;--color-primary-tint:#ffd6cd;--color-primary-rgb:255,180,164;--color-primary:#ffb4a4;--color-on-primary:#640d00;--color-primary-container:#8d1600;--color-on-primary-container:#ffdad3;--color-secondary:#e7bdb4;--color-on-secondary:#442a24;--color-secondary-container:#5d3f39;--color-on-secondary-container:#ffdad3;--color-surface:#201a19;--color-on-surface:#ede0dd;--color-surface-variant:#534340;--color-on-surface-variant:#d8c2bd;--color-outline:#a08c88;--color-outline-variant:#534340;--color-inverse-surface:#ede0dd;--color-inverse-on-surface:#362f2d;--color-inverse-primary:#b82000;--color-surface-1:#2b2220;--color-surface-2:#322624;--color-surface-3:#392b28;--color-surface-4:#3b2c2a;--color-surface-5:#3f302c;--color-surface-variant-rgb:83,67,64;--color-on-surface-variant-rgb:216,194,189;--color-surface-1-rgb:43,34,32;--color-surface-2-rgb:50,38,36;--color-surface-3-rgb:57,43,40;--color-surface-4-rgb:59,44,42;--color-surface-5-rgb:63,48,44}.f7-motion{padding:0 24px;height:240px;position:relative;overflow:hidden;perspective:1200px;transform-style:preserve-3d;border:1px solid var(--color-outline-variant)}.f7-motion *{animation-timing-function:cubic-bezier(0,1,0.2,1)!important;transform-style:preserve-3d}.f7-el-page{border-radius:16px;background:var(--color-surface);width:320px;height:560px;position:relative;border:1px solid transparent}.f7-el-bar-icon{width:24px;height:24px;background:var(--color-on-surface);border-radius:4px}.f7-el-navbar{height:64px;background:var(--color-surface-2);border-radius:16px 16px 0 0;display:flex;align-items:center;justify-content:space-between;padding:0 16px;position:relative}.f7-el-navbar-title{position:absolute;left:50%;margin-left:-64px;top:50%;margin-top:-8px;height:16px;background:var(--color-on-surface);width:128px}.f7-el-navbar-left,.f7-el-navbar-right{position:relative}.f7-el-page-text{margin:16px;transform-origin:left}.f7-el-page-text>div::after,.f7-el-page-text>div::before{content:'';height:12px;display:block;background:var(--color-on-surface-variant);opacity:.25}.f7-el-page-text>div::before{width:100%}.f7-el-page-text>div::after{margin-top:8px;width:80%}.f7-el-page-text>div+div{margin-top:8px}.f7-el-view{position:relative;list-style:none;padding:0;margin:32px 16px;border-radius:16px}.f7-el-view-item+.f7-el-view-item{margin-top:4px}.f7-el-view-item{background:var(--color-surface-1);min-height:48px;padding-left:16px;display:flex;align-items:center;position:relative}.f7-el-view-item:first-child{border-radius:16px 16px 0 0}.f7-el-view-item:last-child{border-radius:0 0 16px 16px}.f7-el-view-item-divider{background:var(--color-surface-1);height:4px;position:absolute;top:100%;width:100%;left:0;z-index:1;transform-origin:right}.f7-el-view-item-divider::after{content:'';height:1px;margin-left:16px;display:block;background:var(--color-outline)}.f7-el-view-item-media{width:24px;height:24px;min-width:24px;border-radius:24px;background:var(--color-on-surface);margin-right:16px}.f7-el-view-item-content{width:100%;min-width:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-right:16px;padding-top:8px;padding-bottom:8px}.f7-el-view-item-title{height:16px;background:var(--color-on-surface);width:100%;transform-origin:left}.f7-el-view-item-arrow{width:12px;height:12px;position:absolute;right:16px;top:18px;border-top:2px solid var(--color-on-surface-variant);border-right:2px solid var(--color-on-surface-variant);transform:rotate(45deg)}.f7-el-view-item-body{width:50%;min-width:0;display:flex;flex-direction:column;padding-top:5px}.f7-el-view-item-subtitle{height:12px;background:var(--color-on-surface);width:100%;transform-origin:top}.f7-el-view-item-text{margin-top:5px;transform-origin:left}.f7-el-view-item-text>div::before{content:'';height:12px;display:block;background:var(--color-on-surface-variant);opacity:.25}.f7-el-view-item-text>div::before{width:200%}.f7-el-view-item-text>div+div{margin-top:5px}.f7-el-view-item-badge{padding-right:8px}.f7-el-view-item-badge .f7-el-badge{width:18px;height:18px;border-radius:18px}.f7-motion{border:none}:host{color:var(--color-on-surface);width:370px;display:block}\n.f7-el-card{position:relative;margin:24px 12px;padding:0;border-radius:16px}.f7-el-card-body{background:var(--color-surface-1);display:flex;align-items:flex-start;justify-content:center;flex-direction:column;border-radius:16px}.f7-el-card-header-block{width:60%;min-height:48px;padding:16px}.f7-el-card-header{height:16px;background:var(--color-on-surface);transform-origin:left}.f7-el-card-divider{background:var(--color-outline);height:1px;top:100%;width:100%;left:0;z-index:1;transform-origin:right}.f7-el-card-content{width:55%;min-width:0;display:flex;flex-direction:column;padding:8px 16px}.f7-el-card-text{margin-top:5px;transform-origin:left}.f7-el-card-text>div::before{content:'';height:12px;display:block;background:var(--color-on-surface);opacity:.25}.f7-el-card-text>div::before{width:200%}.f7-el-card-text>div:nth-child(2n){width:80%}.f7-el-card-text>div+div{margin-top:5px}.f7-el-card-footer-block{min-height:48px;padding:16px;width:40%}.f7-el-card-footer{height:16px;background:var(--color-on-surface-variant);transform-origin:left}.f7-motion-card .f7-el-page{top:50%;transform:translateY(-50%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 16px}.f7-motion-card .f7-el-card{width:100%;border:1px solid transparent}.f7-motion-card .f7-el-card-body,.f7-motion-card .f7-el-card-divider,.f7-motion-card .f7-el-card-footer,.f7-motion-card .f7-el-card-header,.f7-motion-card .f7-el-card-text{opacity:0}.f7-el-card{animation:f7-motion-card-border 10s infinite}.f7-el-card-body{animation:f7-motion-card-card 10s infinite}.f7-el-card-header{animation:f7-motion-card-header 10s infinite}.f7-el-card-text{animation:f7-motion-card-content 10s infinite}.f7-el-card-footer{animation:f7-motion-card-footer 10s infinite}.f7-el-card-divider{animation:f7-motion-card-divider 10s infinite}@keyframes f7-motion-card-border{0%{border-color:transparent}15%{border-color:transparent}20%{border-color:var(--color-outline)}25%{border-color:var(--color-outline)}35%{border-color:var(--color-outline)}90%{border-color:var(--color-outline)}100%{border-color:transparent}}@keyframes f7-motion-card-card{0%{opacity:0;transform:translate3d(0,0,200px)}10%{opacity:1;transform:translate3d(0,0,0)}15%{opacity:1;transform:translate3d(0,0,0)}90%{opacity:1;transform:translate3d(0,0,0)}100%{opacity:0;transform:translate3d(0,0,0)}}@keyframes f7-motion-card-content{0%{opacity:0;transform:scaleX(0)}7.5%{opacity:0;transform:scaleX(0)}12.5%{opacity:1;transform:scaleX(0)}90%{opacity:1;transform:scaleX(1)}100%{opacity:0;transform:scaleX(1)}}@keyframes f7-motion-card-header{0%{opacity:0;transform:scaleX(0)}10%{opacity:0;transform:scaleX(0)}20%{opacity:0;transform:scaleX(0)}45%{opacity:1;transform:scaleX(1)}90%{opacity:1;transform:scaleX(1)}100%{opacity:0;transform:scaleX(0)}}@keyframes f7-motion-card-footer{0%{opacity:0;transform:scaleX(0)}10%{opacity:0;transform:scaleX(0)}25%{opacity:0;transform:scaleX(0)}45%{opacity:1;transform:scaleX(1)}90%{opacity:1;transform:scaleX(1)}100%{opacity:0;transform:scaleX(0)}}@keyframes f7-motion-card-divider{0%{opacity:0;transform:scaleX(0)}10%{opacity:0;transform:scaleX(0)}25%{opacity:0;transform:scaleX(0)}35%{opacity:0;transform:scaleX(0)}70%{opacity:1;transform:scaleX(1)}90%{opacity:1;transform:scaleX(1)}100%{opacity:0;transform:scaleX(1)}}",r.appendChild(e)}}customElements.define("f7-motion-card",Card);