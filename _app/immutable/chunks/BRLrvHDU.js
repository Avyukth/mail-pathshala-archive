const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Cp_O_0vT.js","./CauqUK9o.js"])))=>i.map(i=>d[i]);
import{m as A,n as L,c as I,a as P}from"./BGuwPqVH.js";import{I as k,a as S}from"./C_P4RQGD.js";import{f as F,J as u,K as c,L as l}from"./DSJK3vcO.js";import{_ as N}from"./CauqUK9o.js";function O(e,t){const s=A(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.562.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];k(e,L({name:"funnel"},()=>s,{get iconNode(){return a},children:(n,p)=>{var o=I(),r=F(o);S(r,t,"default",{},null),P(n,o)},$$slots:{default:!0}}))}const x={project:"",sender:"",recipient:"",importance:"",hasThread:""},d=c([]),R=c(""),$=c(!1),C=c("newest"),B=c("split"),H=c(!1),m=c(null),M=c([]),h=c({...x}),J=c(!0),Q=c(!1),g=e=>e.recipients??e.recipient_names??[],T=e=>[e.subject,e.body_md??"",e.sender_name,...g(e)].join(" ").toLowerCase(),f=e=>{if(e.created_ts){const t=Date.parse(e.created_ts);if(!Number.isNaN(t))return t}return e.id},v=u([d,R,h,C],([e,t,s,a])=>{const n=t.trim().toLowerCase(),p=s.recipient.trim().toLowerCase();let o=e.filter(r=>!(n&&!T(r).includes(n)||s.project&&r.project_slug!==s.project||s.sender&&r.sender_name!==s.sender||p&&!g(r).map(_=>_.toLowerCase()).includes(p)||s.importance&&r.importance!==s.importance||s.hasThread==="yes"&&!r.thread_id||s.hasThread==="no"&&r.thread_id));switch(a){case"oldest":o=[...o].sort((r,i)=>f(r)-f(i));break;case"sender":o=[...o].sort((r,i)=>r.sender_name.localeCompare(i.sender_name));break;case"longest":o=[...o].sort((r,i)=>{var y,b,w,j;const _=(((y=r.subject)==null?void 0:y.length)??0)+(((b=r.body_md)==null?void 0:b.length)??0);return(((w=i.subject)==null?void 0:w.length)??0)+(((j=i.body_md)==null?void 0:j.length)??0)-_});break;default:o=[...o].sort((r,i)=>f(i)-f(r));break}return o}),V=u(d,e=>Array.from(new Set(e.map(t=>t.project_slug)))),G=u(d,e=>Array.from(new Set(e.map(t=>t.sender_name)))),U=u(d,e=>{const t=e.flatMap(s=>g(s));return Array.from(new Set(t))}),W=u(h,e=>Object.values(e).some(t=>t!==""));function X(){h.set({...x})}function Y(){const e=l(M),t=l(v).map(a=>a.id),s=t.length>0&&t.every(a=>e.includes(a));M.set(s?[]:t)}function Z(){const e=l(v);if(e.length===0)return;const t=l(m),s=t?e.findIndex(n=>n.id===t.id):-1,a=Math.min(s+1,e.length-1);m.set(e[a])}function ee(){const e=l(v);if(e.length===0)return;const t=l(m),s=t?e.findIndex(n=>n.id===t.id):e.length,a=Math.max(s-1,0);m.set(e[a])}const te=u(d,e=>e.filter(t=>!t.is_read).length);async function se(e){if(e.length===0)return;const s=l(d).filter(a=>e.includes(a.id));d.update(a=>a.map(n=>e.includes(n.id)?{...n,is_read:!0}:n));try{const{dataProvider:a}=await N(async()=>{const{dataProvider:n}=await import("./Cp_O_0vT.js");return{dataProvider:n}},__vite__mapDeps([0,1]),import.meta.url);await Promise.allSettled(s.map(n=>{const o=(n.recipients??n.recipient_names??[])[0];return!o||!n.project_slug?Promise.resolve():a.markMessageRead(n.project_slug,o,n.id)}))}catch{}}export{O as F,M as a,ee as b,Z as c,Q as d,d as e,J as f,v as g,$ as h,H as i,R as j,h as k,G as l,U as m,X as n,se as o,W as p,te as q,m as s,Y as t,V as u,B as v};
