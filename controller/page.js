define(function( require , exports , module ){
    require("./panel");
    function page(){
        this.pageStack = {};
        this.objStatck = {};
        this.prevURL = "";
    }
    page.prototype.init = function ( _opt ) {
        this.pageStack = {};
        this.objStatck = {};
        this.prevURL = "";
        if ( _opt.main )
            this.$main = _opt.main;
        else
            this.$main = $("body");
    }
    page.prototype.prev = function () {
        var self = this;
        $.each( this.pageStack , function ( ) {self.prevURL = arguments[0];});
        var _m = this.pageStack[this.prevURL];
        var _mO = this.objStatck [this.prevURL];
        if ( !_m ) {
            return;
        }
        delete this.pageStack[this.prevURL];
        delete  this.objStatck [this.prevURL];
        this.$main.html(_m);
        this.$main.data(_mO);
        var a = 1;
    }
    page.prototype.go = function ( key ) {
        var def = $.Deferred();
        var _href = Mapping[key];
        if (!_href) return;
        this.$main.panel({
            href:_href,
            onload:function(){
                def.resolve(arguments[0]);
            }
        });
        return def.promise();
    }
    page.prototype.refresh = function ( ) {
        var currentPage = this.$main.data('nf.controller.panel').options.pageObject;
        currentPage = new currentPage();
        currentPage.init();
    }
    page.prototype.push = function( currHref , prevHref , val ){
        if ( this.pageStack[currHref] && this.objStatck[currHref])
            delete this.pageStack[currHref],delete this.objStatck[currHref];
        this.pageStack[prevHref] = val;
        var clone = $.extend(true,{},this.$main.data());
        this.objStatck[prevHref] = clone;
    }
    var _page = new page();
    window.page = _page;
});