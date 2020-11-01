const playData = require("./playdata.json")
const songs = require( "./songs.json" );

let data = playData.data//playdata.jsonのdataを変数dataに代入
let song = songs.songs

data.sort(function (a, b) {//カウントの大きい順にsort
    return b.count - a.count
})

for (let i = 0; i < data.length; i++) {//playdataの要素の数だけ回す
    //console.log(data[g].count)　＜－　こうすると{〇 : ▼, × : □ }という要素のキーを指定して値を取得できる

    for (let j = 0; j < data.length; j++) {//playdataの要素の数だけ回す  一つ目のforでまわす回数と合わせる
                                           //というのもplaydataの要素数のが少なく、基準になるから
        if (data[i].id === song[j].id.toString()) {//idの型が違うからそろえる 
                                                   //playdataとsongsのidが一致したとき
            console.log(`順位:${song[j].title} ${data[i].count}`)//一致したタイトルとカウントを表示
        }
    }
}
