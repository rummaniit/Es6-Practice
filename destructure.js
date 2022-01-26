const person = {
    name: 'rumman',
    age: 25,
    School: 'Zilla School',
    College: 'City College',
    Varsity: 'JahangirNagar',
    Dept: 'IIT'
}
const { College, Varsity } = person
console.log(College, Varsity)

const institute = {
    varsity: 'jahagirnagar',
    dept: {
        kola: 'Bangla',
        Math: ['IIT', 'stat'],
        Pharma: 'micro'
    }
}
const { Math } = institute.dept
console.log(Math)