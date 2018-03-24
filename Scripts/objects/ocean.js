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
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        // public properties
        // Constructor
        function Ocean(lvl) {
            var _this = _super.call(this, managers.Game.assetManager.getResult("ocean")) || this;
            _this._lvl = lvl;
            if (_this._lvl == 2 || _this._lvl == 3) {
                _this.rotation = 90;
            }
            _this.Start();
            return _this;
        }
        // private methods
        // reset the objects location to some value
        Ocean.prototype._reset = function () {
            if (this._lvl == 1) {
                this.y = -960;
            }
            else if (this._lvl == 2) {
                this.x = 1420;
            }
        };
        // move the object to some new location
        Ocean.prototype._move = function () {
            if (this._lvl == 1) {
                this.y += this._dy;
            }
            else if (this._lvl == 2) {
                this.x -= this._dx;
            }
            else if (this._lvl == 3) {
                this.x += this._dx;
            }
        };
        // check to see if some boundary has been passed
        Ocean.prototype._checkBounds = function () {
            if (this._lvl == 1) {
                if (this.y >= 0) {
                    this._reset();
                }
            }
            else if (this._lvl == 2) {
                if (this.x <= 640) {
                    this._reset();
                }
            }
            else if (this._lvl == 3) {
                if (this.x <= -640) {
                    this._reset();
                }
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Ocean.prototype.Start = function () {
            this._dx = 5;
            this._dy = 5;
            this._reset();
        };
        // updates the game object every frame
        Ocean.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Ocean;
    }(createjs.Bitmap));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map