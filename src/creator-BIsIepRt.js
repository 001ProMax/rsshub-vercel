import{__dirname as e,init_esm_shims as t}from"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import{ofetch_default as n}from"./ofetch-CeMUzp5K.js";import{cache_default as r}from"./cache-Dfid4xgQ.js";import{art as i}from"./render-DftO2d-b.js";import{parseDate as a}from"./parse-date-DHsdom8D.js";import o from"node:path";import{load as s}from"cheerio";t();const c=`https://www.fantube.tokyo`,l=e=>r.tryGet(`fantube:creator:${e}`,async()=>{let t=s(await n(`${c}/r18/creator/${e}`,{headers:{cookie:`fantube-ageVerified=1;`}})),r=JSON.parse(t(`script:contains("creatorFragment")`).text().match(/^self\.__next_f\.push\((.+?)\)$/)?.[1]||`{}`);return JSON.parse(r[1].slice(2)).find(e=>e?.hasOwnProperty(`children`)).children.find(e=>Object.values(e).includes(`div`)).find(e=>e?.hasOwnProperty(`children`)).children.find(e=>e?.hasOwnProperty(`creatorFragment`)).creatorFragment}),u=(e,t)=>r.tryGet(`fantube:creatorPostReelList:${e}:${t}`,async()=>(await n(`https://api.prd.fantube.tokyo/graphql`,{headers:{Referer:c},body:JSON.stringify({query:`query CreatorPostReelList($identifier: String!, $first: Int, $after: String, $last: Int, $before: String) {
  posts(
    where: {status: {equals: PUBLISHED}, creator: {is: {identifier: {equals: $identifier}}}}
    orderBy: [{pinnedAt: {nulls: last, sort: desc}}, {order: asc}, {createdAt: desc}, {id: desc}]
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    nodes {
      ...PostSwiper_Post
    }
    pageInfo {
      hasNextPage
      endCursor
      hasPreviousPage
      startCursor
    }
  }
}

fragment PostSwiper_Post on Post {
  id
  title
  isFavorite
  favoritesCount
  ...PostSwiperSlide_Post
}

fragment PostSwiperSlide_Post on Post {
  id
  type
  title
  price
  creator {
    displayName
  }
  ...PostVideoElement_Post
  ...PostImageElement_Post
}

fragment PostVideoElement_Post on Post {
  id
  title
  contentData {
    ... on PostVideoType {
      __typename
      videoUrl
      isSample
      noSample
      durationSeconds
    }
  }
  isFavorite
  sampleVideoId
  thumbnailUrl
  creator {
    displayName
  }
  ...PostInfo_Post
  ...VideoControlIcons_Post
  ...PurchaseWrapper_Post
}

fragment PostInfo_Post on Post {
  title
  description
  publishStartAt
  price
  isBuyEnabled
  ...Profile_Post
}

fragment Profile_Post on Post {
  id
  creator {
    id
    isSelf
    identifier
    displayName
    avatarImageUrl
    following
  }
}

fragment VideoControlIcons_Post on Post {
  id
  isMine
  pinnedAt
  favoritesCount
  ...PostComment_Post
}

fragment PostComment_Post on Post {
  id
  isMine
  canComment
  comments(
    where: {OR: [{parentPostComment: {is: {isDeleted: {equals: false}}}}, {parentPostCommentId: {equals: null}}], isDeleted: {equals: false}}
  ) {
    totalCount
  }
  ...PostCommentReplyDrawer_Post
}

fragment PostCommentReplyDrawer_Post on Post {
  id
  isMine
  canComment
}

fragment PurchaseWrapper_Post on Post {
  id
  title
  price
  creator {
    displayName
  }
  ...PostPurchaseDialog_Post
  ...PostPurchaseSingleDialog_Post
}

fragment PostPurchaseDialog_Post on Post {
  id
  isBuyEnabled
  price
  thumbnailUrl
  title
  planPosts(
    orderBy: [{plan: {deleteRequestAt: {sort: desc, nulls: first}}}, {plan: {isRecommended: desc}}, {plan: {price: asc}}]
  ) {
    nodes {
      plan {
        id
        title
        price
        ...PlanSwiper_Plan
      }
    }
  }
  creator {
    displayName
  }
  ...PostPurchaseSingleDialog_Post
}

fragment PlanSwiper_Plan on Plan {
  id
  ...PlanSwiperItem_Plan
}

fragment PlanSwiperItem_Plan on Plan {
  id
  title
  price
  isArchive
  isRecommended
  deleteRequestAt
  isSubscribing
  subscriptionCloseAt
  capacity
  subscribersCount
  planPosts(
    where: {post: {is: {status: {equals: PUBLISHED}}}}
    first: 7
    orderBy: [{createdAt: desc}]
  ) {
    nodes {
      post {
        id
        thumbnailUrl
        title
      }
    }
    totalCount
  }
  ...PlanUnavailableNote_Plan
}

fragment PlanUnavailableNote_Plan on Plan {
  capacity
  subscribersCount
  subscriptionCloseAt
  deleteRequestAt
}

fragment PostPurchaseSingleDialog_Post on Post {
  id
  price
  thumbnailUrl
  title
  isBuyEnabled
}

fragment PostImageElement_Post on Post {
  id
  title
  contentData {
    __typename
    ... on PostImageType {
      encrypted
      imageUrls
      count
    }
  }
  isFavorite
  creator {
    displayName
  }
  ...PostInfo_Post
  ...ImageControlIcons_Post
  ...PurchaseWrapper_Post
}

fragment ImageControlIcons_Post on Post {
  id
  isMine
  pinnedAt
  favoritesCount
  ...PostComment_Post
}`,variables:{identifier:e,first:t,after:``},operationName:`CreatorPostReelList`}),method:`POST`})).data.posts.nodes),d={path:`/r18/creator/:identifier`,categories:[`multimedia`],example:`/fantube/r18/creator/miyuu`,parameters:{identifier:`User handle`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`www.fantube.tokyo/r18/creator/:identifier`]}],name:`User Posts`,maintainers:[`TonyRL`],handler:p},f=({description:t,thumbnailUrl:n,sampleVideoId:r,imageUrls:a})=>i(o.join(e,`templates/post-7ca176ac.art`),{description:t,thumbnailUrl:n,sampleVideoId:r,imageUrls:a});async function p(e){let{identifier:t}=e.req.param(),n=Number.parseInt(e.req.query(`limit`)||18,10),r=await l(t),i=(await u(t,n)).map(e=>({title:e.title.replaceAll(`
`,` `).trim(),description:f({description:e.description,thumbnailUrl:e.thumbnailUrl,sampleVideoId:e.sampleVideoId,imageUrls:e.contentData?.imageUrls||[]}),link:`${c}/r18/post/${e.id}?creator=${t}`,author:e.creator.displayName,pubDate:a(e.publishStartAt),image:e.thumbnailUrl}));return{title:`${r.displayName}のプロフィール｜クリエイターページ｜FANTUBE(ファンチューブ)`,link:`${c}/r18/creator/${t}`,description:r.description,image:r.avatarImageUrl,icon:r.avatarImageUrl,logo:r.avatarImageUrl,language:`ja`,item:i}}export{d as route};