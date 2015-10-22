(function(){

  var game = new Phaser.Game(1280,720, Phaser.AUTO, 'game', {preload: preload, create: create});

  function preload() {
    game.load.image('mainpage', "assets/main.png");
    game.load.image('button', "/assets/button.png");
    game.load.image('title', "assets/title.png");
  };

  var background;

  function create() {
    background = game.add.image(0, 0, "mainpage").scale.setTo(1.25,1);
    //var start = game.add.text(16, 16, 'Start Game', {fill: '#FFF'});
    game.add.image(80, 175, 'title').scale.setTo(0.5,0.5);
    var button = game.add.button(game.world.centerX - 105, 325, 'button', actionOnClick, this, 2, 1, 0);

  };

  function actionOnClick() {
    document.getElementById('game').innerHTML = ''
    startGame();
  };





  function startGame() {
      //creates an instance of Phaser.Game object
      // param width and height, render context,
      var game = new Phaser.Game(1280,720, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

      function preload() {
        //graphics
        game.load.image('dirt', "assets/dirt.png");
        game.load.image('bone', "/assets/platform.png");
        game.load.image('pumpkin', "assets/pumpkin.png");

        //sprite
        //params are pixel of width and height
        game.load.spritesheet("zombie", "assets/zombie.png", 31, 52);

        //audio
        game.load.audio("sound", "assets/8bit-thriller.mp3");

      } //preload

      // sets initial score to 0
      var score = 0;
      var scoreText;

      function create() {
        //enables arcade physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //sound play
        // var music = game.add.audio("sound")
        // music.play();

        //scrolling background
        var intro = game.add.tileSprite(0, 0, 1280, 720, 'dirt');
        intro.autoScroll(0, 25);

        //set graphics

        platforms = game.add.group();
        //enable physics on platform (gives collision to this item)
        platforms.enableBody = true;

        //creates ground, params are x-position, y-position, file
       var ground = platforms.create(0, game.world.height - 40, "bone");

       //immovable holds item in place, providing collision for ground after jumping
       ground.body.immovable = true;

       ground = platforms.create(375, game.world.height - 40, "bone");
       ground.body.immovable = true;

       ground = platforms.create(750, game.world.height - 40, "bone");
       ground.body.immovable = true;

       ground = platforms.create(1125, game.world.height - 40, "bone");
       ground.body.immovable = true;

       var ledge = platforms.create(Math.random()*320, 550, "bone");
       ledge.body.immovable = true;

       ledge = platforms.create((Math.random()*320)+600, 550, "bone");
       ledge.body.immovable = true;

       ledge = platforms.create(Math.random()*320, 425, "bone");
       ledge.body.immovable = true;

       ledge = platforms.create((Math.random()*320)+600, 425, "bone");
       ledge.body.immovable = true;

       ledge = platforms.create(Math.random()*320, 300, "bone");
       ledge.body.immovable = true;

       ledge = platforms.create((Math.random()*320)+600, 300, "bone");
       ledge.body.immovable = true;

       ledge = platforms.create(Math.random()*320, 175, "bone");
       ledge.body.immovable = true;

       ledge = platforms.create((Math.random()*320)+ 600, 175, "bone");
       ledge.body.immovable = true;


       //set player

       player = game.add.sprite(32, game.world.height - 100, "zombie");

       //enables physics for player
       game.physics.arcade.enable(player);

       //gives player physics properties
       player.body.bounce.y = .2;
        player.body.gravity.y = 600;
        player.body.collideWorldBounds = true;

        // Our animations for walking left and right
        player.animations.add('left', [0,1,2,3], 10, true)
        player.animations.add('right', [5,6,7,8], 10, true)

        //this is controls, (arrow Keys)

        //collect pumpkins
        pumpkins = game.add.group()
        pumpkins.enableBody = true;

        //number of pumpkins dropped
        for (var i = 0; i < 14; i++) {
            //params (spacing between pumpkins and y coordinate drop, file)
            var pumpkin = pumpkins.create( i * 90 , Math.random()* 500, "pumpkin")
            pumpkin.body.gravity.y = 125;
            pumpkin.body.bounce.y = 0.4 + Math.random()*0.2;
        }

        scoreText = game.add.text(16, 16, 'Score: 0', {fill: '#FFF'});

        TimerText = game.add.text(16, 38, 'Timer: 0', {fill: '#FFF'});
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
            player.body.velocity.x = -125;

            player.animations.play('left');
        } else if (cursors.right.isDown){
            player.body.velocity.x = 125;

            player.animations.play('right');
        } else {
            player.animations.stop();
            player.frame = 4;
        }

        if (cursors.up.isDown && player.body.touching.down){
            player.body.velocity.y = -425;
        }

      } //update

      function collectPumpkin(player, pumpkin){
        //removes pumpkin when player collides
        pumpkin.kill();
        score+=10;
        scoreText.text = 'Score: ' + score;
        if(score === 140){
          document.getElementById('game').innerHTML = ''
          clearTimer();
          window.onload = restart();
        }
      }

     var timer = 60

     var myInterval = setInterval(function() {
        timer --
        console.log(timer)
        TimerText.text = 'Timer ' + timer
        if (timer == 0) {
          // alert("you lose")
          // location.reload()
          clearTimer();
          document.getElementById('game').innerHTML = ''
          window.onload = gameEnd();
        }
     },1000)

     var clearTimer = function(){
       clearInterval(myInterval)
     }

     function gameEnd(){
       var game = new Phaser.Game(1280,720, Phaser.AUTO, 'game', {preload: preload, create: create});

       function preload() {
         game.load.image('mainpage', "assets/main.png");
         game.load.image('again', "/assets/again.png");
         game.load.image('over', "assets/gameover.png");
         game.load.image('lose', "assets/lose.png");
       };

       function create() {
         background = game.add.image(0, 0, "mainpage").scale.setTo(1.25,1);
         //var start = game.add.text(16, 16, 'Start Game', {fill: '#FFF'});
         game.add.image(80, 100, 'over').scale.setTo(0.5,0.5);
         game.add.image(680, 100, 'lose').scale.setTo(0.5,0.5);
         var button = game.add.button(game.world.centerX - 105, 325, 'again', actionOnClick, this, 2, 1, 0);
       };

       function actionOnClick() {
         document.getElementById('game').innerHTML = ''
         game.destroy();
         window.onload= startGame();
       }
     }

     function restart(){
       var game = new Phaser.Game(1280,720, Phaser.AUTO, 'game', {preload: preload, create: create});

       function preload() {
         game.load.image('mainpage', "assets/main.png");
         game.load.image('again', "/assets/again.png");
         game.load.image('over', "assets/gameover.png");
         game.load.image('win', "assets/win.png");
       };

       function create() {
         background = game.add.image(0, 0, "mainpage").scale.setTo(1.25,1);
         //var start = game.add.text(16, 16, 'Start Game', {fill: '#FFF'});
         game.add.image(80, 100, 'over').scale.setTo(0.5,0.5);
         game.add.image(680, 100, 'win').scale.setTo(0.5,0.5);
         var button = game.add.button(game.world.centerX - 105, 325, 'again', actionOnClick, this, 2, 1, 0);
       };

       function actionOnClick() {
         document.getElementById('game').innerHTML = ''
         game.destroy();
         window.onload= startGame();
       }
     }
  } // startGame

})();
