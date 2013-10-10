/*jshint node: true, strict: true, globalstrict: true*/
'use strict';

/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'DecisionLoop' });
};
