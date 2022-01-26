// class FatherName {
//     constructor() {
//         this.fathername = "khan"
//     }
// }
// class ChildName extends FatherName {
//     constructor(name) {
//         super()
//         this.name = name
//     }
//     getFullName() {
//         return this.name + ' ' + this.fathername
//     }
// }
// let fullName = new ChildName('rumman')
// console.log(fullName.getFullName())

class Father {
    constructor() {
        this.fatherName = "Shafiquzzaman"
    }
}

class Child extends Father {
    constructor(name) {
        super()
        this.name = name
    }
    getFullName() {
        return this.fatherName + ' ' + this.name
    }
}
let ChildName = new Child('rumman')
console.log(ChildName.getFullName())


