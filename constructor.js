class Student {
    constructor(name, institute) {
        this.name = name
        this.varsity = institute
        this.school = "zilla School"
    }
}
const rumman = new Student('rumman', 'IIT')
const shaon = new Student('shaon', 'IIT')
rumman.name = "istiake"
console.log(rumman, shaon)