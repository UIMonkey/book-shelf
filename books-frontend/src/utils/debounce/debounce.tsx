import { useCallback } from 'react';
import debounce from 'lodash/debounce';

export function useDebounce(callback: any, delay: number) {
    const debouncedFn = useCallback(
        debounce((...args) => callback(...args), delay),
        [delay], // will recreate if delay changes
    );
    return debouncedFn;
}