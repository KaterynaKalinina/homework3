// Task at the lesson

let yearOfBirth = +prompt('Enter the year of your birth', '');
let today = new Date();
let age = today.getFullYear() - yearOfBirth;

if (isNaN(age)) {
    console.log('It is not a number');
} else if (age >= 18) {
    console.log('Here you go');
} else if (age < 12) {
    console.log('Use something else');
} else {
    console.log('Access denied');
}


// Task about a questionary

// Condition #1: age
let candidateAge = +prompt('Enter your age, please', '');

if (isNaN(candidateAge)) {
    console.log('It is not a number');
} else if (candidateAge >= 30) {
    console.log('Your age if perfectly fine');
} else {
    console.log('Sorry, you are too young');
}

// Condition #2: experience
let candidateExper = +prompt('How many years of experience do you have in the field?', '');

if (isNaN(candidateExper)) {
    console.log('It is not a number');
} else if (candidateExper >= 3) {
    console.log('Your experience if perfectly fine');
} else {
    console.log('Sorry, we are looking for a more experienced person');
}

// Condition #3: languages
let candidateLang = confirm('Press OK if you can you speak any foreign languages, otherwise, press CANCEL');

if (candidateLang === true) {
    console.log('Great');
} else {
    console.log('Too bad');
}

// Condition #4: location
let candidateLocation = confirm('Press OK if you live in Odessa, otherwise, press CANCEL');

if (candidateLocation === true) {
    console.log('Location is good');
} else {
    console.log('Too bad');
}

// Final check

if (candidateAge >= 30 && candidateExper >= 3 && candidateLang === true && candidateLocation === true) {
    alert('We would like to invite you for an interview');
} else {
    alert('Sorry, I am afraid we are looking for a different person');
}
