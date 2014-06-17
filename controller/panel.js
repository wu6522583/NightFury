/**
 * Created by Administrator on 2014/6/13.
 */
+function ($) {
  'use strict';

  var Panel   = function (el,options) {
    var self = $(el);
    $.ajax({url: options.href,cache: false}).success(function(data){self.append(data);options.onload(data);var reg = new RegExp("html", "g");var strJs = options.href.replace(reg, "js");seajs.use( strJs );});
  }

  var old = $.fn.panel

  $.fn.panel = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('nf.controller.panel')
      var options = typeof option == 'object' && option;
      options = $.extend({} , $.fn.panel.defaults , options);
      if (!data) $this.data('nf.controller.panel', (data = new Panel(this , options)))
      if (typeof option == 'string') data[option].call($this)
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