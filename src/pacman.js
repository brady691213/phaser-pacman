function createPacman(scene, cell, cellSize) {

    const pg = scene.add.graphics();
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

function pacmanPhysics() {
    // const pp = this.physics.add.existing(pg);
    // pg.body.velocity.x = 100;
    // pg.body.velocity.y = 200;
    // pg.body.allowGravity = false;
    // pg.body.bounce.x = 1;
    // pg.body.bounce.y = 1;
    // pg.body.collideWorldBounds = true;
}

module.exports = createPacman;