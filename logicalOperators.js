let dayNumber = 1;
let dayName ;
let weekName ;

if (dayNumber == 0 || dayNumber == 6){
    weekName = `Weekend`;
} else (weekName = `Weekday`);

if ((dayNumber == 0)) {
    dayName = `Sunday`;
    console.log(dayNumber, `This is ${dayName}, then it is the ${weekName}.`);
} else if ((dayNumber == 1)) {
    dayName = `Monday`;
    console.log(dayNumber, `This is ${dayName}, then it is the ${weekName}.`);
} else if ((dayNumber == 2)) {
    dayName =`Tuesday`;
    console.log(dayNumber, `This is ${dayName}, then it is the ${weekName}.`);
} else if ((dayNumber == 3)) {
    dayName = `Wednesday`;
    console.log(dayNumber, `This is ${dayName}, then it is the ${weekName}.`);
} else if ((dayNumber == 4)) {
    dayName = `Thursday`;
    console.log(dayNumber, `This is ${dayName}, then it is the ${weekName}.`);
} else if ((dayNumber == 5)) {
    dayName = `Friday`;
    console.log(dayNumber, `This is ${dayName}, then it is the ${weekName}.`);
} else if ((dayNumber == 6)) {
    dayName = `Saturday`;
    console.log(dayNumber, `This is ${dayName}, then it is the ${weekName}.`);
} else console.log(dayNumber, `= Invalid day number`);
