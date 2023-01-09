export const calculateQuizResult = (quiz, selected) => {
  if (selected.length === 0){
    return { 
      error: true, 
      message: "You must answer at least one question to submit the quiz."
    }
  }
  
  let result = 0;
  for (let i = 0; i < quiz.length; i++) {
    if (selected[i] === quiz[i].answer) {
      result++;
    }
  }
  return { error: false, score: (result / quiz.length) * 100 };
};

export const search = (keyword, array, key) => {
  //--Use the find() method to search for an object with a matching key--//
  const foundObject = array.find(object => object[key] === keyword);
  return foundObject;
};