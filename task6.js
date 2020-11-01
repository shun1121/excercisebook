const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]

let doubleDigit = []
for (let i = 0; i < students.length; i++) {//10の位の数を配列にする
    doubleDigit.push(Math.floor(students[i]/10))
}
//console.log(doubleDigit) //[ 1, 3, 10, 9, 2, 6, 7, 4, 6, 8, 8, 5, 4, 3, 6 ]

function duplicate (doubleDigit, search) {//第一引数は配列
    let cnt = 0
    for (let j = 0; j <= doubleDigit.length; j++) {
        if (doubleDigit[j] === search) {
            cnt++
        }
    }
    return cnt
}

let array = []
for (let j = 0; j <= 10; j++) {
    const result = duplicate(doubleDigit, j)
    array.push(result)
}
//console.log(array)//それぞれの個数 [ 0, 1, 1, 2, 2, 1, 3, 1, 2, 1, 1 ]
let max = Math.max(...array)
for (let k = 0; k < max; k++) {
    let array2 = []
    for (let l = 0; l <= array.length; l++) {
        if (array[l] >= max-k) {//最大値ー外側forの回数（変数）
                                //arrayの人数がmax-k以上のとき ＜－ 激むず
            array2.push("* ")
        } else {
            array2.push("  ")
        }
    }
    console.log(array2.join(" "))
}
console.log("--------------------------------")
console.log("0 10 20 30 40 50 60 70 80 90 100")
/*
もとの配列を１０で割って～点台を判別する。
duplicate関数で第一引数（配列）の中に第二引数との重複があればカウント＋。
duplicate関数を０～１０まで繰り返し、新しい配列にプッシュする。（人数データが入る）
その配列をもとに、最大値がターミナルの高さになるので最大値分だけ繰り返す。（外側のfor）
内側のforにはarrayの要素が（最大値ー外側forの回数（変数））以上のとき＊を返し、
それ以外の時は空欄を返すようにする。
最後に配列をくっつけておしまい。
*/
