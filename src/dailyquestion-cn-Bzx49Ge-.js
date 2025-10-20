import{__dirname as e,init_esm_shims as t}from"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-CeMUzp5K.js";import"./helpers-qpI1t-yV.js";import{art as n}from"./render-DftO2d-b.js";import{got_default as r}from"./got-Di2lBekK.js";import i from"node:path";t();const a=`https://leetcode.cn`,o={path:`/dailyquestion/cn`,radar:[{source:[`leetcode.cn/`]}],name:`Unknown`,maintainers:[],handler:s,url:`leetcode.cn/`};async function s(){let t={date:``,link:``,titleSlug:``,content:``,frontedId:``,difficulty:``,tags:``},o=a+`/graphql`,s={query:`query questionOfToday {
            todayRecord {
                date
                question {
                    frontendQuestionId: questionFrontendId
                    titleSlug
                }
            }
        } `,variables:{}},c=(await r({method:`post`,url:o,headers:{"content-type":`application/json`},body:JSON.stringify(s)})).data.data.todayRecord[0];t.date=c.date,t.titleSlug=c.question.titleSlug,t.link=a+`/problems/`+t.titleSlug;let l={operationName:`questionData`,query:`query questionData($titleSlug: String!) {
            question(titleSlug: $titleSlug) {
                questionId
                questionFrontendId
                title
                titleSlug
                content
                translatedTitle
                translatedContent
                difficulty
                topicTags {
                    name
                    slug
                    translatedName
                    __typename
                }
                __typename
            }
        }`,variables:{titleSlug:t.titleSlug}},u=await r({method:`post`,url:o,headers:{"content-type":`application/json`},body:JSON.stringify(l)}),d={Medium:`🟡`,Easy:`🟢`,Hard:`🔴`},f=u.data.data.question;t.content=f.translatedContent,t.frontedId=f.questionFrontendId,t.difficulty=d[f.difficulty];let p=f.topicTags;p=p.map(e=>{let t=`#`+e.slug;return t=t.replaceAll(`-`,`_`),t}),t.tags=p.join(` `);let m={title:t.frontedId+`.`+t.titleSlug,description:n(i.join(e,`templates/question-description-1f696f3d.art`),{question:t}),link:t.link};return{title:`LeetCode 每日一题`,link:`https://leetcode.cn`,description:`Leetcode 每日一题`,item:[{title:m.title,description:m.description+t.content,link:m.link}]}}export{o as route};