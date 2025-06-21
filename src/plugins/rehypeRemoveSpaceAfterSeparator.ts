import type { Root } from "hast";
import rehypeRewrite, { type RehypeRewriteOptions } from "rehype-rewrite";
import { type Plugin, type Processor } from "unified";

const removeSpaceAfterSeparator: RehypeRewriteOptions["rewrite"] = (
    node,
    _,
    parent,
) => {
    if (
        node.type == "text" &&
        parent?.type == "element" &&
        parent.tagName === "p"
    ) {
        node.value = node.value
            .replaceAll(/。\s/g, "。")
            .replaceAll(/，\s/g, "，");
    }
};

const rehypeRemoveSpaceAfterSeparator: Plugin<[], Root> = function (
    this: Processor,
) {
    return rehypeRewrite.call(this, {
        rewrite: removeSpaceAfterSeparator,
    });
};
export default rehypeRemoveSpaceAfterSeparator;
