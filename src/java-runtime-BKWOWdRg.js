import"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-CeMUzp5K.js";import"./helpers-qpI1t-yV.js";import{got_default as e}from"./got-Di2lBekK.js";const t={path:`/java-runtime/:arch?/:javaType?`,categories:[`game`],example:`/minecraft/java-runtime`,parameters:{arch:"Arch, `all` by default",javaType:"Java runtime type, `all` by default"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`minecraft.net/`]}],name:`Java Runtimes`,maintainers:[`xtexChooser`],handler:a,url:`minecraft.net/`,description:`
arch:

- gamecore (Currently not used by Mojang)
- linux
- linux-i386
- mac-os
- mac-os-arm64
- windows-arm64
- windows-x64
- windows-x86

javaType:

- java-runtime-alpha
- java-runtime-beta
- java-runtime-delta
- java-runtime-gamma
- java-runtime-gamma-snapshot
- jre-legacy
- minecraft-java-exe (Only on Windows)
`,zh:{name:`Java运行时`}};function n(e,t,n){return{title:`${e} ${t} 更新了 ${n.version.name}`,description:`${e} ${t} 更新了 ${n.version.name}`,pubDate:new Date(n.version.released).toUTCString(),link:n.manifest.url,guid:e+t+n.version.name}}function r(e,t,r){return r.map(r=>n(e,t,r))}function i(e,t,n){let i=[];if(n===`all`)for(let n in t)n in t&&(i=[...i,...r(e,n,t[n])]);else i=[...i,...r(e,n,t[n])];return i}async function a(t){let n=(await e({method:`get`,url:`https://launchermeta.mojang.com/v1/products/java-runtime/2ec0cc96c44e5a76b9c8b7c39df7210883d12871/all.json`,responseType:`json`})).data,r=t.req.param(`arch`)??`all`,a=t.req.param(`javaType`)??`all`,o=[];if(r===`all`)for(let e in n)e in n&&(o=[...o,...i(e,n[e],a)]);else o=[...o,...i(r,n[r],a)];let s=`Minecraft Java运行时`;return{title:s,link:`https://www.minecraft.net/`,description:s,item:o}}export{t as route};