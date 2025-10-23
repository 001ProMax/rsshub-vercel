import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./render-d6AVTUl2.js";import{t as r}from"./got-BlqYKpVp.js";import i from"node:path";e();const a=`https://leetcode.com`,o={path:`/dailyquestion/en`,radar:[{source:[`leetcode.com/`]}],name:`Unknown`,maintainers:[],handler:s,url:`leetcode.com/`};async function s(){let e={date:``,link:``,titleSlug:``,content:``,frontedId:``,difficulty:``,tags:``},o=a+`/graphql`,s={query:`query questionOfToday {
            activeDailyCodingChallengeQuestion {
                date
                link
                question {
                    frontendQuestionId: questionFrontendId
                    titleSlug
                }
            }
        } `,variables:{}},c=(await r({method:`post`,url:o,headers:{"content-type":`application/json`},body:JSON.stringify(s)})).data.data.activeDailyCodingChallengeQuestion;e.date=c.date,e.link=a+c.link,e.titleSlug=c.question.titleSlug;let l={operationName:`questionData`,query:`query questionData($titleSlug: String!) {
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
        }`,variables:{titleSlug:e.titleSlug}},u=await r({method:`post`,url:o,headers:{"content-type":`application/json`},body:JSON.stringify(l)}),d={Medium:`🟡`,Easy:`🟢`,Hard:`🔴`},f=u.data.data.question;e.content=f.content,e.frontedId=f.questionFrontendId,e.difficulty=d[f.difficulty];let p=f.topicTags;p=p.map(e=>{let t=`#`+e.slug;return t=t.replaceAll(`-`,`_`),t}),e.tags=p.join(` `);let m={title:e.frontedId+`.`+e.titleSlug,description:n(i.join(t,`templates/question-description-1f696f3d.art`),{question:e}),link:e.link};return{title:`LeetCode Daily Question`,link:`https://leetcode.com`,description:`Leetcode Daily Question`,item:[{title:m.title,description:m.description+e.content,link:m.link}]}}export{o as route};