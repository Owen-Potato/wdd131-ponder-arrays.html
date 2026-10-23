
const steps = ['one', 'two', 'three'];

document.querySelector('#list').innerHTML =
    steps.map((step) => `<li>${step}</li>`).join('');

steps.forEach((step) => console.log(step));

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first: 'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

document.querySelector('#students').innerHTML =
    students.map((s) => `<p>${s.first} ${s.last}</p>`).join('');

function convert(grade) {
    let points;
    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

const grades = ['A', 'B', 'F'];
const gpaPoints = grades.map(convert);
console.log(gpaPoints);                 

const total = gpaPoints.reduce((sum, p) => sum + p, 0);
console.log(total);

console.log(total / gpaPoints.length);

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter((word) => word.length < 6);
console.log(shortWords);

console.log(words.indexOf('apple'));