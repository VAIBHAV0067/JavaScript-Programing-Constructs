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

/*const IS_Part_Time=1;
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

console.log("EmpWage: "+empWage);*/
 
//UC4

/*const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

function getWorkingHours(empCheck)
{
switch(empCheck)
{
    case IS_PART_TIME:
        return PART_TIME_HOURS;

    case IS_FULL_TIME:
          return FULL_TIME_HOURS;
    default:
        return 0;

}
}
const NUM_OF_WORKING_DAYS=2;

let empHrs=0;

for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=getWorkingHours(empCheck);
}

let empWage=empHrs*WAGE_PER_HOUR;
console.log("Total Hrs:" +empHrs+"EmpWage: "+empWage);*/

//UC5-while loop

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

function getWorkingHours(empCheck)
{
switch(empCheck)
{
    case IS_PART_TIME:
        return PART_TIME_HOURS;

    case IS_FULL_TIME:
          return FULL_TIME_HOURS;
    default:
        return 0;

}
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS =20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() *10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC5 - Total Days: " + totalWorkingDays +
    "Total Hrs: " +totalEmpHrs +" Emp Wage: " +empWage);