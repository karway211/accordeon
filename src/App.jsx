import React, { useEffect } from 'react';
import './App.css';
import ElemBlock from './components/ElemBlock';
import { connect } from 'react-redux';
import { getQuestions } from './redux/question-reducer';
import broccoli from './assets/images/broccoli_img.png'

function App({getQuestions, questions}) {
  useEffect(()=> {
    getQuestions();
  })
  const elements = questions.map(el=><ElemBlock id={el.id} key={el.id} question={el.elem} />)
  return (
    <div className="App">
      <div className='imageBlock'>
        <img src={broccoli} alt="broccoli"/>
      </div>
      <h2 className='App__h2'>ВОПРОСЫ</h2>
      <h3 className='App__h3'>ВСЕ ЧТО ВЫ ХОТИТЕ ЗНАТЬ</h3>
      {elements}
    </div>
  );
}

const mapStateToProps = (state) => ({
  questions: state.questionBlock.questions
})

export default connect(mapStateToProps, {getQuestions})(App);
