import{a as g,S as y,i}from"./assets/vendor-1AYLTIiv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const h="50849139-d21d04a61911bfdf6ebb62f1b",b="https://pixabay.com/api/";function L(r){return g.get(b,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(console.log(t),t.data.hits)).catch(t=>{console.log(t)})}const p=document.querySelector(".gallery"),u=document.querySelector(".loader");let l;function v(r){const t=r.map(({webformatURL:a,largeImageURL:n,tags:e,likes:s,views:o,comments:d,downloads:m})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${n}">
                <img class="gallery-image"
                    src="${a}"  
                    alt="${e}"/>
                <div class="image-info">
                    <p class="info-item">
                        <span class="info-label">Likes</span>
                        <span class="info-value">${s}</span>
                    </p>
                    <p class="info-item">
                        <span class="info-label">Views</span>
                        <span class="info-value">${o}</span>
                    </p> 
                    <p class="info-item">
                        <span class="info-label">Comments</span>
                        <span class="info-value">${d}</span>
                    </p> 
                    <p class="info-item">
                        <span class="info-label">Downloads</span>
                        <span class="info-value">${m}</span>
                    </p>     
                </div>
            </a>
        </li>
        `).join("");p.innerHTML=t,l?l.refresh():l=new y(".gallery a",{captionsData:"alt",captionDelay:250,close:!0})}function f(){p.innerHTML=""}function S(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}const c=document.querySelector("form"),P=c.elements["search-text"];c.addEventListener("submit",$);function $(r){r.preventDefault();const t=P.value.trim();if(t===0){i.error({message:"Please enter a search query.",position:"topRight"}),f();return}f(),S(),L(t).then(a=>{a.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),v(a)}).catch(a=>{console.log("catch",a),i.error({message:"Try again!",position:"topRight"})}).finally(()=>{q(),c.reset()})}
//# sourceMappingURL=index.js.map
