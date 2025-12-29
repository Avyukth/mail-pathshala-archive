import{p as a,f as h,a as x}from"./BGuwPqVH.js";import{j as w,a as _,s as g,g as y}from"./C_P4RQGD.js";import{p as M,a1 as T,t as B,a as X,c as Y,y as i,a3 as j,r as F,g as I}from"./DSJK3vcO.js";var N=h('<div data-testid="blur-fade"><!></div>');function z(n,t){M(t,!1);let o=a(t,"direction",8,"down"),d=a(t,"delay",8,0),u=a(t,"duration",8,500),c=a(t,"blur",8,6),m=a(t,"class",8,""),s=j(!1);const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r={up:"translateY(20px)",down:"translateY(-20px)",left:"translateX(20px)",right:"translateX(-20px)",center:"scale(0.95)"},p=r[o()]||r.down;T(()=>{if(f){i(s,!0);return}const b=setTimeout(()=>{i(s,!0)},d());return()=>clearTimeout(b)}),w();var e=N();let l;var v=Y(e);_(v,t,"default",{},null),F(e),B(()=>{l=g(e,1,`blur-fade ${m()??""}`,"svelte-c6m96h",l,{visible:I(s)}),y(e,`
        --blur-amount: ${c()??""}px;
        --duration: ${u()??""}ms;
        --initial-transform: ${p??""};
    `)}),x(n,e),X()}export{z as B};
