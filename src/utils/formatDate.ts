import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

/**
 *
 * @param date Date to format
 * @returns Date formatted as "YYYY-MM-DD"
 */
export const formatDate = (date: Date): string =>
    dayjs(date).utc().format("YYYY-MM-DD");
