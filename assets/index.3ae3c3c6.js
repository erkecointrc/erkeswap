var M=Object.defineProperty;var X=(n,e,i)=>e in n?M(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i;var g=(n,e,i)=>(X(n,typeof e!="symbol"?e+"":e,i),i);import{P as J,r as L,T as I,a as k,o as _,c as x,b as t,d,w as c,F as B,g as j,p as W,e as Z,t as p,f as w,h as E,i as y,v as N,j as v,n as S,k as $,l as tt,m as et,q as A,s as st,V as nt}from"./vendor.77b9d304.js";const ot=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}};ot();class T{constructor(e){g(this,"contract",null);g(this,"tronweb",null);this.contract=e,this.tronweb=window.tronWeb}async balanceOf(e,i){let l="balanceOf(address)",s=[{type:"address",value:e}],o=null;return await this.tronweb.transactionBuilder.triggerConstantContract(this.contract,l,{},s).then((r,h)=>{h?console.log(h):(o=r,i&&i(o))}).catch(r=>{console.log("err1",r)}),console.log("\u83B7\u53D6TRC20 \u6570\u91CF##",e,o),"0x"+o.constant_result[0]}async totalSupply(e,i){let l="totalSupply()",s=[],o=null;return await this.tronweb.transactionBuilder.triggerConstantContract(e,l,{},s).then((r,h)=>{h?console.log(h):(o=r,i&&i(o))}).catch(r=>{console.log("err1",r)}),console.log("\u83B7\u53D6TRC20\u53D1\u884C\u6570\u91CF",e,o),"0x"+o.constant_result[0]}async approve(e,i){const s=[{type:"address",value:e},{type:"uint256",value:"0xf1310e7625b6cd2a74e332f39077c69228a8b608d5a31275849b595c25af0283"}],o=await this.tronweb.transactionBuilder.triggerSmartContract(this.tronweb.address.toHex(this.contract),"approve(address,uint256)",{fee:12e6},s,this.tronweb.address.toHex(this.tronweb.defaultAddress.base58));let r=await this.tronweb.trx.sign(o.transaction),h=await this.tronweb.trx.sendRawTransaction(r);return console.log("\u6267\u884Capprove\u7ED3\u679C",h),i&&i(h),h}async allowance(e,i,l){let s="allowance(address,address)",o=[{type:"address",value:e},{type:"address",value:i}],r=null;return await this.tronweb.transactionBuilder.triggerConstantContract(this.contract,s,{},o).then((h,m)=>{r=h,l&&l(r)}).catch(h=>{console.log("err1",h)}),"0x"+r.constant_result[0]}}class z{constructor(e,i){g(this,"lpAddress",null);g(this,"lpTRC20",null);g(this,"tokenAddress",null);g(this,"tokenTRC20",null);g(this,"tronweb",null);g(this,"account",null);this.lpAddress=e,this.tokenAddress=i,this.lpTRC20=new T(this.lpAddress),this.tokenTRC20=new T(i),this.tronweb=window.tronWeb,this.account=this.tronweb.defaultAddress.base58}async approve(e){await this.tokenAddress.approve(this.lpAddress,e)}async tokenToTrxSwapInput(e,i,l){const s=[{type:"uint256",value:e},{type:"uint256",value:i},{type:"uint256",value:l}],o=await this.tronweb.transactionBuilder.triggerSmartContract(this.tronweb.address.toHex(this.lpAddress),"tokenToTrxSwapInput(uint256,uint256,uint256)",{fee:6e7},s,this.tronweb.address.toHex(this.tronweb.defaultAddress.base58));let r=await this.tronweb.trx.sign(o.transaction);return await this.tronweb.trx.sendRawTransaction(r)}async trxToTokenSwapInput(e,i,l){const s=[{type:"uint256",value:i},{type:"uint256",value:l}];let o="0x"+BigInt(e).toString(16);const r=await this.tronweb.transactionBuilder.triggerSmartContract(this.tronweb.address.toHex(this.lpAddress),"trxToTokenSwapInput(uint256,uint256)",{fee:6e7,callValue:o},s,this.tronweb.address.toHex(this.tronweb.defaultAddress.base58));let h=await this.tronweb.trx.sign(r.transaction);return await this.tronweb.trx.sendRawTransaction(h)}async addLiquidity(e,i,l,s){const o=[{type:"uint256",value:e},{type:"uint256",value:l},{type:"uint256",value:s}];let r="0x"+BigInt(i).toString(16);const h=await this.tronweb.transactionBuilder.triggerSmartContract(this.tronweb.address.toHex(this.lpAddress),"addLiquidity(uint256,uint256,uint256)",{fee:6e7,callValue:r},o,this.tronweb.address.toHex(this.tronweb.defaultAddress.base58));let m=await this.tronweb.trx.sign(h.transaction),f=await this.tronweb.trx.sendRawTransaction(m);return console.log("\u6267\u884C\u6DFB\u52A0\u8D44\u91D1\u6C60\u7ED3\u679C",this.lpAddress,f),f}async removeLiquidity(e,i,l,s){const o=[{type:"uint256",value:e},{type:"uint256",value:i},{type:"uint256",value:l},{type:"uint256",value:s}],r=await this.tronweb.transactionBuilder.triggerSmartContract(this.tronweb.address.toHex(this.lpAddress),"removeLiquidity(uint256,uint256,uint256,uint256)",{fee:6e7},o,this.tronweb.address.toHex(this.tronweb.defaultAddress.base58));let h=await this.tronweb.trx.sign(r.transaction),m=await this.tronweb.trx.sendRawTransaction(h);return console.log("\u6267\u884C\u79FB\u9664\u8D44\u91D1\u6C60\u7ED3\u679C",this.lpAddress,m),m}async getTrxToTokenInputPrice(e){let i="getTrxToTokenInputPrice(uint256)",l=[{type:"uint256",value:e}],s=null;return await this.tronweb.transactionBuilder.triggerConstantContract(this.lpAddress,i,{},l).then((o,r)=>{s=o}).catch(o=>{console.log("err1",o)}),"0x"+s.constant_result[0]}async getTrxToTokenOutputPrice(e){let i="getTrxToTokenOutputPrice(uint256)",l=[{type:"uint256",value:e}],s=null;return await this.tronweb.transactionBuilder.triggerConstantContract(this.lpAddress,i,{},l).then((o,r)=>{s=o}).catch(o=>{console.log("err1",o)}),"0x"+s.constant_result[0]}async getTokenToTrxInputPrice(e){let i="getTokenToTrxInputPrice(uint256)",l=[{type:"uint256",value:e}],s=null;return await this.tronweb.transactionBuilder.triggerConstantContract(this.lpAddress,i,{},l).then((o,r)=>{s=o}).catch(o=>{console.log("err1",o)}),"0x"+s.constant_result[0]}async getTokenToTrxOutputPrice(e){let i="getTokenToTrxOutputPrice(uint256)",l=[{type:"uint256",value:e}],s=null;return await this.tronweb.transactionBuilder.triggerConstantContract(this.lpAddress,i,{},l).then((o,r)=>{s=o}).catch(o=>{console.log("err1",o)}),"0x"+s.constant_result[0]}}let it="TJDGKycs1pqDArtpNMauKwk9RYywHTUAkT",lt="TFLDLce3VxBk9fRnhboT5C6CSUUEHRceCZ",rt="TVcSRxH2inunVa8ZnsnJvp44azCZjnxfeM",at="TNiBqwdjcMc1FQ1AP6oJSAWGYFPMiBzuCs",dt="TMA9ma43rvdEZHygpDResKuQfuE2iide23",ut="TVnxneDAq1Fc6hSsHvaoccZq7tyU2HJU7Q";class ct{constructor(){g(this,"tronweb",null);g(this,"contracts",null);this.tronweb=window.tronWeb,this.contracts={ev:{bep20:rt,swap:it},ve:{bep20:at,swap:lt},erke:{bep20:dt,swap:ut}}}getTrx(e,i){let l;return this.tronweb.trx.getBalance(e).then(s=>{l=s,i&&i(s)}),l}}let b=new ct;var U="/assets/logohxek.77efe311.png",P="data:image/png;base64,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",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAANCSURBVEhLtZRbSBRRGMf/M7vrmusqmuUly0AhKoIIjF6KoB56iB566UGI7gjVS2/hQ/XSc0IvPRWoFBRdsBsKoWZYKipK6ub9turqrk4zs5dxdk/f7Azpelbbh/wty8z5zpnvf77LOQIjsIWI1nPL4CKoqunGo/oBOGwiorHUg8tw2uGTQmDvLloWE07g/tMOPKjrRsWpUhTmbEtJRBNseNI4DH1yGazzlmU14QSONcjY7nJA06Pk3DJuQiASw9czbpRXvoGnywvWftOaMUkQOFIfwGAQyMtwIKBESCRRwShYUYZZNn+EIagz6BoDu5aPkquvMdk3ywnAEFhL7cd+dvjGS+aflyxLIpm1Puau87ExWbcsJruvvGIof2yNVuG6qHVcQs93LzyBiGVZpbo/CEWOQlajuP1DxoG3fkzT+2ZwAkb3IM0GURQsyyr3elSaM+3vh0IYWNZR7LLFxxvBCWzEhBKFtKQDVFR2vQCsshDsUr41uzEpC9ztUuK7t9OOH/aqqGiR4Av/u802FLCvS9Hz3hB1hAA9zFD15TfkqICd6aufC/RLRnIBcu6TwpCCGhboOekPofO8G33nzH/XhSy8OOqMzxnrqFkQSzxOf+EO2uXqb3hW0wMYZ2DF6hBjc+uLbpzwtV9mpwNLQbCBO5bBhBOYXlQxtxzmUpQKYdrQsX07rJEJJ/C/4QRkLYo348s4UZiJEF0F7Qsqzu7JxoyqociVhrZ5BccLMjGlrmAposNlF7EY1nG6OAs2gY+aK7KbDtnPpRDGZQ37c9IxS44lEm2aVZCXbkfrnIIPkxIO5W5DmG7D3kAIpZT/ZM4NknaRnRafLHLjF3VIlOKz0bcOqyYlmU4U0GXY5JWxQoUuy3Iin4SNCJPBpShIzTMfoqta17EjIw2BFYa9dIMaaRBEERG6xneRwLCiI5eilSMalJiIg9kOy0MiXASBmSmEx/pRlu1ExD8Hf197vEtz7QyabybuXFVV6BODULzjKHE7kTY7jNGREdPBOjiB5pYWeIbNxUMjo6j/+Cn+Pj3jxeeGRng8HrhcLrS1d8DhpN4njDVNzc3x9/Vs2qY6pclApNQIVBfjH4vF4uNU2eJzAPwBKPrWKJ5aXAkAAAAASUVORK5CYII=",pt="/assets/arrow-to.a7f68bcd.svg",ht="/assets/plus.e2a1647a.svg",G="/assets/www.ab81146b.svg";var O=(n,e)=>{for(const[i,l]of e)n[i]=l;return n};const _t={components:{Popup:J,TronSwap:z},data(){return{isShow:!1,tronAddress:"",tronShowAddress:"",trxNumber:0,LpTokenTotalSupply:0,LPTokenNumber:0,LpTrxNumber:0,userErke_token:0,trxValueNumber:0,tokenValueNumber:0,value:1.25,timeValue:1,minGetCnt:0,impactPrice:0,supplierPrice:0,fromTokenName:"ERKE",toTokenName:"TRX",tronSwap:null,trc20:null,trxFloat:1e6,trxFloatLength:6,tokenFloat:1e6,tokenFloatLength:6,isSwitch:"buy",LptrxValueNumber:0,LpTokenValueNumber:0,LpSwapTrxAmount:0,LpSwapTokenAmount:0,LpShareCapital:0,LpPooltokens:0,LpPositionsTrxAmount:0,LpRecordList:[],LpShareRatio:0}},mounted(){let n=setInterval(()=>{if(b.tronweb&&b.tronweb.defaultAddress.base58){const e=b.tronweb.defaultAddress.base58;this.tronAddress=e,this.tronShowAddress=e.substr(0,6)+"******"+e.substr(e.length-4,e.length),b.getTrx(this.tronAddress,this.getTrxNumber),this.trc20=new T(b.contracts.erke.bep20),this.trc20.balanceOf(this.tronAddress,this.getEvNumber),this.trc20.balanceOf(b.contracts.erke.swap,this.getLpTokenNumber),b.getTrx(b.contracts.erke.swap,this.getlpTrxNumber),clearInterval(n)}},1e3);this.initSwap(b.contracts.erke.swap,b.contracts.erke.bep20)},name:"index",setup(){const n=L(!1),e=L(!1),i=L(""),l=L(0),{proxy:s}=j(),o=L(!1);return{isShow:n,show:e,showNotify:()=>{o.value=!0,setTimeout(()=>{o.value=!1},2e3)},showSuccess:o,message:i,proxy:s,active:l}},methods:{initSwap(n,e){this.tronSwap=new z(n,e),setInterval(()=>{new T(e).balanceOf(n,this.getLpTokenNumber),b.getTrx(n,this.getlpTrxNumber),b.getTrx(this.tronAddress,this.getTrxNumber),this.trc20=new T(e),this.trc20.balanceOf(this.tronAddress,this.getEvNumber),this.TrxToTokenProp(),this.initPool(this.tronSwap.lpAddress),this.trc20.totalSupply(n,this.getTotalSupply),this.LpPooltokens=(this.LPTokenNumber*this.LpShareCapital/this.LpTokenTotalSupply).toFixed(6),this.LpPositionsTrxAmount=(this.LpTrxNumber*this.LpShareCapital/this.LpTokenTotalSupply).toFixed(6),this.LpShareRatio=(this.LpPooltokens/this.LPTokenNumber*100).toFixed(6)},1e4)},setValue(n){this.value=n},setMinBi(){this.show=!1,this.minGetCnt=(this.tokenValueNumber-this.tokenValueNumber*this.value/100).toFixed(6)},connectWall(){if(b.tronweb&&b.tronweb.defaultAddress.base58){const n=b.tronweb.defaultAddress.base58;this.tronAddress=n,this.tronShowAddress=n.substr(0,6)+"******"+n.substr(n.length-4,n.length),b.getTrx(this.tronAddress,this.getTrxNumber)}else I("\u8BF7\u5728\u94B1\u5305\u4E2D\u6253\u5F00")},popupShow(){this.isShow=!0},getTrxNumber(n){this.trxNumber=n/this.trxFloat},getEvNumber(n){this.userErke_token=(Number("0x"+n.constant_result[0])/this.tokenFloat).toFixed(this.tokenFloatLength)},inall(){this.isSwitch=="buy"?(this.trxValueNumber=this.trxNumber,this.priceConversion()):(this.tokenValueNumber=this.userErke_token,this.tokenPriceConversion())},butSwap(){if(this.isSwitch=="buy"){const n=this.trxValueNumber*this.trxFloat,e=this.tokenValueNumber*this.tokenFloat-(this.tokenValueNumber*this.value/100).toFixed(0),i=new Date().getTime();this.tronSwap.trxToTokenSwapInput(n,e,i).then(l=>{this.message="\u5151\u6362\u6210\u529F",this.showNotify()})}else this.trc20.allowance(this.tronAddress,this.tronSwap.lpAddress,this.CallOwanceMsg)},CallOwanceMsg(n){Number("0x"+n.constant_result[0])<this.tokenValueNumber?this.trc20.approve(this.tronSwap.lpAddress,this.sellToken):this.sellToken()},sellToken(){const n=this.tokenValueNumber*this.tokenFloat,e=this.trxValueNumber*this.trxFloat-(this.trxValueNumber*this.value/100).toFixed(0),i=new Date().getTime();this.tronSwap.tokenToTrxSwapInput(n,e,i).then(l=>{this.message="\u5151\u6362\u6210\u529F",this.showNotify()})},inputTrx(){this.priceConversion()},inputToken(){this.tokenPriceConversion()},priceConversion(){this.tronSwap.getTrxToTokenInputPrice(this.trxValueNumber*this.trxFloat).then(n=>{this.tokenValueNumber=(n/this.tokenFloat).toFixed(this.tokenFloatLength),this.getTokenNewPrice()})},tokenPriceConversion(){this.tronSwap.getTokenToTrxInputPrice(this.tokenValueNumber*this.tokenFloat).then(n=>{this.trxValueNumber=(n/this.trxFloat).toFixed(this.trxFloatLength),this.getTokenNewPrice()})},getLpTokenNumber(n){this.LPTokenNumber=(Number("0x"+n.constant_result[0])/this.tokenFloat).toFixed(this.tokenFloatLength)},getlpTrxNumber(n){this.LpTrxNumber=Number(n/this.trxFloat)},getTokenNewPrice(){this.supplierPrice=(this.trxValueNumber*.003).toFixed(6),this.isSwitch=="buy"?this.minGetCnt=(this.tokenValueNumber-this.tokenValueNumber*this.value/100).toFixed(6):this.minGetCnt=(this.trxValueNumber-this.trxValueNumber*this.value/100).toFixed(6);const n=this.LpTrxNumber/this.LPTokenNumber,e=(this.trxValueNumber/this.tokenValueNumber).toFixed(6),i=Math.abs((e-n)/n*100);this.impactPrice=i.toFixed(2)},butSwitch(){this.isSwitch=this.isSwitch=="buy"?"sell":"buy"},LpTokeninall(){this.LpTokenValueNumber=this.userErke_token,this.LptokenPriceConversion()},LpTrxinall(){this.LptrxValueNumber=this.trxNumber,this.LpPriceConversion()},LpPriceConversion(){this.tronSwap.getTrxToTokenInputPrice(this.LptrxValueNumber*this.trxFloat).then(n=>{this.LpTokenValueNumber=(n/this.tokenFloat).toFixed(this.tokenFloatLength)})},LptokenPriceConversion(){this.tronSwap.getTokenToTrxInputPrice(this.LpTokenValueNumber*this.tokenFloat).then(n=>{this.LptrxValueNumber=(n/this.trxFloat).toFixed(this.trxFloatLength)})},LpinputToken(){this.LptokenPriceConversion()},LpinputTrx(){this.LpPriceConversion()},TrxToTokenProp(){this.tronSwap.getTrxToTokenInputPrice(1e6).then(n=>{this.LpSwapTokenAmount=(n/this.tokenFloat).toFixed(this.tokenFloatLength)}),this.tronSwap.getTokenToTrxInputPrice(1e6).then(n=>{this.LpSwapTrxAmount=(n/this.trxFloat).toFixed(this.trxFloatLength)})},addPoolBnt(){this.trc20.allowance(this.tronAddress,this.tronSwap.lpAddress,this.callBackMsg)},callBackMsg(n){Number("0x"+n.constant_result[0])<this.LptrxValueNumber?this.trc20.approve(this.tronSwap.lpAddress,this.addInPool):this.addInPool()},addInPool(){const n=1,e=this.LptrxValueNumber*this.trxFloat,i=(this.LpTokenValueNumber*.01).toFixed(6),l=(Number(this.LpTokenValueNumber)+Number(i))*this.tokenFloat,s=(new Date().getTime()/1e3).toFixed(0)+60;this.tronSwap.addLiquidity(n,e,l,s).then(o=>{this.message="\u52A0\u6C60\u6210\u529F",this.showNotify()})},postTransactionRecord(n,e,i){const l={pageIndex:n,pageSize:50,type:i,keyPair:e,address:this.tronAddress};this.proxy.$http.post("/api/swapTransaction",l).then(s=>{})},clickTabs(){this.active==2&&this.inPoolRecord()},initPool(n){new T(n).balanceOf(this.tronAddress,this.initPoolAmount)},initPoolAmount(n){this.LpShareCapital=(Number("0x"+n.constant_result[0])/this.tokenFloat).toFixed(6)},getTotalSupply(n){this.LpTokenTotalSupply=(Number("0x"+n.constant_result[0])/this.tokenFloat).toFixed(6)},addPoolRecord(){this.active=1},removePoolRecord(n){const e=n.tokenPooltokens*this.tokenFloat,i=n.tokenPositionsTrxAmount*this.trxFloat,l=((n.tokenPooltokens-n.tokenPooltokens*this.value/100)*this.tokenFloat).toFixed(0),s=(new Date().getTime()/1e3).toFixed(0)+60;console.log(e+"#"+i+"#"+l+"#"+s),this.tronSwap.removeLiquidity(e,i,l,s).then(o=>{this.message="\u79FB\u9664\u6210\u529F",this.showNotify()})},inPoolRecord(){this.LpRecordList=[{lpAddress:this.tronSwap.lpAddress,tokenName:"ERKE/TRX",tokenIcon:"../assets/index/24-24.png",tokenShareCapital:0,tokenPooltokens:0,tokenPositionsTrxAmount:0,shareRatio:0}];for(let n=0;n<this.LpRecordList.length;n++){const e=new T(this.LpRecordList[n].lpAddress);e.balanceOf(this.tronAddress).then(i=>{this.LpRecordList[n].tokenShareCapital=(Number(i)/this.tokenFloat).toFixed(this.tokenFloatLength)}),e.totalSupply(this.LpRecordList[n].lpAddress).then(i=>{const l=(Number(i)/this.tokenFloat).toFixed(this.tokenFloatLength);this.LpRecordList[n].tokenPooltokens=(this.LPTokenNumber*this.LpRecordList[n].tokenShareCapital/l).toFixed(6),this.LpRecordList[n].tokenPositionsTrxAmount=(this.LpTrxNumber*this.LpRecordList[n].tokenShareCapital/l).toFixed(6)}),e.balanceOf(this.LpRecordList[n].lpAddress).then(i=>{const l=(Number(i)/this.tokenFloat).toFixed(this.tokenFloatLength);this.LpRecordList[n].shareRatio=(this.LpRecordList[n].tokenPooltokens/l).toFixed(6)})}}}},u=n=>(W("data-v-34a1968c"),n=n(),Z(),n),xt={class:"bg"},bt={style:{padding:"0px 17px"}},mt=u(()=>t("div",{style:{width:"40px",height:"40px",margin:"auto"}},[t("img",{src:U,style:{width:"100%"}})],-1)),wt={class:"connwall-bnt"},gt={key:0,class:"header__address"},kt=v(" \u94FE\u63A5\u94B1\u5305 "),vt={class:"con-data"},At={class:"form__wrap"},Tt=u(()=>t("div",{class:"form-bc"},null,-1)),ft={class:"form__swap"},yt={key:0,class:"inp-box"},Nt={class:"inp-box__head"},Lt=u(()=>t("div",{class:"inp-box__label"}," \u652F\u4ED8 ",-1)),St={class:"inp-box__balance"},Pt=u(()=>t("span",null,"\u4F59\u989D:",-1)),Ct={class:"inp-box__wrap"},Vt={class:"inp-box__token"},Rt=u(()=>t("img",{src:P},null,-1)),Ft={key:1,class:"inp-box"},It={class:"inp-box__head"},Bt=u(()=>t("div",{class:"inp-box__label"}," \u652F\u4ED8 ",-1)),Et={class:"inp-box__balance"},zt=u(()=>t("span",null,"\u4F59\u989D:",-1)),Ut={class:"inp-box__wrap"},Gt={class:"inp-box__token"},Ot=u(()=>t("img",{src:V},null,-1)),Yt={class:"inp-box__dh"},Dt={key:2,class:"inp-box"},Kt={class:"inp-box__head"},Qt=u(()=>t("div",{class:"inp-box__label"}," \u5151\u6362\u6210 ",-1)),qt={class:"inp-box__balance"},Ht=u(()=>t("span",null,"\u4F59\u989D:",-1)),Mt={class:"inp-box__wrap"},Xt={class:"inp-box__token"},Jt=u(()=>t("img",{src:P},null,-1)),jt={key:3,class:"inp-box"},Wt={class:"inp-box__head"},Zt=u(()=>t("div",{class:"inp-box__label"}," \u5151\u6362\u6210 ",-1)),$t={class:"inp-box__balance"},te=u(()=>t("span",null,"\u4F59\u989D:",-1)),ee={class:"inp-box__wrap"},se={class:"inp-box__token"},ne=u(()=>t("img",{src:V},null,-1)),oe={class:"inp-box_bnt"},ie=u(()=>t("div",{class:"tab-title-text"},[t("span",null,"\u6D41\u52A8\u6027\u8D44\u91D1\u6C60")],-1)),le={class:"inp-tab"},re={class:"inp-tab-ping"},ae={class:"inp-tab-ping"},de={class:"form_f"},ue={class:"params__item"},ce=u(()=>t("div",{class:"params__name"}," \u6700\u5C0F\u63A5\u6536\u989D ",-1)),pe={class:"params__value"},he={style:{"padding-right":"3px"}},_e={key:0},xe={key:1},be={class:"params__item"},me=u(()=>t("div",{class:"params__name"}," \u4EF7\u683C\u5F71\u54CD ",-1)),we={class:"params__value"},ge={class:"params__item"},ke=u(()=>t("div",{class:"params__name"}," \u6D41\u52A8\u6027\u63D0\u4F9B\u8005\u8D39\u7528 ",-1)),ve={class:"params__value"},Ae={style:{"padding-right":"3px"}},Te={key:0},fe={key:1},ye={class:"form__swap"},Ne={class:"inp-box"},Le={class:"inp-box__head"},Se=u(()=>t("div",{class:"inp-box__label"}," \u8F93\u5165 ",-1)),Pe={class:"inp-box__balance"},Ce=u(()=>t("span",null,"\u4F59\u989D:",-1)),Ve={class:"inp-box__wrap"},Re={class:"inp-box__token"},Fe=u(()=>t("img",{src:P},null,-1)),Ie=u(()=>t("span",null,"TRX",-1)),Be=u(()=>t("div",{class:"inp-box__dh"},[t("img",{src:ht})],-1)),Ee={class:"inp-box"},ze={class:"inp-box__head"},Ue=u(()=>t("div",{class:"inp-box__label"}," \u8F93\u5165 ",-1)),Ge={class:"inp-box__balance"},Oe=u(()=>t("span",null,"\u4F59\u989D:",-1)),Ye={class:"inp-box__wrap"},De={class:"inp-box__token"},Ke=u(()=>t("img",{src:V},null,-1)),Qe=u(()=>t("span",null,"ERKE",-1)),qe=u(()=>t("div",{class:"tab-title-text"},[t("span",null,"\u4EF7\u683C\u548C\u8D44\u91D1\u6C60\u4EFD\u989D")],-1)),He={class:"inp-tab"},Me=u(()=>t("span",null,"1",-1)),Xe=u(()=>t("span",null,"\u5151\u6362 ",-1)),Je={class:"inp-tab-ping"},je=u(()=>t("span",null,"1",-1)),We=u(()=>t("span",null,"\u5151\u6362 ",-1)),Ze={class:"inp-tab-ping"},$e=u(()=>t("div",null,[t("span",null,"\u8D44\u91D1\u6C60\u4EFD\u989D")],-1)),ts={class:"inp-tab-ping"},es=v("% "),ss=u(()=>t("div",{class:"tab-title-text"},[t("span",null,"\u60A8\u7684\u4ED3\u4F4D")],-1)),ns={class:"inp-tab"},os={class:"inp-tab-ping"},is={class:"inp-tab-ping"},ls=u(()=>t("div",null,[t("span",null,"\u8D44\u91D1\u6C60\u4EE3\u5E01")],-1)),rs={class:"inp-tab-ping"},as={class:"inp-box_bnt"},ds={key:0},us={key:1},cs={class:"form__swap"},ps={class:"inp-box-record"},hs={class:"params__name"},_s={class:"inp-box__token"},xs=["src"],bs=u(()=>t("img",{src:P},null,-1)),ms={class:"add-remove-text"},ws=v(),gs=["onClick"],ks={class:"addpool-inp-tabrecord"},vs=u(()=>t("div",null,[t("span",null,"\u6570\u91CF ERKE/TRX ")],-1)),As={class:"inp-tab-ping"},Ts=v("/"),fs=u(()=>t("div",{style:{"text-align":"right"}},[t("span",null,"\u8D44\u91D1\u6C60\u4EE3\u5E01/\u8D44\u91D1\u6C60\u4EFD\u989D")],-1)),ys={class:"inp-tab-ping",style:{"text-align":"right"}},Ns=v(),Ls=v("% "),Ss={style:{"text-align":"center","padding-top":"17px"}},Ps=u(()=>t("div",{style:{display:"-webkit-box"}},[t("div",{style:{width:"40px","text-align":"right",height:"40px"}},[t("img",{src:U,style:{width:"100%"}})]),t("div",{style:{width:"50%","text-align":"left","padding-top":"8px"}},[t("span",null,"ErkeSwap")])],-1)),Cs={key:0,style:{padding:"18px 0px"}},Vs={key:1,style:{padding:"18px 0px"}},Rs=v("\u94FE\u63A5\u94B1\u5305"),Fs={style:{padding:"0px 20px"}},Is={style:{background:"rgba(72,80,229,.1)",padding:"10px","border-radius":"12px"}},Bs=u(()=>t("span",null,"Trx",-1)),Es={style:{padding:"17px"}},zs=u(()=>t("img",{src:G},null,-1)),Us=u(()=>t("a",{href:"https://erketrc20.com/"},[t("span",null,"\u7EA2\u661F\u5E01\u5B98\u7F51")],-1)),Gs=u(()=>t("img",{src:G},null,-1)),Os=u(()=>t("a",{href:"http://jurassic.one/"},[t("span",null,"Jura\u5E01\u5B98\u7F51")],-1)),Ys={class:"wrapper"},Ds={class:"block"},Ks=u(()=>t("p",{style:{"text-align":"center"}},"\u9AD8\u7EA7\u8BBE\u7F6E",-1)),Qs=u(()=>t("div",null,[t("span",null,"\u8BBE\u7F6E\u6ED1\u70B9\u5BB9\u5FCD\u5EA6")],-1)),qs={style:{"padding-top":"17px"}},Hs=u(()=>t("div",{style:{"padding-top":"17px","padding-bottom":"5px"}},[t("span",null,"\u622A\u81F3\u65F6\u95F4")],-1)),Ms={class:"hd-set",style:{"font-size":"12px",border:"1px solid #888888"}},Xs=u(()=>t("div",{style:{"font-size":"12px",padding:"10px 0px"}},"\u5206\u949F",-1)),Js={style:{"padding-top":"20px","padding-left":"20px","padding-right":"20px"}},js=v("\u786E\u8BA4\u8BBE\u7F6E");function Ws(n,e,i,l,s,o){const r=k("van-col"),h=k("van-row"),m=k("van-button"),f=k("van-tab"),D=k("van-empty"),K=k("van-tabs"),Q=k("van-popup"),R=k("van-field"),q=k("van-overlay"),H=k("van-notify");return _(),x(B,null,[t("div",xt,[t("div",bt,[d(h,{style:{padding:"10px 0px"}},{default:c(()=>[d(r,{span:"24"},{default:c(()=>[mt]),_:1})]),_:1}),d(h,{justify:"center",style:{"margin-top":"10px"}},{default:c(()=>[d(r,{span:"8",style:{"padding-right":"5px"}},{default:c(()=>[t("div",wt,[s.tronShowAddress?(_(),x("div",gt,[t("span",null,p(s.tronShowAddress),1)])):w("",!0),s.tronShowAddress?w("",!0):(_(),E(m,{key:1,size:"small",onClick:o.connectWall,color:"linear-gradient(to right, #ff6034, #ee0a24)"},{default:c(()=>[kt]),_:1},8,["onClick"]))])]),_:1}),d(r,{span:"2"},{default:c(()=>[d(m,{onClick:e[0]||(e[0]=a=>l.show=!0),style:{"background-color":"#F1F5F8",border:"none"},size:"small",icon:"/assets/index/cog.svg",type:"primary"})]),_:1}),d(r,{span:"3",style:{"text-align":"center"}},{default:c(()=>[d(m,{onClick:o.popupShow,style:{"background-color":"#F1F5F8",border:"none"},size:"small",icon:"/assets/index/bars.svg",type:"primary"},null,8,["onClick"])]),_:1})]),_:1})]),t("div",vt,[t("div",At,[Tt,d(K,{active:l.active,"onUpdate:active":e[19]||(e[19]=a=>l.active=a),onClick:o.clickTabs},{default:c(()=>[d(f,{title:"\u4EA4\u6362"},{default:c(()=>[t("div",ft,[s.isSwitch=="buy"?(_(),x("div",yt,[t("div",Nt,[Lt,t("div",St,[Pt,t("span",null,p(s.trxNumber),1)])]),t("div",Ct,[y(t("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.trxValueNumber=a),onInput:e[2]||(e[2]=(...a)=>o.inputTrx&&o.inputTrx(...a)),class:"input-box__input"},null,544),[[N,s.trxValueNumber]]),t("div",Vt,[t("span",{onClick:e[3]||(e[3]=(...a)=>o.inall&&o.inall(...a)),class:"inp-all",style:{"font-size":"12px","margin-right":"6px"}},"\u68AD\u54C8"),Rt,t("span",null,p(s.toTokenName),1)])])])):w("",!0),s.isSwitch=="sell"?(_(),x("div",Ft,[t("div",It,[Bt,t("div",Et,[zt,t("span",null,p(s.userErke_token),1)])]),t("div",Ut,[y(t("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>s.tokenValueNumber=a),onInput:e[5]||(e[5]=(...a)=>o.inputToken&&o.inputToken(...a)),class:"input-box__input"},null,544),[[N,s.tokenValueNumber]]),t("div",Gt,[t("span",{onClick:e[6]||(e[6]=(...a)=>o.inall&&o.inall(...a)),class:"inp-all",style:{"font-size":"12px","margin-right":"6px"}},"\u68AD\u54C8"),Ot,t("span",null,p(s.fromTokenName),1)])])])):w("",!0),t("div",Yt,[t("img",{src:pt,onClick:e[7]||(e[7]=(...a)=>o.butSwitch&&o.butSwitch(...a))})]),s.isSwitch=="sell"?(_(),x("div",Dt,[t("div",Kt,[Qt,t("div",qt,[Ht,t("span",null,p(s.trxNumber),1)])]),t("div",Mt,[y(t("input",{"onUpdate:modelValue":e[8]||(e[8]=a=>s.trxValueNumber=a),onInput:e[9]||(e[9]=(...a)=>o.inputTrx&&o.inputTrx(...a)),class:"input-box__input"},null,544),[[N,s.trxValueNumber]]),t("div",Xt,[Jt,t("span",null,p(s.toTokenName),1)])])])):w("",!0),s.isSwitch=="buy"?(_(),x("div",jt,[t("div",Wt,[Zt,t("div",$t,[te,t("span",null,p(s.userErke_token),1)])]),t("div",ee,[y(t("input",{"onUpdate:modelValue":e[10]||(e[10]=a=>s.tokenValueNumber=a),onInput:e[11]||(e[11]=(...a)=>o.inputToken&&o.inputToken(...a)),class:"input-box__input"},null,544),[[N,s.tokenValueNumber]]),t("div",se,[ne,t("span",null,p(s.fromTokenName),1)])])])):w("",!0),t("div",oe,[d(m,{type:"primary",onClick:o.butSwap,block:"",color:"linear-gradient(to right, #ff6034, #ee0a24)"},{default:c(()=>[v(p(this.tronShowAddress?"\u5151\u6362":"\u94FE\u63A5\u5230\u94B1\u5305"),1)]),_:1},8,["onClick"])]),ie,t("div",le,[d(h,null,{default:c(()=>[d(r,{span:"12"},{default:c(()=>[t("div",null,[t("span",null,p(s.toTokenName),1)]),t("div",re,[t("span",null,p(s.LpTrxNumber),1)])]),_:1}),d(r,{span:"12"},{default:c(()=>[t("div",null,[t("span",null,p(s.fromTokenName),1)]),t("div",ae,[t("span",null,p(s.LPTokenNumber),1)])]),_:1})]),_:1})])]),t("div",de,[t("div",ue,[ce,t("div",pe,[t("span",he,p(s.minGetCnt),1),s.isSwitch=="buy"?(_(),x("span",_e,p(s.fromTokenName),1)):w("",!0),s.isSwitch=="sell"?(_(),x("span",xe,p(s.toTokenName),1)):w("",!0)])]),t("div",be,[me,t("div",we,[t("span",{style:{"padding-right":"3px"},class:S({buyColor:s.isSwitch=="buy",sellColor:s.isSwitch=="sell"})},p(s.impactPrice)+"%",3)])]),t("div",ge,[ke,t("div",ve,[t("span",Ae,p(s.supplierPrice),1),s.isSwitch=="buy"?(_(),x("span",Te,p(s.toTokenName),1)):w("",!0),s.isSwitch=="sell"?(_(),x("span",fe,p(s.fromTokenName),1)):w("",!0)])])])]),_:1}),d(f,{title:"\u6DFB\u52A0\u6D41\u52A8\u6027"},{default:c(()=>[t("div",ye,[t("div",Ne,[t("div",Le,[Se,t("div",Pe,[Ce,t("span",null,p(s.trxNumber),1)])]),t("div",Ve,[y(t("input",{"onUpdate:modelValue":e[12]||(e[12]=a=>s.LptrxValueNumber=a),onInput:e[13]||(e[13]=(...a)=>o.LpinputTrx&&o.LpinputTrx(...a)),class:"input-box__input"},null,544),[[N,s.LptrxValueNumber]]),t("div",Re,[t("span",{onClick:e[14]||(e[14]=(...a)=>o.LpTrxinall&&o.LpTrxinall(...a)),class:"inp-all",style:{"font-size":"12px","margin-right":"6px"}},"\u68AD\u54C8"),Fe,Ie])])]),Be,t("div",Ee,[t("div",ze,[Ue,t("div",Ge,[Oe,t("span",null,p(s.userErke_token),1)])]),t("div",Ye,[y(t("input",{"onUpdate:modelValue":e[15]||(e[15]=a=>s.LpTokenValueNumber=a),onInput:e[16]||(e[16]=(...a)=>o.LpinputToken&&o.LpinputToken(...a)),class:"input-box__input"},null,544),[[N,s.LpTokenValueNumber]]),t("div",De,[t("span",{onClick:e[17]||(e[17]=(...a)=>o.LpTokeninall&&o.LpTokeninall(...a)),class:"inp-all",style:{"font-size":"12px","margin-right":"6px"}},"\u68AD\u54C8"),Ke,Qe])])]),qe,t("div",He,[d(h,null,{default:c(()=>[d(r,{span:"8"},{default:c(()=>[t("div",null,[Me,t("span",null,p(s.fromTokenName),1),Xe,t("span",null,p(s.toTokenName),1)]),t("div",Je,[t("span",null,p(s.LpSwapTrxAmount),1)])]),_:1}),d(r,{span:"8"},{default:c(()=>[t("div",null,[je,t("span",null,p(s.toTokenName),1),We,t("span",null,p(s.fromTokenName),1)]),t("div",Ze,[t("span",null,p(s.LpSwapTokenAmount),1)])]),_:1}),d(r,{span:"8"},{default:c(()=>[$e,t("div",ts,[t("span",null,p(s.LpShareRatio),1),es])]),_:1})]),_:1})]),ss,t("div",ns,[d(h,null,{default:c(()=>[d(r,{span:"8"},{default:c(()=>[t("div",null,[t("span",null,p(s.fromTokenName),1)]),t("div",os,[t("span",null,p(s.LpPooltokens),1)])]),_:1}),d(r,{span:"8"},{default:c(()=>[t("div",null,[t("span",null,p(s.toTokenName),1)]),t("div",is,[t("span",null,p(s.LpPositionsTrxAmount),1)])]),_:1}),d(r,{span:"8"},{default:c(()=>[ls,t("div",rs,[t("span",null,p(s.LpShareCapital),1)])]),_:1})]),_:1})]),t("div",as,[d(m,{type:"primary",onClick:o.addPoolBnt,block:"",color:"linear-gradient(to right, #ff6034, #ee0a24)"},{default:c(()=>[v(p(this.tronShowAddress?"\u6DFB\u52A0\u6D41\u52A8\u6027":"\u94FE\u63A5\u5230\u94B1\u5305"),1)]),_:1},8,["onClick"])])])]),_:1}),d(f,{title:"\u6D41\u52A8\u6027\u8BB0\u5F55"},{default:c(()=>[s.LpRecordList.length==0?(_(),x("div",ds,[d(D,{description:"\u672A\u53D1\u73B0\u6D41\u52A8\u6027"})])):w("",!0),s.LpRecordList.length>0?(_(),x("div",us,[(_(!0),x(B,null,$(s.LpRecordList,(a,on)=>(_(),x("div",cs,[t("div",ps,[t("div",hs,[t("div",_s,[t("img",{src:a.tokenIcon},null,8,xs),bs,t("span",null,p(a.tokenName),1),t("div",ms,[t("span",{onClick:e[18]||(e[18]=(...F)=>o.addPoolRecord&&o.addPoolRecord(...F))},"Add"),ws,t("span",{onClick:F=>o.removePoolRecord(a)},"Remove",8,gs)])])])]),t("div",ks,[d(h,null,{default:c(()=>[d(r,{span:"12"},{default:c(()=>[vs,t("div",As,[t("span",null,p(a.tokenPooltokens),1),Ts,t("span",null,p(a.tokenPositionsTrxAmount),1)])]),_:2},1024),d(r,{span:"12"},{default:c(()=>[fs,t("div",ys,[t("span",null,p(a.tokenShareCapital),1),Ns,t("span",null,p(a.shareRatio),1),Ls])]),_:2},1024)]),_:2},1024)])]))),256))])):w("",!0)]),_:1})]),_:1},8,["active","onClick"])])])]),d(Q,{show:l.isShow,"onUpdate:show":e[20]||(e[20]=a=>l.isShow=a),closeable:"",position:"left",style:{height:"100%",width:"280px"}},{default:c(()=>[t("div",Ss,[Ps,s.tronShowAddress?(_(),x("div",Cs,[t("span",null,p(s.tronShowAddress),1)])):w("",!0),s.tronShowAddress?w("",!0):(_(),x("div",Vs,[d(m,{round:"",size:"small",color:"linear-gradient(to right, #ff6034, #ee0a24)",onClick:o.connectWall},{default:c(()=>[Rs]),_:1},8,["onClick"])])),t("div",Fs,[t("div",Is,[t("span",null,p(s.trxNumber),1),Bs])]),t("div",Es,[d(h,{style:{padding:"10px 0px"}},{default:c(()=>[d(r,{span:"6"},{default:c(()=>[zs]),_:1}),d(r,{span:"18",style:{"text-align":"left"}},{default:c(()=>[Us]),_:1})]),_:1}),d(h,{style:{padding:"10px 0px"}},{default:c(()=>[d(r,{span:"6"},{default:c(()=>[Gs]),_:1}),d(r,{span:"18",style:{"text-align":"left"}},{default:c(()=>[Os]),_:1})]),_:1})])])]),_:1},8,["show"]),d(q,{show:l.show},{default:c(()=>[t("div",Ys,[t("div",Ds,[Ks,Qs,t("div",qs,[d(h,null,{default:c(()=>[d(r,{class:"hd-b-p",span:"6"},{default:c(()=>[t("div",{class:S(["hd-set",{"br-bg":this.value==.1}]),style:{"font-size":"12px"},onClick:e[21]||(e[21]=a=>o.setValue("0.1"))},"0.1%",2)]),_:1}),d(r,{class:"hd-b-p",span:"6"},{default:c(()=>[t("div",{class:S(["hd-set",{"br-bg":this.value==.5}]),style:{"font-size":"12px"},onClick:e[22]||(e[22]=a=>o.setValue("0.5"))},"0.5%",2)]),_:1}),d(r,{class:"hd-b-p",span:"6"},{default:c(()=>[t("div",{class:S(["hd-set",{"br-bg":this.value==1}]),style:{"font-size":"12px"},onClick:e[23]||(e[23]=a=>o.setValue("1"))},"1%",2)]),_:1}),d(r,{class:"hd-b-p",span:"6",style:{"text-align":"right"}},{default:c(()=>[t("div",{class:S(["hd-set",{"br-bg":this.value>1}]),style:{"font-size":"12px",border:"1px solid #888888"}},[d(R,{modelValue:s.value,"onUpdate:modelValue":e[24]||(e[24]=a=>s.value=a),"input-align":"center",style:{"background-color":"#ffffff",padding:"0px","line-height":"0px","font-size":"12px"},placeholder:"\u8BF7\u8BBE\u7F6E\u6ED1\u70B9"},null,8,["modelValue"])],2)]),_:1})]),_:1})]),Hs,t("div",null,[d(h,null,{default:c(()=>[d(r,{class:"hd-b-p",span:"6"},{default:c(()=>[t("div",Ms,[d(R,{modelValue:s.timeValue,"onUpdate:modelValue":e[25]||(e[25]=a=>s.timeValue=a),"input-align":"center",style:{"background-color":"#ffffff",padding:"0px","line-height":"0px","font-size":"12px"},placeholder:"\u6700\u5C0F\u65F6\u95F4"},null,8,["modelValue"])])]),_:1}),d(r,{class:"hd-b-p",span:"18"},{default:c(()=>[Xs]),_:1})]),_:1})]),t("div",Js,[d(m,{onClick:o.setMinBi,type:"success",color:"#ff6c3f",style:{width:"80%",margin:"auto","border-radius":"12px"},block:""},{default:c(()=>[js]),_:1},8,["onClick"])])])])]),_:1},8,["show"]),d(H,{show:this.showSuccess,"onUpdate:show":e[26]||(e[26]=a=>this.showSuccess=a),color:"#ad0000",background:"#ffe1e1"},{default:c(()=>[t("span",null,p(l.message),1)]),_:1},8,["show"])],64)}var Y=O(_t,[["render",Ws],["__scopeId","data-v-34a1968c"]]);const Zs=tt(),$s=et({history:Zs,routes:[{path:"/",name:"",component:Y},{path:"/index",name:"index",component:Y}]}),tn={};function en(n,e){const i=k("router-view");return _(),E(i)}var sn=O(tn,[["render",en]]);A.defaults.baseURL="http://139.159.185.26/evswap";A.defaults.headers.post["Content-Type"]="application/json";A.defaults.timeout=1e4;A.interceptors.request.use(n=>n,n=>Promise.reject(n));A.interceptors.response.use(n=>n.status==200?Promise.resolve(n):Promise.reject(n),n=>{I(`\u5F02\u5E38\u8BF7\u6C42\uFF1A${JSON.stringify(n.message)}`)});var nn={post(n,e){return new Promise((i,l)=>{A({method:"post",url:n,data:e}).then(s=>{i(s.data)}).catch(s=>{l(s)})})},get(n,e){return new Promise((i,l)=>{A({method:"get",url:n,params:e}).then(s=>{i(s.data)}).catch(s=>{l(s)})})}};const C=st(sn);C.use($s);C.mount("#app");C.use(nt);C.config.globalProperties.$http=nn;