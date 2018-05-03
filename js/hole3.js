Hole3 = {};

var player;

Hole3.init = function() {
    game.stage.disableVisibilityChange = true;
};

Hole3.preload = function(){
    game.load.image('tree3', 'assets/sprites/kenneyrpgpack/PNG/smalltree.png');
    game.load.image('hole0', 'assets/sprites/kenney_runepack/PNG/Blue/Slab (outline)/runeBlue_slabOutline_025.png');
};

Hole3.create = function() {
    var map = game.add.tilemap('map');
    map.addTilesetImage('tilesheet', 'tileset');
    var layer;
    for (var i = 0; i < map.layers.length; i++) {
        layer = map.createLayer(i);
    }
    layer.inputEnabled = true;

    hole0 = game.add.sprite(200, 200, 'hole0');
    hole0.name = 'hole0';
    game.physics.enable(hole0, Phaser.Physics.ARCADE);
    hole0.body.immovable = true;

    things.forEach(function(thing){
        game.add.sprite(thing.x,thing.y,'tree3');
    });

    player = game.add.sprite(50, 50, 'you');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
};

Hole3.update = function() {
    game.physics.arcade.collide(player, hole0, Game.go_world_0, null, this);

    cursors = game.input.keyboard.createCursorKeys();

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
