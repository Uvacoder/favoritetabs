const { useState, useEffect, useDebugValue } = require("react");

const useLocalStorage = (key = '', initialValue = '') => {
  const [state, setState] = useState(() => {
    const storedData = window.localStorage.getItem(key);

    if (storedData)
      return JSON.parse(storedData);
    
    return initialValue;
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
    return () => {}
  }, [key, state]);

  return [state, setState];
}

export { useLocalStorage };
