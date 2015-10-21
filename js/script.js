(function(){
  //creates an instance of Phaser.Game object
  // param width and height, render context,
  var game = new Phaser.Game(1280,720, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

  function preload() {
    //graphics
    game.load.image('dirt', "assets/dirt.png");
    game.load.image('bone', "assets/bones.png");
    game.load.image('mainpage', "assets/main.png");

    //sprite
    //params are pixel of width and height
    game.load.spritesheet("zombie", "assets/zombie.png", 32, 64);

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

    var player = game.add.sprite(32, game.world.height - 90, "zombie");

    //enables physics for player
    game.physics.arcade.enable(player);

    //gives player physics properties
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;





  } //create

  function update(){

  } //update


})();
