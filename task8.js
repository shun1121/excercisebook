let array = [Math.floor(Math.random()*10)]//配列の中にランダムを入れておく
for (let i = 0; i < 10; i++) {
    if (array.indexOf(i) === -1) {//配列の中の要素と重複しなければ
        array.push(i)
    }
}
const array1 = array.join(' ')
console.log(array1)
/*
乱数÷10の整数部分を配列に入れておく。
配列の中で乱数を１０回まわす。
その配列の中にiという値がなければ、それを配列に追加する。
*/
