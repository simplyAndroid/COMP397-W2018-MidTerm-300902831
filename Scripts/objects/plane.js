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
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        // Constructor
        function Plane(lvl) {
            var _this = _super.call(this, "plane") || this;
            _this._lvl = lvl;
            if (_this._lvl == 2) {
                _this.rotation = 90;
            }
            else if (_this._lvl == 3) {
                _this.rotation = -90;
            }
            _this.Start();
            return _this;
        }
        // private methods
        Plane.prototype._animationEnded = function () {
            if (this.alpha == 0) {
                this.alpha = 1;
                this.planeFlash.alpha = 0;
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Plane.prototype.Start = function () {
            this.planeFlash = new objects.PlaneFlash(this._lvl);
            this.planeFlash.alpha = 1;
            this.planeFlash.on("animationend", this._animationEnded.bind(this), false);
            if (this._lvl == 1) {
                this.x = 320;
                this.y = 430;
            }
            else if (this._lvl == 2) {
                this.x = 50;
                this.y = 240;
            }
            else if (this._lvl == 3) {
                this.x = -50;
                this.y = -240;
            }
        };
        // updates the game object every frame
        Plane.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Plane.prototype.Reset = function () {
        };
        // move the object to some new location
        Plane.prototype.Move = function () {
            // mouse controls
            // this.x = objects.Game.stage.mouseX;
            // keyboard controls
            if (this._lvl == 1) {
                if (managers.Game.keyboardManager.moveLeft) {
                    this.x -= 5;
                }
                if (managers.Game.keyboardManager.moveRight) {
                    this.x += 5;
                }
            }
            else if (this._lvl == 2 || this._lvl == 3) {
                if (managers.Game.keyboardManager.moveForward) {
                    this.y -= 5;
                }
                if (managers.Game.keyboardManager.moveBackward) {
                    this.y += 5;
                }
            }
            this.planeFlash.x = this.x;
            this.planeFlash.y = this.y;
        };
        // check to see if some boundary has been passed
        Plane.prototype.CheckBounds = function () {
            // right boundary
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            // left boundary
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            //upper boundary
            if (this.y >= 480 - this.halfHeight) {
                this.y = 480 - this.halfHeight;
            }
            // left boundary
            if (this.y <= this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map