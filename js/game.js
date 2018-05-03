console.log('hello');

var Game = {};
var player;
var hole1;
var hole2;
var hole3;

Game.init = function(){
    game.stage.disableVisibilityChange = true;
};

Game.preload = function(){
    game.load.tilemap('map','assets/map/time-hole.json',null,Phaser.Tilemap.TILED_JSON );
    game.load.spritesheet('tileset','assets/map/tilesheet.png',32,32);
    game.load.image('you', 'assets/sprites/sprite.png');
    game.load.image('hole', 'assets/sprites/kenney_runepack/PNG/Blue/Slab (outline)/runeBlue_slabOutline_026.png');
    game.load.image('hole2', 'assets/sprites/kenney_runepack/PNG/Blue/Slab (outline)/runeBlue_slabOutline_027.png');
    game.load.image('hole3', 'assets/sprites/kenney_runepack/PNG/Blue/Slab (outline)/runeBlue_slabOutline_028.png');
};

Game.create = function(){
    Game.playerMap = {};
    var map = game.add.tilemap('map');
    map.addTilesetImage('tilesheet','tileset');
    var layer;
    for ( var i = 0; i < map.layers.length ; i++ )
    {
        layer = map.createLayer(i);
    }
    layer.inputEnabled = true;

    player = game.add.sprite(50, 50, 'you');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

    hole1 = game.add.sprite(200, 200, 'hole');
    hole1.name = 'hole1';
    game.physics.enable(hole1, Phaser.Physics.ARCADE);
    hole1.body.immovable = true;

    hole2 = game.add.sprite(400, 200, 'hole2');
    hole2.name = 'hole2';
    game.physics.enable(hole2, Phaser.Physics.ARCADE);
    hole2.body.immovable = true;

    hole3 = game.add.sprite(600, 200, 'hole3');
    game.physics.enable(hole3, Phaser.Physics.ARCADE);
    hole3.name = 'hole3';
    hole3.body.immovable = true;
};

Game.update = function() {

    // collide all the things
    game.physics.arcade.collide(player, hole1, Game.go_world_1, null, this);
    game.physics.arcade.collide(player, hole2, Game.go_world_2, null, this);
    game.physics.arcade.collide(player, hole3, Game.go_world_3, null, this);

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

Game.go_world_0 = function() {
    console.log('home');
    game.state.start('Game');
};

Game.go_world_1 = function() {
    console.log('wow');
    game.state.start('Hole1');
};

Game.go_world_2 = function() {
    console.log('wow2');
    game.state.start('Hole2');
};

Game.go_world_3 = function() {
    console.log('wow3');
    game.state.start('Hole3');
};

var game = new Phaser.Game(24*32,17*32,Phaser.AUTO,document.getElementById('game'));
