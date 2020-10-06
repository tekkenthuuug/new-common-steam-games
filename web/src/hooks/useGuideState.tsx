import React, { useState, createContext, useContext, useEffect } from 'react';
import { GUIDE_KEY } from 'src/utils/constants';
import isServer from 'src/utils/isServer';

interface IGuideContext {
  showGuide: boolean;
  blured: boolean;
  skipGuide: () => void;
  unblur: () => void;
}

const GuideContext = createContext<IGuideContext | null>(null);

const GuideProvider: React.FC = ({ children }) => {
  const [showGuide, setShowGuide] = useState(true);
  const [blured, setBlured] = useState(true);

  const skipGuide = () => {
    setShowGuide(false);
    localStorage.setItem(GUIDE_KEY, 'true');
  };

  useEffect(() => {
    setShowGuide(!localStorage.getItem(GUIDE_KEY));
  }, []);

  const unblur = () => setBlured(false);

  return (
    <GuideContext.Provider
      value={{
        skipGuide,
        showGuide,
        unblur,
        blured,
      }}
    >
      {children}
    </GuideContext.Provider>
  );
};

export const useGuideState = () => {
  return useContext(GuideContext);
};

export default GuideProvider;
