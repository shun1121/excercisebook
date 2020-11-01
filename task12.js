const workers = require( "./workers.json" );

for(let worker of workers.users) {
    if (worker.rank === "C") {
        worker.salary = 5000 * (worker.years) + 160000
    } else if (worker.rank === "B") {
        worker.salary = 4000 * (worker.years) + 140000
    } else if (worker.rank === "A" && worker.years >= 5) {
        worker.salary = 3000 * (worker.years) + 120000
    } else {
        worker.salary = 3000 * (worker.years) + 100000
    }
}

let arr = workers.users
arr.sort(function(a, b) {//a,bともにworkers.users同値なので.salaryで繋げられる
    return b.salary - a.salary
})

arr.forEach(element => {
    console.log(element["name"] + ":" + element["salary"])
})
