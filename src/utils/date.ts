import parseDateTime from "./parseDateTime";

export const zero = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`;
};

export const time = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${zero(hours)}:${zero(minutes)}`;
}

export const dateTime = (date: Date) => {
  const d = zero(date.getDate());
  const m = zero(date.getMonth() + 1);
  const y = zero(date.getFullYear());

  const h = zero(date.getHours());
  const i = zero(date.getMinutes());
  const s = zero(date.getSeconds());

  return `${y}-${m}-${d}T${h}:${i}:${s}`;
};

export const distance = (date: string) => {
  const { isFuture, day, hour, minute, second } = parseDateTime(date);

  const v = isFuture ? 'Não esqueça de regar a [name] em' : 'Esqueceu de regar a [name] há';

  if (day) {
    return `${v} ${zero(day)} dias`;
  }

  if (hour) {
    return `${v} ${zero(hour)}:${zero(minute)} hs`;
  }

  if (minute) {
    return `${v} ${zero(minute)} minutos`;
  }

  if (second) {
    return `${v} ${zero(second)} segundos`;
  }
};