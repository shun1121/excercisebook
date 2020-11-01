const arg = process.argv[2]
const arg2 = process.argv[3]

let argLower = arg.toLowerCase()
let array = argLower.split(',').sort()//配列にしてalphabet順にまとめる
console.log(array)
const result = array.filter(element => {
    if (element.indexOf(arg2) !== -1) {//arg2を含む要素があればをれをリターン
        return element                 //新しい配列を返す
    }
})
let array1 = result.join(' ')//配列のすべての要素を結合した文字列を返す
console.log(array1)




