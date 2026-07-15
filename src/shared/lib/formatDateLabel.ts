import { appConfig } from '../config/appConfig';
import { strings } from '../resources/strings';

const dayMonthFormatter = new Intl.DateTimeFormat(appConfig.defaultLocale, {
  day: 'numeric',
  month: 'short',
});

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** "Today" / "Yesterday" for the last two days, otherwise e.g. "12 Jul". */
export function formatDateLabel(dateIso: string, now: Date = new Date()): string {
  const date = new Date(dateIso);
  if (isSameDay(date, now)) {
    return strings.dates.today;
  }
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (isSameDay(date, yesterday)) {
    return strings.dates.yesterday;
  }
  return dayMonthFormatter.format(date);
}
