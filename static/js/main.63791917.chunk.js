(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=(a(13),a(14),a(1)),l=a(2),s=a(4),u=a(3),h=a(5),d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showHideFlag:!1,events:[{created:1578946208e3,duration:252e5,id:"267887413",name:"Lower Manhattan and Brooklyn Night Photography Workshop",date_in_series_pattern:!1,status:"upcoming",time:15830928e5,local_date:"2020-03-01",local_time:"15:00",updated:1578946208e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:1}]},a.detailsClicked=function(){!1===a.state.showHideFlag?a.setState({showHideFlag:!0,events:[{created:1578946208e3,duration:252e5,id:"267887413",name:"Lower Manhattan and Brooklyn Night Photography Workshop",date_in_series_pattern:!1,status:"upcoming",time:15830928e5,local_date:"2020-03-01",local_time:"15:00",updated:1578946208e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:1,group:{created:1414085495e3,name:"Philadelphia Travel Photography",id:17816862,join_mode:"open",lat:39.959999084472656,lon:-75.1500015258789,urlname:"Philadelphia-Travel-Photography",who:"Photographers",localized_location:"Philadelphia, PA",state:"PA",country:"us",region:"en_US",timezone:"US/Eastern"},link:"https://www.meetup.com/Philadelphia-Travel-Photography/events/267887413/",description:"<p>Join for a fun afternoon and evening photography workshop.</p>",visibility:"public",member_pay_fee:!1}]}):a.setState({showHideFlag:!1,events:[{created:1578946208e3,duration:252e5,id:"267887413",name:"Lower Manhattan and Brooklyn Night Photography Workshop",date_in_series_pattern:!1,status:"upcoming",time:15830928e5,local_date:"2020-03-01",local_time:"15:00",updated:1578946208e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:1}]})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Event"},r.a.createElement("ul",{className:"events"},this.state.events.map((function(e){return r.a.createElement("li",{key:e.id},e.name)})),r.a.createElement("button",{className:"details",onClick:function(){return e.detailsClicked()}},"Details")))}}]),t}(n.Component),m=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={events:[]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.state.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(d,{event:e}))})))}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"Munich",suggestions:[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]},a.handleInputChanged=function(e){var t=e.target.value;a.setState({query:t})},a.handleItemClicked=function(e){a.setState({query:e})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string)}},t.name_string)}))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={displayCount:32},a.handleInputChanged=function(e){var t=e.target.value;a.setState({displayCount:t})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},r.a.createElement("input",{type:"text",className:"number",value:this.state.displayCount,onChange:this.handleInputChanged},this.displayCount))}}]),t}(n.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(m,null),r.a.createElement(d,null),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.63791917.chunk.js.map