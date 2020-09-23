(this["webpackJsonpdcs-weather-app"]=this["webpackJsonpdcs-weather-app"]||[]).push([[0],{202:function(e,n,t){},238:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(86),i=t.n(c),o=t(87),l=t.n(o),u=(t(202),t(93)),s=t(5),f=t(44),m=t(18),d="FETCH_WEATHER",p="TOGGLE_FAVORITES",v={weather:{},favorites:[]},b=function(e,n){switch(n.type){case d:return Object(m.a)(Object(m.a)({},e),{},{weather:n.weather});case p:var t=n.weather.location.name,a=e.favorites.findIndex((function(e){return e.location.name===t}));return-1===a?Object(m.a)(Object(m.a)({},e),{},{favorites:[].concat(Object(f.a)(e.favorites),[n.weather])}):Object(m.a)(Object(m.a)({},e),{},{favorites:[].concat(Object(f.a)(e.favorites.slice(0,a)),Object(f.a)(e.favorites.slice(a+1)))});default:return e}},g=Object(a.createContext)(),h={WeatherStateContext:g,WeatherStateProvider:function(e){var n=e.children;return r.a.createElement(g.Provider,{value:Object(a.useReducer)(b,v)},n)}},E=t(6),y=t(1),O=t(2),j=t(88),w=t.n(j),x=t(89),k=t.n(x),C=t(19),_=t(16),z=t(20),S=t.n(z),T=t(39),W=t(40),I=t.n(W);function R(){var e=Object(y.a)(["\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n\n  > span {\n    font-family: Raleway;\n    font-size: 1.5rem;\n    font-weight: 600;\n    text-decoration: underline;\n  }\n"]);return R=function(){return e},e}function F(){var e=Object(y.a)(["\n  background-color: transparent;\n  border: none;\n  margin-left: -3.5rem;\n  z-index: 10;\n  transition: all 0.2s ease-in-out;\n\n  &:active {\n    transform: translateY(5px);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return F=function(){return e},e}function H(){var e=Object(y.a)(["\n  & {\n    display: flex;\n\n    & .react-autosuggest {\n\n      &__container {\n        flex: 1;\n        position: relative;\n      }\n\n      &__input {\n        border: 2px solid var(--color-lightgrey);\n        font-family: 'Fredoka One', cursive;\n        font-size: 2.5rem;\n        letter-spacing: 2px;\n        padding: 1rem 4rem 1rem 1rem;\n        outline: none;\n        transition: all 0.2s ease-in-out;\n        width: 100%;\n\n        &::placeholder {\n          color: var(--color-lightgrey);\n        }\n\n        &:focus {\n          border: 2px solid var(--color-lightslategrey);\n\n          &::placeholder {\n            color: var(--color-lightslategrey);\n          }\n        }\n\n        &--open {\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        }\n      }\n\n      &__suggestions {\n        &-container {\n          display: none;\n        }\n\n        &-container--open {\n          display: block;\n          position: absolute;\n          top: 6rem;\n          width: 100%;\n          border: 2px solid var(--color-lightslategrey);\n          background-color: #fff;\n          font-family: Raleway;\n          font-weight: 400;\n          font-size: 1.6rem;\n          z-index: 10;\n        }\n\n        &-list {\n          margin: 0;\n          padding: 0;\n          list-style-type: none;\n        }\n      }\n\n      &__suggestion {\n        cursor: pointer;\n        padding: 1rem 2rem;\n\n        &--highlighted {\n          background-color: var(--color-lightslategrey);\n        }\n      }\n    }\n  }\n"]);return H=function(){return e},e}var P=O.a.div(H()),M=O.a.button(F()),N=O.a.button(R());var q=function(){var e=Object(a.useContext)(h.WeatherStateContext),n=Object(E.a)(e,2)[1],t=Object(a.useState)(""),c=Object(E.a)(t,2),i=c[0],o=c[1],l=function(){var e=Object(a.useState)({}),n=Object(E.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(!1),i=Object(E.a)(c,2),o=i[0],l=i[1],u=Object(a.useState)({}),s=Object(E.a)(u,2),f=s[0],m=s[1];return{weather:t,isFetchingCurrent:o,fetchCurrent:Object(a.useCallback)(function(){var e=Object(T.a)(S.a.mark((function e(n){var t,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={access_key:"77fc5a17b4912688fe7acd4acb23d8e4",query:n},e.prev=1,l(!0),e.next=5,I.a.get("".concat("https://api.weatherstack.com","/current"),{params:t});case 5:a=e.sent,(c=a.data).error?m(c.error.info):r(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),m(e.t0);case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(n){return e.apply(this,arguments)}}(),[]),errorMessage:f}}(),u=l.weather,s=l.isFetchingCurrent,f=l.fetchCurrent,m=function(){var e=Object(a.useState)([]),n=Object(E.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(!1),i=Object(E.a)(c,2),o=i[0],l=i[1],u=Object(a.useState)({}),s=Object(E.a)(u,2),f=s[0],m=s[1],d=Object(a.useCallback)(function(){var e=Object(T.a)(S.a.mark((function e(n){var t,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={access_key:"77fc5a17b4912688fe7acd4acb23d8e4",query:n},e.prev=1,l(!0),e.next=5,I.a.get("".concat("https://api.weatherstack.com","/autocomplete"),{params:t});case 5:a=e.sent,(c=a.data).error?m(c.error.info):r(c.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),m(e.t0);case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{results:t,setResults:r,isLookingUp:o,lookup:d,errorLookupMsg:f}}(),p=m.results,v=m.isLookingUp,b=m.lookup,g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(a.useState)(),t=Object(E.a)(n,2),r=t[0],c=t[1],i=Object(a.useState)(),o=Object(E.a)(i,2),l=o[0],u=o[1],s=function(e){var n=e.coords,t=n.latitude,a=n.longitude;c("".concat(t,",").concat(a))},f=function(e){u(e)},m=Object(a.useCallback)((function(){var n=navigator.geolocation;n?n.getCurrentPosition(s,f,e):u("Geolocation is not supported.")}),[e]);return{position:r,getPosition:m,error:l}}(),y=g.position,O=g.getPosition,j=Object(a.useMemo)((function(){return w()(b,400)}),[b]);return Object(a.useEffect)((function(){n({type:d,weather:u})}),[u,n]),Object(a.useEffect)((function(){y&&f(y)}),[f,y]),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=e.target[0].value;""!==n&&f(n)}},r.a.createElement(P,null,r.a.createElement(k.a,{focusInputOnSuggestionClick:!1,inputProps:{placeholder:"Enter a city names",onChange:function(e,n){var t=n.newValue;o(t)},value:i},suggestions:p,onSuggestionsFetchRequested:function(e){var n=e.reason,t=e.value;"input-changed"===n?j(t):j.cancel()},onSuggestionsClearRequested:function(){},onSuggestionSelected:function(e,n){var t=n.suggestionValue;"click"===e.type&&f(t)},getSuggestionValue:function(e){return"".concat(e.name,", ").concat(e.region,", ").concat(e.country)},renderSuggestion:function(e){return r.a.createElement("span",null,"".concat(e.name,", ").concat(e.region,", ").concat(e.country))}}),r.a.createElement(M,null,r.a.createElement(C.a,{size:"2x",icon:v||s?_.b:_.a,spin:v||s})))),r.a.createElement("div",{style:{marginTop:"1rem",textAlign:"center"}},r.a.createElement(N,{onClick:function(){return O()}},r.a.createElement("span",null,"Or use my location"))))},L=t(41);function D(){var e=Object(y.a)(["\n  font-family: Raleway;\n  font-size: 2.5rem;\n  margin: 1.5rem 0;\n"]);return D=function(){return e},e}function V(){var e=Object(y.a)(["\n  font-size: 4rem;\n  margin: 1.5rem 0;\n"]);return V=function(){return e},e}function A(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return A=function(){return e},e}var G=O.a.div(A()),B=O.a.h2(V()),J=O.a.h4(D());var U=function(e){var n=e.primaryText,t=e.secondaryText,a=e.extra;return r.a.createElement("div",{style:{flexBasis:"100%"}},r.a.createElement(G,null,r.a.createElement(B,null,n),a),r.a.createElement(J,null,t))};function Y(){var e=Object(y.a)(["\n  align-self: center;\n"]);return Y=function(){return e},e}var K=O.a.span(Y());function Q(e){var n=e.onIconClick,t=e.icon;return r.a.createElement(K,{onClick:n},r.a.createElement(C.a,{icon:t,size:"2x"}))}Q.defaultProps={onIconClick:function(){}};var X=Q;function Z(){var e=Object(y.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  @media screen and (min-width: 769px) {\n    flex-basis: 50%;\n  }\n\n  @media screen and (max-width: 768px) {\n    flex-basis: 100%;\n  }\n"]);return Z=function(){return e},e}var $=O.a.div(Z());function ee(){var e=Object(y.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return ee=function(){return e},e}var ne=O.a.div(ee());ne.MediaHeader=U,ne.MediaHeaderIcon=X,ne.MediaContent=$;var te=ne;function ae(){var e=Object(y.a)(["\n  width: 85%;\n\n  & .header {\n    &__title {\n      font-family: 'Fredoka One', sans-serif;\n      font-size: 2rem;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      width: 100%;\n    }\n\n    &__subTitle {\n      font-family: Raleway, sans-serif;\n      font-size: 1.2rem;\n    }\n  }\n"]);return ae=function(){return e},e}var re=O.a.div(ae());var ce=function(e){var n=e.title,t=e.subTitle;return r.a.createElement(re,{className:"header"},r.a.createElement("h2",{className:"header__title"},n),r.a.createElement("p",{className:"header__subTitle"},t))};var ie=function(e){var n=e.children,t=e.onIconClick;return r.a.createElement("span",{className:"header__icon",style:{cursor:"pointer"},onClick:t},n)};function oe(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return oe=function(){return e},e}var le=O.a.div(oe());le.HeaderTitle=ce,le.HeaderIcon=ie;var ue=le;function se(){var e=Object(y.a)(["\n  align-self: center;\n\n  & > img {\n    border-radius: 10rem;\n    ",";\n  }\n"]);return se=function(){return e},e}var fe=O.a.span(se(),(function(e){return e.size&&"height: ".concat(e.size,"; width: ").concat(e.size,";")}));var me=function(e){return r.a.createElement(fe,{size:e.size},r.a.createElement("img",{alt:"weather icon",src:e.icon}))};function de(){var e=Object(y.a)(["\n  &&& {\n    color: ",";\n  }\n"]);return de=function(){return e},e}var pe=Object(O.a)(C.a)(de(),(function(e){return"fas"===e.icon.prefix?"orange":"lightslategrey"}));function ve(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 1rem;\n\n  & .details__temp {\n    font-family: Raleway;\n    font-size: 3rem;\n  }\n"]);return ve=function(){return e},e}function be(){var e=Object(y.a)(["\n  border: 1px solid;\n  border-radius: 1rem;\n  max-width: 20rem;\n  padding: 1rem;\n"]);return be=function(){return e},e}var ge=ue.HeaderTitle,he=ue.HeaderIcon,Ee=O.a.div(be()),ye=O.a.div(ve());var Oe=function(e){var n=e.name,t=e.icon,a=e.temp,c=e.isFavorite,i=e.onCardClick;return r.a.createElement(Ee,null,r.a.createElement(ue,null,r.a.createElement(ge,{title:n}),r.a.createElement(he,{onIconClick:i},r.a.createElement(pe,{icon:c?_.c:L.a,size:"2x"}))),r.a.createElement(ye,null,r.a.createElement(me,{icon:t,size:"4rem"}),r.a.createElement("span",{className:"details__temp"},a," \u2103")))};function je(){var e=Object(y.a)(["\n  font-family: Raleway, sans-serif;\n  font-size: 2.5rem;\n  font-weight: 400;\n  margin: 0;\n  max-width: 40rem;\n"]);return je=function(){return e},e}function we(){var e=Object(y.a)(["\n  font-family: Raleway, sans-serif;\n  font-size: 10rem;\n  margin: 0;\n"]);return we=function(){return e},e}var xe=O.a.h3(we()),ke=O.a.h4(je());var Ce=function(e){return r.a.createElement("div",{style:{alignSelf:"center"}},r.a.createElement(xe,null,e.temperature," \u2103"),r.a.createElement(ke,null,e.description))};function _e(){var e=Object(y.a)(["\n  display: inline-block;\n  flex-basis: 33.33%;\n  text-align: center;\n\n  & > div {\n    font-size: 4rem;\n  }\n\n  & > h5 {\n    font-family: Raleway, sans-serif;\n    font-size: 2.2rem;\n    font-weight: 400;\n    margin: 1rem 0;\n    text-align: center;\n  }\n"]);return _e=function(){return e},e}var ze=O.a.div(_e());var Se=function(e){return r.a.createElement(ze,null,r.a.createElement("div",null,e.value),r.a.createElement("h5",null,e.description))};function Te(){var e=Object(y.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  @media screen and (min-width: 769px) {\n    flex-basis: 50%;\n  }\n\n  @media screen and (max-width: 768px) {\n    flex-basis: 100%;\n  }\n"]);return Te=function(){return e},e}var We=O.a.div(Te());We.WeatherIcon=me,We.WeatherTemp=Ce,We.WeatherTile=Se,We.WeatherCard=Oe;var Ie=We;function Re(){var e=Object(y.a)(["\n  .header__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .header__subTitle {\n    font-size: 2.5rem;\n  }\n"]);return Re=function(){return e},e}var Fe=te.MediaContent,He=Ie.WeatherIcon,Pe=Ie.WeatherTemp,Me=Ie.WeatherTile,Ne=ue.HeaderTitle,qe=ue.HeaderIcon,Le=O.a.div(Re());var De=function(){var e=Object(a.useContext)(h.WeatherStateContext),n=Object(E.a)(e,2),t=n[0],c=t.weather,i=t.favorites,o=n[1],l=c.current,u=c.location;return 0===Object.keys(c).length?null:r.a.createElement(Le,null,r.a.createElement(ue,null,r.a.createElement(Ne,{title:"".concat(u.name,", ").concat(u.country),subTitle:new Date(1e3*u.localtime_epoch).toDateString()}),r.a.createElement(qe,{onIconClick:function(){return o({type:p,weather:c})}},r.a.createElement(pe,{icon:-1!==i.findIndex((function(e){return e.location.name===u.name}))?_.c:L.a,size:"3x"}))),r.a.createElement(te,null,r.a.createElement(Fe,{style:{justifyContent:"space-evenly"}},r.a.createElement(He,{icon:l.weather_icons[0],size:"12rem"}),r.a.createElement(Pe,{temperature:l.temperature,description:l.weather_descriptions[0]})),r.a.createElement(Ie,null,r.a.createElement(Me,{value:"".concat(l.wind_speed," km/h"),description:"Wind Speed"}),r.a.createElement(Me,{value:"".concat(l.wind_dir),description:"Wind Direction"}),r.a.createElement(Me,{value:"".concat(l.pressure," mb"),description:"Pressure"}),r.a.createElement(Me,{value:"".concat(l.humidity," %"),description:"Humidity"}),r.a.createElement(Me,{value:"".concat(l.cloudcover," %"),description:"Cloud Cover"}),r.a.createElement(Me,{value:"".concat(l.feelslike," ","\xb0","C"),description:"Feels like"}))))};function Ve(){var e=Object(y.a)(["\n  display: grid;\n  grid-column-gap: 2rem;\n  grid-row-gap: 2rem;\n  grid-template-columns: repeat(8, 1fr);\n"]);return Ve=function(){return e},e}function Ae(){var e=Object(y.a)(["\n  h2 {\n    font-size: 3.5rem;\n    margin: 1rem 0;\n  }\n"]);return Ae=function(){return e},e}var Ge=Ie.WeatherCard,Be=O.a.div(Ae()),Je=O.a.div(Ve());var Ue=function(){var e=Object(a.useContext)(h.WeatherStateContext),n=Object(E.a)(e,2),t=n[0].favorites,c=n[1];return 0===t.length?null:r.a.createElement(Be,null,r.a.createElement("h2",null,"Favorites (".concat(t.length,")")),r.a.createElement(Je,null,t.map((function(e,n){var t=e.current,a=e.location;return r.a.createElement(Ge,{key:n,name:a.name,region:a.region,icon:t.weather_icons[0],temp:t.temperature,isFavorite:!0,onCardClick:function(){return c({type:p,weather:e})}})}))))};function Ye(){var e=Object(y.a)(["\n  display: grid;\n  grid-column-gap: 2rem;\n  grid-row-gap: 2rem;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: repeat(auto, 10rem);\n"]);return Ye=function(){return e},e}function Ke(){var e=Object(y.a)(["\n  h2 {\n    font-size: 3.5rem;\n    margin: 1rem 0;\n  }\n"]);return Ke=function(){return e},e}var Qe=O.a.div(Ke()),Xe=O.a.div(Ye());var Ze=function(){return r.a.createElement(Qe,null,r.a.createElement("h2",null,"Top 15 cities by population"),r.a.createElement(Xe,null))};var $e=function(){return r.a.createElement("div",{style:{padding:"100px 150px"}},r.a.createElement("div",{style:{margin:"0 auto",width:"600px"}},r.a.createElement(q,{placeholder:"Enter a city name"})),r.a.createElement("section",null,r.a.createElement(De,null)),r.a.createElement("section",null,r.a.createElement(Ue,null)),r.a.createElement("section",null,r.a.createElement(Ze,null)))};var en=function(){return r.a.createElement(u.a,{basename:window.location.pathname||""},r.a.createElement(h.WeatherStateProvider,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:$e}),r.a.createElement(s.a,{exact:!0,path:"/details",component:De}))))};l()(r.a,{onlyLogs:!0,titleColor:"green",diffNameColor:"darkturquoise"}),i.a.render(r.a.createElement(en,null),document.getElementById("root"))},94:function(e,n,t){e.exports=t(238)}},[[94,1,2]]]);
//# sourceMappingURL=main.1f35df69.chunk.js.map