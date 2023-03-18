import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function useDebounce(value = '', delay) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounceValue;
}

useDebounce.propTypes = {
  value: PropTypes.string,
  delay: PropTypes.number,
};

export default useDebounce;
