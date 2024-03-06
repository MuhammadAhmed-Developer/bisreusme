import React from "react";
import styles from '../../style/FrequentlyAskedQuestions/FAQSection.module.css';

export default function FaqSection() {
  const faqs = [
    {
      question: "How does a resume builder benefit me in my job search?",
      answer:
        "Create a well-formatted resume that is easy to read and understand by hiring managers.Highlight your skills and experience in a way that is relevant to the job you are applying for.Tailor your resume to each specific job you apply for.",
    },
    {
      question: "What are the key components of a strong cover letter?",
      answer:
        "Craft a captivating opening, provide specific examples of your skills, and reiterate your interest to create a strong cover letter.",
    },
    {
      question: "How can I improve my interview skills?",
      answer:
        "Practice answering common interview questions.Do your research on the company and the position you are interviewing for.Dress professionally and arrive on time for your interview.",
    },
    {
      question: "Where can I find job opportunities in my field?",
      answer:
        "Utilize online job boards, company websites, and networking to find job opportunities in your field.",
    },
    {
      question: "What is the importance of networking in a job search?",
      answer:
        "Networking unveils hidden job opportunities and enhances your chances of landing an interview.",
    },
    {
      question: "How do I tailor my resume for a specific job application?",
      answer:
        "Tailor your resume to each job you apply for by highlighting your most relevant skills and experiences. This will demonstrate your suitability for the position and increase your chances of getting an interview.",
    },
    {
      question: "What should I include in my professional portfolio?",
      answer:
        "Highlight your skills and experience with work samples, resume, cover letter, references, and online presence.",
    },
    {
      question: "How can I effectively negotiate my salary?",
      answer:
        "Negotiate your salary with confidence and preparation. Research market rates, have a target number, and be ready to justify your worth.",
    },
    {
      question: "What are the common mistakes to avoid in a job interview?",
      answer:
        "Void common interview blunders by being prepared, dressing professionally, arriving on time, communicating effectively, staying positive, and following up.",
    },
    {
      question: "How do I create an impactful LinkedIn profile?",
      answer:
        "An impactful LinkedIn profile should showcase your skills, experience, and accomplishments in a way that is both informative and engaging.",
    },
  ];

  return (
    <div className="md:relative md:h-[900px]">
      <div className="bg-sky-light md:h-[391px]   mt-[23px]">
        <div className=" flex pb-10 justify-center md:absolute top-0 bottom-0 items-center md:mb-[45px]  sm:mx-[10px] md:mt-16">
          <div className="rounded-[21px]  md:w-4/5  bg-white mt-8 shadow-2xl shadow-sky-light lg:px-[53px] md:px-[30px] px-[15px] pb-[71px]">
            <div className="mt-4 md:mt-8  text-center font-Claris-sans  lg:text-[48px] md:text-[35px] text-[30px]">
              <span className="text-medium-blue mt-5 ">Frequently asked </span>{" "}
              <span className="text-primary-blue">questions</span>
            </div>  
            <div className="grid grid-cols-1  md:grid-cols-2 lg:gap-5 gap-4 max-w-[100%] mt-6">
              {faqs.map((faq, index) => (
                <div className={styles.faqItem} key={index}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    id={`question${index}`}
                  />
                  <label
                    className={styles.question}
                    htmlFor={`question${index}`}
                  >
                    <div className={styles.icon}></div>
                    <span className="text-[16px] font-bold -mt-1">
                      {faq.question}
                    </span>
                  </label>
                  <div className={styles.answer}>{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
