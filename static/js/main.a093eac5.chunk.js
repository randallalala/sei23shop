(this.webpackJsonpsei23shop=this.webpackJsonpsei23shop||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},20:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),s=a.n(c),i=(a(19),a(20),a(13)),l=a(5),o=a(6),m=a(7),h=a(8),u=a(25),p=a(29),d=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.showPriceInformation=function(){e.setState({show:!e.state.show})},e.addItemToCart=function(t){e.props.addToCart(t.target.id)},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{md:"4",className:"mb-3"},r.a.createElement(p.a,null,r.a.createElement(p.a.Img,{variant:"top",src:this.props.item.imgurl}),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Subtitle,null,this.props.item.name),r.a.createElement("button",{onClick:this.showPriceInformation,className:"showPrice"},"show price"),r.a.createElement("button",{onClick:this.addItemToCart,id:this.props.itemId,className:"showPrice"},"Add To Cart")),this.state.show&&r.a.createElement("div",{className:"itemPrice"},this.props.item.price)))}}]),a}(n.Component),f=a(28),b=a(26),g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Cart ",this.props.items.length),r.a.createElement("button",{onClick:this.props.showCart},"show cart"))}}]),a}(n.Component),E=a(27);var w=function(e){return r.a.createElement("div",null,e.items.map((function(e,t){return r.a.createElement(b.a,{key:t},r.a.createElement(u.a,{md:"3"},r.a.createElement(E.a,{src:e.imgurl,width:50,height:50,roundedCircle:!0})),r.a.createElement(u.a,{md:"9"},e.name))})))},v=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={items:[{imgurl:"https://vn-test-11.slatic.net/p/031dbea8b772b54ebaa077c0ac5648c0.jpg",name:"Summer Youth Men's Short-sleeved Shirt Korean Style Slim Fit",price:120},{imgurl:"https://my-test-11.slatic.net/p/48977eba66358d5ab0c900fe8460a66d.jpg",name:"FAVCENT shirt",price:300},{imgurl:"https://my-test-11.slatic.net/p/37809e2652e1bed581f7bdc5348b4406.jpg",name:"LA mens Dogdes",price:110},{imgurl:"https://sg-test-11.slatic.net/p/d3146d26a38cb4a1b90c6cb940c5daaf.jpg",name:"Face Mask High Quality",price:50},{imgurl:"https://sg-test-11.slatic.net/p/f1d465126512403dc502971ed59d8e7f.jpg",name:"face protection",price:30},{imgurl:"https://my-test-11.slatic.net/p/245795d2888a0d08bf5a00af4ee60ff7.jpg",name:"jersey",price:300},{imgurl:"https://my-test-11.slatic.net/p/aa153c669ee4111c91769ef41cdbdac8.jpg",name:"crappy",price:20},{imgurl:"https://sg-test-11.slatic.net/p/mdc/862ffe45ece925628e4a1d6c52374ceb.png",name:"coffee beans",price:350}],cart:[],showCart:!1},e.addToCart=function(t){var a=Object(i.a)({},e.state);a.cart.push(a.items[t]),e.setState(a)},e.showCart=function(){e.state.cart.length&&e.setState({showCart:!e.state.showCart})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"AllItem"},r.a.createElement(g,{items:this.state.cart,showCart:this.showCart}),r.a.createElement(f.a,null,r.a.createElement("div",null,"All Items"),r.a.createElement(b.a,null,r.a.createElement(u.a,{style:{transition:"all 1s ease"},md:this.state.showCart&&this.state.cart.length?"9":"12"},r.a.createElement(b.a,null,this.state.items.map((function(t,a){return r.a.createElement(d,{addToCart:e.addToCart,item:t,itemId:a,key:a})})))),this.state.showCart&&r.a.createElement(u.a,{md:3},r.a.createElement(w,{items:this.state.cart})))))}}]),a}(n.Component);a(23);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.a093eac5.chunk.js.map