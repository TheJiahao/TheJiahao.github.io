import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const formatDate = (date: Date): string =>
    dayjs(date).utc().format("YYYY-MM-DD");

export default formatDate;
