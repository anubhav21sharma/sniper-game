

import Phaser from 'phaser';

export default class Paddle extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'paddle');
    this.scale.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this);
    this.anchor.setTo(0.5, 0.5);
    this.body.immovable = true;
  }

  update() {
    this.x = this.game.input.x;
    if (this.x < this.width / 2) {
      this.x = this.width / 2
    } else if (this.x > this.game.width - this.width / 2) {
      this.x = this.game.width - this.width / 2;
    }
  }
}
