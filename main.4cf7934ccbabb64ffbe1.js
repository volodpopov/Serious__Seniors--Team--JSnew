(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{AQ1r:function(e,t,n){var l=n("mp5j");e.exports=(l.default||l).template({1:function(e,t,n,l,i){var r=e.lambda,a=e.escapeExpression,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="homepage-list__li" id = '+a(r(null!=t?o(t,"id"):t,t))+'>\r\n    <div class="homepage-list__poster-wrapper">\r\n        <img class="homepage-list__poster-img" src="https://image.tmdb.org/t/p/w1280'+a(r(null!=t?o(t,"backdrop_path"):t,t))+'" id = '+a(r(null!=t?o(t,"id"):t,t))+' alt="MOVIE ID :'+a(r(null!=t?o(t,"id"):t,t))+'" width="298" height="156" />\r\n    </div>\r\n    <p class="homepage-list__moviename">'+a(r(null!=t?o(t,"original_title"):t,t))+"</p>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,i){var r;return(null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:8,column:9}}}))?r:"")+"\r\n\r\n"},useData:!0})},"Dv/5":function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("Dv/5"),n("hi3g"),n("IlJM");var l={homeDom:document.querySelector(".home-link"),libraryDom:document.querySelector(".library-link"),filmLibraryPageSection:document.querySelector(".myFilmLibraryPage__section"),homePageSection:document.querySelector(".homePage"),filmDetailPageSection:document.querySelector(".film-details-page"),buttonShowLIstQueue:document.querySelector(".library__btn--queue"),buttonFilmsWatched:document.querySelector(".library__btn--watch"),buttonAddFilmToQueue:document.querySelector(".js-btn-queue"),buttonAddFilmToWatched:document.querySelector(".js-btn-watched"),buttonPrev:document.querySelector(".js-btn-prev"),buttonNumber:document.querySelector(".page-number"),buttonNext:document.querySelector(".js-btn-next"),homepageList:document.querySelector(".js-list-render"),searchFormDom:document.querySelector(".search__form"),inputFormDom:document.querySelector(".search__film"),searchFormErrorDom:document.querySelector(".search-form__error"),logoDom:document.querySelector(".navigation__left-side")},i=(n("Muwe"),n("y89P"),n("SgDD"),n("JBxO"),n("FdtR"),{selectFilm:null,renderFilms:null,genres:null,pageNumber:1,inputValue:""}),r={API_KEY:"api_key=f2c0383f553427336b1984c7194d50ac",HTTP:"//api.themoviedb.org/3/search/multi?",getFullRequest:function(e,t){return fetch(""+this.HTTP+this.API_KEY+"&page="+t+"&query="+e).then((function(e){return e.json()})).then((function(e){return e}))}},a=(n("fp7Y"),n("AQ1r")),o=n.n(a);function c(e){var t=o()(e);l.homepageList.insertAdjacentHTML("beforeend",t),l.homepageList.addEventListener("click",(function(t){if("IMG"===t.target.tagName){var n,l=Number(t.target.id);e.find((function(e){e.id!==l||(n=e.id)})),S(n,!1)}}))}function s(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=f2c0383f553427336b1984c7194d50ac&language=en-US&page="+i.pageNumber).then((function(e){return e.json()})).then((function(e){e.results.length>1&&(l.homepageList.innerHTML=""),i.renderFilms=[].concat(e.results),c(i.renderFilms)}))}function u(){""!==i.inputValue?r.getFullRequest(i.inputValue,i.pageNumber).then((function(e){0===e.length?(l.searchFormErrorDom.replace("search-form__error--hidden","search-form__error--visibale"),i.pageNumber=1,s()):(l.homepageList.innerHTML="",i.renderFilms=[].concat(e.results),c(i.renderFilms))})).catch((function(e){return console.error(e)})):console.log(i.inputValue,"variables.inputValue error empty string")}function d(e){var t=e.currentTarget.id;"next"===t?(i.pageNumber+=1,l.buttonPrev.classList.remove("hidden"),l.buttonNumber.textContent=i.pageNumber):"prev"===t&&(i.pageNumber-=1,l.buttonNumber.textContent=i.pageNumber),i.pageNumber<=1&&l.buttonPrev.classList.add("hidden"),""===i.inputValue?s():u()}s(),fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=f2c0383f553427336b1984c7194d50ac&language=en-US").then((function(e){return e.json()})).then((function(e){return i.genres=[].concat(e.genres)})).catch((function(e){return console.log(e)})),l.searchFormDom.addEventListener("submit",(function(e){e.preventDefault(),i.inputValue=l.inputFormDom.value.trim(),l.searchFormDom.reset(),u()}));n("RtS0"),n("3dw1");var m=document.querySelector(".library__filmList");function p(e,t,n,l){var i=document.createElement("li");i.classList.add("some_class");var r=document.createElement("img");r.classList.add("some_class"),r.setAttribute("src","https://image.tmdb.org/t/p/w500"+t),r.setAttribute("id",n);var a=document.createElement("p");a.classList.add("some_class"),a.textContent=e;var o=document.createElement("p");return o.classList.add("library__vote"),o.textContent=l,i.append(r,a,o),i.addEventListener("click",(function(){return S(n,!0)})),i}function f(){l.buttonFilmsWatched.classList.add("library__btn--active"),l.buttonShowLIstQueue.classList.remove("library__btn--active");var e=document.createDocumentFragment(),t=JSON.parse(localStorage.getItem("filmsWatched"));if(null!==t)m.innerHTML="",t.forEach((function(t){return e.append(p(t.title,t.backdrop_path,t.id,t.vote_average))})),m.append(e);else{m.innerHTML="";var n=document.createElement("li");if(""===n.textContent){n.textContent="You do not have watched movies. Add them.";var i=document.createDocumentFragment();i.append(n),m.append(i)}}}function h(){l.buttonFilmsWatched.classList.remove("library__btn--active"),l.buttonShowLIstQueue.classList.add("library__btn--active");var e=JSON.parse(localStorage.getItem("filmsQueue")),t=document.createDocumentFragment();if(null!==e)m.innerHTML="",e.forEach((function(e){return t.append(p(e.title,e.backdrop_path,e.id,e.vote_average))})),m.append(t);else{m.innerHTML="";var n=document.createElement("li");if(""===n.textContent){n.textContent="You do not have to queue movies to watch. Add them.";var i=document.createDocumentFragment();i.append(n),m.append(i)}}}n("lYjL");var v=n("knOf"),g=n.n(v);n("Anew");function _(){var e=document.querySelector(".js-btn-queue"),t=document.querySelector(".js-btn-watched"),n=localStorage.getItem("filmsQueue");null===n?e.textContent="Add to queue":JSON.parse(n).find((function(e){return e.id===i.selectFilm.id}))?e.textContent="Delete from queue":e.textContent="Add to queue";var l=localStorage.getItem("filmsWatched");null===l?t.textContent="Add to watched":JSON.parse(l).find((function(e){return e.id===i.selectFilm.id}))?t.textContent="Delete from watched":t.textContent="Add to watched"}function b(){var e=JSON.parse(localStorage.getItem("filmsQueue"))||[];e.find((function(e){return e.id===i.selectFilm.id}))?e=e.filter((function(e){return e.id!==i.selectFilm.id})):e.push(i.selectFilm),localStorage.setItem("filmsQueue",JSON.stringify(e)),_()}function L(){var e=JSON.parse(localStorage.getItem("filmsWatched"))||[];e.find((function(e){return e.id===i.selectFilm.id}))?e=e.filter((function(e){return e.id!==i.selectFilm.id})):e.push(i.selectFilm),localStorage.setItem("filmsWatched",JSON.stringify(e)),_()}function y(){l.filmDetailPageSection.classList.add("hidden"),l.filmLibraryPageSection.classList.add("hidden"),l.homePageSection.classList.remove("hidden"),l.buttonNext.addEventListener("click",d),l.buttonPrev.addEventListener("click",d),l.buttonFilmsWatched.removeEventListener("click",f),l.buttonShowLIstQueue.removeEventListener("click",h),l.buttonAddFilmToWatched.removeEventListener("click",L),l.buttonAddFilmToQueue.removeEventListener("click",b)}function S(e,t){if(l.homePageSection.classList.add("hidden"),l.filmLibraryPageSection.classList.add("hidden"),l.filmDetailPageSection.classList.remove("hidden"),t){var n=[].concat(JSON.parse(localStorage.getItem("filmsQueue")),JSON.parse(localStorage.getItem("filmsWatched")));i.selectFilm=n.find((function(t){return t.id===e}))}else i.selectFilm=i.renderFilms.find((function(t){return t.id===e}));var r,a,o;r=i.selectFilm,a=document.querySelector(".film-details-page-hbs"),o=g()(r),a.innerHTML=o,_(),l.buttonAddFilmToQueue.addEventListener("click",b),l.buttonAddFilmToWatched.addEventListener("click",L),l.buttonShowLIstQueue.removeEventListener("click",h),l.buttonFilmsWatched.removeEventListener("click",f),l.buttonNext.removeEventListener("click",d),l.buttonPrev.removeEventListener("click",d)}l.filmDetailPageSection.classList.add("hidden"),l.filmLibraryPageSection.classList.add("hidden"),l.homeDom.addEventListener("click",y),l.logoDom.addEventListener("click",y),l.libraryDom.addEventListener("click",(function(){l.filmDetailPageSection.classList.add("hidden"),l.homePageSection.classList.add("hidden"),l.filmLibraryPageSection.classList.remove("hidden"),h(),l.buttonFilmsWatched.addEventListener("click",f),l.buttonShowLIstQueue.addEventListener("click",h),l.buttonAddFilmToWatched.removeEventListener("click",L),l.buttonAddFilmToQueue.removeEventListener("click",b),l.buttonNext.removeEventListener("click",d),l.buttonPrev.removeEventListener("click",d)})),document.addEventListener("DOMContentLoaded",y)},knOf:function(e,t,n){var l=n("mp5j");e.exports=(l.default||l).template({1:function(e,t,n,l,i){var r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                        <span class="film-details__genre">'+e.escapeExpression(e.lambda(null!=t?r(t,"name"):t,t))+"</span>\r\n                        "},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,i){var r,a,o=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,s="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="film-details-page__wrapper container">\r\n    <div class="film-details__img-box">\r\n        <img class="film-details__img" src="https://image.tmdb.org/t/p/original'+u(typeof(a=null!=(a=d(n,"backdrop_path")||(null!=t?d(t,"backdrop_path"):t))?a:c)===s?a.call(o,{name:"backdrop_path",hash:{},data:i,loc:{start:{line:3,column:79},end:{line:3,column:96}}}):a)+'" alt="'+u(typeof(a=null!=(a=d(n,"title")||(null!=t?d(t,"title"):t))?a:c)===s?a.call(o,{name:"title",hash:{},data:i,loc:{start:{line:3,column:103},end:{line:3,column:112}}}):a)+'" width="320" height="240">\r\n    </div>\r\n    <div class="film-details__wrapper">\r\n        <div class="film-details__wrapper-item film-details__wrapper-item--film">\r\n            <h2 class="film-details__title">\r\n                '+u(typeof(a=null!=(a=d(n,"title")||(null!=t?d(t,"title"):t))?a:c)===s?a.call(o,{name:"title",hash:{},data:i,loc:{start:{line:8,column:16},end:{line:8,column:25}}}):a)+'\r\n                <span class="film-details__year">('+u(typeof(a=null!=(a=d(n,"release_date")||(null!=t?d(t,"release_date"):t))?a:c)===s?a.call(o,{name:"release_date",hash:{},data:i,loc:{start:{line:9,column:50},end:{line:9,column:66}}}):a)+')</span>\r\n            </h2>\r\n            <ul class="film-details__list">\r\n                <li class="film-details__item film-details__item--color">\r\n                    <span class="film-details__vote">'+u(typeof(a=null!=(a=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?a:c)===s?a.call(o,{name:"vote_average",hash:{},data:i,loc:{start:{line:13,column:53},end:{line:13,column:69}}}):a)+' /</span>\r\n                    <span class="film-details__votes">'+u(typeof(a=null!=(a=d(n,"vote_count")||(null!=t?d(t,"vote_count"):t))?a:c)===s?a.call(o,{name:"vote_count",hash:{},data:i,loc:{start:{line:14,column:54},end:{line:14,column:68}}}):a)+'</span>\r\n                </li>\r\n                <li class="film-details__item">\r\n                    <span class="film-details__popularity">'+u(typeof(a=null!=(a=d(n,"popularity")||(null!=t?d(t,"popularity"):t))?a:c)===s?a.call(o,{name:"popularity",hash:{},data:i,loc:{start:{line:17,column:59},end:{line:17,column:73}}}):a)+'</span>\r\n                </li>\r\n                <li class="film-details__item film-details__item--color">\r\n                    <span class="film-details__original-title">'+u(typeof(a=null!=(a=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?a:c)===s?a.call(o,{name:"original_title",hash:{},data:i,loc:{start:{line:20,column:63},end:{line:20,column:81}}}):a)+'</span>\r\n                </li>\r\n                <li class="film-details__item">\r\n                    <span class="film-details__genre">\r\n'+(null!=(r=d(n,"each").call(o,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:24,column:24},end:{line:26,column:33}}}))?r:"")+'</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class="film-details__wrapper-item film-details__wrapper-item--about">\r\n            <h3 class="film-details__title">About</h3>\r\n            <p class="film-details__description">'+u(typeof(a=null!=(a=d(n,"overview")||(null!=t?d(t,"overview"):t))?a:c)===s?a.call(o,{name:"overview",hash:{},data:i,loc:{start:{line:32,column:49},end:{line:32,column:61}}}):a)+"</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.4cf7934ccbabb64ffbe1.js.map