"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[355],{355:function(n,e,i){i.r(e),i.d(e,{default:function(){return v}});var r,t,o,a=i(439),l=i(87),s=i(689),c=i(791),d=i(856),p=i(168),x=i(934),h=x.Z.div(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 40px;\n  padding: 20px;\n\n  &::after {\n    content: '';\n    position: fixed;\n    top: 0px;\n    left: -5px;\n    width: calc(100% + 10px);\n    height: calc(100vh + 10px);\n    background-image: ",";\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    filter: blur(5px);\n    z-index: -1;\n    opacity: 0.35;\n  }\n\n  img {\n    border-radius: 5px;\n    box-shadow: rgb(0 0 0 / 50%) 0px 0px 10px;\n    align-self: flex-start;\n  }\n"])),(function(n){return"url(".concat(n.children[0].props.src,")")})),u=x.Z.div(t||(t=(0,p.Z)(["\n  font-size: 20px;\n  display: flex;\n  gap: 30px;\n  padding-left: 20px;\n  margin-bottom: 20px;\n  a {\n    text-decoration: none;\n    color: black;\n    display: inline-block;\n    margin-top: 15px;\n    text-decoration: none;\n    color: black;\n    outline: 1px solid teal;\n    background-color: teal;\n    padding: 10px;\n    border-radius: 10px;\n  }\n"]))),g=(0,x.Z)(l.rU)(o||(o=(0,p.Z)(["\n  margin-left: 15px;\n  display: inline-block;\n  margin-top: 15px;\n  text-decoration: none;\n  color: black;\n  outline: 1px solid teal;\n  background-color: teal;\n  padding: 10px;\n  border-radius: 10px;\n"]))),f=i(184);var v=function(){var n,e,i=(0,c.useState)([]),r=(0,a.Z)(i,2),t=r[0],o=r[1],p=(0,s.UO)().moviesId,x=(0,s.TH)();(0,c.useEffect)((function(){(0,d.Pg)(p).then((function(n){o(n)}))}),[p]);var v=null!==(n=null===(e=x.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return 0===t.length?null:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g,{to:v,state:{from:x},children:"Go back"}),(0,f.jsxs)(h,{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title,width:"300"}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h1",{children:[t.title," (",t.release_date.slice(0,4),")"]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{children:"User score:"})," ",t.vote_average]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:t.overview}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{children:"Genres: "}),t.genres.map((function(n){return n.name})).join(", ")]})]})]}),(0,f.jsxs)(u,{children:[(0,f.jsx)(l.rU,{to:"cast",id:p,children:"Cast"}),(0,f.jsx)(l.rU,{to:"reviews",id:p,children:"Reviews"})]}),(0,f.jsx)(c.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=355.551290cc.chunk.js.map