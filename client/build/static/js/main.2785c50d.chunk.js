(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){e.exports=t(57)},51:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r),i=t(25),o=t(6),s=t(9);function m(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),r=t[0],c=t[1];return console.log(e),l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"search",className:"col-sm-1 col-form-label"},"Search"),l.a.createElement("input",{id:"search",name:"search",type:"text",value:r,onChange:function(e){return c(e.target.value)},className:"col-sm-4"}),l.a.createElement("div",{className:"button-div"},l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(a){return e.handleSearch(a,r)}},"Submit"))))}var u=t(7),d=t.n(u);function h(e){var a=e.description,t="No description available.";""!==a&&void 0!==a&&(t=a.substring(0,400)+"...");return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2"},l.a.createElement("img",{src:e.img,className:"card-img",alt:e.title})),l.a.createElement("div",{className:"card-body col-10"},l.a.createElement("h5",{className:"card-title"},e.title),l.a.createElement("p",{className:"card-text"},t))),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},"Author: ",e.authors),l.a.createElement("li",{className:"list-group-item"},"Published: ",e.publishedDate)),l.a.createElement("div",{className:"card-body"},l.a.createElement("button",{className:"btn btn-primary",value:e.button,onClick:function(a){return function(a){if(console.log(a.target.value),"add"===a.target.value){var t={title:e.title,authors:e.authors,description:e.description,image:e.img,link:e.link,publishedDate:e.publishedDate};d.a.post("/api/books",t).then(function(e){console.log("BOOK ADDED")})}else console.log(e._id),d.a.delete("api/books/"+e._id).then(function(e){console.log("BOOK DELETED")})}(a)}},"add"===e.button?"Add to Collection":"Delete from Collection"),l.a.createElement("a",{href:e.link,className:"card-link"},"Go to Book")))}function v(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",null,l.a.createElement(m,{handleSearch:function(e,a){if(e.preventDefault(),a)return function(e){d.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e)).then(function(e){r(e.data.items)})}(a)}}),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},t.length>0?t.map(function(e){var a=e.volumeInfo,t="img/noimgavail.jpg";return a.imageLinks&&(t=a.imageLinks.smallThumbnail),l.a.createElement(h,{key:e.id,img:t,title:a.title,description:a.description,authors:a.authors,publishedDate:a.publishedDate,link:a.previewLink,button:"add"})}):l.a.createElement("div",{key:"none"},"Enter your search in the search box to look for books."))))}function E(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],c=[];d.a.get("/api/books").then(function(e){e.data.forEach(function(e){c.push(e)}),r(c)});return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},function(){var e=[];return t.length>0?t.map(function(a){e.push(l.a.createElement(h,{key:a._id,_id:a._id,img:a.image,title:a.title,description:a.description,authors:a.authors,publishedDate:a.publishedDate,link:a.link,button:"delete"}))}):e.push(l.a.createElement("div",{key:"none"},"There are no saved books")),e}())))}function p(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Book Search"),l.a.createElement("div",{id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Search")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/list"},"My Collection")))))}t(51);var b=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/list",component:E}),l.a.createElement(o.a,{path:"*",component:v}))))};c.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.2785c50d.chunk.js.map