(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},57:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(26),r=c.n(s),a=(c(33),c(7)),o=c(2),j=(c(34),c(0)),l=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("p",{children:"Questions? Call 000-800-040-1843"}),Object(j.jsxs)("div",{className:"footer-cols",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"FAQ"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Investor Relations"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Privacy"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Speed Test"})})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Help Centre"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Jobs"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Cookie Preferences"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Legal Notices"})})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Account"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Ways to Watch"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Corporate Information"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Only on Netflix"})})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Media Centre"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Terms of Use"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Contact Us"})})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{}),Object(j.jsx)("p",{children:"Netflix Clone"})]})]})})},h=c(6),b=(c(36),function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],i=t[1],s=function(){window.pageYOffset>300?i(!0):i(!1)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[]),Object(j.jsx)("div",{className:"scroll-to-top",children:c&&Object(j.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(j.jsx)("i",{className:"fas fa-arrow-circle-up fa-3x"})})})}),d=(c(37),"a302e2d69279d66b73b6a1d121a12798"),x={fetchTrending:"/trending/all/week?api_key=".concat(d,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(d,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(d,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(d,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(d,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(d,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(d,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(d,"&with_genres=99")},f=c(8),A=c.n(f),O=c(12),u=c(13),m=c.n(u),g=(c(57),function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],i=t[1];Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("https://api.themoviedb.org/3").concat(x.fetchNetflixOriginals));case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var s,r;return Object(j.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===c||void 0===c?void 0:c.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(j.jsxs)("div",{className:"banner-contents",children:[Object(j.jsx)("h1",{className:"banner-title",children:(null===c||void 0===c?void 0:c.title)||(null===c||void 0===c?void 0:c.name)||(null===c||void 0===c?void 0:c.originam_name)}),Object(j.jsxs)("div",{className:"banner-buttons",children:[Object(j.jsxs)(a.b,{to:"/watchlist",children:[" ",Object(j.jsxs)("button",{className:"banner-button",children:[Object(j.jsx)("i",{className:"fas fa-eye"})," Watched List"]})," "]}),Object(j.jsxs)(a.b,{to:"/wishlist",children:["   ",Object(j.jsxs)("button",{className:"banner-button",children:[Object(j.jsx)("i",{className:"fas fa-heart"})," Wish List"]})," "]})]}),Object(j.jsx)("h1",{className:"banner-description",children:(s=null===c||void 0===c?void 0:c.overview,r=150,(null===s||void 0===s?void 0:s.length)>r?s.substr(0,r-1)+"...":s)})]}),Object(j.jsx)("div",{className:"banner-fadeBottom"})]})}),v=(c(66),c.p+"static/media/NetflixBase.774e8c16.png"),E=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],i=t[1],s=function(){window.scrollY>100?i(!0):i(!1)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[]),Object(j.jsxs)("div",{className:"nav ".concat(c&&"nav-black"),children:[Object(j.jsx)(a.b,{to:"/home",children:Object(j.jsx)("img",{src:v,className:"nav-logo",alt:"logo"})}),Object(j.jsx)("img",{src:"data:image/png;base64,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",className:"nav-avatar",alt:"logo"})]})},w=(c(67),function(e){var t=e.title,c=e.fetchUrl,i=e.isLargeRow,s=c,r=Object(n.useState)([]),a=Object(h.a)(r,2),o=a[0],l=a[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3"+s).then((function(e){return l(e.data.results),e}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("div",{className:"row-posters",children:o&&o.map((function(e){return Object(j.jsx)("img",{className:"row-poster ".concat(i&&"row-posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(i?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))})]})}),p=function(){return Object(n.useEffect)((function(){document.title="Netflix Home"}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(E,{}),Object(j.jsx)(g,{}),Object(j.jsx)(w,{title:"NETFLIX ORIGINALS",fetchUrl:x.fetchNetflixOriginals,isLargeRow:!0}),Object(j.jsx)(w,{title:"Trending Now",fetchUrl:x.fetchTrending}),Object(j.jsx)(w,{title:"Top Rated",fetchUrl:x.fetchTopRated}),Object(j.jsx)(w,{title:"Action Movies",fetchUrl:x.fetchActionMovies}),Object(j.jsx)(w,{title:"Comedy Movies",fetchUrl:x.fetchComedyMovies}),Object(j.jsx)(w,{title:"Horror Movies",fetchUrl:x.fetchHorrorMovies}),Object(j.jsx)(w,{title:"Romance Movies",fetchUrl:x.fetchRomanceMovies}),Object(j.jsx)(w,{title:"Documentaries",fetchUrl:x.fetchDocumentaries})]})},C=(c(68),function(){return Object(j.jsxs)("header",{className:"showcase",children:[Object(j.jsx)("div",{className:"showcase-top",children:Object(j.jsx)("img",{src:v,alt:"logo"})}),Object(j.jsxs)("div",{className:"showcase-content",children:[Object(j.jsx)("h1",{children:"Unlimited Movies , TV Shows and more"}),Object(j.jsx)("p",{children:"NETFLIX CLONE VERSION "}),Object(j.jsxs)(a.b,{to:"/home",className:"btn btn-x1",children:["Redirect to Wishlist Page",Object(j.jsx)("i",{className:"fas fa-chevron-right btn-icon"})]})]})]})}),Q="Cancel at any time",I="Watch Anywhere",B="Pick your Plans",N=(c(69),function(e){var t=e.activeTabName,c=(e.onClickTab,Q),n=I,i=B,s=function(e,t,c,n){"tab-item ".concat(t&&"tab-border")};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{className:"tabs",children:Object(j.jsxs)("div",{className:"container",children:[s(0,t===c),s(0,t===n),s(0,t===i)]})})})}),M=function(){var e=Object(n.useState)(Q),t=Object(h.a)(e,2),c=t[0],i=t[1];return Object(j.jsx)("div",{children:Object(j.jsx)(N,{activeTabName:c,onClickTab:function(e){i(e)}})})},T=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C,{}),Object(j.jsx)(M,{})]})},Y=function(){return Object(n.useEffect)((function(){document.title="Netflix Watchlist"}),[]),Object(j.jsx)("div",{children:Object(j.jsx)(E,{})})},k=function(){return Object(n.useEffect)((function(){document.title="Netflix Wishlist"}),[]),Object(j.jsx)("div",{children:Object(j.jsx)(E,{})})};var L=function(){return Object(j.jsx)(a.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:T}),Object(j.jsx)(o.a,{path:"/home",component:p}),Object(j.jsx)(o.a,{path:"/wishlist",component:k}),Object(j.jsx)(o.a,{path:"/watchlist",component:Y})]}),Object(j.jsx)(l,{})]})})};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.afac3d78.chunk.js.map