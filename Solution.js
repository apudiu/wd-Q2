let allRead = true;

let notifications = [
	{message: 'Lorem', read: true},
	{message: 'Ipsum', read: true},
	{message: 'Dolor', read: true},
	{message: 'Sit', read: false},
	{message: 'Amet', read: true}
];

// finding by read status
let n = notifications.find(item => item.read === false);

// if we found any
if (n) allRead = false;

console.log(allRead);