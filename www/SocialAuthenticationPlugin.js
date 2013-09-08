var exec = require('cordova/exec');

var SocialAuthenticationPlugin = function (){};

SocialAuthenticationPlugin.prototype.isTwitterAvailable = function(callback) {
  cordova.exec(callback, null, 'Authentication', 'isTwitterAvailable', []);
};

SocialAuthenticationPlugin.prototype.returnTwitterAccounts = function(callback) {
  cordova.exec(callback, null, 'Authentication', 'returnTwitterAccounts', []);
};

SocialAuthenticationPlugin.prototype.performTwitterReverseAuthentication = function(success, error, username) {
  options = {};
  options.username = username;
  cordova.exec(success, error, 'Authentication', 'performTwitterReverseAuthentication', [username]);
};

module.exports = new SocialAuthenticationPlugin();
