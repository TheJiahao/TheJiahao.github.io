import type { HTMLAttributes } from "react";
import { LuCalendar } from "react-icons/lu";
import { formatDate } from "utils/formatDate";

interface DateComponent extends HTMLAttributes<HTMLTimeElement> {
    date: Date;
    id?: string;
}

const DateComponent = ({ date, id }: DateComponent) => (
    <time
        dateTime={formatDate(date)}
        text-secondary
        align-icon
        gap-2
        style={id ? { viewTransitionName: `date-${id}` } : undefined}
    >
        <LuCalendar role="presentation" focusable="false" />
        {formatDate(date)}
    </time>
);

export default DateComponent;
