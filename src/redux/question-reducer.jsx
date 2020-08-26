import data from "../api/api";

const initialState = {
  questions: []
}

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SN/QUESTIONS/SET_QUESTIONS': {
      return {...state, questions: action.questions}
    }
    default: {
      return state;
    }
  }
}

const actions = {
  setQuestions: (questions) => ({ type: 'SN/QUESTIONS/SET_QUESTIONS', questions })
}

export const getQuestions = () => dispatch => {
  dispatch(actions.setQuestions(data));
}

export default questionsReducer;
