import type { IconBaseProps } from "react-icons/lib";
import { LuLoader2 } from "react-icons/lu";

const LoadingIcon = ({ ...props }: IconBaseProps) => {
    return <LuLoader2 animate-spin {...props} />;
};

export default LoadingIcon;
