let users = {
  mohammed: {
    id: 'mohammed',
    name: 'Mohammed Kamal',
    avatarURL: "https://i.ibb.co/Yf7xhrp/38451467-10155652283769080-6142784319774523392-o.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  marwa: {
    id: 'marwa',
    name: 'Marwa Mahmoud',
    avatarURL: "https://avatarfiles.alphacoders.com/147/thumb-1920-147699.jpg",
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  adam: {
    id: 'adam',
    name: 'Adam Mohammed',
    avatarURL: "https://i.ibb.co/bQkJkM6/IMG-20201003-210505-647.jpg",
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'mohammed',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['mohammed'],
      text: ' Lose the ability to read',
    },
    optionTwo: {
      votes: [],
      text: ' Lose the ability to speak'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'adam',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'Be in jail for a year',
    },
    optionTwo: {
      votes: ['adam', 'mohammed'],
      text: 'Lose a year off your life'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'mohammed',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'Have one real get out of jail free card',
    },
    optionTwo: {
      votes: ['mohammed'],
      text: 'A Key that opens any door'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'marwa',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'Give up all drinks except for water',
    },
    optionTwo: {
      votes: ['mohammed'],
      text: 'Give up eating anything that was cooked in an oven'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'marwa',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['marwa'],
      text: 'Be able to see 10 minutes into your own future',
    },
    optionTwo: {
      votes: ['adam'],
      text: '10 minutes into the future of anyone but yourself'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'adam',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['adam'],
      text: 'Have an easy job working for someone else',
    },
    optionTwo: {
      votes: ['marwa'],
      text: 'work for yourself but work incredibly hard'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
