var months =[
	{
		"abbreviation": "Jan",
		"name": "January",
        "value": "01"
	},
	{
		"abbreviation": "Feb",
		"name": "February",
        "value": "02"
	},
	{
		"abbreviation": "Mar",
		"name": "March",
        "value": "03"
	},
	{
		"abbreviation": "Apr",
		"name": "April",
        "value": "04"
	},
	{
		"abbreviation": "May",
		"name": "May",
        "value": "05"
	},
	{
		"abbreviation": "Jun",
		"name": "June",
        "value": "06"
	},
	{
		"abbreviation": "Jul",
		"name": "July",
        "value": "07"
	},
	{
		"abbreviation": "Aug",
		"name": "August",
        "value": "08"
	},
	{
		"abbreviation": "Sep",
		"name": "September",
        "value": "09"
	},
	{
		"abbreviation": "Oct",
		"name": "October",
        "value": "10"
	},
	{
		"abbreviation": "Nov",
		"name": "November",
        "value": "11"
	},
	{
		"abbreviation": "Dec",
		"name": "December",
        "value": "12"
	}
];

const currentYear = new Date().getFullYear();
let years = [0];
let y = [];
for(let i = 2020; i <= currentYear; i++){
    y.push(i);
}
years = y;

export  { months, years };