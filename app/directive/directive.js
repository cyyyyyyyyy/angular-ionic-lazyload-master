/**
 * Created by chengyang on 2016/10/27.
 */
module.exports = function (app) {
    app.directive('hello',function () {
        return{
            template:'<div>hello world</div>'
        }
    })
}