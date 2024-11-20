import React, { useState, useEffect } from "react";
import API from "../api/axios";

const Chatbot = () => {
  const [faqs, setFaqs] = useState([]);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    API.get("/chatbot/faqs")
      .then((response) => setFaqs(response.data))
      .catch((err) => console.error("Error fetching FAQs:", err));
  }, []);

  const handleFaqClick = (faq) => {
    setAnswer(faq.answer);
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} onClick={() => handleFaqClick(faq)}>
            {faq.question}
          </li>
        ))}
      </ul>
      {answer && <p>{answer}</p>}
    </div>
  );
};

export default Chatbot;
