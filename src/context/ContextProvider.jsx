import React, { createContext, useContext, useState, useRef } from "react";

const StateContext = createContext();

const initialState = { 
  activeMenu: true
};

const learningState = {
  showTip: true,
  activeTab: 'all', //-> "all", 'inProgress', 'completed'
};

const quizState = {
  showQuizTip: true,
  duration: 5, //-> Quiz duration in minutes
  quiz: null, //-> 'start', 'inProgress' 'completed'
  page : 'endQuiz', //-> 'home' | 'startQuiz' | 'endQuiz'
};

export const ContextProvider = ({children}) => {
  //--Navbar--//
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  //--Quiz--//
  const [page, setPage] = useState(quizState.page);
  const [showQuizTip, setShowQuizTip] = useState(quizState.showQuizTip);
  const [quiz, setQuiz] = useState(quizState.quiz);
  const [time, setTime] = useState(quizState.duration * 60) //-> Initialize time in seconds
  const quizDuration = quizState.duration;
  const timer = useRef(null);

  //--Learning--//
  const [showTip, setShowTip] = useState(learningState.showTip);
  const [activeTab, setActiveTab] = useState(learningState.activeTab);


  //--Function--//
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


          //--Quiz--//
          page, setPage, quiz, setQuiz, timer, time, setTime, quizDuration,

          //--Learning--//
          showTip,
          setShowTip,
          activeTab,
          setActiveTab,
          showQuizTip,
          setShowQuizTip
        }
      }
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);