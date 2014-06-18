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
        $.each( this.stack , function ( k , K ) {
            self.prevURL = k;
        });
        var _m = this.stack[this.prevURL];
        delete this.stack[this.prevURL];
        this.$main.html(_m);
        var a = 1;
    }
    page.prototype.go = function ( url ) {
        this.$main.panel({href:url});
    }
    page.prototype.push = function( key ,value ){
        if ( this.stack[key] ) delete this.stack[key];
        this.stack[key] = value;
        var a = 1;
    }
    var _page = new page();
    window.page = _page;
});