import parseDateTime from "./parseDateTime";

export const zero = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`;
};

export const time = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${zero(hours)}:${zero(minutes)}`;
}

export const distance = (date: string) => {
  const { isFuture, day, hour, minute } = parseDateTime(date);

  if (isFuture) {
    if (day) {
      return `${zero(day)} dias`;
    }

    if (hour) {
      return `${zero(hour)}:${zero(minute)} hs`;
    }

    if (minute) {
      return `${zero(minute)} minutos`;
    }
  }
};