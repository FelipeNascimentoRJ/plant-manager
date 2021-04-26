const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export interface ParseDateTimeCalculation {
	day: number;
	hour: number;
	minute: number;
	second: number;
}

export interface ParseDateTimeCalculationProps
	extends ParseDateTimeCalculation {
	isFuture: boolean;
}

const futureCalc = (diff: number): ParseDateTimeCalculation => {
	const day = Math.trunc(diff / DAY);
	const hour = Math.trunc((diff - DAY * day) / HOUR);
	const minute = Math.trunc((diff - HOUR * hour) / MINUTE);
	const second = Math.trunc((diff - MINUTE * minute) / SECOND);

	return {
		day: Math.abs(day),
		hour: Math.abs(hour),
		minute: Math.abs(minute),
		second: Math.abs(second),
	};
};

const pastCalc = (diff: number): ParseDateTimeCalculation => {
	const day = Math.trunc(diff / DAY);
	const diffDay = diff - DAY * day;

	const hour = Math.trunc(diffDay / HOUR);
	const diffHour = diffDay - HOUR * hour;

	const minute = Math.trunc(diffHour / MINUTE);
	const diffMinute = diffHour - MINUTE * minute;

	const second = Math.trunc(diffMinute / SECOND);

	return {
		day,
		hour,
		minute,
		second,
	};
};

const parseDateTime = (
	strDate: string,
	utc = '-03:00',
): ParseDateTimeCalculationProps => {
	const now = new Date();
	const date = new Date(`${strDate}${utc}`);
	const diff = now.getTime() - date.getTime();
	const isFuture = now.getTime() < date.getTime();

	let calculation;

	if (isFuture) {
		calculation = futureCalc(diff);
	} else {
		calculation = pastCalc(diff);
	}

	return {
		isFuture,
		...calculation,
	};
};

export default parseDateTime;
