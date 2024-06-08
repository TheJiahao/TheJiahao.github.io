import { useEffect, useState } from "react";

/**
 * Custom hook for checking hydration.
 *
 * @returns Boolean indicating whether component is hydrated/loaded.
 */

const useHydrationState = (): boolean => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return hydrated;
};

export default useHydrationState;
