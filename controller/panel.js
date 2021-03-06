/**
 * Created by Administrator on 2014/6/13.
 */
+function ($) {
  'use strict';

  var Panel   = function (el,options) {
    var self = $(el);
    var _that = this;
    this.options = options;
    this.options && this.options.pageObject;
    $.ajax({url: options.href,cache: false}).success(function(data){self.html(data);var reg = new RegExp("html", "g");var strJs = options.href.replace(reg, "js");seajs.use( strJs ,function(a){ _that.options.pageObject = a; options.onload(a); });});
  }
  var old = $.fn.panel
  $.fn.panel = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data  = $this.data('nf.controller.panel');
      var options = typeof option == 'object' && option;
      options = $.extend({} , $.fn.panel.defaults , options);
      if( data && data.options.href != options.href ){
          var currHref = options.href;
          var prevHref = data.options.href;
          page.push( currHref , prevHref , $this.children()[0]);
          $this.data('nf.controller.panel', (data = new Panel(this , options)));
      }
      if (!data) $this.data('nf.controller.panel', (data = new Panel(this , options)));
      if (typeof option == 'string') data[option].call($this);
    })
  }
  $.fn.panel.defaults = {
    onload:function( e ){}
  }
  $.fn.panel.noConflict = function () {
    $.fn.panel = old
    return this
  }
}(jQuery);