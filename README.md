# teamDontPhaserMeBro
Mini group project creating a game using Phaser

By Steph Nathai, Calvin Yeung, Jennifer Yien, Eric Kim, Harrison Riddell

##### [Phaser.js](http://phaser.io/)
> * Desktop and Mobile HTML 5 game framework
> * Open source
> * Pixi.js and Canvas
> * Maintained by Photo Storm Limited

###### Want more info?
* Checkout their [Twitter](https://twitter.com/photonstorm)
* Subscribe to the Newsletter and more

### Technology & Steps
* HTML - simply for hosting the Canvas
* CSS - only available in-line in the script
* Phaser.js - download Phaser from their website and link them to your HTML
* Create separate js file (this is where your code will go) and link to HTML
* Code to get started

```
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
}

function create() {
}

function update() {
}
```

##### Awesome aspect of Phaser.js
* Easy Asset Loading (Images, Spritesheets, texture)
* Rendering
* Audio
* Easy Input (keyboard, mouse, etc.)
* Physics, Tweens, & Particles

### Check out what we created

* What about multiplayer?
To have multiplayer, you would need a web server
For more information on makeing your first game check it out [here](http://phaser.io/tutorials/making-your-first-phaser-game)

Want to play our game live [Click Here](http://calvinyeung.github.io/teamDontPhaserMeBro/)
