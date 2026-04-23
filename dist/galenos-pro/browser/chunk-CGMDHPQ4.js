import{a as Me}from"./chunk-OGA4IDSG.js";import{a as ze}from"./chunk-753FUIGS.js";import{a as Ie}from"./chunk-TYCRIPJA.js";import{b as pe,c as z,e as ge,f as ue,h as fe,j as be,k as he,l as _e,n as ve,q as xe,z as ke}from"./chunk-FM3UZH2X.js";import{a as Ce}from"./chunk-7L2VYLD4.js";import{g as Te}from"./chunk-RUTMW7AO.js";import{d as we}from"./chunk-YHTTA4WQ.js";import{a as me}from"./chunk-YGLT5QOP.js";import{e as de}from"./chunk-WAVBO3GS.js";import"./chunk-YIPX7VFL.js";import{ka as ce,la as L,oa as j,qa as V,ra as R,sa as h,ta as ye}from"./chunk-VFOJCOMC.js";import"./chunk-Y6STUIGR.js";import{j as ae,l as re,n as le,r as w}from"./chunk-ZE7SN3BU.js";import{Ab as m,Ba as $,Bb as N,Cb as F,Db as Y,Ea as l,Fb as T,Gb as k,I as S,Jb as Z,L as E,Lb as I,Mb as ee,N as u,Nb as b,Ob as d,Pb as ne,S as q,Sa as C,T as Q,U as W,Wa as P,Wb as A,Xa as B,Ya as y,Yb as te,Z as U,ba as M,db as f,eb as J,fb as K,ga as x,gb as p,hb as g,hc as oe,lb as r,lc as ie,mb as i,nb as s,ob as c,pc as se,ub as O,vb as X,wc as H,zb as D}from"./chunk-HDRZ6NOY.js";import{a as G}from"./chunk-4CLCTAJ7.js";var Se=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var Ge=["container"],He=["icon"],qe=["closeicon"],Qe=["*"],We=e=>({closeCallback:e});function Ue(e,a){e&1&&O(0)}function $e(e,a){if(e&1&&y(0,Ue,1,0,"ng-container",4),e&2){let n=m();r("ngTemplateOutlet",n.iconTemplate||n._iconTemplate)}}function Je(e,a){if(e&1&&c(0,"i",1),e&2){let n=m();b(n.cn(n.cx("icon"),n.icon)),r("pBind",n.ptm("icon")),f("data-p",n.dataP)}}function Ke(e,a){e&1&&O(0)}function Xe(e,a){if(e&1&&y(0,Ke,1,0,"ng-container",5),e&2){let n=m();r("ngTemplateOutlet",n.containerTemplate||n._containerTemplate)("ngTemplateOutletContext",te(2,We,n.closeCallback))}}function Ye(e,a){if(e&1&&c(0,"span",9),e&2){let n=m(3);r("pBind",n.ptm("text"))("ngClass",n.cx("text"))("innerHTML",n.text,$),f("data-p",n.dataP)}}function Ze(e,a){if(e&1&&(i(0,"div"),y(1,Ye,1,4,"span",8),s()),e&2){let n=m(2);l(),r("ngIf",!n.escape)}}function en(e,a){if(e&1&&(i(0,"span",7),d(1),s()),e&2){let n=m(3);r("pBind",n.ptm("text"))("ngClass",n.cx("text")),f("data-p",n.dataP),l(),ne(n.text)}}function nn(e,a){if(e&1&&y(0,en,2,4,"span",10),e&2){let n=m(2);r("ngIf",n.escape&&n.text)}}function tn(e,a){if(e&1&&(y(0,Ze,2,1,"div",6)(1,nn,1,1,"ng-template",null,0,oe),i(3,"span",7),F(4),s()),e&2){let n=Z(2),o=m();r("ngIf",!o.escape)("ngIfElse",n),l(3),r("pBind",o.ptm("text"))("ngClass",o.cx("text")),f("data-p",o.dataP)}}function on(e,a){if(e&1&&c(0,"i",7),e&2){let n=m(2);b(n.cn(n.cx("closeIcon"),n.closeIcon)),r("pBind",n.ptm("closeIcon"))("ngClass",n.closeIcon),f("data-p",n.dataP)}}function sn(e,a){e&1&&O(0)}function an(e,a){if(e&1&&y(0,sn,1,0,"ng-container",4),e&2){let n=m(2);r("ngTemplateOutlet",n.closeIconTemplate||n._closeIconTemplate)}}function rn(e,a){if(e&1&&(W(),c(0,"svg",14)),e&2){let n=m(2);b(n.cx("closeIcon")),r("pBind",n.ptm("closeIcon")),f("data-p",n.dataP)}}function ln(e,a){if(e&1){let n=X();i(0,"button",11),D("click",function(t){q(n);let _=m();return Q(_.close(t))}),p(1,on,1,5,"i",12),p(2,an,1,1,"ng-container"),p(3,rn,1,4,":svg:svg",13),s()}if(e&2){let n=m();b(n.cx("closeButton")),r("pBind",n.ptm("closeButton")),f("aria-label",n.closeAriaLabel)("data-p",n.dataP),l(),g(n.closeIcon?1:-1),l(),g(n.closeIconTemplate||n._closeIconTemplate?2:-1),l(),g(!n.closeIconTemplate&&!n._closeIconTemplate&&!n.closeIcon?3:-1)}}var dn={root:({instance:e})=>["p-message p-component p-message-"+e.severity,e.variant&&"p-message-"+e.variant,{"p-message-sm":e.size==="small","p-message-lg":e.size==="large"}],contentWrapper:"p-message-content-wrapper",content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Ee=(()=>{class e extends j{name="message";style=Se;classes=dn;static \u0275fac=(()=>{let n;return function(t){return(n||(n=x(e)))(t||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Pe=new E("MESSAGE_INSTANCE"),Oe=(()=>{class e extends R{componentName="Message";_componentStyle=u(Ee);bindDirectiveInstance=u(h,{self:!0});$pcMessage=u(Pe,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;motionOptions=se(void 0);computedMotionOptions=ie(()=>G(G({},this.ptm("motion")),this.motionOptions()));onClose=new U;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=M(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=n=>{this.close(n)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"container":this._containerTemplate=n.template;break;case"icon":this._iconTemplate=n.template;break;case"closeicon":this._closeIconTemplate=n.template;break}})}close(n){this.visible.set(!1),this.onClose.emit({originalEvent:n})}get dataP(){return this.cn({outlined:this.variant==="outlined",simple:this.variant==="simple",[this.severity]:this.severity,[this.size]:this.size})}static \u0275fac=(()=>{let n;return function(t){return(n||(n=x(e)))(t||e)}})();static \u0275cmp=C({type:e,selectors:[["p-message"]],contentQueries:function(o,t,_){if(o&1&&Y(_,Ge,4)(_,He,4)(_,qe,4)(_,ce,4),o&2){let v;T(v=k())&&(t.containerTemplate=v.first),T(v=k())&&(t.iconTemplate=v.first),T(v=k())&&(t.closeIconTemplate=v.first),T(v=k())&&(t.templates=v)}},hostAttrs:["role","alert","aria-live","polite"],hostVars:5,hostBindings:function(o,t){o&1&&(J(function(){return"p-message-enter-active"}),K(function(){return"p-message-leave-active"})),o&2&&(f("data-p",t.dataP),b(t.cn(t.cx("root"),t.styleClass)),I("p-message-leave-active",!t.visible()))},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",H],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",H],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant",motionOptions:[1,"motionOptions"]},outputs:{onClose:"onClose"},features:[A([Ee,{provide:Pe,useExisting:e},{provide:V,useExisting:e}]),P([h]),B],ngContentSelectors:Qe,decls:7,vars:12,consts:[["escapeOut",""],[3,"pBind"],[3,"pBind","class"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(o,t){o&1&&(N(),i(0,"div",1)(1,"div",1),p(2,$e,1,1,"ng-container"),p(3,Je,1,4,"i",2),p(4,Xe,1,4,"ng-container")(5,tn,5,5),p(6,ln,4,8,"button",3),s()()),o&2&&(b(t.cx("contentWrapper")),r("pBind",t.ptm("contentWrapper")),f("data-p",t.dataP),l(),b(t.cx("content")),r("pBind",t.ptm("content")),f("data-p",t.dataP),l(),g(t.iconTemplate||t._iconTemplate?2:-1),l(),g(t.icon?3:-1),l(),g(t.containerTemplate||t._containerTemplate?4:5),l(2),g(t.closable?6:-1))},dependencies:[w,ae,re,le,Ce,Te,L,h,we],encapsulation:2,changeDetection:0})}return e})();var De=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var cn=["*"],mn={root:({instance:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align==null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align==null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},pn={root:({instance:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},Ne=(()=>{class e extends j{name="divider";style=De;classes=pn;inlineStyles=mn;static \u0275fac=(()=>{let n;return function(t){return(n||(n=x(e)))(t||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Fe=new E("DIVIDER_INSTANCE"),Ae=(()=>{class e extends R{componentName="Divider";$pcDivider=u(Fe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;layout="horizontal";type="solid";align;_componentStyle=u(Ne);get dataP(){return this.cn({[this.align]:this.align,[this.layout]:this.layout,[this.type]:this.type})}static \u0275fac=(()=>{let n;return function(t){return(n||(n=x(e)))(t||e)}})();static \u0275cmp=C({type:e,selectors:[["p-divider"]],hostAttrs:["role","separator"],hostVars:6,hostBindings:function(o,t){o&2&&(f("aria-orientation",t.layout)("data-p",t.dataP),ee(t.sx("root")),b(t.cn(t.cx("root"),t.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[A([Ne,{provide:Fe,useExisting:e},{provide:V,useExisting:e}]),P([h]),B],ngContentSelectors:cn,decls:2,vars:3,consts:[[3,"pBind"]],template:function(o,t){o&1&&(N(),i(0,"div",0),F(1),s()),o&2&&(b(t.cx("content")),r("pBind",t.ptm("content")))},dependencies:[w,L,ye,h],encapsulation:2,changeDetection:0})}return e})();function gn(e,a){if(e&1&&c(0,"p-message",15),e&2){let n=m();r("text",n.errorMsg())}}function un(e,a){e&1&&d(0," El usuario es obligatorio. ")}function fn(e,a){e&1&&d(0," M\xEDnimo 3 caracteres. ")}function bn(e,a){if(e&1&&(i(0,"small",22),p(1,un,1,0)(2,fn,1,0),s()),e&2){let n=m();l(),g(n.username.hasError("required")?1:n.username.hasError("minlength")?2:-1)}}function hn(e,a){e&1&&d(0," La contrase\xF1a es obligatoria. ")}function _n(e,a){e&1&&d(0," M\xEDnimo 6 caracteres. ")}function vn(e,a){if(e&1&&(i(0,"small",26),p(1,hn,1,0)(2,_n,1,0),s()),e&2){let n=m();l(),g(n.password.hasError("required")?1:n.password.hasError("minlength")?2:-1)}}var Le=class e{constructor(){this.fb=u(_e);this.authService=u(me);this.router=u(de);this.notify=u(ze);this.isLoading=M(!1);this.errorMsg=M(null);this.form=this.fb.group({username:["",[z.required,z.minLength(3)]],password:["",[z.required,z.minLength(6)]]})}get username(){return this.form.get("username")}get password(){return this.form.get("password")}onSubmit(){if(this.form.invalid){this.form.markAllAsTouched();return}this.isLoading.set(!0),this.errorMsg.set(null),this.authService.login(this.form.value).subscribe({next:()=>{this.isLoading.set(!1),this.notify.success("Bienvenido","Acceso exitoso al sistema"),this.router.navigate(["/dashboard"])},error:a=>{this.isLoading.set(!1),this.errorMsg.set(a.message??"Error al iniciar sesi\xF3n")}})}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=C({type:e,selectors:[["app-login"]],decls:53,vars:14,consts:[[1,"login-root"],["aria-hidden","true",1,"login-bg"],[1,"login-bg__circle","login-bg__circle--1"],[1,"login-bg__circle","login-bg__circle--2"],[1,"login-bg__circle","login-bg__circle--3"],["role","main",1,"login-panel","gp-fade-in"],[1,"login-panel__header"],["aria-hidden","true",1,"login-panel__logo"],[1,"pi","pi-heart-fill"],[1,"login-panel__title"],[1,"login-panel__title-name"],[1,"login-panel__title-pro"],[1,"login-panel__subtitle"],["aria-label","Formulario de acceso",1,"login-panel__body"],[1,"login-panel__form-title"],["severity","error","styleClass","tw-w-full tw-mb-4","icon","pi pi-times-circle",3,"text"],["novalidate","",3,"ngSubmit","formGroup"],[1,"login-field"],["variant","on"],["pInputText","","id","username","formControlName","username","autocomplete","username","aria-describedby","username-error","type","text",1,"login-field__input"],["for","username"],[1,"pi","pi-user"],["id","username-error","role","alert",1,"login-field__error"],["inputId","password","formControlName","password","autocomplete","current-password","styleClass","tw-w-full","inputStyleClass","login-field__input","aria-describedby","password-error",3,"feedback","toggleMask"],["for","password"],[1,"pi","pi-lock"],["id","password-error","role","alert",1,"login-field__error"],["type","submit","label","Acceder al Sistema","icon","pi pi-sign-in","iconPos","right","styleClass","tw-w-full login-submit-btn","size","large",3,"loading","disabled"],[1,"login-panel__footer"],[1,"login-hint"],["aria-hidden","true",1,"pi","pi-info-circle"],["aria-label","Entorno de ejecuci\xF3n","role","note",1,"env-badge"],[1,"pi","pi-server"]],template:function(n,o){n&1&&(i(0,"div",0)(1,"div",1),c(2,"div",2)(3,"div",3)(4,"div",4),s(),i(5,"main",5)(6,"header",6)(7,"div",7),c(8,"i",8),s(),i(9,"h1",9)(10,"span",10),d(11,"Galenos"),s(),i(12,"span",11),d(13,"Pro"),s()(),i(14,"p",12),d(15,"Sistema de Gesti\xF3n Hospitalaria"),s()(),c(16,"p-divider"),i(17,"section",13)(18,"h2",14),d(19,"Iniciar sesi\xF3n"),s(),p(20,gn,1,1,"p-message",15),i(21,"form",16),D("ngSubmit",function(){return o.onSubmit()}),i(22,"div",17)(23,"p-floatlabel",18),c(24,"input",19),i(25,"label",20),c(26,"i",21),d(27," Usuario "),s()(),p(28,bn,3,1,"small",22),s(),i(29,"div",17)(30,"p-floatlabel",18),c(31,"p-password",23),i(32,"label",24),c(33,"i",25),d(34," Contrase\xF1a "),s()(),p(35,vn,3,1,"small",26),s(),c(36,"p-button",27),s()(),i(37,"footer",28)(38,"div",29),c(39,"i",30),i(40,"div")(41,"strong"),d(42,"Acceso de demostraci\xF3n:"),s(),c(43,"br"),d(44,"Usuario: "),i(45,"code"),d(46,"admin"),s(),d(47," \xA0\xB7\xA0 Clave: "),i(48,"code"),d(49,"admin123"),s()()()()(),i(50,"div",31),c(51,"i",32),d(52," DEV "),s()()),n&2&&(l(20),g(o.errorMsg()?20:-1),l(),r("formGroup",o.form),l(3),I("ng-invalid",o.username.invalid&&o.username.touched)("ng-dirty",o.username.dirty),l(4),g(o.username.invalid&&o.username.touched?28:-1),l(3),I("ng-invalid",o.password.invalid&&o.password.touched),r("feedback",!1)("toggleMask",!0),l(4),g(o.password.invalid&&o.password.touched?35:-1),l(),r("loading",o.isLoading())("disabled",o.isLoading()))},dependencies:[w,ve,fe,pe,ge,ue,he,be,xe,Me,ke,Oe,Ie,Ae],styles:[".login-root[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(145deg,#0d3486,#2378f0,#00bcd4);position:relative;overflow:hidden;padding:1.5rem}.login-bg__circle[_ngcontent-%COMP%]{position:absolute;border-radius:50%;opacity:.12;background:#fff}.login-bg__circle--1[_ngcontent-%COMP%]{width:600px;height:600px;top:-200px;right:-150px}.login-bg__circle--2[_ngcontent-%COMP%]{width:400px;height:400px;bottom:-100px;left:-120px}.login-bg__circle--3[_ngcontent-%COMP%]{width:200px;height:200px;top:40%;left:20%}.login-panel[_ngcontent-%COMP%]{width:100%;max-width:440px;background:#fff;border-radius:1.25rem;box-shadow:0 24px 80px #0d348659;overflow:hidden;position:relative;z-index:1}.login-panel__header[_ngcontent-%COMP%]{text-align:center;padding:2.5rem 2rem 1.5rem;background:linear-gradient(135deg,#1a48a8,#2378f0)}.login-panel__logo[_ngcontent-%COMP%]{width:3.5rem;height:3.5rem;background:#ffffff2e;border-radius:1rem;display:flex;align-items:center;justify-content:center;font-size:1.75rem;color:#fff;margin:0 auto 1rem;box-shadow:0 4px 16px #00000026}.login-panel__title[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:800;margin:0 0 .25rem;display:flex;align-items:center;justify-content:center;gap:.375rem}.login-panel__title-name[_ngcontent-%COMP%]{color:#fff}.login-panel__title-pro[_ngcontent-%COMP%]{color:#a5f3fc;font-size:1.125rem;font-weight:600;background:#ffffff26;padding:.125rem .5rem;border-radius:.375rem;letter-spacing:.05em}.login-panel__subtitle[_ngcontent-%COMP%]{font-size:.875rem;color:#ffffffbf;margin:0}.login-panel__body[_ngcontent-%COMP%]{padding:1.5rem 2rem}.login-panel__form-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:#1e293b;margin:0 0 1.25rem}.login-field[_ngcontent-%COMP%]{margin-bottom:1.25rem}.login-field__input[_ngcontent-%COMP%]{width:100%}.login-field__error[_ngcontent-%COMP%]{color:#ef4444;font-size:.75rem;margin-top:.25rem;display:flex;align-items:center;gap:.25rem}.login-submit-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#1a48a8,#2378f0)!important;border:none!important;height:3rem!important;font-weight:600!important;letter-spacing:.025em!important;margin-top:.5rem}.login-submit-btn[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#0d3486,#1a5ecb)!important}.login-panel__footer[_ngcontent-%COMP%]{padding:0 2rem 2rem}.login-hint[_ngcontent-%COMP%]{background:#eff6ff;border:1px dashed #93c5fd;border-radius:.625rem;padding:.75rem 1rem;display:flex;align-items:flex-start;gap:.625rem;font-size:.8125rem;color:#334155}.login-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#3b82f6;margin-top:.125rem;flex-shrink:0}.login-hint[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#dbeafe;color:#1d4ed8;padding:.125rem .375rem;border-radius:.25rem;font-weight:600}.env-badge[_ngcontent-%COMP%]{position:fixed;bottom:1rem;right:1rem;background:#00000080;color:#fff;font-size:.6875rem;font-weight:600;padding:.25rem .625rem;border-radius:.375rem;display:flex;align-items:center;gap:.375rem;letter-spacing:.05em;z-index:2}"]})}};export{Le as LoginComponent};
