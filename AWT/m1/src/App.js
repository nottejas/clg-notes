// import logo from './logo.svg';
// import './App.css';

import Form from './Form';
import LoggedIn from './LoggedIn';
import QuestionOne from './QuestionOne';
import QuestionThree from './QuestionThree';
import QuestionTwo from './QuestionTwo';

function App() {
  return (
    <div className="App">
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
      <LoggedIn />
      <Form />
    </div>
  );
}

export default App;
