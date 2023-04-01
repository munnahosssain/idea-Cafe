import React from "react";

const QNA = () => {
  const questionNAns = [
    {
      _id: 1,
      question: "Different between props and state.",
      firstAns:
        "'State' React state is mutable and it value can change as per requirement. set by paren components.",
      secondAns:
        "'Props' props are immutable their current be changed. They are company managed by components itself. Props allows child components to red value from parent components",
    },
    {
      _id: 2,
      question: "How works useState.",
      firstAns: "Take the initial state in useState. ",
      secondAns:
        "Return a variable with the current state value (no necessarily the initial state) and another function to update the value",
    },
    {
      _id: 3,
      question: "Different works of useEffect.",
      firstAns:
        "useEffect with async functions: If you need to use async functions inside useEffect, you can define an async function and call it inside useEffect. ",
      secondAns:
        "Multiple useEffect: You can use multiple useEffect hooks in a single component to separate different concerns. Each useEffect can have its own dependencies and effect function.",
    },
    {
      _id: 4,
      question: "How does react works",
      firstAns:
        "When a user interacts with the page, React updates the virtual DOM with the changes, calculates the difference between the new and previous virtual DOM, and updates the actual DOM for the parts that have changed",
      secondAns: "",
    },
  ];

  return (
    <>
      {questionNAns.map(qna => (
        <div className="collapse text-start rounded-xl mt-2">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl font-bold">
            {qna.question}
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>{qna.firstAns}</p>
            <br />
            <p>{qna.secondAns}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default QNA;
