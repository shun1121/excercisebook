const profiles = {
    profiles: [
      {
        name: "佐藤",
        age: 22
      },
      {
        name: "鈴木",
        age: 34
      },
      {
        name: "高橋",
        age: 42
      },
      {
        name: "田中",
        age: 15
      }
    ]
  }
//console.log(arr)//もう一つドットで繋げられやんのはオブジェクトと配列で扱いが違うから？

let arr = profiles.profiles
arr.forEach(element => {
    console.log(element["name"] + ":" + element["age"])
})

/*
//これは配列の要素、つまり今回は{ name: '佐藤', age: 22 }この１セットが要素となり、これを繰り返し呼び出す
let arr = profiles.profiles
arr.forEach(element => {
    console.log(element)
})
結果：
{ name: '佐藤', age: 22 }
{ name: '鈴木', age: 34 }
{ name: '高橋', age: 42 }
{ name: '田中', age: 15 }
*/

