export const parseDate = (date: Date): string => {
	const time = parseTime(date);
	const day = date.getDate();
	const month = MONTHS[date.getMonth()];
	const year = date.getFullYear();

	return day + ' ' + month + ' ' + year + ', ' + time;
};

const parseTime = (date: Date): string => {
	let hours = date.getHours();
	let minutes: string | number = date.getMinutes();
	let ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? '0' + minutes : minutes;

	return hours + ':' + minutes + ampm;
};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
