KEEP.initLocalSearch=()=>{let e=KEEP.hexo_config.path;if(e){let n=!1,r,o=!0;0===e.length?e="search.xml":e.endsWith("json")&&(o=!1);const t=document.querySelector(".search-input"),s=document.getElementById("search-result"),f=(e,t,n)=>{var r=e.length;if(0===r)return[];let o=0;var s;let l=[];for(n||(t=t.toLowerCase(),e=e.toLowerCase());-1<(s=t.indexOf(e,o));)l.push({position:s,word:e}),o=s+r;return l},x=(e,t,n,r)=>{var o;let{position:s,word:l}=n[n.length-1],i=[],a=0;for(;s+l.length<=t&&0!==n.length;){l===r&&a++,i.push({position:s,length:l.length});var c=s+l.length;for(n.pop();0!==n.length&&(o=n[n.length-1],s=o.position,l=o.word,c>s);)n.pop()}return{hits:i,start:e,end:t,searchTextCount:a}},v=(n,e)=>{let r="",o=e.start;return e.hits.forEach(e=>{r+=n.substring(o,e.position);var t=e.position+e.length;r+=`<b class="search-keyword">${n.substring(e.position,t)}</b>`,o=t}),r+=n.substring(o,e.end)},l=()=>{if(n){let p=t.value.trim().toLowerCase(),e=p.split(/[-\s]+/),g=(1<e.length&&e.push(p),[]);if(0<p.length&&r.forEach(({title:r,content:o,url:s})=>{let t=r.toLowerCase(),n=o.toLowerCase(),l=[],i=[],a=0;if(e.forEach(e=>{l=l.concat(f(e,t,!1)),i=i.concat(f(e,n,!1))}),0<l.length||0<i.length){var c,h=l.length+i.length;[l,i].forEach(e=>{e.sort((e,t)=>t.position!==e.position?t.position-e.position:e.word.length-t.word.length)});let e=[],n=(0!==l.length&&(c=x(0,r.length,l,p),a+=c.searchTextCountInSlice,e.push(c)),[]);for(;0!==i.length;){var{position:u,word:d}=i[i.length-1];let e=u-20,t=u+80;e<0&&(e=0),(t=t<u+d.length?u+d.length:t)>o.length&&(t=o.length);u=x(e,t,i,p);a+=u.searchTextCountInSlice,n.push(u)}n.sort((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hits.length!==t.hits.length?t.hits.length-e.hits.length:e.start-t.start);n=n.slice(0,1);let t="";0!==e.length?t+=`<li><a href="${s}" class="search-result-title">${v(r,e[0])}</a>`:t+=`<li><a href="${s}" class="search-result-title">${r}</a>`,n.forEach(e=>{t+=`<a href="${s}"><p class="search-result">${v(o,e)}...</p></a>`}),t+="</li>",g.push({item:t,id:g.length,hitCount:h,searchTextCount:a})}}),1===e.length&&""===e[0])s.innerHTML='<div id="no-result"><i class="fas fa-search fa-5x"></i></div>';else if(0===g.length)s.innerHTML='<div id="no-result"><i class="fas fa-box-open fa-5x"></i></div>';else{g.sort((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hitCount!==t.hitCount?t.hitCount-e.hitCount:t.id-e.id);let t='<ul class="search-result-list">';g.forEach(e=>{t+=e.item}),t+="</ul>",s.innerHTML=t,window.pjax&&window.pjax.refresh(s)}}},i=()=>{fetch(KEEP.hexo_config.root+e).then(e=>e.text()).then(e=>{n=!0,r=(r=o?[...(new DOMParser).parseFromString(e,"text/xml").querySelectorAll("entry")].map(e=>({title:e.querySelector("title").textContent,content:e.querySelector("content").textContent,url:e.querySelector("url").textContent})):JSON.parse(e)).filter(e=>e.title).map(e=>(e.title=e.title.trim(),e.content=e.content?e.content.trim().replace(/<[^>]+>/g,""):"",e.url=decodeURIComponent(e.url).replace(/\/{2,}/g,"/"),e));const t=document.querySelector("#no-result");t&&(t.innerHTML='<i class="fas fa-search fa-5x"></i>')})},a=(!0===KEEP.theme_config?.local_search?.preload&&i(),t&&t.addEventListener("input",l),document.querySelectorAll(".search-popup-trigger").forEach(e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",document.querySelector(".search-pop-overlay").classList.add("active"),setTimeout(()=>t.focus(),500),n||i()})}),()=>{document.body.style.overflow="",document.querySelector(".search-pop-overlay").classList.remove("active")});document.querySelector(".search-pop-overlay").addEventListener("click",e=>{e.target===document.querySelector(".search-pop-overlay")&&a()}),document.querySelector(".search-input-field-pre").addEventListener("click",()=>{t.value="",t.focus(),l()}),document.querySelector(".close-popup-btn").addEventListener("click",a),window.addEventListener("pjax:success",a),window.addEventListener("keyup",e=>{"Escape"===e.key&&a()})}else console.warn("`hexo-generator-searchdb` plugin is not installed!")};