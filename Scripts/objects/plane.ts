module objects {
  export class Plane extends objects.GameObject {
    // private instance variables
    private _lvl:number;

    // public properties
    public planeFlash: objects.PlaneFlash;

    // Constructor
    constructor(lvl:number) {
      super("plane");
      this._lvl = lvl;
      if(this._lvl == 2) {
        this.rotation = 90;
      }else if (this._lvl == 3) {
        this.rotation = -90;
      }
      this.Start();
    }

    // private methods
    private _animationEnded():void {
      if(this.alpha == 0) {
        this.alpha = 1;
        this.planeFlash.alpha = 0;
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this.planeFlash = new objects.PlaneFlash(this._lvl);
      this.planeFlash.alpha = 1;
      this.planeFlash.on("animationend", this._animationEnded.bind(this), false );

      if(this._lvl == 1) {
        this.x = 320;
        this.y = 430;
      } else if(this._lvl == 2) {
        this.x = 50;
        this.y = 240;
      }
      else if(this._lvl == 3) {
        this.x = -50;
        this.y = -240;
      }
    }

    // updates the game object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset():void {

    }

    // move the object to some new location
    public Move():void {
     // mouse controls
     // this.x = objects.Game.stage.mouseX;

     // keyboard controls
     if(this._lvl == 1) {
      if(managers.Game.keyboardManager.moveLeft) {
        this.x -= 5;
      }
 
      if(managers.Game.keyboardManager.moveRight) {
        this.x += 5;
      }
    } else if(this._lvl == 2 || this._lvl == 3) {
      if(managers.Game.keyboardManager.moveForward) {
        this.y -= 5;
      }
 
      if(managers.Game.keyboardManager.moveBackward) {
        this.y += 5;
      }
    }
     

     this.planeFlash.x = this.x;
     this.planeFlash.y = this.y;

    }

    // check to see if some boundary has been passed
    public CheckBounds():void {
      // right boundary
      if(this.x >= 640 - this.halfWidth) {
        this.x = 640 - this.halfWidth;
      }

      // left boundary
      if(this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }
      //upper boundary
      if(this.y >= 480 - this.halfHeight) {
        this.y = 480 - this.halfHeight;
      }

      // left boundary
      if(this.y <= this.halfHeight) {
        this.y = this.halfHeight;
      }
    }
  }
}
