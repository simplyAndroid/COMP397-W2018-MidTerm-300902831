module objects {
  export class Coin extends objects.GameObject {
    // private instance variables
    private _lvl: number;
    // public properties

    // constructors
    constructor(lvl:number) {
      super("coin");
      this._lvl = lvl;
      if(this._lvl == 2) {
        this.rotation = 90;
      }
      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {

    }

    public Update(): void {
      this.CheckBounds();
    }

    public CheckBounds():void {
      if(this._lvl == 1) {
        if(this.y > (480 + this.height)) {
          this.alpha = 1;
        }
      } else if(this._lvl == 2) {
        if(this.x < (-this.width)) {
          this.alpha = 1;
        }
      }
    }
  }
}
