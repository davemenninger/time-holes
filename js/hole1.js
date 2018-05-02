Hole1 = {};

var player;

Hole1.init = function() {
    game.stage.disableVisibilityChange = true;
};

Hole1.preload = function(){
    game.load.image('tree1', 'assets/sprites/kenneyrpgpack/PNG/rpgTile160.png');
    game.load.image('tree2', 'assets/sprites/kenneyrpgpack/PNG/rpgTile159.png');
};

Hole1.create = function() {
    var map = game.add.tilemap('map');
    map.addTilesetImage('tilesheet', 'tileset');
    var layer;
    for (var i = 0; i < map.layers.length; i++) {
        layer = map.createLayer(i);
    }
    layer.inputEnabled = true;

    player = game.add.sprite(50, 50, 'you');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
};

Hole1.update = function() {
    cursors = game.input.keyboard.createCursorKeys();
    key1 = game.input.keyboard.addKey(Phaser.Keyboard.T);

    if(key1.isDown)
    {
        console.log('derp');
        Hole1.addTree(player.x,player.y);
    }

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.left.isDown) {
        player.body.velocity.x = -150;
    } else if (cursors.right.isDown) {
        player.body.velocity.x = 150;
    } else if (cursors.up.isDown) {
        player.body.velocity.y = -150;
    } else if (cursors.down.isDown) {
        player.body.velocity.y = 150;
    } else {
        //  Stand still
        player.animations.stop();
    }
};

Hole1.addTree = function(x, y) {
    things.push({
        one: game.add.sprite(x, y, 'tree1'),
        two: game.add.sprite(x, y, 'tree2'),
        three: 'placeholder'
    });
};
