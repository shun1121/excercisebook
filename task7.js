for (let i = 1; i <= 50; i++) { 
  if (i % 3 === 0 || i.toString().indexOf("3") >= 0) {
      console.log("wow")
  } else {
      console.log(i)
  }
}

/*
ここのfor文では１～５０まで順に処理していき、ifの条件内で数字が文字列に変換される
indexOf()はstring型で使うため変数iを文字列に変える必要がある。
"3"がつく文字列を探すとき、indexOf("3")を使い、0より大きければその文字列は"3"を含むことになる。
ー＞ indexOf()は()で決めた文字が文字列のないかで見つからないとき-1を返す。
   それ以外、つまりその文字列が見つかれば、そのindex番号を返す。（0からスタート）
そのため>=0を使う。
*/
