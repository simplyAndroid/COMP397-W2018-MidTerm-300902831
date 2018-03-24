module objects {
  export class Island extends objects.GameObject {
    // private instance variables
    private _lvl: number;

    // public properties

    // Constructor
    constructor(lvl:number) {
      super("island");
      this._lvl = lvl;
      if(this._lvl == 2) {
        this.rotation = 90;
      }else if(this._lvl == 3) {
        this.rotation = -90;
      }
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this._dy = 5;
      this._dx = 5;
      this.Reset();
    }

    // updates the game object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset():void {
      if(this._lvl == 1) {
        this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
        this.y = -this.height;
      } else if(this._lvl == 2) {
        this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
        this.x = this.width + 640;
      }
    }

    // move the object to some new location
    public Move():void {
      if(this._lvl == 1) {
        this.y += this._dy;
      } else if(this._lvl == 2) {
        this.x -= this._dx;
      }
    }

    // check to see if some boundary has been passed
    public CheckBounds():void {
      // check bounds
      if(this._lvl == 1) {
        if(this.y >= 480 + this.height) {
          this.Reset();
        }
      } else if(this._lvl == 2) {
        if(this.x <= 0 - this.width) {
          this.Reset();
        }
      }
    }
  }
}
