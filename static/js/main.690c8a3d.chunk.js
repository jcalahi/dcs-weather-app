(this["webpackJsonpdcs-weather-app"]=this["webpackJsonpdcs-weather-app"]||[]).push([[0],{106:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(48),o=t.n(c),i=(t(61),t(18)),l=t(8),u=t(14),s=t(4),m="https://api.weatherstack.com",d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f={SEARCH_RESULT:"SEARCH_RESULT",SET_WEATHER_CURRENT:"SET_WEATHER_CURRENT",SET_WEATHER_FORECAST:"SET_WEATHER_FORECAST",ADD_CITIES:"ADD_CITIES",REMOVE_CITY:"REMOVE_CITY",TOGGLE_FAVORITES:"TOGGLE_FAVORITES",LOADING_CITIES:"LOADING_CITIES",LOADING_WEATHER:"LOADING_WEATHER",ADD_NOTE:"ADD_NOTE",REMOVE_NOTE:"REMOVE_NOTE",EDIT_NOTE:"EDIT_NOTE",RESET_WEATHER:"RESET_WEATHER"},E={xxs:"320px",xs:"480",sm:"768px",md:"992px",lg:"1200px",xl:"1600px"},p={searchResult:{},weather:{},cities:[],favorites:[],notes:[],loadingCities:!1,loadingWeather:!1,allCitiesRemoved:!1},b=function(e,n){switch(n.type){case f.SEARCH_RESULT:return Object(s.a)(Object(s.a)({},e),{},{searchResult:n.weather});case f.SET_WEATHER_CURRENT:return Object(s.a)(Object(s.a)({},e),{},{weather:n.weather});case f.ADD_CITIES:return Object(s.a)(Object(s.a)({},e),{},{cities:n.cities,error:n.error});case f.REMOVE_CITY:return Object(s.a)(Object(s.a)({},e),{},{cities:[].concat(Object(u.a)(e.cities.slice(0,n.cityIdx)),Object(u.a)(e.cities.slice(n.cityIdx+1))),allCitiesRemoved:1===e.cities.length});case f.TOGGLE_FAVORITES:var t=n.weather.location.name,a=e.favorites.findIndex((function(e){return e.location.name===t}));if(-1===a){var r=[].concat(Object(u.a)(e.favorites),[n.weather]).sort((function(e,n){return e.location.name.localeCompare(n.location.name)}));return Object(s.a)(Object(s.a)({},e),{},{favorites:r})}return Object(s.a)(Object(s.a)({},e),{},{favorites:[].concat(Object(u.a)(e.favorites.slice(0,a)),Object(u.a)(e.favorites.slice(a+1)))});case f.LOADING_CITIES:return Object(s.a)(Object(s.a)({},e),{},{loadingCities:n.loading});case f.LOADING_WEATHER:return Object(s.a)(Object(s.a)({},e),{},{loadingWeather:n.loading});case f.ADD_NOTE:return Object(s.a)(Object(s.a)({},e),{},{notes:[].concat(Object(u.a)(e.notes),[n.payload])});case f.REMOVE_NOTE:var c=e.notes.filter((function(e){return e.id!==n.payload.id}));return Object(s.a)(Object(s.a)({},e),{},{notes:c});case f.EDIT_NOTE:var o=e.notes.findIndex((function(e){return e.id===n.payload.id}));return Object(s.a)(Object(s.a)({},e),{},{notes:[].concat(Object(u.a)(e.notes.slice(0,o)),[Object(s.a)(Object(s.a)({},e.notes[o]),{},{note:n.payload.note,editedAt:n.payload.editedAt})],Object(u.a)(e.notes.slice(o+1)))});case f.RESET_WEATHER:return Object(s.a)(Object(s.a)({},e),{},{searchResult:{}});default:return e}},v=Object(a.createContext)(),g={WeatherStateContext:v,WeatherStateProvider:function(e){var n=e.children;return r.a.createElement(v.Provider,{value:Object(a.useReducer)(b,p)},n)}},y=t(1),h=t(2);function O(){var e=Object(y.a)(["\n  margin-bottom: 2.5rem;\n"]);return O=function(){return e},e}var j=h.b.div(O());function x(){var e=Object(y.a)(["\n      @media only screen and (min-device-width: ",") {\n        ",";\n      }\n    "]);return x=function(){return e},e}var w=Object.keys(E).reduce((function(e,n){return e[n]=function(){return Object(h.a)(x(),E[n],h.a.apply(void 0,arguments))},e}),{});function S(){var e=Object(y.a)(["padding: 0 20rem;"]);return S=function(){return e},e}function T(){var e=Object(y.a)(["padding: 0 2rem;"]);return T=function(){return e},e}function z(){var e=Object(y.a)(["padding: 0 1rem;"]);return z=function(){return e},e}function C(){var e=Object(y.a)(["\n  margin-top: 1.5rem;\n\n  ","\n  ","\n  ","\n"]);return C=function(){return e},e}var _=h.b.div(C(),w.xxs(z()),w.sm(T()),w.lg(S()));_.Panel=j;var k=_,R=t(5),I=t(52),A=t.n(I),D=t(53),L=t.n(D),N=t(25),W=t(6),H=t(13),G=t.n(H),F=t(16),P=t(15),B=t.n(P);function M(){var e=Object(a.useContext)(g.WeatherStateContext),n=Object(R.a)(e,2)[1],t=Object(a.useState)({}),r=Object(R.a)(t,2),c=r[0],o=r[1];return{fetchWeather:Object(a.useCallback)(function(){var e=Object(F.a)(G.a.mark((function e(t,a){var r,c,i,l;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={access_key:"77fc5a17b4912688fe7acd4acb23d8e4",query:t},e.prev=1,n({type:f.LOADING_WEATHER,loading:!0}),e.next=5,B.a.get("".concat(m,"/current"),{params:r});case 5:c=e.sent,i=c.data,n({type:f.LOADING_WEATHER,loading:!1}),i.error?o(i.error.info):("SEARCH_RESULT"===f[a]?window.localStorage.setItem("storedSearch",JSON.stringify(i)):window.localStorage.setItem("storedWeather",JSON.stringify(i)),n({type:f[a],weather:i})),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(1),l=window.localStorage.getItem("storedWeather"),n({type:f.LOADING_WEATHER,loading:!1}),n({type:f[a],weather:JSON.parse(l)}),o(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n,t){return e.apply(this,arguments)}}(),[n]),resetWeather:Object(a.useCallback)((function(){n({type:f.RESET_WEATHER})}),[n]),errorMessage:c}}var V=t(3);function U(){var e=Object(y.a)(["\n  background-color: #fffaf3;\n  box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;\n  display: none;\n  color: #573a08;\n  padding: 1.6rem;\n  position: fixed;\n  top: 3%;\n  right: 2%;\n  width: 35rem;\n  width: 35rem;\n\n  ","\n"]);return U=function(){return e},e}var q=h.b.div(U(),(function(e){return e.show&&"display: flex; justify-content: space-between;"}));q.propTypes={show:V.string};var J=q;function Y(){var e=Object(y.a)(["font-size: 2.4rem;"]);return Y=function(){return e},e}function Z(){var e=Object(y.a)(["font-size: 2rem;"]);return Z=function(){return e},e}function K(){var e=Object(y.a)(["font-size: 1.8rem;"]);return K=function(){return e},e}function Q(){var e=Object(y.a)(["font-size: 1.6rem;"]);return Q=function(){return e},e}function X(){var e=Object(y.a)(["font-size: 1.4rem;"]);return X=function(){return e},e}function $(){var e=Object(y.a)(["font-size: 2.2rem;"]);return $=function(){return e},e}function ee(){var e=Object(y.a)(["font-size: 2rem;"]);return ee=function(){return e},e}function ne(){var e=Object(y.a)(["font-size: 1.6rem;"]);return ne=function(){return e},e}function te(){var e=Object(y.a)(["font-size: 1.4rem;"]);return te=function(){return e},e}function ae(){var e=Object(y.a)(["font-size: 1.2rem;"]);return ae=function(){return e},e}function re(){var e=Object(y.a)(["\n  ",";\n  ",";\n  ",";\n  ",";\n\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n"]);return re=function(){return e},e}var ce=h.b.span(re(),(function(e){return e.primary&&"font-family: 'Fredoka One'"}),(function(e){return e.secondary&&"font-family: 'Raleway'"}),(function(e){return e.weight&&"font-weight: ".concat(e.weight)}),(function(e){return e.size&&"font-size: ".concat(e.size)}),(function(e){return!e.size&&e.primary&&w.xxs(ae())}),(function(e){return!e.size&&e.primary&&w.xs(te())}),(function(e){return!e.size&&e.primary&&w.sm(ne())}),(function(e){return!e.size&&e.primary&&w.md(ee())}),(function(e){return!e.size&&e.primary&&w.lg($())}),(function(e){return!e.size&&e.secondary&&w.xxs(X())}),(function(e){return!e.size&&e.secondary&&w.xs(Q())}),(function(e){return!e.size&&e.secondary&&w.sm(K())}),(function(e){return!e.size&&e.secondary&&w.md(Z())}),(function(e){return!e.size&&e.secondary&&w.lg(Y())}));ce.propTypes={primary:V.bool,secondary:V.bool,size:V.string,weight:V.string};var oe=ce;function ie(){var e=Object(y.a)(["\n  display: inline-block;\n\n  ",";\n  ",";\n"]);return ie=function(){return e},e}var le=h.b.span(ie(),(function(e){return e.color&&"color: ".concat(e.color)}),(function(e){return e.hover&&"cursor: pointer"}));var ue=function(e){var n=e.color,t=e.icon,a=e.size,c=e.onIconClick,o=e.hover,i=e.spin;return r.a.createElement(le,{color:n,onClick:c,hover:o},r.a.createElement(N.a,{icon:t,size:a,spin:i}))};function se(){var e=Object(y.a)(["\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n\n  > span {\n    font-family: Raleway;\n    font-size: 1.5rem;\n    font-weight: 600;\n    text-decoration: underline;\n  }\n"]);return se=function(){return e},e}function me(){var e=Object(y.a)(["\n  background-color: transparent;\n  border: none;\n  margin-left: -3.5rem;\n  z-index: 10;\n  transition: all 0.2s ease-in-out;\n\n  &:active {\n    transform: translateY(5px);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return me=function(){return e},e}function de(){var e=Object(y.a)(["\n  & {\n    display: flex;\n\n    & .react-autosuggest {\n      &__container {\n        flex: 1;\n        position: relative;\n      }\n\n      &__input {\n        border: 2px solid grey;\n        font-family: Raleway, sans-serif;\n        font-size: 2rem;\n        letter-spacing: 1.5px;\n        padding: 1rem 4rem 1rem 1rem;\n        outline: none;\n        transition: all 0.2s ease-in-out;\n        width: 100%;\n\n        &::placeholder {\n          color: grey;\n        }\n\n        &:focus {\n          border: 2px solid lightseagreen;\n\n          &::placeholder {\n            color: lightseagreen;\n          }\n        }\n\n        &--open {\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        }\n      }\n\n      &__suggestions {\n        &-container {\n          display: none;\n        }\n\n        &-container--open {\n          display: block;\n          position: absolute;\n          top: 6rem;\n          width: 100%;\n          border: 2px solid lightseagreen;\n          background-color: #fff;\n          font-family: Raleway;\n          font-weight: 400;\n          font-size: 1.6rem;\n          z-index: 10;\n        }\n\n        &-list {\n          margin: 0;\n          padding: 0;\n          list-style-type: none;\n        }\n      }\n\n      &__suggestion {\n        cursor: pointer;\n        padding: 1rem 2rem;\n\n        &--highlighted {\n          background-color: #eee;\n        }\n      }\n    }\n  }\n"]);return de=function(){return e},e}function fe(){var e=Object(y.a)(["\n  margin: 0 auto;\n  max-width: 60rem;\n"]);return fe=function(){return e},e}var Ee=h.b.div(fe()),pe=h.b.div(de()),be=h.b.button(me()),ve=h.b.button(se());var ge=function(){var e=Object(a.useState)(""),n=Object(R.a)(e,2),t=n[0],c=n[1],o=Object(l.f)(),i=M(),u=i.fetchWeather,s=i.isLoadingWeather,d=i.resetWeather,E=function(){var e=Object(a.useState)([]),n=Object(R.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(!1),o=Object(R.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)(""),s=Object(R.a)(u,2),d=s[0],f=s[1],E=Object(a.useCallback)(function(){var e=Object(F.a)(G.a.mark((function e(n){var t,a,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={access_key:"77fc5a17b4912688fe7acd4acb23d8e4",query:n},e.prev=1,l(!0),e.next=5,B.a.get("".concat(m,"/autocomplete"),{params:t});case 5:a=e.sent,(c=a.data).error?f(c.error.info):(f(null),r(c.results)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),f(e.t0.toString());case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{results:t,setResults:r,isLookingUp:i,lookup:E,errorLookupMsg:d,setErrorLookupMsg:f}}(),p=E.results,b=E.setResults,v=E.isLookingUp,g=E.lookup,y=E.errorLookupMsg,h=E.setErrorLookupMsg,O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(a.useState)(),t=Object(R.a)(n,2),r=t[0],c=t[1],o=Object(a.useState)(),i=Object(R.a)(o,2),l=i[0],u=i[1],s=Object(a.useState)(!1),m=Object(R.a)(s,2),d=m[0],f=m[1],E=function(e){var n=e.coords,t=n.latitude,a=n.longitude;c("".concat(t,",").concat(a)),f(!1)},p=function(e){u(e),f(!1)},b=Object(a.useCallback)((function(){var n=navigator.geolocation;if(f(!0),!n)return f(!1),void u("Geolocation is not supported.");n.getCurrentPosition(E,p,e)}),[e]);return{isLoadingPosition:d,position:r,getPosition:b,error:l}}(),j=O.isLoadingPosition,x=O.position,w=O.getPosition,S=Object(a.useMemo)((function(){return A()(g,400)}),[g]);return Object(a.useEffect)((function(){x&&!j&&o.push("/details",{query:x})}),[x,o,t,j]),r.a.createElement(Ee,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=e.target[0].value.split(";")[0];""!==n&&(S.cancel(),u(n,f.SEARCH_RESULT))}},r.a.createElement(pe,null,r.a.createElement(L.a,{focusInputOnSuggestionClick:!1,inputProps:{placeholder:"Enter a city name",onChange:function(e,n){var t=n.newValue;c(t)},value:t},suggestions:p,onSuggestionsFetchRequested:function(e){var n=e.reason,t=e.value;"input-changed"===n?S(t):S.cancel()},onSuggestionsClearRequested:function(){S.cancel(),b([]),d()},onSuggestionSelected:function(e,n){var t=n.suggestionValue;"click"===e.type&&u(t,f.SEARCH_RESULT)},getSuggestionValue:function(e){return"".concat(e.name,", ").concat(e.region,", ").concat(e.country)},renderSuggestion:function(e){return r.a.createElement("span",null,"".concat(e.name,", ").concat(e.region,", ").concat(e.country))}}),r.a.createElement(be,null,r.a.createElement(N.a,{size:"2x",icon:v||s||j?W.e:W.d,spin:v||s||j})),r.a.createElement(J,{show:y},r.a.createElement(oe,{size:"1.5rem",secondary:!0},y),r.a.createElement("span",{onClick:function(){return h(null)}},r.a.createElement(ue,{size:"2x",icon:W.h}))))),r.a.createElement("div",{style:{marginTop:"1rem",textAlign:"center"}},r.a.createElement(ve,{onClick:function(){return w()}},r.a.createElement("span",null,"Or use my location"))))},ye=t(9),he=t(54);function Oe(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  align-items: center;\n"]);return Oe=function(){return e},e}var je=h.b.div(Oe());function xe(){var e=Object(y.a)(["\n  margin-bottom: 1.5rem;\n"]);return xe=function(){return e},e}var we=h.b.div(xe());function Se(){var e=Object(y.a)(["\n  display: inline-block;\n"]);return Se=function(){return e},e}var Te=h.b.div(Se());Te.Group=je,Te.Body=we;var ze=Te;function Ce(){var e=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 14.25rem;\n\n  & span {\n    color: lightgrey;\n  }\n"]);return Ce=function(){return e},e}var _e=h.b.div(Ce());var ke=function(e){var n=e.text,t=e.size,a=e.icon,c=e.spin;return r.a.createElement(_e,null,r.a.createElement(ue,{icon:a,size:t,spin:c}),r.a.createElement(oe,{size:"2rem",secondary:!0},n))};function Re(){var e=Object(y.a)(["\n  align-self: flex-end;\n\n  & > img {\n    border-radius: 10rem;\n    height: 12rem;\n    width: 12rem;\n  }\n"]);return Re=function(){return e},e}function Ie(){var e=Object(y.a)(["\n  flex: 1;\n"]);return Ie=function(){return e},e}function Ae(){var e=Object(y.a)(["\n    margin-bottom: 0;\n  "]);return Ae=function(){return e},e}function De(){var e=Object(y.a)(["\n    margin-bottom: 2rem;\n  "]);return De=function(){return e},e}function Le(){var e=Object(y.a)(["\n  display: flex;\n  flex-basis: 40%;\n  justify-content: space-evenly;\n\n  ","\n\n  ","\n"]);return Le=function(){return e},e}function Ne(){var e=Object(y.a)(["\n    display: flex;\n  "]);return Ne=function(){return e},e}function We(){var e=Object(y.a)(["\n    display: block;\n  "]);return We=function(){return e},e}function He(){var e=Object(y.a)(["\n  ","\n\n  ","\n"]);return He=function(){return e},e}function Ge(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2.5rem;\n\n  h2 {\n    margin-bottom: 1rem;\n  }\n"]);return Ge=function(){return e},e}var Fe=h.b.header(Ge()),Pe=h.b.div(He(),w.xxs(We()),w.xl(Ne())),Be=h.b.div(Le(),w.xxs(De()),w.xl(Ae())),Me=h.b.div(Ie()),Ve=h.b.span(Re());var Ue=function(e){var n=e.weather,t=e.favorites,a=e.onToggleFavorites,c=e.loading,o=n.current,i=n.location;return c?r.a.createElement(ke,{size:"6x",text:c?"Loading weather...":"Weather information",icon:c?W.e:ye.e,spin:c}):0===Object.keys(n).length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe,null,r.a.createElement("div",null,r.a.createElement("h2",{style:{display:"inline-block"}},r.a.createElement(oe,{size:"2.4rem",primary:!0},"".concat(i.name,", ").concat(i.country))),r.a.createElement("p",null,r.a.createElement(oe,{size:"2rem",weight:"300",secondary:!0},new Date(1e3*i.localtime_epoch).toDateString()))),r.a.createElement(ue,{hover:!0,color:"orange",size:"3x",icon:-1!==t.findIndex((function(e){return e.location.name===i.name}))?W.f:ye.d,onIconClick:a})),r.a.createElement(Pe,null,r.a.createElement(Be,null,r.a.createElement(Ve,null,r.a.createElement("img",{alt:"weather icon",src:o.weather_icons[0]})),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(oe,{size:"10rem",secondary:!0},o.temperature,"\xb0")),r.a.createElement("h4",null,r.a.createElement(oe,{size:"2.5rem",weight:"400",secondary:!0},o.weather_descriptions[0])))),r.a.createElement(Me,null,r.a.createElement(ze.Group,{style:{height:"100%"}},r.a.createElement(ze,null,r.a.createElement(oe,{weight:"300",primary:!0},"Wind Speed"),r.a.createElement(ze.Body,null,r.a.createElement(oe,{secondary:!0},"".concat(o.wind_speed," km/h"))),r.a.createElement(ue,{icon:W.k,size:"4x"})),r.a.createElement(ze,null,r.a.createElement(oe,{weight:"300",primary:!0},"Wind Direction"),r.a.createElement(ze.Body,null,r.a.createElement(oe,{secondary:!0},"".concat(o.wind_dir))),r.a.createElement(ue,{icon:ye.a,size:"4x"})),r.a.createElement(ze,null,r.a.createElement(oe,{weight:"300",primary:!0},"Pressure"),r.a.createElement(ze.Body,null,r.a.createElement(oe,{secondary:!0},"".concat(o.pressure," mb"))),r.a.createElement(ue,{icon:he.a,size:"4x"})),r.a.createElement(ze,null,r.a.createElement(oe,{weight:"300",primary:!0},"Humidity"),r.a.createElement(ze.Body,null,r.a.createElement(oe,{secondary:!0},"".concat(o.humidity," %"))),r.a.createElement(ue,{icon:W.j,size:"4x"})),r.a.createElement(ze,null,r.a.createElement(oe,{weight:"300",primary:!0},"Cloud Cover"),r.a.createElement(ze.Body,null,r.a.createElement(oe,{secondary:!0},"".concat(o.cloudcover," %"))),r.a.createElement(ue,{icon:W.b,size:"4x"})),r.a.createElement(ze,null,r.a.createElement(oe,{weight:"300",primary:!0},"Feels like"),r.a.createElement(ze.Body,null,r.a.createElement(oe,{secondary:!0},"".concat(o.feelslike," ","\xb0","C"))),r.a.createElement(ue,{icon:W.g,size:"4x"}))))))};var qe=function(e){var n=e.source,t=Object(a.useContext)(g.WeatherStateContext),c=Object(R.a)(t,2),o=c[0],i=o.loadingWeather,l=o.searchResult,u=o.favorites,s=o.weather,m=c[1];return r.a.createElement(Ue,{loading:i,weather:"search"===n?l:s,favorites:u,onToggleFavorites:function(){return m({type:f.TOGGLE_FAVORITES,weather:"search"===n?l:s})}})};function Je(){var e=Object(y.a)(["\n  display: grid;\n  grid-column-gap: 2rem;\n  grid-row-gap: 2rem;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n"]);return Je=function(){return e},e}var Ye=h.b.div(Je());function Ze(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return Ze=function(){return e},e}var Ke=h.b.header(Ze());var Qe=function(e){var n=e.title,t=e.subtitle,a=e.children;return r.a.createElement(Ke,null,r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement(oe,{size:"2rem",primary:!0},n)),r.a.createElement("p",{style:{minHeight:"1.8rem"}},r.a.createElement(oe,{size:"1.5rem",weight:"200",secondary:!0},t))),a)};function Xe(){var e=Object(y.a)([""]);return Xe=function(){return e},e}var $e=h.b.div(Xe());function en(){var e=Object(y.a)(["\n  background: #fff;\n  padding: 0 1rem;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  top: 100%;\n  transition: all 0.2s ease-out;\n"]);return en=function(){return e},e}var nn=h.b.div(en());function tn(){var e=Object(y.a)(["\n  border: 1px solid grey;\n  padding: 1rem;\n  position: relative;\n  transition: all 0.2s ease-out;\n\n  ","\n"]);return tn=function(){return e},e}var an=h.b.div(tn(),(function(e){return e.hover&&"&:hover {\n      box-shadow: 0 1rem 2rem rgba(0,0,0,.2);\n      transform: translateY(-10px);\n      .overlay {\n        opacity: 0.8;\n        top: 33%;\n      }\n    }"}));an.Header=Qe,an.Body=$e,an.Overlay=nn;var rn=an;function cn(){var e=Object(y.a)(["\n  background-color: #fff;\n  border: 2px solid grey;\n  border-radius: 2rem;\n  padding: 6px 10px;\n  transition: all 0.2s ease-out;\n\n  &:hover {\n    cursor: pointer;\n    border: 2px solid lightseagreen;\n    color: lightseagreen;\n  }\n\n  &:active {\n    transform: translateY(5px);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return cn=function(){return e},e}function on(){var e=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  height: 100%;\n\n  & > button:first-child {\n    margin-bottom: 8px;\n  }\n"]);return on=function(){return e},e}function ln(){var e=Object(y.a)(["\n  display: flex;\n  align-items: center;\n"]);return ln=function(){return e},e}var un=h.b.div(ln()),sn=h.b.div(on()),mn=h.b.button(cn());mn.Group=sn,mn.Icon=un;var dn=mn;function fn(){var e=Object(y.a)(["\n  margin-bottom: 2.5rem;\n"]);return fn=function(){return e},e}var En=h.b.header(fn());var pn=function(){var e=Object(a.useContext)(g.WeatherStateContext),n=Object(R.a)(e,2),t=n[0].favorites,c=n[1],o=Object(l.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(En,null,r.a.createElement("h2",null,r.a.createElement(oe,{size:"2.5rem",weight:"600",secondary:!0},"Favorites (".concat(t.length,")")))),0===t.length?r.a.createElement(ke,{size:"6x",text:"No favorites",icon:ye.b}):r.a.createElement(Ye,{style:{minHeight:"14.25rem"}},t.map((function(e,n){var t=e.current,a=e.location;return r.a.createElement(rn,{key:n,hover:!0},r.a.createElement(rn.Header,{title:a.name,subtitle:a.region},r.a.createElement(ue,{hover:!0,color:"orange",size:"2x",icon:W.f,onIconClick:function(){return c({type:f.TOGGLE_FAVORITES,weather:e})}})),r.a.createElement(rn.Body,null,r.a.createElement("div",null,r.a.createElement(oe,{size:"5rem",secondary:!0},t.temperature,"\xb0")),r.a.createElement("p",{style:{minHeight:"3.7rem"}},r.a.createElement(oe,{size:"1.5rem",weight:"200",secondary:!0},t.weather_descriptions[0]))),r.a.createElement(rn.Overlay,{className:"overlay"},r.a.createElement(dn.Group,null,r.a.createElement(dn,{onClick:function(){return o.push("/details",{weather:e,query:a.name})}},"Learn more"))))}))))},bn=t(28);var vn=function(){var e=Object(a.useContext)(g.WeatherStateContext),n=Object(R.a)(e,2),t=n[0],c=t.cities,o=t.loadingCities,i=t.favorites,d=t.allCitiesRemoved,E=n[1],p=Object(l.f)(),b=function(){var e=Object(a.useContext)(g.WeatherStateContext),n=Object(R.a)(e,2)[1],t=Object(a.useState)(),r=Object(R.a)(t,2),c=r[0],o=r[1];return{fetchCities:Object(a.useCallback)(Object(F.a)(G.a.mark((function e(){var t,a,r,c,i,l,d,E,p,b,v,g,y;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("cities.json");case 2:t=e.sent,a=t.data,r={},c=Object(bn.a)(a);try{for(c.s();!(i=c.n()).done;)l=i.value,r[l.Name]={population:l.Population,rank:l.rank}}catch(h){c.e(h)}finally{c.f()}return d=a.reduce((function(e,n){return[].concat(Object(u.a)(e),[n.Name])}),[]).join(";"),E={access_key:"77fc5a17b4912688fe7acd4acb23d8e4",query:d},e.prev=9,n({type:f.LOADING_CITIES,loading:!0}),e.next=13,B.a.get("".concat(m,"/current"),{params:E});case 13:p=e.sent,b=p.data,v=b.sort((function(e,n){return e.location.name.localeCompare(n.location.name)})),g=v.map((function(e,n){return Object(s.a)(Object(s.a)({},e),{},{population:r[e.location.name].population,rank:r[e.location.name].rank})})),window.localStorage.setItem("storedCities",JSON.stringify(g)),n({type:f.LOADING_CITIES,loading:!1}),n({type:f.ADD_CITIES,cities:g}),e.next=28;break;case 22:e.prev=22,e.t0=e.catch(9),y=window.localStorage.getItem("storedCities"),n({type:f.LOADING_CITIES,loading:!1}),n({type:f.ADD_CITIES,cities:JSON.parse(y)}),o(e.t0);case 28:case"end":return e.stop()}}),e,null,[[9,22]])}))),[n]),errorCitiesMsg:c}}().fetchCities;return Object(a.useEffect)((function(){0!==c.length||d||b()}),[b,c,d]),r.a.createElement(r.a.Fragment,null,r.a.createElement(En,null,r.a.createElement("h2",null,r.a.createElement(oe,{size:"2.5rem",weight:"600",secondary:!0},"Top 15 cities by population (A-Z)"))),o||0===c.length?r.a.createElement(ke,{size:"6x",text:o?"Loading cities...":"No cities found",icon:o?W.e:ye.b,spin:o}):r.a.createElement(Ye,null,function(){var e=function(){var e,n={},t=Object(bn.a)(i);try{for(t.s();!(e=t.n()).done;){var a=e.value;n[a.location.name]=a.location.name}}catch(r){t.e(r)}finally{t.f()}return n}(),n=/\B(?=(\d{3})+(?!\d))/g;return c.map((function(t,a){var c=t.current,o=t.location,i=t.population,l=t.rank;return r.a.createElement(rn,{key:a,hover:!0},r.a.createElement(rn.Header,{title:o.name,subtitle:o.region},r.a.createElement(ue,{hover:!0,color:"orange",size:"2x",icon:e[o.name]?W.f:ye.d,onIconClick:function(){return E({type:f.TOGGLE_FAVORITES,weather:t})}})),r.a.createElement(rn.Body,null,r.a.createElement("div",null,r.a.createElement(oe,{size:"5rem",secondary:!0},c.temperature,"\xb0")),r.a.createElement("p",{style:{minHeight:"3.7rem"}},r.a.createElement(oe,{size:"1.5rem",weight:"200",secondary:!0},c.weather_descriptions[0]))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(oe,{weight:"600",size:"1.4rem",secondary:!0},"Rank: ",l)),r.a.createElement("div",null,r.a.createElement(oe,{weight:"600",size:"1.4rem",secondary:!0},"Population: ",i.toString().replace(n,",")))),r.a.createElement(rn.Overlay,{className:"overlay"},r.a.createElement(dn.Group,null,r.a.createElement(dn,{onClick:function(){return p.push("/details",{weather:t,query:o.name})}},r.a.createElement(oe,{size:"1.3rem",weight:"300",secondary:!0},"Learn More")),r.a.createElement(dn,{onClick:function(){E({type:f.REMOVE_CITY,cityIdx:a})}},r.a.createElement(oe,{size:"1.3rem",weight:"300",secondary:!0},"Remove")))))}))}()))};var gn=function(){return r.a.createElement(k,null,r.a.createElement(k.Panel,null,r.a.createElement("header",null,r.a.createElement("h1",{style:{textAlign:"center",marginBottom:"1.5rem"}},r.a.createElement(oe,{size:"3.5rem",primary:!0},"Weather App")),r.a.createElement(ge,null))),r.a.createElement("main",null,r.a.createElement(k.Panel,null,r.a.createElement(qe,{source:"search"})),r.a.createElement(k.Panel,null,r.a.createElement(pn,null)),r.a.createElement(k.Panel,null,r.a.createElement(vn,null))))};var yn=function(e){var n=function(e){var n=Object(a.useState)({}),t=Object(R.a)(n,2),r=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(R.a)(o,2),l=i[0],u=i[1],s=Object(a.useState)(""),d=Object(R.a)(s,2),f=d[0],E=d[1],p=Object(a.useCallback)(Object(F.a)(G.a.mark((function n(){var t,a,r,o;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={access_key:"77fc5a17b4912688fe7acd4acb23d8e4",forecast_days:7,query:e},n.prev=1,u(!0),n.next=5,B.a.get("".concat(m,"/forecast"),{params:t});case 5:a=n.sent,r=a.data,window.localStorage.setItem("storedForecast",JSON.stringify(r.forecast)),u(!1),c(r.forecast),n.next=18;break;case 12:n.prev=12,n.t0=n.catch(1),o=window.localStorage.getItem("storedForecast"),u(!1),c(JSON.parse(o)),E(n.t0);case 18:case"end":return n.stop()}}),n,null,[[1,12]])}))),[e]);return Object(a.useEffect)((function(){p(e)}),[p,e]),{fetchData:p,forecast:r,isLoadingForecoast:l,errorForecastMsg:f}}(e.cityData),t=n.forecast,c=n.isLoadingForecoast;return r.a.createElement(r.a.Fragment,null,r.a.createElement(En,null,r.a.createElement("h2",null,r.a.createElement(oe,{size:"2.5rem",weight:"600",secondary:!0},"7-day Forecast"))),0===Object.keys(t).length?r.a.createElement(ke,{size:"6x",text:c?"Loading forecast...":"No forecast",icon:c?W.e:ye.b,spin:c}):r.a.createElement(Ye,{style:{minHeight:"14.25rem"}},function(){var e=[];for(var n in t){var a=new Date(t[n].date).getDay();e.push(r.a.createElement(rn,{key:n},r.a.createElement(rn.Header,{title:d[a]}),r.a.createElement(rn.Body,{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"}},r.a.createElement("div",{style:{flex:1}},r.a.createElement(oe,{size:"5rem",secondary:!0},t[n].avgtemp,"\xb0")),r.a.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",null,r.a.createElement(oe,{size:"1.5rem",primary:!0},"max:\xa0"),r.a.createElement(oe,{size:"1.8rem",secondary:!0},t[n].maxtemp,"\xb0")),r.a.createElement("div",null,r.a.createElement(oe,{size:"1.5rem",primary:!0},"min:\xa0"),r.a.createElement(oe,{size:"1.8rem",secondary:!0},t[n].mintemp,"\xb0")))),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(ue,{icon:ye.e,size:"2x"}),r.a.createElement(oe,{size:"1.3rem",secondary:!0},t[n].astro.sunrise),r.a.createElement(ue,{icon:ye.c,size:"2x"}),r.a.createElement(oe,{size:"1.3rem",secondary:!0},t[n].astro.moonrise))))}return e}()))},hn=t(55),On=t.n(hn);var jn=function(e){var n=e.value,t=e.onChange;return r.a.createElement("textarea",{style:{resize:"none",width:"100%"},rows:"5",value:n,onChange:function(e){return t(e.target.value)}})};function xn(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return xn=function(){return e},e}var wn=Object(h.b)(En)(xn());var Sn=function(){var e=Object(a.useContext)(g.WeatherStateContext),n=Object(R.a)(e,2),t=n[0],c=t.weather,o=t.notes,i=t.loadingWeather,l=n[1],u=function(e){return e.map((function(e,n){return r.a.createElement(rn,{key:"".concat(e.name,"-").concat(n)},r.a.createElement(rn.Header,{title:e.dateCreated},r.a.createElement(ue,{hover:!0,size:"2x",icon:W.i,onIconClick:function(){return l({type:f.REMOVE_NOTE,payload:{id:e.id}})}})),r.a.createElement(rn.Body,{style:{marginBottom:"1rem",marginTop:"1rem"}},r.a.createElement(jn,{value:e.note,onChange:function(n){l({type:f.EDIT_NOTE,payload:{id:e.id,note:n}})}})),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",null,r.a.createElement(oe,{size:"1.5rem",weight:"600",secondary:!0},"Created at:"," "),r.a.createElement(oe,{size:"1.5rem",secondary:!0},e.createdAt)),e.editedAt&&r.a.createElement("div",null,r.a.createElement(oe,{size:"1.5rem",weight:"600",secondary:!0},"Edited at:"," "),r.a.createElement(oe,{size:"1.5rem",secondary:!0},e.editedAt))))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(wn,null,r.a.createElement("h2",null,r.a.createElement(oe,{size:"2.5rem",weight:"600",secondary:!0},"Notes")),r.a.createElement(ue,{onIconClick:function(){l({type:f.ADD_NOTE,payload:{name:c.location.name,id:On()("".concat(c.location.name,"_")),dateCreated:(new Date).toLocaleDateString(),createdAt:(new Date).toLocaleTimeString()}})},size:"3x",icon:W.c,hover:!0})),i?r.a.createElement(ke,{size:"6x",text:i?"Loading notes...":"Add some notes here",icon:i?W.e:ye.b,spin:i}):function(){var e=c.location,n=o.filter((function(n){return n.name===e.name}));return 0===n.length?r.a.createElement(ke,{size:"6x",text:"Add some notes here'",icon:ye.b}):r.a.createElement(Ye,null,u(n))}())};var Tn=function(e){var n=e.history.location.state.query,t=Object(l.f)(),c=M().fetchWeather;return Object(a.useEffect)((function(){n&&c(n,f.SET_WEATHER_CURRENT)}),[c,n]),r.a.createElement(k,null,r.a.createElement(k.Panel,null,r.a.createElement(dn,{onClick:function(){return t.push("/")}},r.a.createElement(dn.Icon,null,r.a.createElement(ue,{icon:W.a}),r.a.createElement(oe,{style:{marginLeft:"1rem"},size:"1.5rem",secondary:!0},"Back to home")))),r.a.createElement(k.Panel,null,r.a.createElement(qe,{source:"query"})),r.a.createElement(k.Panel,null,r.a.createElement(yn,{cityData:n})),r.a.createElement(k.Panel,null,r.a.createElement(Sn,null)))};function zn(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);return zn=function(){return e},e}var Cn=h.b.div(zn());var _n=function(){return r.a.createElement(Cn,null,r.a.createElement(oe,{size:"4rem",primary:!0},"Oopps!! 404, Page not found"))};var kn=function(){return r.a.createElement(i.a,{basename:"/dcs-weather-app/"},r.a.createElement(g.WeatherStateProvider,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:gn}),r.a.createElement(l.a,{path:"/details",component:Tn}),r.a.createElement(l.a,{path:"*",component:_n}))))};o.a.render(r.a.createElement(kn,null),document.getElementById("root"))},56:function(e,n,t){e.exports=t(106)},61:function(e,n,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.690c8a3d.chunk.js.map