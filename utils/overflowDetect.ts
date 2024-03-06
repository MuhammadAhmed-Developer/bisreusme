import { useEffect, useRef, useState } from "react";

function useOverflowDetection(ref:any) {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const handleOverflow = () => {
      const contentElement = ref.current;

      if (contentElement) {
        const contentHeight = contentElement.offsetHeight;
        const viewportHeight = window.innerHeight;

        if (contentHeight > 1100) {
          setIsOverflowing(true);
        } else {
          setIsOverflowing(false);
        }
      }
    };

    const observer = new MutationObserver(handleOverflow);
    observer.observe(ref.current, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [ref]);

  return isOverflowing;
}

export default useOverflowDetection;
