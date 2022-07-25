import { useEffect, useState } from "react";

export default function useDebounce<T>({ value, delay }: { value: T; delay: number }) {
  const [debouncedValue, setDebounceValue] = useState<T>();
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue as T;
}
