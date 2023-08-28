import { LanguageContext } from "./LanguageOptions";

export function LanguageProvider({ lang, children }) {
  return (
    <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>
  );
}
