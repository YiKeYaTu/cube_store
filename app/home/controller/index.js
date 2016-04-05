'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self){
    //auto render template file index_index.html
    this.assign('script', 'index');
    return self.display('index');
  },
  detailAction: function (self) {
    this.assign('script', 'detail');
  	return self.display('index');
  }
});