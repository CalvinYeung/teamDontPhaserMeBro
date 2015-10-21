(function() {

  var game = new Phaser.Game(1280,720, Phaser.AUTO, 'game', {preload: preload, create: create});

  function preload() {
    game.load.image('mainpage', "assets/main.png");
    game.load.image('pumpkin', "/assets/pumpkin.png");
  };

  var background;

  function create() {
    background = game.add.image(0, 0, "mainpage");
    //var start = game.add.text(16, 16, 'Start Game', {fill: '#FFF'});
    //button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

    var button = game.add.button(game.world.centerX - 95, 400, 'pumpkin', actionOnClick, this, 2, 1, 0);

  };

  function actionOnClick() {
    startGame();
  }





})(); // function
