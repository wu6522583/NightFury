/**
 * Created by Administrator on 2014/6/13.
 */
define(function( require , exports , module ){
    function main(){}
    main.prototype.init = function () {
        alert(111);
    }
    module.exports = new main().init();
});