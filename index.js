/**
 * Created by Administrator on 2014/6/17.
 */
define(function(require , exports , module){
    require("page");
    require("mapping");
    require("bootstrap");
    function engine(){}
    engine.prototype.init = function(){
        page.init({
            "main":$(".wapper")
        });
    }
    engine.prototype.start = function (){
        $("footer>.container>.row").delegate("div","click", function( ev ){
            var _val = ev.currentTarget.dataset.src;
            if ( "prve" == _val ) {
                page.prev();
            } else if ( "refresh" == _val ) {
                page.refresh();
            } else {
                page.go( _val );
            }
            ev.stopPropagation();
        });
    }
    module.exports = new engine();
});