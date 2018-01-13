import Phaser from 'phaser';

class ScopeSprite extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'scope');
    this.scale.setTo(0.7, 0.7);
    this.anchor.setTo(0.5, 0.5);
  }

  update() { }
}

export default class Scope {
  constructor(game) {
    const crosshair = new ScopeSprite(game, 0, 0);

    const mask = game.add.graphics(0, 0);
    mask.beginFill(0xFF33AA);
    mask.drawCircle(0, 0, crosshair.width);
    mask.endFill();

    this.mask = mask;
    this.crosshair = crosshair;
    this.width = mask.width;
    this.height = mask.height;

    game.add.existing(this.crosshair);
  }

  setPosition(x, y) {
    this.mask.x = x;
    this.mask.y = y;
    this.crosshair.x = x;
    this.crosshair.y = y;
  }
};
