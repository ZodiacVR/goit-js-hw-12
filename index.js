import{S as v,a as y,i as n}from"./assets/vendor-Dbn66z2c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const M=({largeImageURL:t,webformatURL:e,tags:o,likes:c,views:r,comments:a,downloads:i})=>`
    <div class="gallery-wrapper">
        <a class="gallery-link" href="${t}">
        <img class="gallery-image" src="${e}" alt="${o}">
        <ul class="gallery-info-list">
          <li class="gallery-info-item">
            <p class="gallery-info-title">Likes</p>
            <p class="gallery-info-value">${c}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Views</p>
            <p class="gallery-info-value">${r}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Comments</p>
            <p class="gallery-info-value">${a}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Downloads</p>
            <p class="gallery-info-value">${i}</p>
          </li>
        </ul>
        </a>
      </div>
    `,m=t=>t.map(e=>M(e)).join(""),p=new v(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"});y.defaults.baseURL="https://pixabay.com/api/";const f=async(t,e)=>{try{const o={q:t,page:e,key:"49370474-a1716903616cca1a00d36cfab",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};return await y.get("",{params:o})}catch(o){console.log(o.message)}},s={searchForm:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")},g=15;let u,l,d,h;s.loader.style.display="none";function b(){s.loader.style.display="block"}function L(){s.loader.style.display="none"}const w=async t=>{try{if(t.preventDefault(),l=1,s.gallery.innerHTML="",s.btnLoadMore.classList.remove("is-visible"),d=t.currentTarget.elements.search_text.value.trim(),d===""){n.error({title:"Error",message:"Input cannot be empty!",position:"topRight"}),s.btnLoadMore.classList.remove("is-visible"),t.currentTarget.elements.search_text.value="";return}b();const{data:{hits:e}}=await f(d,l);if(e.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.searchForm.reset(),s.btnLoadMore.classList.remove("is-visible");return}s.gallery.innerHTML=m(e),p.refresh(),l+=1,s.btnLoadMore.classList.add("is-visible"),h=document.querySelector(".gallery-wrapper").getBoundingClientRect().height}catch(e){n.error({title:"Error",message:e.message})}finally{L()}},P=async()=>{try{b();const{data:{totalHits:t,hits:e}}=await f(d,l);if(s.gallery.insertAdjacentHTML("beforeend",m(e)),p.refresh(),window.scrollBy({top:h*2,left:0,behavior:"smooth"}),u=Math.ceil(t/g),l===u||e.length<g){n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),s.btnLoadMore.classList.remove("is-visible");return}l+=1,s.btnLoadMore.classList.add("is-visible")}catch(t){n.error({message:t.message,position:"topRight"}),console.log(t.message)}finally{L()}};s.searchForm.addEventListener("submit",w);s.btnLoadMore.addEventListener("click",P);
//# sourceMappingURL=index.js.map
