/**
 * Created by Administrator on 2014/6/13.
 */
define(function( require , exports , module ){
    function main(){}
    main.prototype.init = function () {
        setTimeout(function(){ alert(1); page.go("./web-info/html/editor.html") } , 2000);
    }
    module.exports = main;
});