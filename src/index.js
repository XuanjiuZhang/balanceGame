import Vue from 'vue'
import App from './App'

const app = new Vue(App)
app.$mount('#root')

var config = {
  type: Phaser.CANVAS,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  pixelArt: true,
  backgroundColor: '#ffffff',
  scene: {
    create,
    preload,
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.spritesheet('equal', 'assets/img/equal.png', { frameWidth: 128 });
}

function create ()
{
  var dudeData = [
      '.......3.....',
      '......333....',
      '....5343335..',
      '...332333333.',
      '..33333333333',
      '..37773337773',
      '..38587778583',
      '..38588888583',
      '..37888888873',
      '...333333333.',
      '.F....5556...',
      '3E34.6757.6..',
      '.E.55.666.5..',
      '......777.5..',
      '.....6..7....',
      '.....7..7....'
  ];

  this.textures.generate('dude', { data: dudeData, pixelWidth: 4, pixelHeight: 4 });

  //  Add a bunch of images that all use the same texture
  const balls = []
  for (var i = 0; i < 12; i++)
  {
    const addedImage = launch.bind(this, i)();
    balls.push(addedImage)
  }

  var equal = this.add.image(400, 500, 'equal');

  this.tweens.add({
    targets: balls[6],
    x: 300,
    y: 420,
    duration: 1000,
    ease: 'Power2',
    delay: 500,
  });

  this.tweens.add({
    targets: balls[3],
    x: 450,
    y: 350,
    duration: 1000,
    ease: 'Power2',
    delay: 500,
  });

  this.tweens.add({
    targets: balls[balls.length - 1],
    x: 450,
    y: 420,
    duration: 1000,
    ease: 'Power2',
    delay: 500,
  });
}

function launch (i)
{
  var image = this.add.image(48 + i * 64, 32, 'dude');
  return image
}