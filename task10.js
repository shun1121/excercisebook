const str = "こはるはるここはるここはるはるここはるこはるはるはる"
let cnt = (str.match(/こはる/g) || []).length
let cnt1 = (str.match(/はるこ/g) || []).length
console.log(`こはる：${cnt}`)
console.log(`はるこ：${cnt1}`)

/*
match()の正規表現を用い、指定した文字列の登場回数を調べる
こはる、あるいは、はるこの、個数を.lengthでとることができる
gは当てはまるすべての要素を取得する
*/



