const handleChoiceClick = (choices, currentChoice, index) => {

  let updatedChoice = [];

  //--if current choice is the first--//
  if (choices.length == 0) updatedChoice.push(currentChoice);


  if (currentChoice !== choices[index])
    choices[index] = currentChoice;
    updatedChoice = choices;
  // if ( currentChoice !== choices[index]) 
  //   choices[index] = currentChoice;

  //console.log(choices.length)

  //console.log(choices)
  return updatedChoice;
};

export default handleChoiceClick;
