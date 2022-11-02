import { useEffect, RefObject } from "react";

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) => {
  useEffect(
    () => {
      const listener = (event: Event) => {
        if (
          !ref.current ||
          ref.current.contains(event.target as Node) ||
          null
        ) {
          return;
        }

        handler(event); // Call the handler only if the click is outside of the element passed.
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Reload only if ref or handler changes
    [ref, handler],
  );
};

export default useOnClickOutside;
