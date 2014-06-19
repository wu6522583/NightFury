/**
 * Created by Administrator on 2014/6/17.
 */
define(function(require , exports , module){
    require("page");
    require("bootstrap");
    var _htmlSrc = "./web-info/html/";
    function engine(){}
    engine.prototype.init = function(){
        page.init({
            "main":$("#body")
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
                var href = _htmlSrc + _val + ".html"
                page.go( href );
            }
            ev.stopPropagation();
        });
    }
    module.exports = new engine();
});