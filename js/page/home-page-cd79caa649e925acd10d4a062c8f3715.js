function homePageHandler(){const{post_datetime:e,post_datetime_format:n,announcement:t}=KEEP.theme_config?.home||{},o=KEEP.theme_config?.first_screen||{};if("updated"===e&&n){const i=document.querySelectorAll(".post-meta-info .home-post-history");i.forEach(e=>{var t=new Date(e.dataset.updated).getTime(),o=n||KEEP.themeInfo.defaultDatetimeFormat;e.innerHTML=KEEP.utils.formatDatetime(o,t)})}if(!n||"ago"===n){const r=document.querySelectorAll(".post-meta-info .home-post-history");r.forEach(e=>{var t=Date.now(),o=new Date(e.dataset.updated).getTime();e.innerHTML=KEEP.utils.getHowLongAgo(Math.floor((t-o)/1e3))})}if(t){const c=document.querySelector(".home-content-container .website-announcement");if(c){const s=c.querySelector(".close");s.addEventListener("click",()=>{c.style.display="none"})}}var a=!0===o?.hitokoto;if(!0===o?.enable&&(!0!==o?.enable||a||o?.description)){const l=document.querySelector(".first-screen-content .description");l&&(l.style.opacity="0",setTimeout(()=>{l.style.opacity="1";const e=l.querySelectorAll(".desc-item");e.forEach(e=>{const t=e.querySelector(".desc"),o=e.querySelector(".cursor"),n=t.innerHTML;t.innerHTML="";let a=0;if(n){const i=()=>{a<n.length?(t.textContent+=n.charAt(a),a++,setTimeout(i,100)):o.style.display="none"};i()}})},a?400:300))}}!0===KEEP.theme_config?.pjax?.enable&&KEEP.utils?homePageHandler():window.addEventListener("DOMContentLoaded",homePageHandler);