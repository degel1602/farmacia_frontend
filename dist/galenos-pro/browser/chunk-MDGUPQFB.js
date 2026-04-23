import{a as oe}from"./chunk-2FRMJYCD.js";import{a as se}from"./chunk-AWA3YL7Z.js";import{a as le}from"./chunk-BTHC7YYM.js";import{a as M,b as re}from"./chunk-FNXYGMHG.js";import"./chunk-YIPX7VFL.js";import{ka as ee,la as te,oa as ie,qa as ne,ra as ae,sa as x}from"./chunk-VFOJCOMC.js";import"./chunk-Y6STUIGR.js";import{l as K,n as U,o as X,p as Y,r as I}from"./chunk-ZE7SN3BU.js";import{Ab as m,Db as G,Ea as o,Eb as H,Fb as b,Gb as v,I as P,Kb as p,L as V,N as f,Nb as g,Ob as s,Pb as L,Qb as u,Rb as Q,Sa as C,Wa as A,Wb as z,Xa as j,Xb as $,Ya as T,Yb as q,ba as E,db as h,dc as w,ec as W,fc as S,ga as D,gb as _,hb as k,ib as N,jb as B,kb as F,lb as c,mb as n,nb as r,ob as d,ub as O,wc as J,xc as Z}from"./chunk-HDRZ6NOY.js";import"./chunk-4CLCTAJ7.js";var de=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var be=["content"],ve=t=>({$implicit:t});function he(t,i){if(t&1&&(n(0,"div"),s(1),r()),t&2){let e=m(2);p("display",e.value!=null&&e.value!==0?"flex":"none"),o(),Q("",e.value,"",e.unit)}}function we(t,i){t&1&&O(0)}function xe(t,i){if(t&1&&(n(0,"div",2)(1,"div",2),T(2,he,2,4,"div",3)(3,we,1,0,"ng-container",4),r()()),t&2){let e=m();g(e.cn(e.cx("value"),e.valueStyleClass)),p("width",e.value+"%")("display","flex")("background",e.color),c("pBind",e.ptm("value")),h("data-p",e.dataP),o(),g(e.cx("label")),c("pBind",e.ptm("label")),h("data-p",e.dataP),o(),c("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),o(),c("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",q(17,ve,e.value))}}function ye(t,i){if(t&1&&d(0,"div",2),t&2){let e=m();g(e.cn(e.cx("value"),e.valueStyleClass)),p("background",e.color),c("pBind",e.ptm("value")),h("data-p",e.dataP)}}var Ce={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.mode=="determinate","p-progressbar-indeterminate":t.mode=="indeterminate"}],value:"p-progressbar-value",label:"p-progressbar-label"},ce=(()=>{class t extends ie{name="progressbar";style=de;classes=Ce;static \u0275fac=(()=>{let e;return function(l){return(e||(e=D(t)))(l||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var me=new V("PROGRESSBAR_INSTANCE"),pe=(()=>{class t extends ae{componentName="ProgressBar";$pcProgressBar=f(me,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(x,{self:!0});value;showValue=!0;styleClass;valueStyleClass;unit="%";mode="determinate";color;contentTemplate;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=f(ce);templates;_contentTemplate;onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}get dataP(){return this.cn({determinate:this.mode==="determinate",indeterminate:this.mode==="indeterminate"})}static \u0275fac=(()=>{let e;return function(l){return(e||(e=D(t)))(l||t)}})();static \u0275cmp=C({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(a,l,R){if(a&1&&G(R,be,4)(R,ee,4),a&2){let y;b(y=v())&&(l.contentTemplate=y.first),b(y=v())&&(l.templates=y)}},hostAttrs:["role","progressbar"],hostVars:7,hostBindings:function(a,l){a&2&&(h("aria-valuemin",0)("aria-valuenow",l.value)("aria-valuemax",100)("aria-level",l.value+l.unit)("data-p",l.dataP),g(l.cn(l.cx("root"),l.styleClass)))},inputs:{value:[2,"value","value",Z],showValue:[2,"showValue","showValue",J],styleClass:"styleClass",valueStyleClass:"valueStyleClass",unit:"unit",mode:"mode",color:"color"},features:[z([ce,{provide:me,useExisting:t},{provide:ne,useExisting:t}]),A([x]),j],decls:2,vars:2,consts:[[3,"class","pBind","width","display","background",4,"ngIf"],[3,"class","pBind","background",4,"ngIf"],[3,"pBind"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(a,l){a&1&&T(0,xe,4,19,"div",0)(1,ye,1,6,"div",1),a&2&&(c("ngIf",l.mode==="determinate"),o(),c("ngIf",l.mode==="indeterminate"))},dependencies:[I,K,U,te,x],encapsulation:2,changeDetection:0})}return t})();var _e=["movimientosChart"],ke=["categoriasChart"],Se=()=>[1,2,3,4,5,6],Ie=(t,i)=>i.label;function Me(t,i){t&1&&d(0,"p-skeleton",23)}function Ee(t,i){t&1&&(n(0,"div",8),B(1,Me,1,0,"p-skeleton",23,N),r()),t&2&&(o(),F($(0,Se)))}function De(t,i){if(t&1&&(s(0),w(1,"number")),t&2){let e=m().$implicit;u(" S/. ",S(1,1,e.value,"1.2-2")," ")}}function Te(t,i){if(t&1&&(s(0),w(1,"number")),t&2){let e=m().$implicit;u(" ",W(1,1,e.value)," ")}}function Be(t,i){if(t&1&&(n(0,"div",24)(1,"div",3)(2,"div",25),d(3,"i",26),r()(),n(4,"div")(5,"div",27),_(6,De,2,4)(7,Te,2,3),r(),n(8,"div",28),s(9),r()()()),t&2){let e=i.$implicit;o(2),p("background",e.bg),o(),g(e.icon),p("color",e.color),o(2),p("color",e.color),o(),k(e.isMoneda?6:7),o(3),L(e.label)}}function Fe(t,i){if(t&1&&(n(0,"div",8),B(1,Be,10,10,"div",24,Ie),r()),t&2){let e=m();o(),F(e.kpiCards)}}function Re(t,i){if(t&1&&(n(0,"div",21)(1,"div",11)(2,"div",12),d(3,"i",29),n(4,"h3",14),s(5," Indicadores de Alerta "),r()()(),n(6,"div",30)(7,"div",31)(8,"div",32)(9,"span",33),d(10,"i",34),s(11," Stock Bajo "),r(),n(12,"span",35),s(13),r()(),d(14,"p-progressbar",36),n(15,"span",37),s(16),w(17,"number"),r()(),n(18,"div",31)(19,"div",32)(20,"span",38),d(21,"i",39),s(22," Pr\xF3x. Vencer (30 d\xEDas) "),r(),n(23,"span",40),s(24),r()(),d(25,"p-progressbar",41),n(26,"span",37),s(27,"Requieren revisi\xF3n urgente"),r()(),n(28,"div",42)(29,"div",32)(30,"span",43),d(31,"i",44),s(32," Vencidos "),r(),n(33,"span",45),s(34),r()(),d(35,"p-progressbar",46),n(36,"span",47),s(37,"Dar de baja inmediatamente"),r()()()()),t&2){let e=m();o(13),u(" ",e.resumen().stockBajo," "),o(),c("value",e.resumen().stockBajo/e.resumen().totalMedicamentos*100)("showValue",!1),o(2),u(" ",S(17,10,e.resumen().stockBajo/e.resumen().totalMedicamentos*100,"1.1-1"),"% del inventario "),o(8),u(" ",e.resumen().proximosVencer," "),o(),c("value",e.resumen().proximosVencer/e.resumen().totalMedicamentos*100)("showValue",!1),o(9),u(" ",e.resumen().vencidos," "),o(),c("value",e.resumen().vencidos/e.resumen().totalMedicamentos*100)("showValue",!1)}}M.register(...re);var ue=class t{constructor(){this.farmaciaService=f(le);this.medicamentoService=f(se);this.resumen=E(null);this.isLoading=E(!0);this.today=new Date}get kpiCards(){let i=this.resumen();return i?[{label:"Total Medicamentos",value:i.totalMedicamentos,icon:"pi pi-box",color:"#2378f0",bg:"#e8f0fe",suffix:""},{label:"Stock Bajo",value:i.stockBajo,icon:"pi pi-exclamation-triangle",color:"#f59e0b",bg:"#fef9c3",suffix:""},{label:"Pr\xF3ximos a Vencer",value:i.proximosVencer,icon:"pi pi-clock",color:"#f97316",bg:"#fff7ed",suffix:""},{label:"Vencidos",value:i.vencidos,icon:"pi pi-times-circle",color:"#ef4444",bg:"#fee2e2",suffix:""},{label:"Movimientos Hoy",value:i.totalMovimientosHoy,icon:"pi pi-arrow-right-arrow-left",color:"#00bcd4",bg:"#e0f7fa",suffix:""},{label:"Valor Inventario",value:i.valorTotalInventario,icon:"pi pi-dollar",color:"#10b981",bg:"#dcfce7",suffix:"S/.",isMoneda:!0}]:[]}ngOnInit(){this.loadResumen()}ngAfterViewInit(){}ngOnDestroy(){this.movimientosChartInstance?.destroy(),this.categoriasChartInstance?.destroy()}loadResumen(){this.isLoading.set(!0),this.farmaciaService.getResumen().subscribe({next:i=>{this.resumen.set(i.data),this.isLoading.set(!1),setTimeout(()=>{this.loadGraficos()},0)},error:()=>{this.resumen.set({totalMedicamentos:847,stockBajo:23,proximosVencer:12,vencidos:3,totalMovimientosHoy:45,entradasHoy:28,salidasHoy:17,valorTotalInventario:125430.5}),this.isLoading.set(!1),setTimeout(()=>this.loadGraficos(),0)}})}loadGraficos(){this.medicamentoService.getGraficoMovimientos(void 0,7).subscribe({next:i=>this.renderMovimientosChart(i.data),error:()=>this.renderMovimientosChart(this.getMockMovimientos())}),this.medicamentoService.getGraficoCategorias().subscribe({next:i=>this.renderCategoriasChart(i.data),error:()=>this.renderCategoriasChart(this.getMockCategorias())})}renderMovimientosChart(i){if(!this.movimientosChartRef)return;this.movimientosChartInstance?.destroy();let e=this.movimientosChartRef.nativeElement.getContext("2d");this.movimientosChartInstance=new M(e,{type:"line",data:{labels:i.map(a=>a.fecha),datasets:[{label:"Entradas",data:i.map(a=>a.entradas),borderColor:"#10b981",backgroundColor:"rgba(16,185,129,.1)",fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#10b981"},{label:"Salidas",data:i.map(a=>a.salidas),borderColor:"#ef4444",backgroundColor:"rgba(239,68,68,.1)",fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#ef4444"}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{intersect:!1,mode:"index"},plugins:{legend:{position:"top",labels:{font:{family:"Inter",size:12},padding:16}},tooltip:{backgroundColor:"#1e293b",titleFont:{family:"Inter"},bodyFont:{family:"Inter"}}},scales:{x:{grid:{display:!1},ticks:{font:{family:"Inter",size:11}}},y:{beginAtZero:!0,grid:{color:"#f1f5f9"},ticks:{font:{family:"Inter",size:11}}}}}})}renderCategoriasChart(i){if(!this.categoriasChartRef)return;this.categoriasChartInstance?.destroy();let e=this.categoriasChartRef.nativeElement.getContext("2d");this.categoriasChartInstance=new M(e,{type:"doughnut",data:{labels:i.map(a=>a.categoria),datasets:[{data:i.map(a=>a.total),backgroundColor:i.map(a=>a.color),borderWidth:2,borderColor:"#ffffff",hoverBorderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{font:{family:"Inter",size:11},padding:12,boxWidth:12}},tooltip:{backgroundColor:"#1e293b",titleFont:{family:"Inter"},bodyFont:{family:"Inter"}}},cutout:"65%"}})}getMockMovimientos(){return[{fecha:"Lun",entradas:35,salidas:22},{fecha:"Mar",entradas:42,salidas:30},{fecha:"Mi\xE9",entradas:28,salidas:18},{fecha:"Jue",entradas:50,salidas:35},{fecha:"Vie",entradas:38,salidas:28},{fecha:"S\xE1b",entradas:15,salidas:10},{fecha:"Dom",entradas:8,salidas:5}]}getMockCategorias(){return[{categoria:"Analg\xE9sicos",total:180,color:"#2378f0"},{categoria:"Antibi\xF3ticos",total:140,color:"#00bcd4"},{categoria:"Vitaminas",total:110,color:"#10b981"},{categoria:"Cardiovascular",total:95,color:"#f59e0b"},{categoria:"Otros",total:322,color:"#94a3b8"}]}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=C({type:t,selectors:[["app-farmacia-dashboard"]],viewQuery:function(e,a){if(e&1&&H(_e,5)(ke,5),e&2){let l;b(l=v())&&(a.movimientosChartRef=l.first),b(l=v())&&(a.categoriasChartRef=l.first)}},decls:42,vars:6,consts:[["movimientosChart",""],["categoriasChart",""],[1,"tw-flex","tw-flex-col","tw-gap-6"],[1,"tw-flex","tw-items-center","tw-justify-between"],[1,"tw-text-2xl","tw-font-bold","tw-text-[#1e293b]","tw-m-0"],[1,"tw-text-sm","tw-text-[#64748b]","tw-mt-1","tw-mb-0"],[1,"tw-text-sm","tw-text-[#64748b]","tw-flex","tw-items-center","tw-gap-1.5"],[1,"pi","pi-clock"],[1,"tw-grid","tw-grid-cols-2","md:tw-grid-cols-3","xl:tw-grid-cols-6","tw-gap-4"],[1,"tw-grid","tw-grid-cols-1","xl:tw-grid-cols-3","tw-gap-6"],[1,"gp-card","xl:tw-col-span-2"],[1,"gp-card-header"],[1,"tw-flex","tw-items-center","tw-gap-2"],[1,"pi","pi-chart-line","tw-text-[#2378f0]"],[1,"tw-text-sm","tw-font-semibold","tw-text-[#1e293b]","tw-m-0"],[1,"tw-flex","tw-gap-3","tw-text-xs","tw-text-[#64748b]"],[1,"tw-flex","tw-items-center","tw-gap-1"],[1,"tw-w-2","tw-h-2","tw-rounded-full","tw-bg-[#10b981]","tw-inline-block"],[1,"tw-w-2","tw-h-2","tw-rounded-full","tw-bg-[#ef4444]","tw-inline-block"],[1,"gp-card-body"],[1,"tw-h-64"],[1,"gp-card"],[1,"pi","pi-chart-pie","tw-text-[#00bcd4]"],["height","6rem","borderRadius","0.75rem"],[1,"gp-card","tw-p-4","tw-flex","tw-flex-col","tw-gap-2"],[1,"tw-w-9","tw-h-9","tw-rounded-lg","tw-flex","tw-items-center","tw-justify-center"],[1,"tw-text-base"],[1,"tw-text-2xl","tw-font-bold"],[1,"tw-text-xs","tw-text-[#64748b]","tw-font-medium","tw-mt-0.5"],[1,"pi","pi-bell","tw-text-[#f59e0b]"],[1,"gp-card-body","tw-grid","tw-grid-cols-1","md:tw-grid-cols-3","tw-gap-4"],[1,"med-alert-warning"],[1,"tw-flex","tw-items-center","tw-justify-between","tw-mb-2"],[1,"tw-text-sm","tw-font-semibold","tw-text-[#b45309]"],[1,"pi","pi-exclamation-triangle","tw-mr-1"],[1,"tw-text-lg","tw-font-bold","tw-text-[#b45309]"],["styleClass","tw-h-2","color","#f59e0b",3,"value","showValue"],[1,"tw-text-xs","tw-text-[#92400e]","tw-mt-1","tw-block"],[1,"tw-text-sm","tw-font-semibold","tw-text-[#92400e]"],[1,"pi","pi-clock","tw-mr-1"],[1,"tw-text-lg","tw-font-bold","tw-text-[#92400e]"],["styleClass","tw-h-2","color","#f97316",3,"value","showValue"],[1,"med-alert-danger"],[1,"tw-text-sm","tw-font-semibold","tw-text-[#dc2626]"],[1,"pi","pi-times-circle","tw-mr-1"],[1,"tw-text-lg","tw-font-bold","tw-text-[#dc2626]"],["styleClass","tw-h-2","color","#ef4444",3,"value","showValue"],[1,"tw-text-xs","tw-text-[#991b1b]","tw-mt-1","tw-block"]],template:function(e,a){e&1&&(n(0,"div",2)(1,"div",3)(2,"div")(3,"h1",4),s(4,"Dashboard Farmacia"),r(),n(5,"p",5),s(6," Resumen general del inventario y movimientos "),r()(),n(7,"div",6),d(8,"i",7),s(9),w(10,"date"),r()(),_(11,Ee,3,1,"div",8)(12,Fe,3,0,"div",8),n(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12),d(17,"i",13),n(18,"h3",14),s(19," Movimientos \u2014 \xDAltimos 7 d\xEDas "),r()(),n(20,"div",15)(21,"span",16),d(22,"span",17),s(23,"Entradas "),r(),n(24,"span",16),d(25,"span",18),s(26,"Salidas "),r()()(),n(27,"div",19)(28,"div",20),d(29,"canvas",null,0),r()()(),n(31,"div",21)(32,"div",11)(33,"div",12),d(34,"i",22),n(35,"h3",14),s(36," Stock por Categor\xEDa "),r()()(),n(37,"div",19)(38,"div",20),d(39,"canvas",null,1),r()()()(),_(41,Re,38,13,"div",21),r()),e&2&&(o(9),u(" Actualizado: ",S(10,3,a.today,"dd/MM/yyyy HH:mm")," "),o(2),k(a.isLoading()?11:12),o(30),k(!a.isLoading()&&a.resumen()?41:-1))},dependencies:[I,pe,oe,Y,X],encapsulation:2})}};export{ue as FarmaciaDashboardComponent};
