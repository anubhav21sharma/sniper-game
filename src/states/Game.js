import Phaser from 'phaser';
import Scope from '../sprites/Scope';

export default class extends Phaser.State {
  constructor() {
    super();
  }

  init() {
  }

  preload() {
  }

  create() {
    this.background = this.game.add.graphics(0, 0);
    this.background.beginFill(0x921397);
    this.background.drawRect(0, 0, this.game.width, this.game.height);
    this.background.endFill();

    this.redBox = this.game.add.graphics(0, 0);
    this.redBox.beginFill(0xFF0000);
    this.redBox.drawRect(400, 250, 20, 50);
    this.redBox.endFill();

    this.greenBox = this.game.add.graphics(0, 0);
    this.greenBox.beginFill(0x00FF00);
    this.greenBox.drawRect(300, 250, 20, 50);
    this.greenBox.endFill();

    this.scope = new Scope(this.game);

    this.background.mask = this.scope.mask;
    this.redBox.mask = this.scope.mask;
    this.greenBox.mask = this.scope.mask;
  }

  update() {
    this.scope.setPosition(this.input.x, this.input.y);
  }

  render() {
  }
}
