import type { ButtonHTMLAttributes } from "react";

const CopyButton = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button type="button" {...props}>
        Copy
    </button>
);

export default CopyButton;
