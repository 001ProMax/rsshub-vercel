import"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import{ofetch_default as e}from"./ofetch-CeMUzp5K.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";const n={path:`/events`,name:`Link3 Events`,url:`link3.to`,maintainers:[`cxheng315`],example:`/link3/events`,categories:[`other`],features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`link3.to/events`],target:`/events`}],handler:r};async function r(){return{title:`Link3 Events`,link:`https://link3.to/events`,description:`Link3 is a Web3 native social platform built on CyberConnect protocol.`,image:`https://link3.to/logo.svg`,logo:`https://link3.to/logo.svg`,author:`Link3`,item:(await e(`https://api.cyberconnect.dev/profile/`,{method:`POST`,headers:{"Content-Type":`application/json`},body:{variables:{order:`START_TIME_ASC`},query:`
                query getTrendingEvents($first: Int, $after: String, $order: TrendingEventsRequest_EventOrder, $filter: TrendingEventsRequest_EventFilter) {
                    trendingEvents(first: $first, after: $after, order: $order, filter: $filter) {
                        list {
                            id
                            info
                            title
                            posterUrl
                            startTimestamp
                            endTimestamp
                            organizer {
                                lightInfo {
                                    displayName
                                    profilePicture
                                    profileHandle
                                }
                            }
                        }
                    }
                }
            
            `}})).data.trendingEvents.list.map(e=>({title:e.title,link:`https://link3.to/e/${e.id}`,description:e.info??``,author:e.organizer.lightInfo.displayName,guid:e.id,pubDate:t(e.startTimestamp*1e3),itunes_item_image:e.posterUrl,itunes_duration:e.endTimestamp-e.startTimestamp}))}}export{n as route};