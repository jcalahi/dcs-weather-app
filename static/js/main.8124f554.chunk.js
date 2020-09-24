(this["webpackJsonpdcs-weather-app"]=this["webpackJsonpdcs-weather-app"]||[]).push([[0],{204:function(e,n,t){},240:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(87),o=t.n(c),i=t(88),l=t.n(i),u=(t(204),t(42)),s=t(6),m=t(16),f=t(20),d="FETCH_WEATHER",p="TOGGLE_FAVORITES",v={weather:{},favorites:[]},b=function(e,n){switch(n.type){case d:return Object(f.a)(Object(f.a)({},e),{},{weather:n.weather});case p:var t=n.weather.location.name,a=e.favorites.findIndex((function(e){return e.location.name===t}));if(-1===a){var r=[].concat(Object(m.a)(e.favorites),[n.weather]).sort((function(e,n){return e.location.name.localeCompare(n.location.name)}));return Object(f.a)(Object(f.a)({},e),{},{favorites:r})}return Object(f.a)(Object(f.a)({},e),{},{favorites:[].concat(Object(m.a)(e.favorites.slice(0,a)),Object(m.a)(e.favorites.slice(a+1)))});default:return e}},g=Object(a.createContext)(),E={WeatherStateContext:g,WeatherStateProvider:function(e){var n=e.children;return r.a.createElement(g.Provider,{value:Object(a.useReducer)(b,v)},n)}},h=t(2),y=t(3),O=t(4),j=t(89),x=t.n(j),w=t(90),k=t.n(w),z=t(43),C=t(9),S=t(15),_=t.n(S),B=t(22),F=t(23),R=t.n(F);function W(){var e=Object(h.a)(["\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n\n  > span {\n    font-family: Raleway;\n    font-size: 1.5rem;\n    font-weight: 600;\n    text-decoration: underline;\n  }\n"]);return W=function(){return e},e}function G(){var e=Object(h.a)(["\n  background-color: transparent;\n  border: none;\n  margin-left: -3.5rem;\n  z-index: 10;\n  transition: all 0.2s ease-in-out;\n\n  &:active {\n    transform: translateY(5px);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return G=function(){return e},e}function P(){var e=Object(h.a)(["\n  & {\n    display: flex;\n\n    & .react-autosuggest {\n      &__container {\n        flex: 1;\n        position: relative;\n      }\n\n      &__input {\n        border: 2px solid var(--color-lightgrey);\n        font-family: 'Fredoka One', cursive;\n        font-size: 2.5rem;\n        letter-spacing: 2px;\n        padding: 1rem 4rem 1rem 1rem;\n        outline: none;\n        transition: all 0.2s ease-in-out;\n        width: 100%;\n\n        &::placeholder {\n          color: var(--color-lightgrey);\n        }\n\n        &:focus {\n          border: 2px solid var(--color-lightslategrey);\n\n          &::placeholder {\n            color: var(--color-lightslategrey);\n          }\n        }\n\n        &--open {\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        }\n      }\n\n      &__suggestions {\n        &-container {\n          display: none;\n        }\n\n        &-container--open {\n          display: block;\n          position: absolute;\n          top: 6rem;\n          width: 100%;\n          border: 2px solid var(--color-lightslategrey);\n          background-color: #fff;\n          font-family: Raleway;\n          font-weight: 400;\n          font-size: 1.6rem;\n          z-index: 10;\n        }\n\n        &-list {\n          margin: 0;\n          padding: 0;\n          list-style-type: none;\n        }\n      }\n\n      &__suggestion {\n        cursor: pointer;\n        padding: 1rem 2rem;\n\n        &--highlighted {\n          background-color: var(--color-lightslategrey);\n        }\n      }\n    }\n  }\n"]);return P=function(){return e},e}function L(){var e=Object(h.a)(["\n  margin: 0 auto;\n  max-width: 60rem;\n"]);return L=function(){return e},e}var q=y.a.div(L()),H=y.a.div(P()),T=y.a.button(G()),I=y.a.button(W());var A=function(){var e=Object(s.f)(),n=Object(a.useContext)(E.WeatherStateContext),t=Object(O.a)(n,2)[1],c=Object(a.useState)(""),o=Object(O.a)(c,2),i=o[0],l=o[1],u=function(){var e=Object(a.useState)({}),n=Object(O.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(!1),o=Object(O.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)({}),s=Object(O.a)(u,2),m=s[0],f=s[1];return{weather:t,isFetchingCurrent:i,fetchCurrent:Object(a.useCallback)(function(){var e=Object(B.a)(_.a.mark((function e(n){var t,a,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={access_key:"77fc5a17b4912688fe7acd4acb23d8e4",query:n},e.prev=1,l(!0),e.next=5,R.a.get("".concat("https://api.weatherstack.com","/current"),{params:t});case 5:a=e.sent,(c=a.data).error?f(c.error.info):r(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),f(e.t0);case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(n){return e.apply(this,arguments)}}(),[]),errorMessage:m}}(),m=u.weather,f=u.isFetchingCurrent,p=u.fetchCurrent,v=function(){var e=Object(a.useState)([]),n=Object(O.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(!1),o=Object(O.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)({}),s=Object(O.a)(u,2),m=s[0],f=s[1],d=Object(a.useCallback)(function(){var e=Object(B.a)(_.a.mark((function e(n){var t,a,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={access_key:"77fc5a17b4912688fe7acd4acb23d8e4",query:n},e.prev=1,l(!0),e.next=5,R.a.get("".concat("https://api.weatherstack.com","/autocomplete"),{params:t});case 5:a=e.sent,(c=a.data).error?f(c.error.info):r(c.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),f(e.t0);case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{results:t,setResults:r,isLookingUp:i,lookup:d,errorLookupMsg:m}}(),b=v.results,g=v.isLookingUp,h=v.lookup,y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(a.useState)(),t=Object(O.a)(n,2),r=t[0],c=t[1],o=Object(a.useState)(),i=Object(O.a)(o,2),l=i[0],u=i[1],s=function(e){var n=e.coords,t=n.latitude,a=n.longitude;c("".concat(t,",").concat(a))},m=function(e){u(e)},f=Object(a.useCallback)((function(){var n=navigator.geolocation;n?n.getCurrentPosition(s,m,e):u("Geolocation is not supported.")}),[e]);return{position:r,getPosition:f,error:l}}(),j=y.position,w=y.getPosition,S=Object(a.useMemo)((function(){return x()(h,400)}),[h]);return Object(a.useEffect)((function(){t({type:d,weather:m})}),[m,t]),Object(a.useEffect)((function(){j&&e.push("/details")}),[j,e]),r.a.createElement(q,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=e.target[0].value;""!==n&&p(n)}},r.a.createElement(H,null,r.a.createElement(k.a,{focusInputOnSuggestionClick:!1,inputProps:{placeholder:"Enter a city name",onChange:function(e,n){var t=n.newValue;l(t)},value:i},suggestions:b,onSuggestionsFetchRequested:function(e){var n=e.reason,t=e.value;"input-changed"===n?S(t):S.cancel()},onSuggestionsClearRequested:function(){},onSuggestionSelected:function(e,n){var t=n.suggestionValue;"click"===e.type&&p(t)},getSuggestionValue:function(e){return"".concat(e.name,", ").concat(e.region,", ").concat(e.country)},renderSuggestion:function(e){return r.a.createElement("span",null,"".concat(e.name,", ").concat(e.region,", ").concat(e.country))}}),r.a.createElement(T,null,r.a.createElement(z.a,{size:"2x",icon:g||f?C.c:C.b,spin:g||f})))),r.a.createElement("div",{style:{marginTop:"1rem",textAlign:"center"}},r.a.createElement(I,{onClick:function(){return w()}},r.a.createElement("span",null,"Or use my location"))))},D=t(28),M=t(94);function N(){var e=Object(h.a)(["\n  ",";\n  ",";\n  ",";\n  ",";\n"]);return N=function(){return e},e}var V=y.a.span(N(),(function(e){return e.primary&&"font-family: 'Fredoka One'"}),(function(e){return e.secondary&&"font-family: 'Raleway'"}),(function(e){return e.weight&&"font-weight: ".concat(e.weight)}),(function(e){return e.size&&"font-size: ".concat(e.size)}));function Y(){var e=Object(h.a)(["\n  &&& {\n    cursor: 'pointer';\n    ",";\n  }\n"]);return Y=function(){return e},e}var J=Object(y.a)(z.a)(Y(),(function(e){return e.color&&"color: ".concat(e.color)}));function U(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  align-items: center;\n"]);return U=function(){return e},e}var Z=y.a.div(U());function K(){var e=Object(h.a)(["\n  margin-bottom: 1.5rem;\n"]);return K=function(){return e},e}var Q=y.a.div(K());function X(){var e=Object(h.a)(["\n  display: inline-block;\n"]);return X=function(){return e},e}var $=y.a.div(X());$.Group=Z,$.Body=Q;var ee=$;function ne(){var e=Object(h.a)(["\n  align-self: flex-end;\n\n  & > img {\n    border-radius: 10rem;\n    height: 12rem;\n    width: 12rem;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(h.a)(["\n  flex: 1;\n"]);return te=function(){return e},e}function ae(){var e=Object(h.a)(["\n  display: flex;\n  flex-basis: 40%;\n  justify-content: space-evenly;\n"]);return ae=function(){return e},e}function re(){var e=Object(h.a)(["\n  display: flex;\n"]);return re=function(){return e},e}function ce(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2.5rem;\n\n  h2 {\n    margin-bottom: 1rem;\n  }\n"]);return ce=function(){return e},e}var oe=y.a.header(ce()),ie=y.a.div(re()),le=y.a.div(ae()),ue=y.a.div(te()),se=y.a.span(ne());var me=function(){var e=Object(a.useContext)(E.WeatherStateContext),n=Object(O.a)(e,2),t=n[0],c=t.weather,o=t.favorites,i=n[1],l=c.current,u=c.location;return 0===Object.keys(c).length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null,r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement(V,{size:"3rem",primary:!0},"".concat(u.name,", ").concat(u.country))),r.a.createElement("p",null,r.a.createElement(V,{weight:"300",size:"2.5rem",secondary:!0},new Date(1e3*u.localtime_epoch).toDateString()))),r.a.createElement("span",{onClick:function(){return i({type:p,weather:c})}},r.a.createElement(J,{color:"orange",icon:-1!==o.findIndex((function(e){return e.location.name===u.name}))?C.d:D.b,size:"3x"}))),r.a.createElement(ie,null,r.a.createElement(le,null,r.a.createElement(se,null,r.a.createElement("img",{alt:"weather icon",src:l.weather_icons[0]})),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(V,{size:"10rem",secondary:!0},l.temperature,"\xb0")),r.a.createElement("h4",null,r.a.createElement(V,{size:"2.5rem",weight:"400",secondary:!0},l.weather_descriptions[0])))),r.a.createElement(ue,null,r.a.createElement(ee.Group,{style:{height:"100%"}},r.a.createElement(ee,null,r.a.createElement(V,{size:"2rem",weight:"300",primary:!0},"Wind Speed"),r.a.createElement(ee.Body,null,r.a.createElement(V,{size:"2.5rem",secondary:!0},"".concat(l.wind_speed," km/h"))),r.a.createElement(J,{icon:C.g,size:"4x"})),r.a.createElement(ee,null,r.a.createElement(V,{size:"2rem",weight:"300",primary:!0},"Wind Direction"),r.a.createElement(ee.Body,null,r.a.createElement(V,{size:"2.5rem",secondary:!0},"".concat(l.wind_dir))),r.a.createElement(J,{icon:D.a,size:"4x"})),r.a.createElement(ee,null,r.a.createElement(V,{size:"2rem",weight:"300",primary:!0},"Pressure"),r.a.createElement(ee.Body,null,r.a.createElement(V,{size:"2.5rem",secondary:!0},"".concat(l.pressure," mb"))),r.a.createElement(J,{icon:M.a,size:"4x"})),r.a.createElement(ee,null,r.a.createElement(V,{size:"2rem",weight:"300",primary:!0},"Humidity"),r.a.createElement(ee.Body,null,r.a.createElement(V,{size:"2.5rem",secondary:!0},"".concat(l.humidity," %"))),r.a.createElement(J,{icon:C.f,size:"4x"})),r.a.createElement(ee,null,r.a.createElement(V,{size:"2rem",weight:"300",primary:!0},"Cloud Cover"),r.a.createElement(ee.Body,null,r.a.createElement(V,{size:"2.5rem",secondary:!0},"".concat(l.cloudcover," %"))),r.a.createElement(J,{icon:C.a,size:"4x"})),r.a.createElement(ee,null,r.a.createElement(V,{size:"2rem",weight:"300",primary:!0},"Feels like"),r.a.createElement(ee.Body,null,r.a.createElement(V,{size:"2.5rem",secondary:!0},"".concat(l.feelslike," ","\xb0","C"))),r.a.createElement(J,{icon:C.e,size:"4x"}))))))};function fe(){var e=Object(h.a)(["\n  display: grid;\n  grid-column-gap: 2rem;\n  grid-row-gap: 2rem;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n"]);return fe=function(){return e},e}var de=y.a.div(fe());function pe(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return pe=function(){return e},e}var ve=y.a.header(pe());var be=function(e){var n=e.title,t=e.subtitle,a=e.children;return r.a.createElement(ve,null,r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement(V,{size:"2rem",primary:!0},n)),r.a.createElement("p",null,r.a.createElement(V,{size:"1.5rem",weight:"200",secondary:!0},t))),a)};function ge(){var e=Object(h.a)([""]);return ge=function(){return e},e}var Ee=y.a.div(ge());function he(){var e=Object(h.a)(["\n  background: #fff;\n  padding: 0 1rem;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  top: 100%;\n  transition: all 0.2s ease-out;\n"]);return he=function(){return e},e}var ye=y.a.div(he());function Oe(){var e=Object(h.a)(["\n  border: 1px solid grey;\n  padding: 1rem;\n  position: relative;\n  transition: all 0.2s ease-out;\n\n  &:hover {\n    border: 1px solid deepskyblue;\n    transform: translateY(-10px);\n    .overlay {\n      opacity: 0.8;\n      top: 40%;\n    }\n  }\n"]);return Oe=function(){return e},e}var je=y.a.div(Oe());je.Header=be,je.Body=Ee,je.Overlay=ye;var xe=je;function we(){var e=Object(h.a)(["\n  background-color: #fff;\n  border: 1px solid slategray;\n  border-radius: 5rem;\n  font-size: 1.2rem;\n  padding: 5px 8px;\n  transition: all 0.2s ease-out;\n\n  &:hover {\n    border: 1px solid deepskyblue;\n    color: deepskyblue;\n  }\n\n  &:active {\n    transform: translateY(5px);\n  }\n"]);return we=function(){return e},e}function ke(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  height: 100%;\n\n  & > button:first-child {\n    margin-bottom: 5px;\n  }\n"]);return ke=function(){return e},e}var ze=y.a.div(ke()),Ce=y.a.button(we());Ce.Group=ze;var Se=Ce;var _e=function(){var e=Object(a.useContext)(E.WeatherStateContext),n=Object(O.a)(e,2),t=n[0].favorites,c=n[1],o=Object(s.f)();return 0===t.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginBottom:"2.5rem"}},r.a.createElement("h2",null,r.a.createElement(V,{size:"3rem",primary:!0},"Favorites (".concat(t.length,")")))),r.a.createElement(de,null,t.map((function(e,n){var t=e.current,a=e.location;return r.a.createElement(xe,{key:n},r.a.createElement(xe.Header,{title:a.name,subtitle:a.region},r.a.createElement("span",{onClick:function(){return c({type:p,weather:e})}},r.a.createElement(J,{color:"orange",icon:C.d,size:"2x"}))),r.a.createElement(xe.Body,null,r.a.createElement("div",null,r.a.createElement(V,{size:"5rem",secondary:!0},t.temperature,"\xb0")),r.a.createElement("p",null,r.a.createElement(V,{size:"1.5rem",weight:"200",secondary:!0},t.weather_descriptions[0]))),r.a.createElement(xe.Overlay,{className:"overlay"},r.a.createElement(Se.Group,null,r.a.createElement(Se,{onClick:function(){return o.push("/details")}},"Learn more"))))}))))},Be=t(95);var Fe=function(){var e=Object(a.useContext)(E.WeatherStateContext),n=Object(O.a)(e,2),t=n[0].favorites,c=n[1],o=function(){var e=Object(a.useState)([]),n=Object(O.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(!1),o=Object(O.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)(),s=Object(O.a)(u,2),f=s[0],d=s[1],p=function(){var e=Object(B.a)(_.a.mark((function e(){var n,t,a,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("cities.json");case 2:n=e.sent,t=n.data,a=t.reduce((function(e,n){return[].concat(Object(m.a)(e),[n.Name])}),[]).join(";"),{access_key:"77fc5a17b4912688fe7acd4acb23d8e4",query:a};try{l(!0),c=[].sort((function(e,n){return e.location.name.localeCompare(n.location.name)})),r(c)}catch(o){d(o)}finally{l(!1)}case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useState)((function(){p()}),[]),{cities:t,setCities:r,isFetchingCities:i,errorCitiesMsg:f}}(),i=o.cities,l=o.setCities;return 0===i.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginBottom:"2.5rem"}},r.a.createElement("h2",null,r.a.createElement(V,{size:"3rem",primary:!0},"Top 15 cities by population (A-Z)"))),r.a.createElement(de,null,function(){var e=function(){var e,n={},a=Object(Be.a)(t);try{for(a.s();!(e=a.n()).done;){var r=e.value;n[r.location.name]=r.location.name}}catch(c){a.e(c)}finally{a.f()}return n}();return i.map((function(n,t){var a=n.current,o=n.location;return r.a.createElement(xe,{key:t},r.a.createElement(xe.Header,{title:o.name,subtitle:o.region},r.a.createElement("span",{onClick:function(){return c({type:p,weather:n})}},r.a.createElement(J,{color:"orange",icon:e[o.name]?C.d:D.b,size:"2x"}))),r.a.createElement(xe.Body,null,r.a.createElement("div",null,r.a.createElement(V,{size:"5rem",secondary:!0},a.temperature,"\xb0")),r.a.createElement("p",null,r.a.createElement(V,{size:"1.5rem",weight:"200",secondary:!0},a.weather_descriptions[0]))),r.a.createElement(xe.Overlay,{className:"overlay"},r.a.createElement(Se.Group,null,r.a.createElement(Se,null,"Learn more"),r.a.createElement(Se,{onClick:function(){return e=t,void l([].concat(Object(m.a)(i.slice(0,e)),Object(m.a)(i.slice(e+1))));var e}},"Remove"))))}))}()))};function Re(){var e=Object(h.a)(["\n  margin-bottom: 2.5rem;\n"]);return Re=function(){return e},e}function We(){var e=Object(h.a)(["\n  padding: 10rem 15rem;\n"]);return We=function(){return e},e}var Ge=y.a.div(We()),Pe=y.a.div(Re());var Le=function(){return r.a.createElement(Ge,null,r.a.createElement(Pe,null,r.a.createElement("header",null,r.a.createElement(A,null))),r.a.createElement("main",null,r.a.createElement(Pe,null,r.a.createElement(me,null)),r.a.createElement(Pe,null,r.a.createElement(_e,null)),r.a.createElement(Pe,null,r.a.createElement(Fe,null))))};var qe=function(){return r.a.createElement(u.a,{basename:window.location.pathname||""},r.a.createElement(E.WeatherStateProvider,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:Le}),r.a.createElement(s.a,{exact:!0,path:"/details",component:me}))))};l()(r.a,{onlyLogs:!0,titleColor:"green",diffNameColor:"darkturquoise"}),o.a.render(r.a.createElement(qe,null),document.getElementById("root"))},96:function(e,n,t){e.exports=t(240)}},[[96,1,2]]]);
//# sourceMappingURL=main.8124f554.chunk.js.map