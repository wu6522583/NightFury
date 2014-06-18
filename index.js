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
        $("footer>.container>.row").delegate("div","click",function( ev ){
            if ( !ev.currentTarget.dataset.src ) {
                page.prev();
            } else {
                var href = _htmlSrc + ev.currentTarget.dataset.src + ".html"
                page.go( href );
            }
            ev.stopPropagation();
        });
    }
    module.exports = new engine();
});