module scenes {
  export class PlayScene extends objects.Scene {
    // Private Instance Variables
    private _ocean: objects.Ocean;
    private _plane: objects.Plane;
    private _island: objects.Island;
    private _cloud: objects.Cloud;
    
    private _scoreBoard: managers.ScoreBoard;

    private _engineSound: createjs.AbstractSoundInstance;
    private _coin: objects.Coin;

    // Public Properties

    // Constructor
    constructor() {
      super();

      this.Start();
    }

    // Private Mathods



    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      this._ocean = new objects.Ocean(1);
      this._plane = new objects.Plane(1);
      managers.Game.plane = this._plane;

      this._coin = new objects.Coin(1);
      this._island = new objects.Island(1);

      // instantiate the cloud array
      this._cloud = new objects.Cloud(1);

      this._engineSound = createjs.Sound.play("engine");
      this._engineSound.loop = -1; // play forever
      this._engineSound.volume = 0.3;

      // create the scoreboard UI for the Scene
      this._scoreBoard = new managers.ScoreBoard();
      managers.Game.scoreBoard = this._scoreBoard;

      this.Main();
    }

    // triggered every frame
    public Update(): void {
      this._ocean.Update();
      this._plane.Update();

      this._coin.x = this._island.x;
      this._coin.y = this._island.y;
      this._coin.Update();

      this._island.Update();

      // check collision between plane and coin
      managers.Collision.Check(this._plane, this._coin);

      
      this._cloud.Update();
        // check collision between plane and current cloud
      managers.Collision.Check(this._plane, this._cloud);

      // if lives fall below zero switch scenes to the game over scene
      if(this._scoreBoard.Lives <= 0) {
        this._engineSound.stop();
        managers.Game.currentScene = config.Scene.OVER;
      }

      if(this._scoreBoard.Score == 100) {
        this._engineSound.stop();
        managers.Game.currentScene = config.Scene.LEVEL2;
      }

    }

    // This is where the fun happens
    public Main(): void {
      // add the ocean to the scene
      this.addChild(this._ocean);

      // add the island to the scene
      this.addChild(this._island);

      // add the coin to the scene
      this.addChild(this._coin);

      // add the plane to the scene
      this.addChild(this._plane);
      this.addChild(this._plane.planeFlash); // add the plane flashing effect

      // add clouds to the scene

      this.addChild(this._cloud);

      // add scoreboard labels to the scene
      this.addChild(this._scoreBoard.LivesLabel);
      this.addChild(this._scoreBoard.ScoreLabel);
    }
  }
}
