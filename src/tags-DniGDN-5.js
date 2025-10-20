import"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import{ofetch_default as e}from"./ofetch-CeMUzp5K.js";import{cache_default as t}from"./cache-Dfid4xgQ.js";import"./parse-date-DHsdom8D.js";import{baseUrl as n,gqlEndpoint as r,parseItem as i}from"./utils-C2NGH-Hx.js";import*as a from"cheerio";const o=r=>t.tryGet(`matters:tags:${r}`,async()=>{let t=await e(`${n}/tags/${r}`),i=a.load(t),o=JSON.parse(i(`script#__NEXT_DATA__`).text());return(Object.entries(o.props.apolloState.data.ROOT_QUERY).find(([e])=>e.startsWith(`node`))?.pop())?.id.split(`:`)[1]}),s={path:`/tags/:tid`,name:`Tags`,example:`/matters/tags/972-哲學`,parameters:{tid:`Tag id, can be found in the url of the tag page`},maintainers:[`Cerebrater`],handler:async t=>{let{tid:a}=t.req.param(),s=t.req.query(`limit`)?Number.parseInt(t.req.query(`limit`),10):20,c=(await e(r,{method:`POST`,body:{query:`{
                node(input: {id: "${await o(a)}"}) {
                  ... on Tag {
                    content
                    description
                    articles(input: {first: ${s}}) {
                      edges {
                        node {
                          title
                          shortHash
                          content
                          createdAt
                          author {
                            displayName
                          }
                          tags {
                            content
                          }
                        }
                      }
                    }
                  }
                }
              }`}})).data.node;return{title:`Matters | ${c.content}`,link:`${n}/tags/${a}`,description:c.description,item:c.articles.edges.map(({node:e})=>i(e))}},radar:[{source:[`matters.town/tags/:tid`]}]};export{s as route};