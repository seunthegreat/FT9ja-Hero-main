import React, { createContext, useContext, useState, useRef } from "react";
import { quiz } from "../constants";

const StateContext = createContext();

const initialState = { 
  activeMenu: true,
  showNotification: false,
};

const learningState = {
  showLearningTip: true,
  activeTab: 'all', //-> "all", 'inProgress', 'completed'
};

const activitiesState = {
  showActivitiesTip: true,
  showActivityHistory: false,
};

const advocateState = {
  showAdvocateTip: true,
};

const benefitState = {
  showBenefitsTip: true,
  //--CashOut--//
  cashOut: {
    transferPage: 'main', //--> main || bank-transfer-main || bank-transfer-confirm
    action: null, //--> 'adding'
    bankInfo: {bankName: null, accNum: null},
    confirmWithdrawal: false,
  },
  history: {
    selection: 'stipend' //--> stipend, commission, merch, gifts
  }
};

const quizRecord = [
  { id: 120 , month: 'January', name: "January Rush", description: "", participants: 0 },
  { id: 121 , month: 'February', name: "February Tease",  description: "", participants: 0 },
  { id: 119 , month: 'March', name: "Marching Wins",  description: "", participants: 0 },
  { id: 122 , month: 'April', name: "No Fools",  description: "", participants: 0 },
  { id: 123 , month: 'May', name: "May Day Pay Day",  description: "", participants: 0 },
];

const quizState = {
  quizQuestions: quiz,
  showQuizTip: true,
  duration: 15, //-> Quiz duration in seconds
  quiz: null, //-> 'start', 'inProgress' 'completed'
  page : 'main', //-> 'main' | 'result' | 
  currentQuizIndex: 0,
  selectedChoice: [],
  showCalendar: true,
  selectedMonth: null,
  currentMonthInfo: quizRecord[3],
  score: 0,
  passMark: 60,
  history: [
    { id: 0, date: '01/22/2022', quizId:120, quizName: 'January Rush', score: 60, timeSpent: 60, attempts: 4, selectedChoice: [] },
    { id: 1, date: '02/23/2022', quizId:121, quizName: 'February Tease', score: 80, timeSpent: 70, attempts: 6, selectedChoice: [] },
    { id: 2, date: '03/11/2022', quizId:119, quizName: 'Marching Wins', score: 20, timeSpent: 30, attempts: 2 , selectedChoice: []}
  ],
  attempts: [], //-> id, quizId, quizName, score, selectedChoice
};

export const ContextProvider = ({children}) => {
  //--Navbar--//
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  //--Notification--//
  const [showNotification, setShowNotification] = useState(initialState.showNotification);

  //--Quiz--//
  const [page, setPage] = useState(quizState.page);
  const [showQuizTip, setShowQuizTip] = useState(quizState.showQuizTip);
  const [quiz, setQuiz] = useState(quizState.quiz);
  const [time, setTime] = useState(quizState.duration) //-> Initialize time in seconds
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(quizState.currentQuizIndex);
  const [selectedChoice, setSelectedChoice] = useState(quizState.selectedChoice);
  const [showCalendar, setShowCalendar] = useState(quizState.showCalendar);
  const [selectedMonth, setSelectedMonth] = useState(quizState.selectedMonth);
  const [currentMonthInfo, setCurrentMonthInfo ] = useState(quizState.currentMonthInfo);
  const [history, setHistory] = useState(quizState.history);
  const [score, setScore] = useState(quizState.score);
  const [attempts, setAttempts] = useState(quizState.attempts);
  const [passMark, setPassMark] = useState(quizState.passMark);
  const quizQuestions = quizState.quizQuestions;
  const quizDuration = quizState.duration;
  const timer = useRef(null);
  const quizRecord = [
    { id: 120 , month: 'January', name: "Pilot", description: "", participants: 0 },
    { id: 121 , month: 'February', name: "Becoming an Ambassador",  description: "", participants: 0 },
    { id: 119 , month: 'March', name: "Winning more clients",  description: "", participants: 0 },
    { id: 122 , month: 'April', name: "What makes us better",  description: "", participants: 0 },
    { id: 123 , month: 'May', name: "May Day Pay Day",  description: "", participants: 0 },
  ];

  //--Learning--//
  const [showLearningTip, setShowLearningTip] = useState(learningState.showLearningTip);
  const [activeTab, setActiveTab] = useState(learningState.activeTab);

  //--Activities--//
  const [showActivitiesTip, setShowActivitiesTip] = useState(activitiesState.showActivitiesTip);
  const [showActivityHistory, setShowActivityHistory] = useState(activitiesState.showActivityHistory);

  //--Advocate--//
  const [showAdvocateTip, setShowAdvocateTip] = useState(advocateState.showAdvocateTip);
  const [showAdvocateHistory, setShowAdvocateHistory] = useState(false);

  //--Benefits--//
  const [showBenefitsTip, setShowBenefitsTip] = useState(benefitState.showBenefitsTip);
  const [openCashOutModal, setOpenCashOutModal] = useState(false);
  const [transferPage, setTransferPage] = useState(benefitState.cashOut.transferPage);
  const [addBank, setAddBank] = useState(benefitState.cashOut.bankInfo.accNum == null ? false : true);
  const [bankInfo, setBankInfo] = useState(benefitState.cashOut.bankInfo);
  const [confirmWithdrawal, setConfirmWithdrawal] = useState(benefitState.cashOut.confirmWithdrawal);
  const [historySelection, setHistorySelection] = useState(benefitState.history.selection);

  //--History--//
  const [openPaymentHistory, setOpenPaymentHistory] = React.useState(false);

  //--Function--//
  const handleClick = (clicked) => {
    setIsClicked({...initialState, [clicked]: true});
  };

  return (
    <StateContext.Provider
      value={
        { 
          activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, 
          setScreenSize,

          //--Notification--//
          showNotification, setShowNotification,

          //--Quiz--//
          page, setPage, quiz, setQuiz, timer, time, setTime, quizDuration,
          currentQuizIndex, setCurrentQuizIndex, selectedChoice, setSelectedChoice,
          showCalendar, setShowCalendar, quizQuestions, history, setHistory,
          score, setScore, attempts, setAttempts, selectedMonth, setSelectedMonth,
          currentMonthInfo, setCurrentMonthInfo, quizRecord, passMark, setPassMark,
          isTimeUp, setIsTimeUp,

          //--Learning--//
          showLearningTip, setShowLearningTip, activeTab, setActiveTab,
          showQuizTip, setShowQuizTip,

          //--Activities--//
          showActivitiesTip, setShowActivitiesTip, showActivityHistory, setShowActivityHistory,

          //--Advocate--//
          showAdvocateTip, setShowAdvocateTip, showAdvocateHistory, setShowAdvocateHistory,

          //--Benefits--//
          showBenefitsTip, setShowBenefitsTip,
          openCashOutModal ,setOpenCashOutModal, //--> Cashout
          transferPage, setTransferPage, addBank,
          setAddBank, bankInfo, setBankInfo, confirmWithdrawal, setConfirmWithdrawal,
          historySelection, setHistorySelection,

          //--History Modal--//
          openPaymentHistory, setOpenPaymentHistory,
        }
      }
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);