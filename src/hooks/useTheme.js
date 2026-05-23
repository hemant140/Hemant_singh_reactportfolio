import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, () => setTheme(t => t === 'light' ? 'dark' : 'light')];
};

export default useTheme;
