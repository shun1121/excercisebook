const price = Number(process.argv[2])
const hundred = Math.floor(price / 100)
const ten = Math.floor(price % 100 / 10)
const one = Math.floor(price % 100 % 10)

console.log(`100円玉${hundred}枚、10円玉${ten}枚、1円玉${one}枚`)


