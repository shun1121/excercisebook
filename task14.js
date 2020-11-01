let kobe = require( "./kobe.json" );

function getKobe (obj) {//引数はjsonオブジェクト
    const objKey = Object.keys(obj)//引数に入れるjsonオブジェクトのキー(:の左側)を取得して変数objKeyに代入
                                   //jsonオブジェクトの最初のキー（左側）である'pwpc'が返る
    for (let key of objKey) {//ループできるオブジェクト（objKey）にある要素をひとつ持ってくる
                             //of以下（ループできるオブジェクト）の数だけまわす

        if (key === "kobe") {//左側（オブジェクトのキー）が"kobe"のとき
            console.log(obj[key])//キーが"kobe"のオブジェクトの値を出したい ー＞ obj[key]あるいはobj.key?
        }

        //再帰関数
        if (typeof obj[key] === "object") {//値の型がobject型だった場合
            getKobe(obj[key])              //obj[key]、つまり値がobject型である限りkeyはforでまわり続ける
        }                                  //このループがいつ終わるかというと一つ目のifの条件と合致したとき
    }
}
getKobe(kobe);

/*
＜再帰関数で大事なこと＞
終了条件を決める
自分の関数の引数が変わってまわり続ける
決めた終了条件でループを終える
*/