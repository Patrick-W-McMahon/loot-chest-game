require('./scss/main.scss');

require.ensure([], () => {
  require('script!pixi.js');
  done();
});
require.ensure([], () => {
  require('script!p2');
  done();
});
require.ensure([], () => {
  require('script!phaser');
  done();
});
function done() {
  console.log("done");
}

// window.PIXI = PIXI;

// require('pixi.js');
// require('p2');
// require('phaser');