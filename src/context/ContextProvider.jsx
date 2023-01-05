import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = { 
  activeMenu: true
};

const learningState = {
  showTip: true,
  activeTab: 'all', // "all", 'inProgress', 'completed'
}

export const ContextProvider = ({children}) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  //--Learning--//
  const [showTip, setShowTip] = useState(learningState.showTip);
  const [activeTab, setActiveTab] = useState(learningState.activeTab);

  const handleClick = (clicked) => {
    setIsClicked({...initialState, [clicked]: true});
  };

  return (
    <StateContext.Provider
      value={
        { 
          activeMenu, 
          setActiveMenu, 
          isClicked, 
          setIsClicked, 
          handleClick, 
          screenSize, 
          setScreenSize,

          //--Learning--//
          showTip,
          setShowTip,
          activeTab,
          setActiveTab,
        }
      }
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);