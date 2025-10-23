import"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./cache-CpEhLexq.js";import"./parse-date-CHEO0z5G.js";import"./timezone-BPfwRbwD.js";import{t as e}from"./category-C-5SCzhD.js";const t={path:`/tag/:topic`,categories:[`finance`],example:`/finology/tag/startups`,parameters:{category:`Refer Table below or find in URL`},radar:[{source:[`insider.finology.in/tag/:topic`]}],name:`Trending Topic`,maintainers:[`Rjnishant530`],handler:n,url:`insider.finology.in/tag`,description:`::: info Topic
| Topic                    | Link                     |
| ------------------------ | ------------------------ |
| Investment Decisions     | investment-decisions     |
| Investing 101            | investing-101            |
| Stock Markets            | stock-markets            |
| business news india      | business-news-india      |
| Company Analysis         | company-analysis         |
| Business and brand tales | business-and-brand-tales |
| Featured                 | featured                 |
| Fundamental Analysis     | fundamental-analysis     |
| Business Story           | business-story           |
| All Biz                  | all-biz                  |
| Stock Analysis           | stock-analysis           |
| Automobile Industry      | automobile-industry      |
| Indian Economy           | indian-economy           |
| Govt's Words             | govt%27s-words           |
| Behavioral Finance       | behavioral-finance       |
| Global Economy           | global-economy           |
| Startups                 | startups                 |
| GST                      | gst                      |
| Product Review           | product-review           |
| My Pocket                | my-pocket                |
| Business Games           | business-games           |
| Business Models          | business-models          |
| Indian Indices           | indian-indices           |
| Banking System           | banking-system           |
| Debt                     | debt                     |
| World News               | world-news               |
| Technology               | technology               |
| Regulatory Bodies        | regulatory-bodies        |
:::`};async function n(t){let{topic:n}=t.req.param();return await e(`https://insider.finology.in`,`/tag/${n}`,{description:e=>`Everything that Insider has to offer about ${e} for you to read and learn.`,date:!0,selector:`div.card`})}export{t as route};