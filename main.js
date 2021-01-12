var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./flossingSpriteSheet.png");
ASSET_MANAGER.queueDownload("./scottPilgrim.png");


ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
	
	canvas.focus();
	gameEngine.init(ctx);
	gameEngine.addEntity(new Animation(gameEngine));
	gameEngine.start();
});
 
 