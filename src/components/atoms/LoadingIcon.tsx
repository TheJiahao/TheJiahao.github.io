import type { IconBaseProps } from "react-icons/lib";
import { LuLoaderCircle } from "react-icons/lu";

const LoadingIcon = ({ ...props }: IconBaseProps) => {
    return <LuLoaderCircle animate-spin {...props} />;
};

export default LoadingIcon;
