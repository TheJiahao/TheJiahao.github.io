import { getRelativeLocaleUrl } from "astro:i18n";
import IconLink from "components/atoms/IconLink";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

interface PaginationProps extends TranslatedElement {
    currentPage: number;
    previousURL?: string;
    nextURL?: string;
    defaultURL?: string;
}

const Pagination = ({
    currentPage,
    previousURL,
    nextURL,
    language,
    defaultURL = getRelativeLocaleUrl(language),
}: PaginationProps) => (
    <nav flex="~ row" items-center gap-4 text="secondary 2xl">
        <IconLink
            url={previousURL || defaultURL}
            label={getTranslation(language).previousPage}
            icon={<LuChevronLeft role="presentation" size-10 />}
            onlyIcon
            inert={!previousURL}
            className={!previousURL ? "color-disabled" : undefined}
            aria-disabled={!previousURL}
        />

        <div highlighted>{currentPage}</div>

        <IconLink
            url={nextURL || defaultURL}
            label={getTranslation(language).nextPage}
            icon={<LuChevronRight role="presentation" size-10 />}
            onlyIcon
            inert={!nextURL}
            className={!nextURL ? "color-disabled" : undefined}
            aria-disabled={!nextURL}
        />
    </nav>
);

export type { PaginationProps };
export default Pagination;
