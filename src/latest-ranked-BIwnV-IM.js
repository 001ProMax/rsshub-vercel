import{n as e,t}from"./esm-shims-CMsyBHYK.js";import{t as n}from"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as r}from"./cache-CpEhLexq.js";import{t as i}from"./render-d6AVTUl2.js";import{t as a}from"./parse-date-CHEO0z5G.js";import{t as o}from"./got-BlqYKpVp.js";import s from"node:path";import{load as c}from"cheerio";e();const l={path:`/latest-ranked/:routeParams?`,categories:[`game`],example:`/osu/latest-ranked/includeMode=osu&difficultyLimit=L3&difficultyLimit=U7`,features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1,supportRadar:!0},parameters:{routeParams:{description:`Used to pass route parameters in Query String format. Check out route description for more info.`,default:`null`}},name:`Latest Ranked Beatmap`,description:`
Subscribe to the new beatmaps on https://osu.ppy.sh/beatmapsets.

#### Parameter Description

Parameters allows you to:

- Filter game mode
- Limit beatmap difficulty
- Show/hide game mode in feed title

Below is a table of all allowed parameters passed to \`routeParams\`


| Name              | Default  | Description                                                                                                                                                                                                                                          |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`includeMode\`     | All mode | Could be \`osu\`, \`mania\`, \`fruits\` or \`taiko\`. Specify included game mode of beatmaps. Including this paramseter multiple times to specify multiple game modes, e.g.: \`includeMode=osu&includeMode=mania\`. Subscribe to all game modes if not specified |
| \`difficultyLimit\` | None     | Lower/upper limit of star rating of the beatmaps in the beatmapset item, e.g.:\`difficultyLimit=U6\`. Checkout tips in descriptions for detailed explaination and examples.                                                                            |
| \`modeInTitle\`     | \`true\`   | \`true\` or \`false\` Add mode info into feed title.


This actual parameters should be passed as \`routeParams\` in URL Query String format without \`?\`, e.g.:

    /osu/latest-ranked/modeInTitle=true&includeMode=osu

::: tip
You could make use of \`difficultyLimit\` paramters to create a "high difficulty/low difficulty only" only feed.

For example, if you only wants to play low star rating beatmap like 1 or 2 star, you could subscribe to:

    /osu/latest-ranked/difficultyLimit=U2

This will filter out all beatmapsets that do not provide at least one beatmap with star rating<=\`2.00\`.

Similarly, you could use lower bound to filter out beatmapsets which don't have at least one beatmap
with star rating higher than a certain threshold.

    /osu/latest-ranked/difficultyLimit=L6

Now all beatmapsets that don't provided at least one beatmap with star rating higher than \`6.00\` will be filtered.
:::`,maintainers:[`nfnfgo`],radar:[{source:[`osu.ppy.sh/beatmapsets`]}],handler:u};async function u(e){let l=e.req.param(`routeParams`),u=new URL(`https://osu.ppy.sh?${l}`).searchParams,d=u.getAll(`includeMode`),f=u.getAll(`difficultyLimit`),p=u.get(`modeInTitle`)??`true`,m=await r.tryGet(`https://osu.ppy.sh/beatmapsets:JSON`,async()=>{let e=c((await o.get(`https://osu.ppy.sh/beatmapsets`)).data),t=JSON.parse(e(`#json-beatmaps`).text()??`{"beatmapsets": undefined}`).beatmapsets;if(t===void 0)throw Error(`Failed to retrieve JSON beatmap info from osu! website`);return t},n.cache.routeExpire,!1);for(let e of m)e.beatmaps.sort((e,t)=>e.difficulty_rating-t.difficulty_rating);d?.length&&d?.length>0&&(m=m.filter(e=>d.includes(e.beatmaps[0].mode)));let h=99,g=0;if(f&&f.length>0&&f.length<2){for(let e of f)e.startsWith(`U`)?h=Number.parseFloat(e.slice(1)):e.startsWith(`L`)&&(g=Number.parseFloat(e.slice(1)));let e=e=>!(e.beatmaps.at(0).difficulty_rating>h||e.beatmaps.at(-1).difficulty_rating<g);m=m.filter(t=>e(t))}function _(){if(!l)return``;let e=`Feed Configurations:
`;return e+=`Game Mode: ${d.length>0?JSON.stringify(d):`All modes`}\n`,e+=`Star Rating Limit: Lower=${g}, Upper=${h}`,e}let v=m.map(e=>{let n=a(e.ranked_date),r=e.covers[`cover@2x`]||e.covers.cover,o=e.covers[`card@2x`]||e.covers.card,c=`${Math.floor(e.beatmaps[0].total_length/60).toString().padStart(2,`0`)}:${(e.beatmaps[0].total_length%60).toString().padStart(2,`0`)}`,l={osu:`Osu!`,fruits:`Osu!Catch`,taiko:`Osu!Taiko`,mania:`Osu!Mania`},u=i(s.join(t,`templates/beatmapset-d6071e15.art`),{...e,readableTotalLength:c,modeLiteralToDisplayNameMap:l});return{title:`${p===`true`?`[${l[e.beatmaps[0].mode]}] `:``}${e.title_unicode??e.title}`,description:u,pubDate:n,link:`https://osu.ppy.sh/beatmapsets/${e.id}`,category:[`osu!`,`game`],author:[{name:e.creator}],image:r,banner:o,updated:e.last_updated}});return{title:`Osu! Latest Ranked Map`,link:`https://osu.ppy.sh/beatmapsets`,description:`Newly ranked beatmaps at https://osu.ppy.sh/beatmapsets.\n${_()}`,item:v}}export{l as route};