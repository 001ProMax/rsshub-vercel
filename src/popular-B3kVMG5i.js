import"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-CeMUzp5K.js";import"./cache-Dfid4xgQ.js";import"./render-DftO2d-b.js";import"./parse-date-DHsdom8D.js";import{ViewType as e}from"./types-Bi82qguM.js";import{baseUrl as t,getData as n,getList as r,variables as i}from"./utils-0wWdNunh.js";const a={path:`/popular/:innerSharedContent?/:dateSort?`,example:`/daily/popular`,view:e.Articles,radar:[{source:[`app.daily.dev/popular`]}],parameters:{innerSharedContent:{description:`Where to Fetch inner Shared Posts instead of original`,default:`false`,options:[{value:`false`,label:`False`},{value:`true`,label:`True`}]},dateSort:{description:`Sort posts by publication date instead of popularity`,default:`true`,options:[{value:`false`,label:`False`},{value:`true`,label:`True`}]}},name:`Popular`,maintainers:[`Rjnishant530`],handler:o,url:`app.daily.dev/popular`};async function o(e){let a=`${t}/posts`,o=e.req.query(`limit`)?Number.parseInt(e.req.query(`limit`),10):15,s=e.req.param(`innerSharedContent`)?JSON.parse(e.req.param(`innerSharedContent`)):!1,c=e.req.param(`dateSort`)?JSON.parse(e.req.param(`dateSort`)):!0;return{title:`Popular posts on daily.dev`,link:a,item:r(await n({query:`
  query AnonymousFeed(
    $loggedIn: Boolean! = false
    $first: Int
    $after: String
    $ranking: Ranking
    $version: Int
    $supportedTypes: [String!] = ["article","share","freeform","video:youtube","collection"]
  ) {
    page: anonymousFeed(
      first: $first
      after: $after
      ranking: $ranking
      version: $version
      supportedTypes: $supportedTypes
    ) {
      ...FeedPostConnection
    }
  }
  
  fragment FeedPostConnection on PostConnection {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...FeedPost
        contentHtml
        ...UserPost @include(if: $loggedIn)
      }
    }
  }
  
  fragment FeedPost on Post {
    ...FeedPostInfo
    sharedPost {
      id
      title
      image
      readTime
      permalink
      commentsPermalink
      createdAt
      type
      tags
      source {
        id
        handle
        permalink
        image
      }
      slug
      clickbaitTitleDetected
    }
    trending
    feedMeta
    collectionSources {
      handle
      image
    }
    numCollectionSources
    updatedAt
    slug
  }
  
  
  fragment FeedPostInfo on Post {
    id
    title
    image
    readTime
    permalink
    commentsPermalink
    createdAt
    commented
    bookmarked
    views
    numUpvotes
    numComments
    summary
    bookmark {
      remindAt
    }
    author {
      id
      name
      image
      username
      permalink
    }
    type
    tags
    source {
      id
      handle
      name
      permalink
      image
      type
    }
    userState {
      vote
      flags {
        feedbackDismiss
      }
    }
    slug
    clickbaitTitleDetected
  }
  
  fragment UserPost on Post {
    read
    upvoted
    commented
    bookmarked
    downvoted
  }
`,variables:{...i,ranking:`POPULARITY`,first:o}}),s,c),description:`daily.dev is the easiest way to stay updated on the latest programming news. Get the best content from the top tech publications on any topic you want.`,logo:`${t}/favicon-32x32.png`,icon:`${t}/favicon-32x32.png`,language:`en-us`}}export{a as route};