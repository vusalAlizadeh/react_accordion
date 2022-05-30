import React, { useState } from "react";
import "./App.css";
import dataQuestions from "./components/data";
import SingleQuestion from "./components/SingleQuestion";
function App() {
  const [questions] = useState(dataQuestions);
  return (
    <main>
      <section className="accordion">
        <h1>Questions And Answers About Login</h1>

        <div className="accordion-info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} question={question} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
