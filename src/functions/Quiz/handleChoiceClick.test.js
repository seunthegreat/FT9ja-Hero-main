import handleChoiceClick from "./handleChoiceClick";

const mockData = [
  {
    'case' : "User has made no selection",
    'input': {
      choices: [],
      currentChoice: "Mali",
      index: 0
    },
    'output' : ['Mali']
  },
]

describe('User Input Validation Test - Quiz', () => {
  mockData.forEach((item, i)  => {
    test( item.case,
      () => {
        let  {} = item.input;
        let output = JSON.stringify(item.output);
        expect(handleChoiceClick(choices, currentChoice, index)).toBe(output)
      })
    })
});