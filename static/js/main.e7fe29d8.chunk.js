(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),l=(n(13),n(14),n(1)),c=n(2),s=n(4),u=n(3),h=n(5),p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showHideFlag:!1,events:[{id:"267887413",name:"Lower Manhattan and Brooklyn Night Photography Workshop",yes_rsvp_count:1}]},n.detailsClicked=function(){!1===n.state.showHideFlag?n.setState({showHideFlag:!0,events:[{id:"267887413",name:"Lower Manhattan and Brooklyn Night Photography Workshop",yes_rsvp_count:1,group:{name:"Philadelphia Travel Photography",urlname:"Philadelphia-Travel-Photography",who:"Photographers",localized_location:"Philadelphia, PA"},link:"https://www.meetup.com/Philadelphia-Travel-Photography/events/267887413/",description:"<p>Join for a fun afternoon and evening photography workshop.</p>",visibility:"public"}]}):n.setState({showHideFlag:!1,events:[{id:"267887413",name:"Lower Manhattan and Brooklyn Night Photography Workshop",yes_rsvp_count:1}]})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Event"},r.a.createElement("ul",{className:"events"},this.state.events.map((function(e){return r.a.createElement("li",{key:e.id},e.name)})),r.a.createElement("button",{className:"details",onClick:function(){return e.detailsClicked()}},"Details")))}}]),t}(a.Component),m=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={events:[]},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.state.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p,{event:e}))})))}}]),t}(a.Component),d=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"Munich",suggestions:[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t})},n.handleItemClicked=function(e){n.setState({query:e})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string)}},t.name_string)}))))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={displayCount:32},n.handleInputChanged=function(e){var t=e.target.value;n.setState({displayCount:t})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},r.a.createElement("input",{type:"text",className:"number",value:this.state.displayCount,onChange:this.handleInputChanged},this.displayCount))}}]),t}(a.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(m,null),r.a.createElement(p,null),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e7fe29d8.chunk.js.map