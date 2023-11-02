let employee1 = {
    name: 'santosh',
    age: 28
}
let employee2 = {
    name: 'sudhir',
    age: 29
}

function invite(grt1, grt2) {
    console.log(grt1 + " " + this.name + " " + grt2 + " " + this.name)
    console.log("this:", this)
}


invite.call(employee1, "Hello","How are you")