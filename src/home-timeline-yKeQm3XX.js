import"./esm-shims-rNwigI-Q.js";import{config as e}from"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-CeMUzp5K.js";import"./helpers-qpI1t-yV.js";import"./cache-Dfid4xgQ.js";import"./render-DftO2d-b.js";import"./parse-date-DHsdom8D.js";import{got_default as t}from"./got-Di2lBekK.js";import{ViewType as n}from"./types-Bi82qguM.js";import{config_not_found_default as r}from"./config-not-found-B7nOMdXp.js";import{queryToBoolean as i}from"./readable-social-B5ZWAwaD.js";import{utils_default as a}from"./utils-Dr_N2U4y.js";import o from"node:querystring";const s={path:`/timeline/home/:site/:routeParams?`,categories:[`social-media`],view:n.SocialMedia,example:`/misskey/timeline/home/misskey.io`,parameters:{site:"instance address, domain only, without `http://` or `https://` protocol header",routeParams:`
| Key                  | Description                             | Accepted Values | Default |
| -------------------- | --------------------------------------- | --------------- | ------- |
| limit                | Number of notes to return               | integer         | 10      |
| withFiles            | Only return notes containing files      | 0/1/true/false  | false   |
| withRenotes          | Include renotes in the timeline         | 0/1/true/false  | true    |
| allowPartial         | Allow partial results                   | 0/1/true/false  | true    |
| simplifyAuthor       | Simplify author field in feed items     | 0/1/true/false  | true    |

Note: If \`withFiles\` is set to true, renotes will not be included in the timeline regardless of the value of \`withRenotes\`.

Examples:
- /misskey/timeline/home/misskey.io/limit=20&withFiles=true
- /misskey/timeline/home/misskey.io/withRenotes=false
        `},features:{requireConfig:[{name:`MISSKEY_ACCESS_TOKEN`,optional:!1,description:`
                    Access token for Misskey API. Requires \`read:account\` access.

                    Visit the specified site's settings page to obtain an access token. E.g. https://misskey.io/settings/api
                `}],requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`misskey.io`]}],name:`Home Timeline`,maintainers:[`HanaokaYuzu`],handler:c,description:`::: warning
    This route is only available for self-hosted instances.
:::`};async function c(n){let s=e.misskey.accessToken;if(!s)throw new r("Missing access token for Misskey API. Please set `MISSKEY_ACCESS_TOKEN` environment variable.");let c=n.req.param(`site`);if(!e.feature.allow_user_supply_unsafe_domain&&!a.allowSiteList.includes(c))throw new r(`This RSS is disabled unless 'ALLOW_USER_SUPPLY_UNSAFE_DOMAIN' is set to 'true'.`);let l=`https://${c}/api/notes/timeline`,u=o.parse(n.req.param(`routeParams`)),d=(await t({method:`post`,url:l,headers:{Authorization:`Bearer ${s}`},json:{limit:Number(u.limit??10),withFiles:i(u.withFiles??!1),withRenotes:i(u.withRenotes??!0),allowPartial:i(u.allowPartial??!0)}})).data,f=i(u.simplifyAuthor??!0);return{title:`Home Timeline on ${c}`,link:`https://${c}`,item:a.parseNotes(d,c,f)}}export{s as route};