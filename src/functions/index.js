import handleChoiceClick from "./Quiz/handleChoiceClick";

export const methods = {
  date: {
    formatDate: (inputDate) => formatDate(inputDate),
    convertDateToWords: (dateString) => convertDateToWords(dateString)
  },
  strings: {
    addCommas: (num) => addCommas(num),
  }, 
  quiz: {
    handleChoiceClick: (choices, currentChoice, index) => handleChoiceClick(choices, currentChoice, index),
  }
};

//--Strings--//
const addCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


//--Dates--//
const convertDateToWords = (dateString) => {

  const newDate = new Date(dateString);
  //--Get the day of the week as a string (e.g. "Monday")--//
  const dayOfWeek = newDate.toLocaleString('default', { weekday: 'long' });
  //-- Get the month as a string (e.g. "October")--//
  const month = newDate.toLocaleString('default', { month: 'long' });
  //--Get the day of the month (e.g. 16)--//
  const day = newDate.getDay();
  //--Get the year (e.g. 2021)--//
  const year = newDate.getFullYear();  
  // Return the formatted string
  return `${dayOfWeek}, ${month} ${day} ${year}`;
};

const formatDate = (inputDate) => {

  /** @format:  January 1, 2022 */
  let date = new Date(inputDate);
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};