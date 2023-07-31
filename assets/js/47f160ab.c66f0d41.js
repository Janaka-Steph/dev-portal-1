"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[8566],{91262:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(67294),l=a(72389);function o(e){let{children:t,fallback:a}=e;return(0,l.default)()?n.createElement(n.Fragment,null,t?.()):a??null}},80667:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(a(67294)),o=n(a(91262)),r=a(67783);function s(e){switch(e.toLowerCase()){case"get":return"primary";case"post":return"success";case"delete":return"danger";case"put":return"info";case"patch":return"warning";case"head":case"event":return"secondary";default:return}}t.default=function(e){let{method:t,path:a}=e,n=(0,r.useTypedSelector)((e=>e.server.value)),i="";return l.default.createElement(l.default.Fragment,null,l.default.createElement("pre",{className:"openapi__method-endpoint"},l.default.createElement("span",{className:"badge badge--"+s(t)},t.toUpperCase())," ",l.default.createElement("h2",{className:"openapi__method-endpoint-path"},(n&&n.variables&&(i=n.url.replace(/\/$/,""),Object.keys(n.variables).forEach((e=>{i=i.replace(`{${e}}`,n.variables?.[e].default??"")}))),l.default.createElement(o.default,null,(()=>i.length?i:n&&n.url?n.url:void 0))),`${a.replace(/{([a-z0-9-_]+)}/gi,":$1")}`)),l.default.createElement("div",{className:"openapi__divider"}))}},24228:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(a(67294)),o=n(a(39960)),r=a(67783);t.default=function(e){const t=(0,r.useTypedSelector)((e=>e.auth.options)),a=(0,r.useTypedSelector)((e=>e.auth.selected)),n=`/${e.infoPath}#authentication`;if(void 0===a)return null;if(void 0===t[a]?.[0]?.type)return null;const s=t[a];return l.default.createElement("details",{className:"openapi-security__details",open:!1},l.default.createElement("summary",{className:"openapi-security__summary-container"},l.default.createElement("h4",{className:"openapi-security__summary-header"},"Authorization: ",s[0].name??s[0].type)),s.map((e=>{const t="http"===e.type,r="apiKey"===e.type,s="oauth2"===e.type,i="openIdConnect"===e.type;if(t){if("bearer"===e.scheme){const{name:t,key:a,type:r,scopes:s,...i}=e;return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(o.default,{to:n},t??a)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),r),s&&s.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(i).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof i[e]?JSON.stringify(i[e],null,2):String(i[e]))))))}if("basic"===e.scheme){const{name:t,key:a,type:r,scopes:s,...i}=e;return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(o.default,{to:n},t??a)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),r),s&&s.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(i).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof i[e]?JSON.stringify(i[e],null,2):String(i[e]))))))}return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(o.default,{to:n},e.name??e.key)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),e.type),l.default.createElement("span",null,l.default.createElement("strong",null,"in: "),e.in)))}if(r){const{name:t,key:a,type:r,scopes:s,...i}=e;return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(o.default,{to:n},t??a)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),r),s&&s.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(i).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof i[e]?JSON.stringify(i[e],null,2):String(i[e]))))))}if(s){const{name:t,key:r,type:s,scopes:i,flows:p,...u}=e;return l.default.createElement(l.default.Fragment,{key:a},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(o.default,{to:n},t??r)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),s),i&&i.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(u).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof u[e]?JSON.stringify(u[e],null,2):String(u[e])))),p&&l.default.createElement("span",null,l.default.createElement("code",null,l.default.createElement("strong",null,"flows: "),JSON.stringify(p,null,2)))))}if(i){const{name:t,key:a,scopes:r,type:s,...i}=e;return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(o.default,{to:n},t??a)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),s),r&&r.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(i).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof i[e]?JSON.stringify(i[e],null,2):String(i[e]))))))}})))}},98181:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>v,frontMatter:()=>y,metadata:()=>k,toc:()=>_});var n=a(87462),l=(a(67294),a(3905)),o=a(58219),r=(a(62316),a(80667)),s=a.n(r),i=a(24228),p=a.n(i),u=a(9487),d=(a(41429),a(5397)),m=a(4667),c=a(9472),f=a(85162);const y={id:"audio-generation-v-1-audio-generation-post",title:"Audio Generation",description:"Audio Generation",sidebar_label:"Audio Generation",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"audio_generation_v1_audio_generation_post",requestBody:{content:{"application/json":{schema:{title:"AudioGenerationInput",required:["prompt"],type:"object",properties:{prompt:{title:"Prompt",type:"string"}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Audio Generation",method:"post",path:"/v1/audio/generation",jsonRequestBodyExample:{prompt:"string"},info:{title:"Prem Text to Audio",version:"0.0.1"},postman:{name:"Audio Generation",description:{type:"text/plain"},url:{path:["v1","audio","generation"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/prem-app/usage/text-to-audio/api/prem-text-to-audio",custom_edit_url:null},g=void 0,k={unversionedId:"prem-app/usage/text-to-audio/api/audio-generation-v-1-audio-generation-post",id:"prem-app/usage/text-to-audio/api/audio-generation-v-1-audio-generation-post",title:"Audio Generation",description:"Audio Generation",source:"@site/docs/prem-app/usage/text-to-audio/api/audio-generation-v-1-audio-generation-post.api.mdx",sourceDirName:"prem-app/usage/text-to-audio/api",slug:"/prem-app/usage/text-to-audio/api/audio-generation-v-1-audio-generation-post",permalink:"/docs/prem-app/usage/text-to-audio/api/audio-generation-v-1-audio-generation-post",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"audio-generation-v-1-audio-generation-post",title:"Audio Generation",description:"Audio Generation",sidebar_label:"Audio Generation",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"audio_generation_v1_audio_generation_post",requestBody:{content:{"application/json":{schema:{title:"AudioGenerationInput",required:["prompt"],type:"object",properties:{prompt:{title:"Prompt",type:"string"}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Audio Generation",method:"post",path:"/v1/audio/generation",jsonRequestBodyExample:{prompt:"string"},info:{title:"Prem Text to Audio",version:"0.0.1"},postman:{name:"Audio Generation",description:{type:"text/plain"},url:{path:["v1","audio","generation"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/prem-app/usage/text-to-audio/api/prem-text-to-audio",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/prem-app/usage/text-to-audio/api/prem-text-to-audio"},next:{title:"Health",permalink:"/docs/prem-app/usage/text-to-audio/api/health-v-1-get"}},h={},_=[{value:"Request",id:"request",level:2}],E={toc:_},b="wrapper";function v(e){let{components:t,...a}=e;return(0,l.kt)(b,(0,n.Z)({},E,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Audio Generation"),(0,l.kt)(s(),{method:"post",path:"/v1/audio/generation",mdxType:"MethodEndpoint"}),(0,l.kt)(p(),{infoPath:"docs/prem-app/usage/text-to-audio/api/prem-text-to-audio",mdxType:"SecuritySchemes"}),(0,l.kt)("p",null,"Audio Generation"),(0,l.kt)("h2",{id:"request"},"Request"),(0,l.kt)(u.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,l.kt)(f.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,l.kt)("strong",{className:"openapi-schema__required"},"required")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"prompt",required:!0,schemaName:"Prompt",qualifierMessage:void 0,schema:{title:"Prompt",type:"string"},mdxType:"SchemaItem"}))))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(o.Z,{mdxType:"ApiTabs"},(0,l.kt)(f.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Successful Response")),(0,l.kt)("div",null,(0,l.kt)(u.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(f.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(f.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},"any")))))))),(0,l.kt)(f.default,{label:"422",value:"422",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Validation Error")),(0,l.kt)("div",null,(0,l.kt)(u.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(f.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(f.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"detail"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"loc"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,l.kt)("span",{className:"openapi-schema__divider"}),(0,l.kt)("span",{className:"openapi-schema__required"},"required"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"anyOf"),(0,l.kt)(c.default,{mdxType:"SchemaTabs"},(0,l.kt)(f.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"string")))),(0,l.kt)(f.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"integer")))))),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(m.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(f.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(d.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);