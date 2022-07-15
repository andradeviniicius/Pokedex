import { useState } from "react";

const useLazy = (quantity, isLoading, setIsLoading) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(quantity);

  const addObserver = (element) => {
    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((elements) => {
      const spinner = elements[0];

      if (spinner.isIntersecting && !isLoading) {
        setStart((state) => {
          return (state = state + quantity);
        });
        setEnd((state) => {
          return (state = state + quantity);
        });
        setIsLoading(true);
      }
    }, options);

    if (element) {
      observer.observe(element);
    }
  };

  return [start, end, addObserver];
};

export default useLazy;
