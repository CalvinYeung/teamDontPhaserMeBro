(function(){
  //creates an instance of Phaser.Game object
  // param width and height, render context,
  var game = new Phaser.Game(1280,720, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

  function preload() {
    //graphics
    game.load.image('dirt', "assets/dirt.png");
    game.load.image('bone', "assets/bones.png");
    game.load.image('mainpage', "assets/main.png");
    game.load.image('pumpkin', "assets/pumpkin.png");

    //sprite
    //params are pixel of width and height
    game.load.spritesheet("zombie", "assets/zombie.png", 31, 52);

    //audio
    game.load.audio("sound", "assets/8bit-thriller.mp3");

  } //preload

  function create() {
    //enables arcade physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //sound play
    // var music = game.add.audio("sound")
    // music.play();

    game.add.image(0, 0, "dirt");

    //set graphics

    platforms = game.add.group();
    //enable physics on platform (gives collision to this item)
    platforms.enableBody = true;

    //creates ground, params are x-position, y-position, file
    var ground = platforms.create(0, game.world.height - 40, "bone");

    //scales item (x, y)
    ground.scale.setTo(2, 2);

    //immovable holds item in place, providing collision for ground after jumping
    ground.body.immovable = true;

    var ledge = platforms.create(500, 500, "bone");
    ledge.body.immovable = true;

    ledge = platforms.create(300, 300, "bone");
    ledge.body.immovable = true;

    //set player

    player = game.add.sprite(32, game.world.height - 100, "zombie");

    //enables physics for player
    game.physics.arcade.enable(player);

    //gives player physics properties
    player.body.bounce.y = .2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    // Our animations for walking left and right
    player.animations.add('left', [0,1,2,3], 10, true)
    player.animations.add('right', [5,6,7,8], 10, true)

    //this is controls, (arrow Keys)
    
    //collect pumpkins
    pumpkins = game.add.group()
    pumpkins.enableBody = true;
    for (var i = 0; i < 12; i++) {
        var pumpkin = pumpkins.create(i*70,0, "pumpkin")
        pumpkin.body.gravity.y = 125;
        pumpkin.body.bounce.y = 0.4 + Math.random()*0.2;

    }

  } //create

  function update(){
    cursors = game.input.keyboard.createCursorKeys()
    //player will land on the platforms
    game.physics.arcade.collide(player, platforms);
    //pumpkins will land on the platforms
    game.physics.arcade.collide(pumpkins, platforms);
    //check to see if player and pumpkin overlap
    game.physics.arcade.overlap(player, pumpkins, collectPumpkin, null, this);

    player.body.velocity.x = 0;
    //this is the movements for the sprite
    if (cursors.left.isDown){
        player.body.velocity.x = -100;

        player.animations.play('left');
    } else if (cursors.right.isDown){
        player.body.velocity.x = 100;

        player.animations.play('right');
    } else {
        player.animations.stop();
        player.frame = 4;
    }

    if (cursors.up.isDown && player.body.touching.down){
        player.body.velocity.y = -300;
    }

  } //update

  function collectPumpkin(player, pumpkin){
    //removes pumpkin when player collides
    pumpkin.kill()
  }

})();
