import React, { useEffect, useState } from 'react';
import { Globe, Loader2, ChevronDown } from 'lucide-react';
import { EUROPEAN_COUNTRIES } from '../data/translations';
import {
  getSavedCountryCode,
  setSiteCountry,
  subscribeTranslationStatus,
} from '../services/siteTranslator';

export const TranslationBar: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>(() => getSavedCountryCode());
  const [isTranslating, setIsTranslating] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = subscribeTranslationStatus(setIsTranslating);
    const saved = getSavedCountryCode();
    const savedEntry = EUROPEAN_COUNTRIES.find((c) => c.countryCode === saved);
    if (savedEntry && savedEntry.langCode !== 'en') {
      const timer = window.setTimeout(() => {
        setSiteCountry(savedEntry.countryCode);
      }, 60);
      return () => {
        window.clearTimeout(timer);
        unsubscribe();
      };
    }
    return unsubscribe;
  }, []);

  const handleSelectCountry = (countryCode: string) => {
    setSelectedCountry(countryCode);
    setSiteCountry(countryCode);
  };

  return (
    <div
      data-no-translate="true"
      role="region"
      aria-label="European Country Translation Bar"
      className="w-full bg-slate-900 border-b border-slate-800 text-slate-200 text-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-end gap-2.5">
        {isTranslating && (
          <span className="inline-flex items-center gap-1.5 text-[11px] text-blue-300 font-medium">
            <Loader2 className="w-3 h-3 animate-spin" />
            <span>Translating...</span>
          </span>
        )}

        <label
          htmlFor="europe-country-translate-select"
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400"
        >
          <Globe className="w-3.5 h-3.5 text-blue-400" />
          <span>Translate:</span>
        </label>

        <div className="relative inline-flex items-center">
          <select
            id="europe-country-translate-select"
            aria-label="Select European country to translate site"
            value={selectedCountry}
            onChange={(e) => handleSelectCountry(e.target.value)}
            className="appearance-none bg-slate-950 border border-slate-700 hover:border-slate-500 text-slate-100 text-xs font-medium rounded-md pl-2.5 pr-7 py-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer transition-colors"
          >
            {EUROPEAN_COUNTRIES.map((country) => (
              <option
                key={country.countryCode}
                value={country.countryCode}
                className="bg-slate-900 text-slate-100"
              >
                {country.flag} {country.countryName} ({country.nativeLanguage})
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 pointer-events-none absolute right-2" />
        </div>
      </div>
    </div>
  );
};
