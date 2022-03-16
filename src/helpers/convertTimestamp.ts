import { format } from "date-fns";
import { ptBR } from 'date-fns/locale'

export function timeToHourMinute(time: number): string {
  return format(new Date(time * 1000), 'HH:mm');
};

export function timeToDate(time: number) {
  return format(new Date(time * 1000), 'EEEEEE, dd LLL, yyyy', {locale: ptBR});
}

export function timeToWeekDay(time: number) {
  return format(new Date(time * 1000), 'EEEEEE', {locale: ptBR});
}
