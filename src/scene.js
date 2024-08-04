class PacmanTileScene extends Phaser.Scene {

    cellSize = 32;
    currCell = { x: 1, y: 1 };
    pacRadius = 30;

    preload() {
        this.load.setBaseURL('https://labs.phaser.io');
        this.load.image('tiles', 'https://labs.phaser.io/assets/tilemaps/tiles/drawtiles-spaced.png');
        this.load.image('car', 'https://labs.phaser.io/assets/sprites/car90.png');
        this.load.tilemapCSV('map', 'https://labs.phaser.io/assets/tilemaps/csv/grid.csv');
        this.load.image('red', 'assets/particles/red.png');
    }

    create() {
        const map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });
        const tileset = map.addTilesetImage('tiles', null, 32, 32, 1, 2);
        const layer = map.createLayer(0, tileset, 0, 0);

        const player = this.add.image(32 + 16, 32 + 16, 'car');

        this.pacman = this.createPacman(this.currCell, this.cellSize / 2 - 2);


    }

    createPacman(cell, radius) {

        const pg = this.add.graphics();
        const pp = this.physics.add.existing(pg);
        // pg.body.velocity.x = 100;
        // pg.body.velocity.y = 200;
        pg.body.allowGravity = false;
        pg.body.bounce.x = 1;
        pg.body.bounce.y = 1;
        pg.body.collideWorldBounds = true;
        this.tweens.addCounter({
            from: 0,
            to: 30,
            duration: 200,
            yoyo: true,
            repeat: -1,
            onUpdate: function (tween)
            {
                const x = (cell.x * radius * 2) + ((cell.x - 1) * 4) + radius + 4;
                const y = (cell.y * radius * 2) + ((cell.y - 1) * 4) + radius + 4;
                const t = tween.getValue();
                pg.clear();
                pg.fillStyle(0xffff00, 1);
                pg.slice(x, y, radius, Phaser.Math.DegToRad(330 + t), Phaser.Math.DegToRad(30 - t), true);
                pg.fillPath();
                pg.fillStyle(0x000000, 1);
                pg.fillEllipse(radius + radius / 3, radius / 3,  radius / 3,  radius / 3);
            }
        });
        return pg;
    }

    createDot() {
        // graphics.fillStyle(0xffffff, 1);
        // graphics.fillCircle(580, 300, 30);
        // graphics.fillCircle(740, 300, 30);
    }
}

module.exports = new PacmanTileScene();