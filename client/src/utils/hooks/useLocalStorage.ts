import { useState } from "react";

export default function useLocalStorage({ key }: { key: string }) {
  const [value, setValue] = useState(localStorage.getItem(key));
  const setNewValue = (value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
    setValue(value);
  };
  return [value, setNewValue];
}
