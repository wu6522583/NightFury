define(function( require , exports , module ){
    require("./panel");
    function page(){
        this.stack = {};
        this.prevURL = "";
    }
    page.prototype.init = function ( _opt ) {
        this.stack = {};
        this.prevURL = "";
        if ( _opt.main )
            this.$main = _opt.main;
        else
            this.$main = $("body");
    }
    page.prototype.prev = function () {
        var self = this;
        $.each( this.stack , function ( ) {self.prevURL = arguments[0];});
        var _m = this.stack[this.prevURL];
        delete this.stack[this.prevURL];
        this.$main.html(_m);
    }
    page.prototype.go = function ( url ) {
        var self = this;
        this.$main.panel({
            href:url,
            onload:function( a ){
                var a = new a();
                a.init();
            }
        });
    }
    page.prototype.refresh = function ( ) {
        var currentPage = this.$main.data('nf.controller.panel').options.pageObject;
        currentPage = new currentPage();
        currentPage.init();
    }
    page.prototype.push = function( currHref , prevHref , val ){
        if ( this.stack[currHref] )
            delete this.stack[currHref];
        this.stack[prevHref] = val;
    }
    var _page = new page();
    window.page = _page;
});