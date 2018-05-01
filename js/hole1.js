Hole1 = {};

Hole1.init = function() {
    game.stage.disableVisibilityChange = true;
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
