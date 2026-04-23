import{la as P,oa as R,qa as H,ra as q,sa as l}from"./chunk-VFOJCOMC.js";import{j as L,l as V,r as k}from"./chunk-ZE7SN3BU.js";import{Ab as r,Bb as D,Ca as E,Cb as N,Ea as v,I as _,Jb as h,L as b,N as s,Nb as d,Ob as S,Pb as F,S as y,Sa as B,T as I,Wa as w,Wb as j,Xa as C,Ya as c,Z as z,db as o,ga as m,hc as x,lb as i,mb as f,nb as u,ob as T,vb as A,zb as M}from"./chunk-HDRZ6NOY.js";var O=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var G=["*"];function J(t,p){if(t&1&&(f(0,"span",3),S(1),u()),t&2){let a=r();d(a.cx("label")),i("pBind",a.ptm("label")),o("data-p",a.dataP),v(),F(a.label)}}function K(t,p){if(t&1&&T(0,"span",5),t&2){let a=r(2);d(a.icon),i("pBind",a.ptm("icon"))("ngClass",a.cx("icon")),o("data-p",a.dataP)}}function Q(t,p){if(t&1&&c(0,K,1,5,"span",4),t&2){let a=r(),n=h(5);i("ngIf",a.icon)("ngIfElse",n)}}function W(t,p){if(t&1){let a=A();f(0,"img",7),M("error",function(e){y(a);let g=r(2);return I(g.imageError(e))}),u()}if(t&2){let a=r(2);i("pBind",a.ptm("image"))("src",a.image,E),o("aria-label",a.ariaLabel)("data-p",a.dataP)}}function X(t,p){if(t&1&&c(0,W,1,4,"img",6),t&2){let a=r();i("ngIf",a.image)}}var Y={root:({instance:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},U=(()=>{class t extends R{name="avatar";style=O;classes=Y;static \u0275fac=(()=>{let a;return function(e){return(a||(a=m(t)))(e||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();var $=new b("AVATAR_INSTANCE"),_t=(()=>{class t extends q{componentName="Avatar";$pcAvatar=s($,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new z;_componentStyle=s(U);imageError(a){this.onImageError.emit(a)}get dataP(){return this.cn({[this.shape]:this.shape,[this.size]:this.size})}static \u0275fac=(()=>{let a;return function(e){return(a||(a=m(t)))(e||t)}})();static \u0275cmp=B({type:t,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(n,e){n&2&&(o("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("data-p",e.dataP),d(e.cn(e.cx("root"),e.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[j([U,{provide:$,useExisting:t},{provide:H,useExisting:t}]),w([l]),C],ngContentSelectors:G,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"pBind","class",4,"ngIf","ngIfElse"],[3,"pBind"],[3,"pBind","class","ngClass",4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","src","error",4,"ngIf"],[3,"error","pBind","src"]],template:function(n,e){if(n&1&&(D(),N(0),c(1,J,2,5,"span",2)(2,Q,1,2,"ng-template",null,0,x)(4,X,1,1,"ng-template",null,1,x)),n&2){let g=h(3);v(),i("ngIf",e.label)("ngIfElse",g)}},dependencies:[k,L,V,P,l],encapsulation:2,changeDetection:0})}return t})();export{_t as a};
