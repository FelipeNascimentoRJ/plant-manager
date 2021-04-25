export const zero = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`;
};

export const time = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${zero(hours)}:${zero(minutes)}`;
}