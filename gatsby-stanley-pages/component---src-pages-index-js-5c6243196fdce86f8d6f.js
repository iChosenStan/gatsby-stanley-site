(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return i}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),l=a("Bl7J"),s=a("vrFN");var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return r.a.createElement(l.a,{location:this.props.location,title:t},r.a.createElement(s.a,{title:"All posts"}),a.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return r.a.createElement("article",{key:t.fields.slug,className:"entry"},r.a.createElement("section",{className:"image"},r.a.createElement("img",{src:t.frontmatter.thumbnail,alt:"thumbnail"})),r.a.createElement("section",{className:"description"},r.a.createElement("h1",{className:"title"},a),r.a.createElement("p",{className:"date"},t.frontmatter.date," |",t.frontmatter.tags.map((function(e,t){return r.a.createElement("span",{key:t,className:e.style+" inline-block text-xs px-2 rounded-full lowercase font-semibold tracking-wide ml-1"},e.tag)}))),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}),r.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},r.a.createElement("button",{className:"btn_more bg-white"},"See More"))))})))},n}(r.a.Component);t.default=c;var i="3132621707"}}]);
//# sourceMappingURL=component---src-pages-index-js-5c6243196fdce86f8d6f.js.map