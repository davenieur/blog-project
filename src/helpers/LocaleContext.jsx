import { createContext, useContext, useState } from 'react';

// Contexto para almacenar el idioma
const LocaleContext = createContext();

// Acceder al contexto
export function useLocale() {
  return useContext(LocaleContext);
}

// Provider del contexto que contendrá el estado del idioma seleccionado y el slug actual
export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('es'); 
  const [currentSlug, setCurrentSlug] = useState('blog'); 

  return (
    <LocaleContext.Provider value={{ locale, setLocale, currentSlug, setCurrentSlug }}>
      {children}
    </LocaleContext.Provider>
  );
}
