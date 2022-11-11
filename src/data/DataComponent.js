import dmvData from "./dmvData"
import popUp from '../components/Popup';
import React from 'react'

let data = dmvData;
const DataComponent = (retake) => {
  console.log('retake', retake)
      const retakeData = [{
        question: 'Retake What does CSS stand for?',
        answers: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
        correct: 3
      },
    
      {
        question: 'Retake Where in an HTML document is the correct place to refer to an external style sheet?',
        answers: ['In the <head> section', 'In the <body> section', 'At the end of the document', 'You can\'t refer to an external style sheet'],
        correct: 1
     }]

     //{retake ? retakeData : dmvData}
     if (retake){
      return retakeData
     }else{
      return dmvData
     }


}

export default DataComponent

//export default data;