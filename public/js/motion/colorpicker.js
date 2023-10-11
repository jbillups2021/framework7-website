class ColorPicker extends HTMLElement{constructor(){super();const o=this.attachShadow({mode:"open"});o.innerHTML='<div class="f7-motion f7-motion-colorpicker"><div class="f7-el-page"><div class="f7-el-input"><div class="f7-el-input-color"></div><div class="f7-el-input-value"><span>#ff0000</span> <span>#00fffe</span></div></div></div><div class="f7-el-popover"><div class="f7-el-popover-hs"></div></div></div></div>';const e=document.createElement("style");e.textContent="*{box-sizing:border-box;font-family:-apple-system,system-ui,Helvetica Neue,Helvetica,Arial,sans-serif}:host{--color-primary-shade:#ff927b;--color-primary-tint:#ffd6cd;--color-primary-rgb:255,180,164;--color-primary:#ffb4a4;--color-on-primary:#640d00;--color-primary-container:#8d1600;--color-on-primary-container:#ffdad3;--color-secondary:#e7bdb4;--color-on-secondary:#442a24;--color-secondary-container:#5d3f39;--color-on-secondary-container:#ffdad3;--color-surface:#201a19;--color-on-surface:#ede0dd;--color-surface-variant:#534340;--color-on-surface-variant:#d8c2bd;--color-outline:#a08c88;--color-outline-variant:#534340;--color-inverse-surface:#ede0dd;--color-inverse-on-surface:#362f2d;--color-inverse-primary:#b82000;--color-surface-1:#2b2220;--color-surface-2:#322624;--color-surface-3:#392b28;--color-surface-4:#3b2c2a;--color-surface-5:#3f302c;--color-surface-variant-rgb:83,67,64;--color-on-surface-variant-rgb:216,194,189;--color-surface-1-rgb:43,34,32;--color-surface-2-rgb:50,38,36;--color-surface-3-rgb:57,43,40;--color-surface-4-rgb:59,44,42;--color-surface-5-rgb:63,48,44}.f7-motion{padding:0 24px;height:240px;position:relative;overflow:hidden;perspective:1200px;transform-style:preserve-3d;border:1px solid var(--color-outline-variant)}.f7-motion *{animation-timing-function:cubic-bezier(0,1,0.2,1)!important;transform-style:preserve-3d}.f7-el-page{border-radius:16px;background:var(--color-surface);width:320px;height:560px;position:relative;border:1px solid transparent}.f7-el-bar-icon{width:24px;height:24px;background:var(--color-on-surface);border-radius:4px}.f7-el-navbar{height:64px;background:var(--color-surface-2);border-radius:16px 16px 0 0;display:flex;align-items:center;justify-content:space-between;padding:0 16px;position:relative}.f7-el-navbar-title{position:absolute;left:50%;margin-left:-64px;top:50%;margin-top:-8px;height:16px;background:var(--color-on-surface);width:128px}.f7-el-navbar-left,.f7-el-navbar-right{position:relative}.f7-el-page-text{margin:16px;transform-origin:left}.f7-el-page-text>div::after,.f7-el-page-text>div::before{content:'';height:12px;display:block;background:var(--color-on-surface-variant);opacity:.25}.f7-el-page-text>div::before{width:100%}.f7-el-page-text>div::after{margin-top:8px;width:80%}.f7-el-page-text>div+div{margin-top:8px}.f7-el-view{position:relative;list-style:none;padding:0;margin:32px 16px;border-radius:16px}.f7-el-view-item+.f7-el-view-item{margin-top:4px}.f7-el-view-item{background:var(--color-surface-1);min-height:48px;padding-left:16px;display:flex;align-items:center;position:relative}.f7-el-view-item:first-child{border-radius:16px 16px 0 0}.f7-el-view-item:last-child{border-radius:0 0 16px 16px}.f7-el-view-item-divider{background:var(--color-surface-1);height:4px;position:absolute;top:100%;width:100%;left:0;z-index:1;transform-origin:right}.f7-el-view-item-divider::after{content:'';height:1px;margin-left:16px;display:block;background:var(--color-outline)}.f7-el-view-item-media{width:24px;height:24px;min-width:24px;border-radius:24px;background:var(--color-on-surface);margin-right:16px}.f7-el-view-item-content{width:100%;min-width:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-right:16px;padding-top:8px;padding-bottom:8px}.f7-el-view-item-title{height:16px;background:var(--color-on-surface);width:100%;transform-origin:left}.f7-el-view-item-arrow{width:12px;height:12px;position:absolute;right:16px;top:18px;border-top:2px solid var(--color-on-surface-variant);border-right:2px solid var(--color-on-surface-variant);transform:rotate(45deg)}.f7-el-view-item-body{width:50%;min-width:0;display:flex;flex-direction:column;padding-top:5px}.f7-el-view-item-subtitle{height:12px;background:var(--color-on-surface);width:100%;transform-origin:top}.f7-el-view-item-text{margin-top:5px;transform-origin:left}.f7-el-view-item-text>div::before{content:'';height:12px;display:block;background:var(--color-on-surface-variant);opacity:.25}.f7-el-view-item-text>div::before{width:200%}.f7-el-view-item-text>div+div{margin-top:5px}.f7-el-view-item-badge{padding-right:8px}.f7-el-view-item-badge .f7-el-badge{width:18px;height:18px;border-radius:18px}.f7-motion{border:none}:host{color:var(--color-on-surface);width:370px;display:block}\n.f7-motion-colorpicker .f7-el-page{top:50%;transform:translateY(-50%);display:flex;flex-direction:column;justify-content:center;padding:0 16px}.f7-motion-colorpicker .f7-el-input{position:relative;border-radius:4px;background:var(--color-surface);border:1px solid var(--color-outline);height:58px;padding:0 16px;display:flex;align-items:center;font-size:16px;font-weight:700;top:72px}.f7-motion-colorpicker .f7-el-input-color{width:24px;height:24px;background:red;margin-right:16px;border-radius:4px;animation:f7-motion-colorpicker-input-color 10s infinite;animation-timing-function:ease-in-out!important}.f7-motion-colorpicker .f7-el-input-value{position:relative}.f7-motion-colorpicker .f7-el-input-value span:first-child{animation:f7-motion-colorpicker-input-value-1 10s infinite step-start!important}.f7-motion-colorpicker .f7-el-input-value span:nth-child(2){position:absolute;left:0;top:0;animation:f7-motion-colorpicker-input-value-2 10s infinite step-start!important}.f7-motion-colorpicker .f7-el-popover{width:100%;height:160px;bottom:50%;margin-bottom:calc(26px - 72px);position:absolute;background:var(--color-surface-5);border-radius:28px;padding:16px;width:240px;left:7%;display:flex;flex-direction:column;justify-content:flex-start;animation:f7-motion-colorpicker-popover 10s infinite}.f7-motion-colorpicker .f7-el-popover::before{content:'';position:absolute;top:100%;left:18%;transform:translateX(-50%);border:10px solid transparent;border-top-color:var(--color-surface-5)}.f7-motion-colorpicker .f7-el-popover-hs{width:100%;height:100%;position:relative;background-image:linear-gradient(to right,red,#feff00,#0f0,#00feff,#00f,#ff00fe,red);border-radius:4px}.f7-motion-colorpicker .f7-el-popover-hs::before{border-radius:4px;content:'';position:absolute;left:0;top:0;width:100%;height:100%;background-image:linear-gradient(to bottom,rgba(255,255,255,0),#000)}.f7-motion-colorpicker .f7-el-popover-hs::after{width:16px;height:16px;background:red;border:1px solid #fff;position:absolute;content:'';left:0;top:0;margin-top:-8px;margin-left:-8px;border-radius:50%;animation:f7-motion-colorpicker-handle 10s infinite;animation-timing-function:ease-in-out!important}@keyframes f7-motion-colorpicker-popover{0%,10%,100%{transform:translateY(25%) scale(.75);opacity:0}20%,90%{transform:translateY(0) scale(1);opacity:1}}@keyframes f7-motion-colorpicker-handle{0%,100%,30%,80%{transform:translateX(0);background-color:red}50%,60%{transform:translateX(96px);background-color:#00fffe}}@keyframes f7-motion-colorpicker-input-color{0%,100%,30%,80%{background-color:red}50%,60%{background-color:#00fffe}}@keyframes f7-motion-colorpicker-input-value-1{0%{opacity:1}50%{opacity:1}80%{opacity:0}100%{opacity:1}}@keyframes f7-motion-colorpicker-input-value-2{0%{opacity:0}50%{opacity:0}80%{opacity:1}100%{opacity:0}}",o.appendChild(e)}}customElements.define("f7-motion-colorpicker",ColorPicker);