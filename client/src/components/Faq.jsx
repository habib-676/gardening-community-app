import React, { use } from "react";

const faqPromise = fetch("/faq.json").then((res) => res.json());
const Faq = () => {
  const faqData = use(faqPromise);

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2 w-2/3 mx-auto mt-10">
        {faqData.map((faq) => (
          <div key={faq.id}>
            <div className="collapse collapse-arrow join-item bg-base-200 border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold">{faq.question}</div>
              <div className="collapse-content text-sm">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
