import { useToast } from '@chakra-ui/core';
import React, { useState, createContext, useContext, useEffect } from 'react';
import { GuideItem, GuideTypesUnion } from 'src/types';
import { GUIDE_INITIAL_DATA, GUIDE_KEY } from 'src/utils/constants';

interface IGuideContext {
  showGuide: boolean;
  blured: boolean;
  guideState: GuideItem[];
  completeGuide: () => void;
  unblur: () => void;
  markTaskComplete: (taskType: GuideTypesUnion) => void;
  setGuideState: React.Dispatch<React.SetStateAction<GuideItem[]>>;
}

const GuideContext = createContext<IGuideContext | null>(null);

const GuideProvider: React.FC = ({ children }) => {
  const [showGuide, setShowGuide] = useState(true);
  const [blured, setBlured] = useState(true);
  const [guideState, setGuideState] = useState(GUIDE_INITIAL_DATA);

  const toast = useToast();

  const completeGuide = () => {
    setShowGuide(false);
    localStorage.setItem(GUIDE_KEY, 'true');
  };

  const markTaskComplete = (taskType: GuideTypesUnion) => {
    let completedCount = 0;

    setGuideState(s =>
      s.map(guideItem => {
        if (guideItem.type === taskType) {
          guideItem.isDone = true;
        }

        if (guideItem.isDone) {
          completedCount++;
        }

        return guideItem;
      })
    );

    if (completedCount >= guideState.length) {
      completeGuide();

      toast({
        title: "Great, you've completed the guide!",
        variant: 'left-accent',
        status: 'success',
        position: 'bottom-left',
      });
    }
  };

  useEffect(() => {
    setShowGuide(!localStorage.getItem(GUIDE_KEY));
  }, []);

  const unblur = () => setBlured(false);

  return (
    <GuideContext.Provider
      value={{
        completeGuide,
        showGuide,
        unblur,
        blured,
        guideState,
        setGuideState,
        markTaskComplete,
      }}
    >
      {children}
    </GuideContext.Provider>
  );
};

export const useGuide = () => {
  return useContext(GuideContext);
};

export default GuideProvider;
