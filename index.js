/**
 * Created by Administrator on 2014/6/17.
 */
define(function(require , exports , module){
    require("panel");
    require("bootstrap");
    function engine(){}
    engine.prototype.start = function (){
        $("#body").panel({
            href:"./web-info/html/main.html"
        });
    }
    module.exports = new engine();
});
