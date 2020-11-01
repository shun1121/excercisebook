const arg = Number(process.argv[2])
let type = "*"
let emp = " "
let typeNum = ""
let empNum = ""

for (let i = 1; i <= arg; i++) {
    array = []
    typeNum = type.repeat(2 * (i - 1) + 1)
    empNum = emp.repeat(arg - i)
    array.push(empNum + typeNum)
    const connect = array.join(" ")
    console.log(connect)
}





