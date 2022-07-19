export default function throttle(cb: CallableFunction, delay: number = 500) {
  let shouldWait = false;
  let waitingArgs: any[] | null;
  const timeoutFunction = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunction, delay);
    }
  };

  return (...args: any[]) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunction, delay);
  };
}
