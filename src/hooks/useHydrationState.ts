import { useEffect, useState } from "react";

/**
 * Custom hook for checking hydration.
 *
 * @returns Boolean indicating whether component is hydrated.
 */

const useHydrationState = (): boolean => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line @eslint-react/set-state-in-effect
        setHydrated(true);
    }, []);

    return hydrated;
};

export default useHydrationState;
