import { getRelativeLocaleUrl } from "astro:i18n";
import IconLink from "components/atoms/IconLink";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

interface PaginationProps extends TranslatedElement {
    currentPage: number;
    previousUrl?: string;
    nextUrl?: string;
    defaultUrl?: string;
}

const Pagination = ({
    currentPage,
    previousUrl,
    nextUrl,
    language,
    defaultUrl = getRelativeLocaleUrl(language),
}: PaginationProps) => (
    <nav flex="~ row" items-center gap-lg text="secondary 2xl">
        <IconLink
            url={previousUrl || defaultUrl}
            label={getTranslation(language).previousPage}
            icon={<LuChevronLeft size-10 />}
            onlyIcon
            disabled={!previousUrl}
        />
        <div highlighted>{currentPage}</div>
        <IconLink
            url={nextUrl || defaultUrl}
            label={getTranslation(language).nextPage}
            icon={<LuChevronRight size-10 />}
            onlyIcon
            disabled={!nextUrl}
        />
    </nav>
);

export type { PaginationProps };
export default Pagination;
