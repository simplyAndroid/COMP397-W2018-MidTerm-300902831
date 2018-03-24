module objects {
  export class Cloud extends objects.GameObject {
    // private instance variables
    private _lvl: number;
    // public properties

    // Constructor
    constructor(lvl: number) {
      super("cloud");
      this._lvl = lvl;
      if (this._lvl == 2) {
        this.rotation = 90;
      }else if (this._lvl == 3) {
        this.rotation = -90;
      }
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start(): void {
      this.Reset();
    }

    // updates the game object every frame
    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset(): void {
      if (this._lvl == 1) {
        this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
        this.y = -this.height;
        this._dx = Math.floor((Math.random() * 4) - 2);
        this._dy = Math.floor((Math.random() * 5) + 5);
      } else if (this._lvl == 2) {
        this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
        this.x = this.height + 640;
        this._dy = Math.floor((Math.random() * 4) - 2);
        this._dx = Math.floor((Math.random() * 5) + 5);
      }
      else if (this._lvl == 3) {
        this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
        this.x = this.height + 640;
        this._dy = Math.floor((Math.random() * 4) - 2);
        this._dx = Math.floor((Math.random() * 5) + 5);
      }
    }

    // move the object to some new location
    public Move(): void {
      if(this._lvl == 1) {
        this.y += this._dy;
        this.x += this._dx;
      } else if(this._lvl == 2) {
        this.y += this._dy;
        this.x -= this._dx;
      }
      else if(this._lvl == 3) {
        this.y -= this._dy;
        this.x += this._dx;
      }
    }

    // check to see if some boundary has been passed
    public CheckBounds(): void {
      // check  bounds
      if(this._lvl == 1) {
        if (this.y >= 480 + this.height) {
          this.Reset();
        }
      } else if(this._lvl == 2) {
        if (this.x <= (-this.width)) {
          this.Reset();
        }
      }
    }
  }
}
