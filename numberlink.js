// NumberLinkゲームのロジックを記述
function NumberLinkGame(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    // ゲームの変数や初期化処理を記述
    
    // ゲームのメインループ
    this.gameLoop = function() {
      // ゲームの更新処理
      
      // ゲームの描画処理
      
      requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    // ゲームの初期化
    this.initGame = function() {
      // ゲームの初期化処理
      
      this.gameLoop();
    }
  }
  
  // ページの読み込みが完了したらNumberLinkゲームを初期化
  window.addEventListener('load', function() {
    var canvas = document.getElementById('gameCanvas');
    var numberLinkGame = new NumberLinkGame(canvas);
    numberLinkGame.initGame();
  });
  