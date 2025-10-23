import"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./cache-CpEhLexq.js";import"./render-d6AVTUl2.js";import"./parse-date-CHEO0z5G.js";import{t as e}from"./types-Bn7An2Wc.js";import{a as t,i as n,r,t as i}from"./utils-DeGnNVSt.js";const a={path:`/discussed/:period?/:innerSharedContent?/:dateSort?`,example:`/daily/discussed/30`,view:e.Articles,radar:[{source:[`app.daily.dev/discussed`]}],name:`Most Discussed`,maintainers:[`Rjnishant530`],handler:o,url:`app.daily.dev/discussed`,parameters:{innerSharedContent:{description:`Where to Fetch inner Shared Posts instead of original`,default:`false`,options:[{value:`false`,label:`False`},{value:`true`,label:`True`}]},dateSort:{description:`Sort posts by publication date instead of popularity`,default:`true`,options:[{value:`false`,label:`False`},{value:`true`,label:`True`}]},period:{description:`Period of Lookup`,default:`7`,options:[{value:`7`,label:`Last Week`},{value:`30`,label:`Last Month`},{value:`365`,label:`Last Year`}]}}};async function o(e){let a=e.req.query(`limit`)?Number.parseInt(e.req.query(`limit`),10):20,o=e.req.param(`innerSharedContent`)?JSON.parse(e.req.param(`innerSharedContent`)):!1,s=e.req.param(`dateSort`)?JSON.parse(e.req.param(`dateSort`)):!0,c=e.req.param(`period`)?Number.parseInt(e.req.param(`period`),10):7;return{title:`Real-time discussions in the developer community | daily.dev`,link:`${i}/posts/discussed`,item:n(await r({query:`
  query MostDiscussedFeed(
    $first: Int
    $supportedTypes: [String!] = ["article","share","freeform"]
    ) {
    page: mostDiscussedFeed(first: $first, supportedTypes: $supportedTypes) {
      ...FeedPostConnection
    }
  }

  fragment FeedPostConnection on PostConnection {
    edges {
      node {
        ...FeedPost
        contentHtml
      }
    }
  }

  fragment FeedPost on Post {
    ...SharedPostInfo
  }

  fragment SharedPostInfo on Post {
    id
    title
    image
    readTime
    permalink
    commentsPermalink
    summary
    createdAt
    numUpvotes
    numComments
    author {
      ...UserShortInfo
    }
    tags
  }

  fragment UserShortInfo on User {
    id
    name
    image
    permalink
    username
    bio
  }
`,variables:{...t,first:a,period:c}}),o,s),description:`Stay on top of real-time developer discussions on daily.dev. Join conversations happening now and engage with the most active community members.`,logo:`${i}/favicon-32x32.png`,icon:`${i}/favicon-32x32.png`,language:`en-us`}}export{a as route};