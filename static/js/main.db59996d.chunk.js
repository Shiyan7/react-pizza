(this["webpackJsonpreact-pizza"]=this["webpackJsonpreact-pizza"]||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var i,r,s,n=c(0),a=c(13),l=c.n(a),o=c(11),j=c(3),d=c(19),u=c(1),b=function(e){var t=e.btn,c=e.onClick,i=e.filterProducts===t.label;return Object(u.jsx)("button",{className:i?"btn-reset filters__btn filters__btn--active":"btn-reset filters__btn",onClick:function(){return c(t.label)},children:t.name})},h=function(e){var t=e.onToggle,c=e.filterProducts;return Object(u.jsx)("ul",{className:"filters list-reset",children:[{label:"all",name:"\u0412\u0441\u0435",outline:!0,id:1},{label:"meat",name:"\u041c\u044f\u0441\u043d\u044b\u0435",outline:!1,id:2},{label:"vegetarian",name:"\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f",outline:!1,id:3},{label:"grill",name:"\u0413\u0440\u0438\u043b\u044c",outline:!1,id:4},{label:"sharp",name:"\u041e\u0441\u0442\u0440\u044b\u0435",outline:!1,id:5},{label:"closed",name:"\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435",outline:!1,id:6}].map((function(e){return Object(u.jsx)("li",{className:"filters__item",children:Object(u.jsx)(b,{btn:e,filterProducts:c,onClick:t},e.id)},e.id)}))})},p=c.p+"static/media/logo.453db7bd.svg",m=function(e){var t=e.value,c=e.quantity;return Object(u.jsxs)(o.b,{className:"nav-link cart",to:"/cart",children:[Object(u.jsxs)("span",{className:"cart__value",children:[t," \u20bd"]}),Object(u.jsx)("div",{className:"cart__icon",children:Object(u.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(u.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(u.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}),Object(u.jsx)("span",{className:"cart__quantity",children:c})]})},x=function(e){var t=e.value,c=e.quantity;return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsxs)(o.b,{className:"nav-link logo",to:"/",exact:!0,children:[Object(u.jsx)("img",{className:"logo__image",src:p,alt:"React Pizza"}),Object(u.jsxs)("h1",{className:"logo__text",children:[Object(u.jsx)("span",{className:"logo__title",children:"REACT PIZZA"}),Object(u.jsx)("span",{className:"logo__desc",children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]}),Object(u.jsx)(m,{value:t,quantity:c})]})},O=function(e){var t=e.prod,c=t.title,i=t.price,r=Object(n.useState)(0),s=Object(d.a)(r,2),a=s[0],l=s[1];return Object(u.jsxs)("article",{className:"product",children:[Object(u.jsx)("img",{className:"product__image",src:"images/product-1.jpg",alt:""}),Object(u.jsx)("h3",{className:"product__title",children:c}),Object(u.jsxs)("div",{className:"product-switcher",children:[Object(u.jsx)("ul",{className:"product-switcher__list list-reset",children:["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"].map((function(e,t){return Object(u.jsx)("li",{className:"product-switcher__item",children:e},t)}))}),Object(u.jsx)("ul",{className:"product-switcher__list list-reset",children:[26,30,40].map((function(e,t){return Object(u.jsxs)("li",{className:"product-switcher__item",children:[e," \u0441\u043c."]},t)}))})]}),Object(u.jsxs)("div",{className:"product__bottom",children:[Object(u.jsxs)("span",{className:"product__price",children:["\u043e\u0442 ",i," \u20bd"]}),Object(u.jsxs)("button",{className:"btn-reset btn product__buy",onClick:function(){l(a+1)},children:[Object(u.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"inherit",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"inherit"})}),"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",a>0&&Object(u.jsx)("i",{className:"btn__count",children:a})]})]})]})},f=function(e){var t=e.productsData,c=t.map((function(e){return Object(u.jsx)("li",{className:"product__item",children:Object(u.jsx)(O,{prod:e},e.id)},e.id)}));return t.length?Object(u.jsx)("ul",{className:"products__list list-reset",children:c}):Object(u.jsx)("h2",{className:"error-404",children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e!"})},g=c(26),_=c(20),v=c(31),N=c(21),C=function(){var e=N.a.div(i||(i=Object(_.a)(["\n        position: relative;\n    "]))),t=N.a.div(r||(r=Object(_.a)(["\n        display: flex;\n        align-items: center;\n    "]))),c=N.a.h2(s||(s=Object(_.a)(["\n        margin-right: 8px;\n        font-size: 14px;\n        line-height: 17px;\n        font-weight: 700;\n    "]))),n={option:function(e,t){return Object(g.a)(Object(g.a)({},e),{},{backgroundColor:t.isSelected?"rgba(254, 95, 30, 0.05);":"#fff",color:t.isSelected?"#fe5f1e":"#000",fontWeight:t.isSelected?700:400})},control:function(){return{}}},a=[{value:"popular",label:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438"},{value:"price",label:"\u043f\u043e \u0446\u0435\u043d\u0435"},{value:"alphabet",label:"\u043f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"}];return Object(u.jsx)(e,{children:Object(u.jsxs)(t,{children:[Object(u.jsx)(c,{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(u.jsx)(v.a,{options:a,styles:n,defaultValue:a[0],classNamePrefix:"react-select",isSearchable:!1})]})})},w=function(){var e=Object(n.useState)("all"),t=Object(d.a)(e,2),c=t[0],i=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x,{value:0,quantity:0}),Object(u.jsxs)("div",{className:"toolbar",children:[Object(u.jsx)(h,{onToggle:function(e){i(e)},filterProducts:c}),Object(u.jsx)(C,{})]}),Object(u.jsxs)("section",{className:"products",children:[Object(u.jsx)("h2",{className:"g-title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(u.jsx)(f,{productsData:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(t){default:return e;case"meat":return e.filter((function(e){return e.meat}));case"vegetarian":return e.filter((function(e){return e.vegetarian}));case"grill":return e.filter((function(e){return e.grill}));case"sharp":return e.filter((function(e){return e.sharp}));case"closed":return e.filter((function(e){return e.closed}))}}([{title:"\u0427\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440-\u043f\u0438\u0446\u0446\u0430",price:395,id:1,sharp:!0},{title:"\u0421\u044b\u0440\u043d\u0430\u044f",price:450,id:2,grill:!0},{title:"\u041a\u0440\u0435\u0432\u0435\u0442\u043a\u0438 \u043f\u043e-\u0430\u0437\u0438\u0430\u0442\u0441\u043a\u0438",price:290,id:3,meat:!0},{title:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a",price:385,id:4,closed:!0},{title:"\u0427\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440-\u043f\u0438\u0446\u0446\u0430",price:395,id:5,meat:!0},{title:"\u0421\u044b\u0440\u043d\u0430\u044f",price:450,imgUrl:"product-2.jpg",id:6,grill:!0},{title:"\u041a\u0440\u0435\u0432\u0435\u0442\u043a\u0438 \u043f\u043e-\u0430\u0437\u0438\u0430\u0442\u0441\u043a\u0438",price:290,imgUrl:"product-3.jpg",id:7,closed:!0},{title:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a",price:385,id:8,closed:!0}],c)})]})]})},k=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x,{value:0,quantity:0}),Object(u.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f"}),Object(u.jsx)("p",{children:"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443. \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."})]})},y=c(32),z=function(){return Object(u.jsx)(o.a,{basename:"/react-pizza",children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(y.a,{}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/",exact:!0,component:w}),Object(u.jsx)(j.a,{path:"/cart",component:k})]})]})})};c(60);l.a.render(Object(u.jsx)(z,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.db59996d.chunk.js.map