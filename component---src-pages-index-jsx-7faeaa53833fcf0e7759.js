/*! For license information please see component---src-pages-index-jsx-7faeaa53833fcf0e7759.js.LICENSE.txt */
(self.webpackChunkwalker_finlay_github_io=self.webpackChunkwalker_finlay_github_io||[]).push([[230],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=l.apply(null,n);o&&e.push(o)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},6101:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),l=n(1721),a=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))||this).handleClick=function(){var e={left:0,top:"bottom"===t.props.to?document.body.scrollHeight:0,behavior:"smooth"};window.scrollTo(e)},t}return(0,l.Z)(t,e),t.prototype.render=function(){return r.createElement("div",{className:"delim-wrapper"},r.createElement("div",{className:"delim",onClick:this.handleClick,onKeyDown:this.handleClick,role:"button",tabIndex:"0",title:"bottom"===this.props.to?"To bottom":"To top"},r.createElement("img",{src:this.props.src,alt:this.props.alt})))},t}(r.Component),o=a,i=function(e){var t=e.children;return r.createElement("div",{className:"delimited-content"},r.createElement(o,{src:"/code.svg",alt:"code",to:"bottom"}),t,r.createElement(o,{src:"/code-slash.svg",alt:"code-slash",to:"top"}))}},6815:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),l=n(5444),a=n(5900),o=function(e){var t=a({"post-card":!0,"post-card-dimmed":e.frontmatter.wip});return r.createElement("div",{className:t,onClick:e.frontmatter.wip?null:function(){(0,l.navigate)(e.frontmatter.slug)},onKeyDown:e.frontmatter.wip?null:function(){(0,l.navigate)(e.frontmatter.slug)},role:"button",tabIndex:"0"},r.createElement("div",{className:"post-card-image"}),r.createElement("div",{className:"post-card-text"},r.createElement("div",{className:"post-card-top-bar"},r.createElement("h4",{className:"post-card-title"},e.frontmatter.title),r.createElement("h4",{className:"post-card-date"},e.frontmatter.date)),r.createElement("p",{className:"post-card-teaser"},e.frontmatter.teaser)))},i=n(6101),c=function(){var e=(0,l.useStaticQuery)("1162376073");return r.createElement("div",{className:"post-index"},r.createElement(i.Z,null,r.createElement("ul",{className:"post-index-list"},e.allMdx.edges.map((function(e,t){return r.createElement("li",{key:t},r.createElement(o,{frontmatter:e.node.frontmatter}))})))))},s=function(){return r.createElement("div",null,r.createElement("h3",null,"Welcome!"),r.createElement("p",null,"If you're reading this you are probably a recruiter. If so, please look around, and see my links in the footer."),r.createElement("hr",null),r.createElement(c,null),r.createElement("h3",null,"Upcoming posts"),r.createElement("ul",null,r.createElement("li",null,"Robotics Discussion"),r.createElement("li",null,"Walker's Stochastic Dimensionality Reduction"),r.createElement("li",null,"Public Microservices Discussion"),r.createElement("li",null,"Tile Game")))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-7faeaa53833fcf0e7759.js.map