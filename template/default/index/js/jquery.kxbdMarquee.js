"use strict";!function(e){e.fn.kxbdMarquee=function(t){var r=e.extend({},e.fn.kxbdMarquee.defaults,t);return this.each(function(){function t(){var e="left"==r.direction||"right"==r.direction?"scrollLeft":"scrollTop";if(r.loop>0&&(d+=r.scrollAmount)>a*r.loop)return n[e]=0,clearInterval(f);if("left"==r.direction||"up"==r.direction)(t=n[e]+r.scrollAmount)>=a&&(t-=a),n[e]=t;else{var t=n[e]-r.scrollAmount;t<=0&&(t+=a),n[e]=t}}var l=e(this),n=l.get(0),i=l.width(),o=l.height(),c=l.children(),u=c.children(),a=0,s="left"==r.direction||"right"==r.direction?1:0;if(c.css(s?"width":"height",1e4),r.isEqual?a=u[s?"outerWidth":"outerHeight"]()*u.length:u.each(function(){a+=e(this)[s?"outerWidth":"outerHeight"]()}),!(a<(s?i:o))){c.append(u.clone()).css(s?"width":"height",2*a);var d=0,f=setInterval(t,r.scrollDelay);l.hover(function(){clearInterval(f)},function(){clearInterval(f),f=setInterval(t,r.scrollDelay)})}})},e.fn.kxbdMarquee.defaults={isEqual:!0,loop:0,direction:"left",scrollAmount:1,scrollDelay:20},e.fn.kxbdMarquee.setDefaults=function(t){e.extend(e.fn.kxbdMarquee.defaults,t)}}(jQuery);
//# sourceMappingURL=jquery.kxbdMarquee.js.map
