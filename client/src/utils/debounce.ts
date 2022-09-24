export default function debounce(cb: Function, delay: number, ...args: any[]) {
  let timeOut: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
