import{r as i,d as y,o as v,c as f,a as e,b as n,e as a,w as m,f as s,v as g,g as b,h as _,t as C,i as x}from"./app.8f6a65a1.js";const D=e("h1",{id:"dmarc",tabindex:"-1"},[n("DMARC "),e("a",{class:"header-anchor",href:"#dmarc","aria-hidden":"true"},"#")],-1),A=e("p",null,"DMARC Records standardize how mail originators associate and authenticate domain identifiers with messages, handle message policies using those identifiers, and report about mail using those identifiers. According to RFC 7489, the DMARC mechanism for policy distribution enables the strict handling of email messages that fail authentication checks, such as SPF and/or DKIM. If neither of those authentication methods passes, DMARC tells the receiver how to handle the message, such as junk it (quarantine) or reject the message entirely.",-1),w=e("h2",{id:"generate-a-dmarc-record",tabindex:"-1"},[n("Generate a DMARC Record "),e("a",{class:"header-anchor",href:"#generate-a-dmarc-record","aria-hidden":"true"},"#")],-1),R=e("option",{disabled:"",value:""},"Select an option",-1),M=e("option",null,"None",-1),S=e("option",null,"Quarantine",-1),V=e("option",null,"Reject",-1),k=[R,M,S,V],T=e("label",null,"Receive failure reports when authentication does not pass, if: (optional)",-1),N=e("label",{for:"fod"},"DKIM Fails",-1),F=e("label",{for:"fos"},"SPF Fails",-1),P=e("label",{for:"fo1"},"Either DKIM or SPF fails (recommended)",-1),I=e("label",{for:"fo0"},"Both DKIM and SPF fails",-1),U={key:0},j=x(`<h3 id="dns-record" tabindex="-1">DNS Record <a class="header-anchor" href="#dns-record" aria-hidden="true">#</a></h3><p><strong>Type</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">TXT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>Host</strong></p>`,4),E={class:"language-"},$=e("button",{title:"Copy Code",class:"copy"},null,-1),B=e("span",{class:"lang"},null,-1),K={class:"line"},G={style:{color:"#A6ACCD"}},H=e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}})],-1),O=e("p",null,[e("strong",null,"Value")],-1),q={class:"language-"},z=e("button",{title:"Copy Code",class:"copy"},null,-1),J=e("span",{class:"lang"},null,-1),L={class:"line"},Q={style:{color:"#A6ACCD"}},X=e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}})],-1),W={key:1},Y=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"Missing Info"),e("p",null,"Complete the form above to get your DNS Record")],-1),Z=[Y],ae=JSON.parse('{"title":"DMARC","description":"","frontmatter":{"prev":"Validate DNS | Sender Authentication"},"headers":[{"level":2,"title":"Generate a DMARC Record","slug":"generate-a-dmarc-record","link":"#generate-a-dmarc-record","children":[{"level":3,"title":"DNS Record","slug":"dns-record","link":"#dns-record","children":[]}]}],"relativePath":"setup/dmarc.md"}'),ee={name:"setup/dmarc.md"},se=Object.assign(ee,{setup(te){const d=i(""),r=i(""),c=i(""),u=i(""),o=i([]);return(le,t)=>{const p=y("vue-feather"),h=y("Popper");return v(),f("div",null,[D,A,w,e("form",null,[e("fieldset",null,[e("label",null,[n(" Domain "),a(h,{arrow:"",content:"The domain name you send mail from. If you send emails from hello@example.com, this would be example.com",placement:"right"},{default:m(()=>[a(p,{style:{width:"15px"},class:"icon-text-2 hint",type:"help-circle"})]),_:1})]),s(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>d.value=l),placeholder:"example.com"},null,512),[[g,d.value]])]),e("fieldset",null,[e("label",null,[n(" Failed Message Policy "),a(h,{arrow:"",content:"How do you want mail that fails DMARC to be treated by the recipient?",placement:"right"},{default:m(()=>[a(p,{style:{width:"15px"},class:"icon-text-2 hint",type:"help-circle"})]),_:1})]),s(e("select",{"onUpdate:modelValue":t[1]||(t[1]=l=>r.value=l)},k,512),[[b,r.value]])]),e("fieldset",null,[e("label",null,[n(" Report Email(s) "),a(h,{arrow:"",content:"Comma separated list of emails that should receive domain reports.",placement:"right"},{default:m(()=>[a(p,{style:{width:"15px"},class:"icon-text-2 hint",type:"help-circle"})]),_:1})]),s(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=l=>c.value=l),placeholder:"reports@example.com"},null,512),[[g,c.value]])]),e("fieldset",null,[e("label",null,[n(" Failure Email(s) "),a(h,{arrow:"",content:"Comma separated list of emails that should receive failure reports.",placement:"right"},{default:m(()=>[a(p,{style:{width:"15px"},class:"icon-text-2 hint",type:"help-circle"})]),_:1})]),s(e("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=l=>u.value=l),placeholder:"failures@example.com"},null,512),[[g,u.value]])]),e("fieldset",null,[T,e("div",null,[s(e("input",{type:"checkbox",id:"fod",value:"d","onUpdate:modelValue":t[4]||(t[4]=l=>o.value=l)},null,512),[[_,o.value]]),N]),e("div",null,[s(e("input",{type:"checkbox",id:"fos",value:"s","onUpdate:modelValue":t[5]||(t[5]=l=>o.value=l)},null,512),[[_,o.value]]),F]),e("div",null,[s(e("input",{type:"checkbox",id:"fo1",value:"1","onUpdate:modelValue":t[6]||(t[6]=l=>o.value=l)},null,512),[[_,o.value]]),P]),e("div",null,[s(e("input",{type:"checkbox",id:"fo0",value:"0","onUpdate:modelValue":t[7]||(t[7]=l=>o.value=l)},null,512),[[_,o.value]]),I])])]),d.value.length&&r.value.length&&c.value.length&&u.value.length?(v(),f("div",U,[j,e("div",E,[$,B,e("pre",null,[e("code",null,[e("span",K,[e("span",G,C(`_dmarc.${d.value}`),1)]),n(`
`),H])])]),O,e("div",q,[z,J,e("pre",null,[e("code",null,[e("span",L,[e("span",Q,C(`v=DMARC1; p=${r.value.toLowerCase()}; rua=mailto:${c.value.split(",").join(",mailto:")}; ruf=mailto:${u.value.split(",").join(",mailto:")}; ${o.value.length>0?`fo=${o.value.join(":")}`:""}`),1)]),n(`
`),X])])])])):(v(),f("div",W,Z))])}}});export{ae as __pageData,se as default};
