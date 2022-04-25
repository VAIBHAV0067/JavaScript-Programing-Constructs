// UC1-Check employee Present or absent

/*const IS_ABSENT=0;
console.log(Math.random()*10);
let empCheck=Math.floor(Math.random()*10)%2;

if(empCheck==IS_ABSENT)
{
   console.log("Employee is Absent");
}
else{
console.log("Employee is present");
}
*/

//UC2

/*const IS_Part_Time=1;
const IS_Full_Time=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;

let empHrs=0;
let empCheck=Math.floor(Math.random()*10)%3;

switch(empCheck)
{
    case IS_Part_Time;
    empHrs=PART_TIME_HOURS;
    break;
    case IS_Full_Time;
    empHrs=FULL_TIME_HOURS;
    break;
    default:
        empHrs=0;
}
let empWage=empHrs*WAGE_PER_HOURS;
console.log("EmpWage: "+empWage);*/

//UC3

const IS_Part_Time=1;
const IS_Full_Time=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;

let empHrs=0;
function getWorkingHours(empCheck)
{

switch(empCheck)
{
    case IS_Part_Time;
        return PART_TIME_HOURS;
     
    case IS_Full_Time;
        return FULL_TIME_HOURS;

    default:
        returns
        0;
}
}
let empWage=empHrs*WAGE_PER_HOURS;

console.log("EmpWage: "+empWage);
