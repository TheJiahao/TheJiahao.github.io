import type { AnimatedElement } from "interfaces/AnimatedElement";
import { LuCalendar } from "react-icons/lu";
import { formatDate } from "utils/formatDate";

interface DateComponentProps extends AnimatedElement {
    date: Date;
}

const DateComponent = ({ date, viewTransitionName }: DateComponentProps) => (
    <time
        dateTime={formatDate(date)}
        text-secondary
        align-icon
        gap-2
        style={{ viewTransitionName }}
    >
        <LuCalendar role="presentation" focusable="false" />
        {formatDate(date)}
    </time>
);

export default DateComponent;
