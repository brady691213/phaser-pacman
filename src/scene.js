
class PacmanTileScene extends Phaser.Scene {

    cellSize = 32;
    currCell = { x: 1, y: 1  };
    pacRadius = 30;

    preload() {
        this.load.setBaseURL('https://labs.phaser.io');
        this.load.image('tiles', 'https://labs.phaser.io/assets/tilemaps/tiles/drawtiles-spaced.png');
        this.load.image('car', 'https://labs.phaser.io/assets/sprites/car90.png');
        this.load.tilemapCSV('map', 'https://labs.phaser.io/assets/tilemaps/csv/grid.csv');
        this.load.image('red', 'assets/particles/red.png');
    }

    create() {
        const map = this.make.tilemap({ key: 'map', tileWidth: this.cellSize, tileHeight: this.cellSize });
        const tileset = map.addTilesetImage('tiles', null, this.cellSize, this.cellSize, 1, 2);
        const layer = map.createLayer(0, tileset, 0, 0);

        // Makeppac
        this.pacman = this.createPacman(this.currCell, this.cellSize);
    }

    createPacman(cell, cellSize) {

        const pg = this.add.graphics();
        this.tweens.addCounter({
            from: 0,
            to: 30,
            duration: 200,
            yoyo: true,
            repeat: -1,
            onUpdate: function (tween)
            {
                const x = cell.x * cellSize + (cellSize / 2);
                const y = cell.y * cellSize + (cellSize / 2);
                const t = tween.getValue();
                pg.clear();
                pg.fillStyle(0xffff00, 1);
                pg.slice(x, y, radius, Phaser.Math.DegToRad(330 + t), Phaser.Math.DegToRad(30 - t), true);
                pg.fillPath();
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