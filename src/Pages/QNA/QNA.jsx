import React from "react";

const QNA = () => {
  const questionNAns = [
    {
      _id: 1,
      question: "Different between props and state.",
      ans: "sss",
    },
    {
      _id: 2,
      question: "How works useState.",
      ans: "",
    },
    {
      _id: 3,
      question: "Different works of useEffect.",
      ans: "",
    },
    {
      _id: 4,
      question: "How does react works",
      ans: "",
    },
  ];

  return (
    <>
      {questionNAns.map(qna => (
        <div className="collapse text-start rounded-xl mt-20">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            {qna.question}
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>{qna.ans}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default QNA;
