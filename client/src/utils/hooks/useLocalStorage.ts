import { useState } from "react";

export default function useLocalStorage({ key }: { key: string }) {
  const [value, setValue] = useState(localStorage.getItem(key));
  const setNewValue = (value: string) => {
    localStorage.setItem(key, value);
    setValue(value);
  };
  return [value, setNewValue] as const;
}
