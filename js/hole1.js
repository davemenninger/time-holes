Hole1 = {};

var player;

Hole1.init = function() {
    game.stage.disableVisibilityChange = true;
};

Hole1.preload = function(){
    game.load.image('tree1', 'assets/sprites/kenneyrpgpack/PNG/rpgTile160.png');
    game.load.image('tree2', 'assets/sprites/kenneyrpgpack/PNG/rpgTile159.png');
    game.load.image('hole0', 'assets/sprites/kenney_runepack/PNG/Blue/Slab (outline)/runeBlue_slabOutline_025.png');
};

Hole1.create = function() {
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
        game.add.sprite(thing.x,thing.y,'tree1');
    });

    player = game.add.sprite(50, 50, 'you');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

    Game.instructions();
    Hole1.instructions();
};

Hole1.update = function() {
    game.physics.arcade.collide(player, hole0, Game.go_world_0, null, this);

    cursors = game.input.keyboard.createCursorKeys();
    key1 = game.input.keyboard.addKey(Phaser.Keyboard.T);

    key1.onDown.add( Hole1.addTree, this);

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
        foo: 'tree',
        x: player.x,
        y: player.y,
        sprite: game.add.sprite(player.x,player.y,'tree1'),
    });
};

Hole1.instructions = function() {
    text = game.add.text(game.world.centerX, 60, 'press T to plant a tree');

    //    Center align
    text.anchor.set(0.5);
    text.align = 'center';

    //    Font style
    text.font = 'Arial Black';
    text.fontSize = 20;
    text.fontWeight = 'bold';

    //    Stroke color and thickness
    text.stroke = '#000000';
    text.strokeThickness = 4;
    text.fill = '#bbaaff';
};
