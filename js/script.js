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
    game.load.spritesheet("dude", "assets/dude1.png", 32, 48);

    //audio
    game.load.audio("sound", "assets/8bit-thriller.mp3");

  } //preload

  function create() {
    //enables arcade physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //sound play
    // var music = game.add.audio("sound")
    // music.play();

    game.add.image(0,0, "dirt");
    game.add.image(0,0, "bone");
    game.add.sprite(0,500, "dude");

    platforms = game.add.group();
    //enable physics on platform (gives collision to this item)
    platforms.enableBody = true;
    



  } //create

  function update(){

  } //update


})();
