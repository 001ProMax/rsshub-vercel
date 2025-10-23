import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./cache-CpEhLexq.js";import{t as r}from"./render-d6AVTUl2.js";import{t as i}from"./parse-date-CHEO0z5G.js";import"./got-BlqYKpVp.js";import{t as a}from"./types-Bn7An2Wc.js";import{a as o,i as s,t as c}from"./utils-kiQn2B9j.js";import l from"node:path";import u from"node:querystring";e();const d={path:`/profile/:handle/:routeParams?`,categories:[`social-media`],view:a.SocialMedia,example:`/bsky/profile/bsky.app`,parameters:{handle:`User handle, can be found in URL`,routeParams:`Filter parameter, Use filter to customize content types`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`bsky.app/profile/:handle`]}],name:`Post`,maintainers:[`TonyRL`],handler:f,description:`
| Filter Value | Description |
|--------------|-------------|
| posts_with_replies | Includes Posts, Replies, and Reposts |
| posts_no_replies | Includes Posts and Reposts, without Replies |
| posts_with_media | Shows only Posts containing media |
| posts_and_author_threads | Shows Posts and Threads, without Replies and Reposts |

Default value for filter is \`posts_and_author_threads\` if not specified.

Example:
- \`/bsky/profile/bsky.app/filter=posts_with_replies\``};async function f(e){let a=e.req.param(`handle`),d=u.parse(e.req.param(`routeParams`)).filter||`posts_and_author_threads`,f=await o(a,n.tryGet),p=await s(f,n.tryGet),m=await c(f,d,n.tryGet),h=m.feed.map(({post:e})=>({title:e.record.text.split(`
`)[0],description:r(l.join(t,`templates/post-7b0043bb.art`),{text:e.record.text.replaceAll(`
`,`<br>`),embed:e.embed}),author:e.author.displayName,pubDate:i(e.record.createdAt),link:`https://bsky.app/profile/${e.author.handle}/post/${e.uri.split(`app.bsky.feed.post/`)[1]}`,upvotes:e.likeCount,comments:e.replyCount}));return e.set(`json`,{DID:f,profile:p,authorFeed:m}),{title:`${p.displayName} (@${p.handle}) — Bluesky`,description:p.description?.replaceAll(`
`,` `),link:`https://bsky.app/profile/${p.handle}`,image:p.avatar,icon:p.avatar,logo:p.avatar,item:h,allowEmpty:!0}}export{d as route};