// Generated by IcedCoffeeScript 1.8.0-e
(function() {
  var Base, PGPUpdate, constants,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Base = require('./base').Base;

  constants = require('./constants').constants;

  exports.PGPUpdate = PGPUpdate = (function(_super) {
    __extends(PGPUpdate, _super);

    PGPUpdate.prototype._required_sections = function() {
      return PGPUpdate.__super__._required_sections.call(this).concat(['pgp_update']);
    };

    PGPUpdate.prototype._v_include_pgp_details = function() {
      return true;
    };

    PGPUpdate.prototype._v_require_pgp_details = function() {
      return true;
    };

    PGPUpdate.prototype._v_pgp_details_dest = function(body) {
      return body.pgp_update;
    };

    PGPUpdate.prototype._v_pgp_km = function() {
      return this.pgpkm;
    };

    PGPUpdate.prototype._v_customize_json = function(ret) {
      return ret.body.pgp_update = {
        kid: this.pgpkm.get_ekid().toString('hex')
      };
    };

    PGPUpdate.prototype._type = function() {
      return constants.sig_types.pgp_update;
    };

    function PGPUpdate(_arg) {
      this.pgpkm = _arg.pgpkm;
      PGPUpdate.__super__.constructor.apply(this, arguments);
    }

    return PGPUpdate;

  })(Base);

}).call(this);