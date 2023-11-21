// A “higher-order function” is a function that accepts functions as parameters and/or returns a function.


//call high order function
highOrderFunction(hello)

// declare function
function highOrderFunction(func) {
    func()
}

// decaler another function
function hello() {
    console.log("hello")
}
