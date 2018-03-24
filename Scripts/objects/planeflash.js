var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var PlaneFlash = /** @class */ (function (_super) {
        __extends(PlaneFlash, _super);
        // public properties
        // constructors
        function PlaneFlash(lvl) {
            var _this = _super.call(this, "planeflash") || this;
            _this._lvl = lvl;
            if (_this._lvl == 2) {
                _this.rotation = 90;
            }
            return _this;
        }
        // private methods
        // public methods
        PlaneFlash.prototype.Start = function () {
        };
        PlaneFlash.prototype.Update = function () {
        };
        return PlaneFlash;
    }(objects.GameObject));
    objects.PlaneFlash = PlaneFlash;
})(objects || (objects = {}));
//# sourceMappingURL=planeflash.js.map