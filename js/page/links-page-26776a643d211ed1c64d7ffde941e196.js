function linksPageHandle(){const e=document.querySelector(".friends-link-list");if(e){const l=e.querySelectorAll(".link-type-title");var n=e.querySelectorAll(".friends-link-item").length;let s=2;80<=n?s=4:60<=n&&(s=3),e.style.gridTemplateColumns=`repeat(${s}, 1fr)`,l.forEach(e=>{e.style.gridColumn="span "+s;let n=!1;const l=[];let t=e.nextElementSibling;for(;t&&t.classList.contains("friends-link-item");)l.push(t),t=t.nextElementSibling;const i=e.querySelector(".fold");i.addEventListener("click",()=>{n=!n,i.classList.remove("fa-chevron-"+(n?"down":"left")),i.classList.add("fa-chevron-"+(n?"left":"down")),l.forEach(e=>e.style.display=n?"none":"block")})})}}!0===KEEP.theme_config?.pjax?.enable&&KEEP.utils?linksPageHandle():window.addEventListener("DOMContentLoaded",linksPageHandle);