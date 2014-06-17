/**
 * Created by Administrator on 2014/6/13.
 */
define(function( require , exports , module ){
    function main(){}
    main.prototype.init = function () {
        alert("这里是main.js");
    }
    module.exports = new main().init();
});