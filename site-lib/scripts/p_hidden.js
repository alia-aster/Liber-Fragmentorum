/*
TEST
*/
    // 即時
    (() => {
      // location.search が空、または "?" しかない場合
      if (!location.search || location.search === '?') {
        // 1. 画面全体をエラーメッセージに書き換える
        document.documentElement.innerHTML = `
          <body>
            <p>Load Stop<br/>このページの直接アクセスは表示を止めています。<br>各項目のＩＤ付きリンクで読んでください。</p>
          </body>
        `;
        // 2. 以降のJavaScript処理を実行させないためにエラーを投げて強制終了
		window.stop();
        throw new Error("Missing required URL parameters. Execution stopped.");
      }
    })();

// HTMLの解析や描画が始まる前に実行される
//alert(location.search);
if (""==location.search) {
	// 例：エラーページやトップページへ即座にリダイレクト
 	// location.href = '/index.html'; 
}
/*
if(''==location.search){document.querySelectorAll('p').forEach(element=>{element.textContent='hidden';});}
*/
