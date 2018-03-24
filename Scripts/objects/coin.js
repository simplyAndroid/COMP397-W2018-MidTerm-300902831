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
    var Coin = /** @class */ (function (_super) {
        __extends(Coin, _super);
        // public properties
        // constructors
        function Coin(lvl) {
            var _this = _super.call(this, "coin") || this;
            _this._lvl = lvl;
            if (_this._lvl == 2) {
                _this.rotation = 90;
            }
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Coin.prototype.Start = function () {
        };
        Coin.prototype.Update = function () {
            this.CheckBounds();
        };
        Coin.prototype.CheckBounds = function () {
            if (this._lvl == 1) {
                if (this.y > (480 + this.height)) {
                    this.alpha = 1;
                }
            }
            else if (this._lvl == 2) {
                if (this.x < (-this.width)) {
                    this.alpha = 1;
                }
            }
        };
        return Coin;
    }(objects.GameObject));
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map