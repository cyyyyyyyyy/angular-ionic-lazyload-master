/**
 * Created by chengyang on 2016/10/27.
 */
var directive = require('./directive/directive');
var service = require('./service/service');
var router = require('./router');
var app = angular.module('app',['ionic']);
directive(app);
service(app);
router(app);