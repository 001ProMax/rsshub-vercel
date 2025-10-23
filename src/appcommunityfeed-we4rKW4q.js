import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import{t as n}from"./ofetch-CRUPiVpr.js";import{t as r}from"./render-d6AVTUl2.js";import i from"node:path";e();const a={0:`Community`,1:`Microtransaction`,2:`Collection`,3:`Art`,4:`Video`,5:`Screenshot`,6:`Game`,7:`Software`,8:`Concept`,9:`WebGuide`,10:`IntegratedGuide`,11:`Merch`,12:`ControllerBinding`,13:`SteamworksAccessInvite`,14:`SteamVideo`,15:`GameManagedItem`},o={path:`/appcommunityfeed/:appid/:routeParams?`,categories:[`game`],example:`/steam/appcommunityfeed/730`,parameters:{appid:`Steam appid, can be found on the community hub page or store page URL.`,routeParams:`Query parameters.`},radar:[{title:`Community Hub`,source:[`steamcommunity.com/app/:appid`],target:`/appcommunityfeed/:appid`},{title:`Community Hub`,source:[`store.steampowered.com/app/:appid/*/`],target:`/appcommunityfeed/:appid`}],description:`Query Parameters:

| Name                   | Type   | Description             |
| ---------------------- | ------ | ----------------------- |
| p                      | string | p                       |
| rgSections[]           | string | rgSections              |
| filterLanguage         | string | Filter Language         |
| languageTag            | string | Language Tag            |
| nMaxInappropriateScore | string | Max Inappropriate Score |

Example:
- \`/appcommunityfeed/730/p=1&rgSections[]=2&rgSections[]=4&filterLanguage=english&languageTag=english&nMaxInappropriateScore=1\` for CS2 Screenshot and Artwork contents.
- \`/appcommunityfeed/730/rgSections[]=6\` for CS2 Workshop contents only.
- \`/appcommunityfeed/570/rgSections[]=3&rgSections[]=9\` for Dota2 Video and Guides contents.

::: tip
It can also access community hub contents that require a logged-in account.
:::
`,name:`Steam Community Hub Feeds`,maintainers:[`NyaaaDoge`],handler:async e=>{let{appid:o=730,routeParams:s}=e.req.param(),c=await n(`https://steamcommunity.com/library/appcommunityfeed/${o}${s?`?${s}`:``}`);return{title:`${o} Steam Community Hub`,link:`https://steamcommunity.com/app/${o}`,item:c.hub.map(e=>({title:e.title===``?a[e.type]:e.title,link:`https://steamcommunity.com/sharedfiles/filedetails/?id=${e.published_file_id}`,description:r(i.join(t,`templates/appcommunityfeed-description-b79402f1.art`),{image:e.full_image_url,description:e.description}),author:e.creator.name,category:a[e.type]}))}}};export{o as route};