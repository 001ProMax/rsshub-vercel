import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./render-d6AVTUl2.js";import{t as r}from"./got-BlqYKpVp.js";import{t as i}from"./utils-CTb5v1bx.js";import a from"node:path";e();const o={path:`/outlet/:country/:gender`,categories:[`shopping`],example:`/arcteryx/outlet/us/mens`,parameters:{country:`country`,gender:`gender`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`outlet.arcteryx.com/:country/en/c/:gender`]}],name:`Outlet`,maintainers:[`EthanWng97`],handler:s,description:`Country

| United States | Canada | United Kingdom |
| ------------- | ------ | -------------- |
| us            | ca     | gb             |

  gender

| male | female |
| ---- | ------ |
| mens | womens |

::: tip
  Parameter \`country\` can be found within the url of \`Arcteryx\` website.
:::`};async function s(e){let{country:o,gender:s}=e.req.param(),c=`https://outlet.arcteryx.com/${o}/en/`,l=`${c}api/fredhopper/query`,u=`${c}shop/`,d=`${c}c/${s}`,f=(await r({method:`get`,url:l,searchParams:{fh_location:`//catalog01/en_CA/gender>{${s}}`,fh_country:o,fh_review:`lister`,fh_view_size:`all`,fh_context_location:`//catalog01`}})).data.universes.universe[1][`items-section`].items.item.map((e,t,n)=>i(e,t,n,o));return{title:`Arcteryx - Outlet(${o.toUpperCase()}) - ${s.toUpperCase()}`,link:d,description:`Arcteryx - Outlet(${o.toUpperCase()}) - ${s.toUpperCase()}`,item:f.map(e=>({title:e.name,link:u+e.slug,description:n(a.join(t,`templates/product-description-3714d586.art`),{item:e})}))}}export{o as route};