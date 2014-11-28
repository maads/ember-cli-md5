module.exports = {
  description: '',
  normalizeEntityName: function() {},
  afterInstall: function(options) {
    var that = this;
    return this.addBowerPackageToProject('blueimp-md5');
  }
};
