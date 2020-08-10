//I HAVE TO ADD SOME ANOTHER CODE IN THIS PROJECT IT IS MADE FOR PRACTICE ONLY...!!!



const getSleepHours = day =>{

if (day=== 'monday'){
  return 8;
}

else{
  console.log('watever');

}
}
const getActualSleepHours = () => {
  // call getsleephours
 getSleepHours('Monday') +
  getSleepHours('Tuesday') +
   getSleepHours('Wednesday') + 
   getSleepHours('thurstday') + 
   getSleepHours('friday') +
    getSleepHours('saturday') + 
    getSleepHours('sunday') ;


}
const getIdealSleepHours = () => {

const idealHours = 8;
return idealHours*7;


}
const calculateSleepDebt = () => {
var actualSleepHours = getActualSleepHours() ;
var idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log('user got the perfect amount of sleep.');
} else if (actualSleepHours > idealSleepHours) {
  console.log('user got more sleep than needed.');
} else {
  console.log('user should get some rest.');
}
if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}

}
calculateSleepDebt()





console.log(getSleepHours('tuesday'));
