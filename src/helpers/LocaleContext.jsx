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
  const [slug, setSlug] = useState('blog'); 
  const [altSlug, setAltSlug] = useState('blog');
  
  const languages = {
    en: {
        locale: 'en-US',
        label: 'EN',
        route: 'en'
    },
    es: {
        locale: 'es',
        label: 'ESP',
        route: 'es'
    }
  }

  const locales = ["es", "en"]

  return (
    <LocaleContext.Provider value={{ locale, setLocale, slug, setSlug, altSlug, setAltSlug, languages, locales }}>
      {children}
    </LocaleContext.Provider>
  );
}
