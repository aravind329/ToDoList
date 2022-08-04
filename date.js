module.exports = getDate;
function getDate(){
	let today=new Date();
 	let currentDay=today.getDay();
 	const dayNames={0: "Sunday", 1:"Monday", 2:"Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6:"Saturday"};
 	const options={weekday: "long", day:"numeric", month:"long"};

 	let day=today.toLocaleDateString("en-US",options);
 	return day;
}