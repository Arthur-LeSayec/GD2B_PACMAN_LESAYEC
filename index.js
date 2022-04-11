var player;
var cursors;
var position_x = 16;
var position_y = 16;
var keyZ;
var keyQ;
var keyS;
var keyD;
let gridSize = 32;
let map;
let layer1;
let layer2;
let tiles = "pacman-tiles";



class pacman extends Phaser.Scene{
    constructor(){
        super("pacman");
    }
    init(data){}

preload ()
{
    this.load.image('player', 'assets/pacmansprites.png');
    this.load.image('tiles', 'assets/background.png');
    this.load.tilemapTiledJSON('map', 'assets/codepen-level.json');
    
}

create ()
{
    player = this.physics.add.sprite(100,110,'player').setScale(0.85); 

    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);



    map = this.make.tilemap({ key: "map", tileWidth: gridSize, tileHeight: gridSize });
    const tileset = map.addTilesetImage('pacman-tiles','tiles');
    
    layer1 = map.createStaticLayer("Layer 1", tileset, 0, 0);
    layer1.setCollisionByProperty({ collides: true});

    layer2 = map.createStaticLayer("Layer 2", tileset, 0, 0);
    layer2.setCollisionByProperty({ collides: true});

    this.physics.add.collider(player, layer1);
    this.physics.add.collider(player, layer2);



    cursors= this.input.keyboard.createCursorKeys();
}


update (){
     if (keyD.isUp || keyQ.isUp || keyZ.isUp || keyS.isUp){
        player.setVelocityX(0);
        player.setVelocityY(0);
        player.setRotation(0);
    }
     if(keyD.isDown){
    player.setVelocityX(200);
        player.direction = 'right';
}
else if(keyZ.isDown){
    player.setVelocityY(-200);
    player.direction = 'up';
}
else if(keyS.isDown){
    player.setVelocityY(200);
    player.direction = 'down';
}
else if(keyQ.isDown){
    player.setVelocityX(-200);
    player.direction = 'left';
}

    

}


}