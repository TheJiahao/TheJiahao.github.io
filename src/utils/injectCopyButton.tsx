import CopyButton from "components/atoms/CopyButton";
import { createRoot } from "react-dom/client";

const injectCopyButton = () => {
    const codeBlocks = Array.from(document.querySelectorAll("pre"));

    for (const block of codeBlocks) {
        const content = block.querySelector("code");

        createRoot(block).render(
            <>
                <CopyButton />

                <code
                    dangerouslySetInnerHTML={{
                        __html: content?.innerHTML ?? "",
                    }}
                />
            </>,
        );
    }
};

export { injectCopyButton };
