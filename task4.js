const y = Number(process.argv[2]);
const x = Number(process.argv[3]);
let type = ""
let line = ""

for (let i = 1; i <= y; i++) {
  array = [];
  if (i % 2 != 0) {//条件として、１からyまで増えていく変数iを割るー＞奇数
                   //タテの動きで1、3、5...のときどう処理するか
    for (let j = 1; j <= x; j++) {  
        if (j % 2 != 0) {//条件として、１からxまで増えていく変数jを割るー＞奇数
                         //ヨコの動きで1、3、5...のときどう処理するか
            type = "*"
            array.push(type)
        } else {//ヨコの動きで2、4、6...のときどう処理するか
            line = "-"
            array.push(line)
        }
      }
  } else if (i % 2 === 0) {//条件として、１からyまで増えていく変数iを割るー＞偶数
                           //タテの動きで2、4、6...のときどう処理するか
    for (let j = 1; j <= x; j++) { 
        if (j % 2 != 0) {//条件として、１からxまで増えていく変数jを割るー＞奇数
                         //ヨコの動きで1、3、5...のときどう処理するか
            type = "-" 
            array.push(type)
        } else {//ヨコの動きで2、4、6...のときどう処理するか
            line = "*" 
            array.push(line)
        }
      }
  }
  const arr = array.join(' ')
  console.log(arr)
}
