/*
 謳非表示用、とりあえず
*/
// 即時
(() => {
    // 1. 画面全体をエラーメッセージに書き換える
    document.documentElement.innerHTML = `
      <body>
        <p>Load Stop<br/>このページの直接アクセスは表示を止めています。<br>各ページのＩＤ付きリンクで読んでください。</p>
      </body>
    `;
    // 2. 以降のJavaScript処理を実行させないためにエラーを投げて強制終了
    window.stop();
    throw new Error("Missing required URL parameters. Execution stopped.");
})();

