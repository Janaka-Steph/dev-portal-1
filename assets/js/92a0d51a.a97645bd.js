"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[9504],{91262:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(67294),l=a(72389);function s(e){let{children:t,fallback:a}=e;return(0,l.default)()?n.createElement(n.Fragment,null,t?.()):a??null}},80667:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(a(67294)),s=n(a(91262)),i=a(67783);function r(e){switch(e.toLowerCase()){case"get":return"primary";case"post":return"success";case"delete":return"danger";case"put":return"info";case"patch":return"warning";case"head":case"event":return"secondary";default:return}}t.default=function(e){let{method:t,path:a}=e,n=(0,i.useTypedSelector)((e=>e.server.value)),m="";return l.default.createElement(l.default.Fragment,null,l.default.createElement("pre",{className:"openapi__method-endpoint"},l.default.createElement("span",{className:"badge badge--"+r(t)},t.toUpperCase())," ",l.default.createElement("h2",{className:"openapi__method-endpoint-path"},(n&&n.variables&&(m=n.url.replace(/\/$/,""),Object.keys(n.variables).forEach((e=>{m=m.replace(`{${e}}`,n.variables?.[e].default??"")}))),l.default.createElement(s.default,null,(()=>m.length?m:n&&n.url?n.url:void 0))),`${a.replace(/{([a-z0-9-_]+)}/gi,":$1")}`)),l.default.createElement("div",{className:"openapi__divider"}))}},24228:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(a(67294)),s=n(a(39960)),i=a(67783);t.default=function(e){const t=(0,i.useTypedSelector)((e=>e.auth.options)),a=(0,i.useTypedSelector)((e=>e.auth.selected)),n=`/${e.infoPath}#authentication`;if(void 0===a)return null;if(void 0===t[a]?.[0]?.type)return null;const r=t[a];return l.default.createElement("details",{className:"openapi-security__details",open:!1},l.default.createElement("summary",{className:"openapi-security__summary-container"},l.default.createElement("h4",{className:"openapi-security__summary-header"},"Authorization: ",r[0].name??r[0].type)),r.map((e=>{const t="http"===e.type,i="apiKey"===e.type,r="oauth2"===e.type,m="openIdConnect"===e.type;if(t){if("bearer"===e.scheme){const{name:t,key:a,type:i,scopes:r,...m}=e;return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(s.default,{to:n},t??a)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),i),r&&r.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(m).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof m[e]?JSON.stringify(m[e],null,2):String(m[e]))))))}if("basic"===e.scheme){const{name:t,key:a,type:i,scopes:r,...m}=e;return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(s.default,{to:n},t??a)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),i),r&&r.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(m).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof m[e]?JSON.stringify(m[e],null,2):String(m[e]))))))}return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(s.default,{to:n},e.name??e.key)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),e.type),l.default.createElement("span",null,l.default.createElement("strong",null,"in: "),e.in)))}if(i){const{name:t,key:a,type:i,scopes:r,...m}=e;return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(s.default,{to:n},t??a)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),i),r&&r.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(m).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof m[e]?JSON.stringify(m[e],null,2):String(m[e]))))))}if(r){const{name:t,key:i,type:r,scopes:m,flows:d,...p}=e;return l.default.createElement(l.default.Fragment,{key:a},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(s.default,{to:n},t??i)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),r),m&&m.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(p).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof p[e]?JSON.stringify(p[e],null,2):String(p[e])))),d&&l.default.createElement("span",null,l.default.createElement("code",null,l.default.createElement("strong",null,"flows: "),JSON.stringify(d,null,2)))))}if(m){const{name:t,key:a,scopes:i,type:r,...m}=e;return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(s.default,{to:n},t??a)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),r),i&&i.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(m).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof m[e]?JSON.stringify(m[e],null,2):String(m[e]))))))}})))}},73400:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>v,frontMatter:()=>y,metadata:()=>b,toc:()=>h});var n=a(87462),l=(a(67294),a(3905)),s=a(58219),i=(a(62316),a(80667)),r=a.n(i),m=a(24228),d=a.n(m),p=a(9487),o=(a(41429),a(5397)),c=a(4667),u=a(9472),g=a(85162);const y={id:"embeddings-openai-v-1-engines-text-embedding-ada-002-embeddings-post",title:"Embeddings Openai",description:"Embeddings Openai",sidebar_label:"Embeddings Openai",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"embeddings_openai_v1_engines_text_embedding_ada_002_embeddings_post",requestBody:{content:{"application/json":{schema:{title:"EmbeddingsInput",required:["input"],type:"object",properties:{model:{title:"Model",type:"string"},input:{title:"Input",anyOf:[{type:"array",items:{type:"string"}},{type:"array",items:{type:"array",items:{type:"integer"}}}]},user:{title:"User",type:"string",default:""}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"EmbeddingsResponse",required:["data","usage"],type:"object",properties:{object:{title:"Object",type:"string",default:"list"},data:{title:"Data",type:"array",items:{title:"EmbeddingObject",required:["embedding"],type:"object",properties:{object:{title:"Object",type:"string",default:"embedding"},index:{title:"Index",type:"integer",default:0},embedding:{title:"Embedding",type:"array",items:{type:"number"}}}}},model:{title:"Model",type:"string"},usage:{title:"EmbeddingUsage",type:"object",properties:{prompt_tokens:{title:"Prompt Tokens",type:"integer",default:0},total_tokens:{title:"Total Tokens",type:"integer",default:0}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Embeddings Openai",method:"post",path:"/v1/engines/text-embedding-ada-002/embeddings",jsonRequestBodyExample:{model:"string",input:["string"],user:"string"},info:{title:"Prem Embeddings",version:"0.0.1"},postman:{name:"Embeddings Openai",description:{type:"text/plain"},url:{path:["v1","engines","text-embedding-ada-002","embeddings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/prem-app/usage/embeddings/api/prem-embeddings",custom_edit_url:null},f=void 0,b={unversionedId:"prem-app/usage/embeddings/api/embeddings-openai-v-1-engines-text-embedding-ada-002-embeddings-post",id:"prem-app/usage/embeddings/api/embeddings-openai-v-1-engines-text-embedding-ada-002-embeddings-post",title:"Embeddings Openai",description:"Embeddings Openai",source:"@site/docs/prem-app/usage/embeddings/api/embeddings-openai-v-1-engines-text-embedding-ada-002-embeddings-post.api.mdx",sourceDirName:"prem-app/usage/embeddings/api",slug:"/prem-app/usage/embeddings/api/embeddings-openai-v-1-engines-text-embedding-ada-002-embeddings-post",permalink:"/docs/prem-app/usage/embeddings/api/embeddings-openai-v-1-engines-text-embedding-ada-002-embeddings-post",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"embeddings-openai-v-1-engines-text-embedding-ada-002-embeddings-post",title:"Embeddings Openai",description:"Embeddings Openai",sidebar_label:"Embeddings Openai",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"embeddings_openai_v1_engines_text_embedding_ada_002_embeddings_post",requestBody:{content:{"application/json":{schema:{title:"EmbeddingsInput",required:["input"],type:"object",properties:{model:{title:"Model",type:"string"},input:{title:"Input",anyOf:[{type:"array",items:{type:"string"}},{type:"array",items:{type:"array",items:{type:"integer"}}}]},user:{title:"User",type:"string",default:""}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"EmbeddingsResponse",required:["data","usage"],type:"object",properties:{object:{title:"Object",type:"string",default:"list"},data:{title:"Data",type:"array",items:{title:"EmbeddingObject",required:["embedding"],type:"object",properties:{object:{title:"Object",type:"string",default:"embedding"},index:{title:"Index",type:"integer",default:0},embedding:{title:"Embedding",type:"array",items:{type:"number"}}}}},model:{title:"Model",type:"string"},usage:{title:"EmbeddingUsage",type:"object",properties:{prompt_tokens:{title:"Prompt Tokens",type:"integer",default:0},total_tokens:{title:"Total Tokens",type:"integer",default:0}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Embeddings Openai",method:"post",path:"/v1/engines/text-embedding-ada-002/embeddings",jsonRequestBodyExample:{model:"string",input:["string"],user:"string"},info:{title:"Prem Embeddings",version:"0.0.1"},postman:{name:"Embeddings Openai",description:{type:"text/plain"},url:{path:["v1","engines","text-embedding-ada-002","embeddings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/prem-app/usage/embeddings/api/prem-embeddings",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/prem-app/usage/embeddings/api/prem-embeddings"},next:{title:"Embeddings",permalink:"/docs/prem-app/usage/embeddings/api/embeddings-v-1-embeddings-post"}},k={},h=[{value:"Request",id:"request",level:2}],_={toc:h},E="wrapper";function v(e){let{components:t,...a}=e;return(0,l.kt)(E,(0,n.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Embeddings Openai"),(0,l.kt)(r(),{method:"post",path:"/v1/engines/text-embedding-ada-002/embeddings",mdxType:"MethodEndpoint"}),(0,l.kt)(d(),{infoPath:"docs/prem-app/usage/embeddings/api/prem-embeddings",mdxType:"SecuritySchemes"}),(0,l.kt)("p",null,"Embeddings Openai"),(0,l.kt)("h2",{id:"request"},"Request"),(0,l.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,l.kt)(g.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,l.kt)("strong",{className:"openapi-schema__required"},"required")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"model",required:!1,schemaName:"Model",qualifierMessage:void 0,schema:{title:"Model",type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"input"),(0,l.kt)("span",{className:"openapi-schema__name"}," object"),(0,l.kt)("span",{className:"openapi-schema__divider"}),(0,l.kt)("span",{className:"openapi-schema__required"},"required"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"anyOf"),(0,l.kt)(u.default,{mdxType:"SchemaTabs"},(0,l.kt)(g.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"string"))),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))),(0,l.kt)(g.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"type",required:!1,schemaName:"",qualifierMessage:void 0,schema:"array",mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"items",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(c.Z,{collapsible:!1,name:"user",required:!1,schemaName:"User",qualifierMessage:void 0,schema:{title:"User",type:"string",default:""},mdxType:"SchemaItem"}))))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(g.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Successful Response")),(0,l.kt)("div",null,(0,l.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"object",required:!1,schemaName:"Object",qualifierMessage:void 0,schema:{title:"Object",type:"string",default:"list"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"data"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,l.kt)("span",{className:"openapi-schema__divider"}),(0,l.kt)("span",{className:"openapi-schema__required"},"required"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"object",required:!1,schemaName:"Object",qualifierMessage:void 0,schema:{title:"Object",type:"string",default:"embedding"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"index",required:!1,schemaName:"Index",qualifierMessage:void 0,schema:{title:"Index",type:"integer",default:0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"embedding",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{title:"Embedding",type:"array",items:{type:"number"}},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!1,name:"model",required:!1,schemaName:"Model",qualifierMessage:void 0,schema:{title:"Model",type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"usage"),(0,l.kt)("span",{className:"openapi-schema__name"}," object"),(0,l.kt)("span",{className:"openapi-schema__divider"}),(0,l.kt)("span",{className:"openapi-schema__required"},"required"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"prompt_tokens",required:!1,schemaName:"Prompt Tokens",qualifierMessage:void 0,schema:{title:"Prompt Tokens",type:"integer",default:0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"total_tokens",required:!1,schemaName:"Total Tokens",qualifierMessage:void 0,schema:{title:"Total Tokens",type:"integer",default:0},mdxType:"SchemaItem"}))))))),(0,l.kt)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "object": "list",\n  "data": [\n    {\n      "object": "embedding",\n      "index": 0,\n      "embedding": [\n        0\n      ]\n    }\n  ],\n  "model": "string",\n  "usage": {\n    "prompt_tokens": 0,\n    "total_tokens": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(g.default,{label:"422",value:"422",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Validation Error")),(0,l.kt)("div",null,(0,l.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"detail"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"loc"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,l.kt)("span",{className:"openapi-schema__divider"}),(0,l.kt)("span",{className:"openapi-schema__required"},"required"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"anyOf"),(0,l.kt)(u.default,{mdxType:"SchemaTabs"},(0,l.kt)(g.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"string")))),(0,l.kt)(g.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"integer")))))),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);