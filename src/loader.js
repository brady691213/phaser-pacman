const scene = require('./scene.js');

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: 'rgba(100,0,0,0)',
    scene: scene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    }
};
const game = new Phaser.Game(config);