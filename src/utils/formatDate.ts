import { format, parseISO } from "date-fns";

const formatDate = (date: string): string => {
  const parsedDate = parseISO(date);
  return format(parsedDate, 'd/MM/yyyy');
}

export default formatDate;
