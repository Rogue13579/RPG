function Player(){ // this is the player function witch specifies the player's attributes
  this.health = 10; this.healthRegenRate = 1; this.magic = 10; this.magicRegenRate = 1;
  this.render = function(ctx, tileset, ts){
    ctx.drawImage(tileset,1088,961,32,32,280,280,ts,ts); // spawning the player's image
    ctx.drawImage(tileset,992,1025,32,32,280,280,ts,ts);
  };
}
var player = new Player();
