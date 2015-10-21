(function(){
  //creates an instance of Phaser.Game object
  // param width and height, render context,
  var game = new Phaser.Game(1000,600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

  function preload() {
    //background and assets
    game.load.image('dirt', "assets/dirt.png");
    game.load.image('bone', "assets/bone.png");
    game.load.image('mainpage', "assets/main.png");

    //sprite
    //params are pixel of width and height
    game.load.spritesheet("dude", "assets/dude1.png", 32, 48);

    //audio
    game.load.audio("sound", "assets/8bit-thriller.mp3");

  } //preload

  function create() {

    game.add.image(0,0, "dirt")
    game.add.sprite(0,500, "dude")

  } //create

  function update(){

  } //update


})();
