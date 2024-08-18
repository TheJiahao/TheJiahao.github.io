import { LuCalendar } from "react-icons/lu";
import { formatDate } from "utils/formatDate";

interface DateComponent {
    date: Date;
}

const DateComponent = ({ date }: DateComponent) => (
    <time dateTime={formatDate(date)} text-secondary align-icon gap-2>
        <LuCalendar role="presentation" focusable="false" />
        {formatDate(date)}
    </time>
);

export default DateComponent;
