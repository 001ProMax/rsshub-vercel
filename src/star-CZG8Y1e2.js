import"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as e}from"./cache-CpEhLexq.js";import"./render-d6AVTUl2.js";import"./parse-date-CHEO0z5G.js";import"./got-BlqYKpVp.js";import{a as t,o as n,r,t as i}from"./utils-D1Ss_qsj.js";const a={path:`/star/:id/:language?/:mode?`,categories:[`multimedia`],example:`/javlibrary/star/abbds/en`,parameters:{id:`Star id, can be found in URL`,language:"Language, see below, Japanese by default, as `ja`",mode:"Mode, see below, videos with comments (by date) by default, as `1`"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1,nsfw:!0},name:`Videos by star`,maintainers:[`nczitzk`],handler:o,description:`| videos with comments (by date) | everything (by date) |
| ------------------------------ | -------------------- |
| 1                              | 2                    |

::: tip
  See [Ranking](https://www.javlibrary.com/en/star_mostfav.php) to view stars by ranks.

  See [Directory](https://www.javlibrary.com/en/star_list.php) to view all stars.
:::`};async function o(a){let o=a.req.param(`id`),s=a.req.param(`mode`)??t,c=a.req.param(`language`)??r;return await i(c,`${n}/${c}/vl_star.php?list&s=${o}&mode=${s}`,e.tryGet)}export{a as route};