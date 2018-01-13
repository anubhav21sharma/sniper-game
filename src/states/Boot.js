import Phaser from 'phaser'
import WebFont from 'webfontloader'

import globals from '../states/globals'

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#000'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  create() {
    this.initGlobals();
  }

  initGlobals() {
    this.game.globals = { ...globals };
  }

  preload() {
    // WebFont.load({
    //   google: {
    //     families: ['Bangers']
    //   },
    //   active: this.fontsLoaded
    // })

    this.fontsReady = true;
    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')

    this.load.image('scope', './assets/images/scope.png')

  }

  render() {
    if (this.fontsReady) {
      this.state.start('Splash')
    }
  }

  fontsLoaded() {
    this.fontsReady = true
  }
}
