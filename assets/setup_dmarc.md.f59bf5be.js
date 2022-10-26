import{r as n,o as p,c as h,a as e,w as a,v as _,d as v,e as u,b as s,t as m,f}from"./app.e4f74395.js";const g=e("h1",{id:"dmarc",tabindex:"-1"},[s("DMARC "),e("a",{class:"header-anchor",href:"#dmarc","aria-hidden":"true"},"#")],-1),C=e("p",null,"DMARC Records standardize how mail originators associate and authenticate domain identifiers with messages, handle message policies using those identifiers, and report about mail using those identifiers. According to RFC 7489, the DMARC mechanism for policy distribution enables the strict handling of email messages that fail authentication checks, such as SPF and/or DKIM. If neither of those authentication methods passes, DMARC tells the receiver how to handle the message, such as junk it (quarantine) or reject the message entirely.",-1),b=e("h2",{id:"generate-a-dmarc-record",tabindex:"-1"},[s("Generate a DMARC Record "),e("a",{class:"header-anchor",href:"#generate-a-dmarc-record","aria-hidden":"true"},"#")],-1),D=e("label",null,"Domain",-1),A=e("label",null,"Reporting Mode",-1),y=e("option",{disabled:"",value:""},"Select an option",-1),R=e("option",null,"None",-1),M=e("option",null,"Quarantine",-1),S=e("option",null,"Reject",-1),k=[y,R,M,S],x=e("label",null,"Report Email(s)",-1),V=e("label",null,"Failure Email(s)",-1),T=e("label",null,"Receive failure reports when authentication does not pass, if: (optional)",-1),N=e("label",{for:"fo0"},"DKIM and SPF fails",-1),w=e("label",{for:"fo1"},"DKIM or SPF fails (recommended)",-1),F=e("label",{for:"fod"},"DKIM Fails",-1),I=e("label",{for:"fos"},"SPF Fails",-1),U=e("h3",{id:"dns-record",tabindex:"-1"},[s("DNS Record "),e("a",{class:"header-anchor",href:"#dns-record","aria-hidden":"true"},"#")],-1),j={key:0},P=f(`<p><strong>Type</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">TXT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>Host</strong></p>`,3),E={class:"language-"},$=e("button",{title:"Copy Code",class:"copy"},null,-1),K=e("span",{class:"lang"},null,-1),B={class:"line"},G={style:{color:"#A6ACCD"}},O=e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}})],-1),q=e("p",null,[e("strong",null,"Value")],-1),z={class:"language-"},H=e("button",{title:"Copy Code",class:"copy"},null,-1),J=e("span",{class:"lang"},null,-1),L={class:"line"},Q={style:{color:"#A6ACCD"}},X=e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}})],-1),W={key:1},Y=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"Missing Info"),e("p",null,"Complete the form above to get your DNS Record")],-1),Z=[Y],se=JSON.parse('{"title":"DMARC","description":"","frontmatter":{"prev":"Validate DNS | Sender Authentication"},"headers":[{"level":2,"title":"Generate a DMARC Record","slug":"generate-a-dmarc-record","link":"#generate-a-dmarc-record","children":[{"level":3,"title":"DNS Record","slug":"dns-record","link":"#dns-record","children":[]}]}],"relativePath":"setup/dmarc.md"}'),ee={name:"setup/dmarc.md"},ae=Object.assign(ee,{setup(te){const i=n(""),d=n(""),r=n(""),c=n(""),o=n([]);return(le,t)=>(p(),h("div",null,[g,C,b,e("form",null,[e("fieldset",null,[D,a(e("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>i.value=l),placeholder:"example.com"},null,512),[[_,i.value]])]),e("fieldset",null,[A,a(e("select",{"onUpdate:modelValue":t[1]||(t[1]=l=>d.value=l)},k,512),[[v,d.value]])]),e("fieldset",null,[x,a(e("input",{"onUpdate:modelValue":t[2]||(t[2]=l=>r.value=l),placeholder:"reports@example.com"},null,512),[[_,r.value]])]),e("fieldset",null,[V,a(e("input",{"onUpdate:modelValue":t[3]||(t[3]=l=>c.value=l),placeholder:"failures@example.com"},null,512),[[_,c.value]])]),e("fieldset",null,[T,a(e("input",{type:"checkbox",id:"fo0",value:"0","onUpdate:modelValue":t[4]||(t[4]=l=>o.value=l)},null,512),[[u,o.value]]),s(),N,a(e("input",{type:"checkbox",id:"fo1",value:"1","onUpdate:modelValue":t[5]||(t[5]=l=>o.value=l)},null,512),[[u,o.value]]),s(),w,a(e("input",{type:"checkbox",id:"fod",value:"d","onUpdate:modelValue":t[6]||(t[6]=l=>o.value=l)},null,512),[[u,o.value]]),s(),F,a(e("input",{type:"checkbox",id:"fos",value:"s","onUpdate:modelValue":t[7]||(t[7]=l=>o.value=l)},null,512),[[u,o.value]]),s(),I])]),U,i.value.length&&d.value.length&&r.value.length&&c.value.length?(p(),h("div",j,[P,e("div",E,[$,K,e("pre",null,[e("code",null,[e("span",B,[e("span",G,m(`_dmarc.${i.value}`),1)]),s(`
`),O])])]),q,e("div",z,[H,J,e("pre",null,[e("code",null,[e("span",L,[e("span",Q,m(`v=DMARC1; p=${d.value.toLowerCase()}; rua=mailto:${r.value.split(",").join(",mailto:")}; ruf=mailto:${c.value.split(",").join(",mailto:")}; ${o.value.length>0?`fo=${o.value.join(":")}`:""}`),1)]),s(`
`),X])])])])):(p(),h("div",W,Z))]))}});export{se as __pageData,ae as default};
