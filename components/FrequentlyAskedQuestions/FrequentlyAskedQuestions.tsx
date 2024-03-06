'use client'
import React, { useState } from 'react'
import style from '@/style/FrequentlyAskedQuestions/FrequentlyAskedQuestions.module.css'
import Plus from '@/public/assets/images/svg-Images/plus';
import Minus from '@/public/assets/images/svg-Images/minus';

function FrequentlyAskedQuestions({FaqListLandingPage}:any) {
  const [accordion, setActiveAccordion] = useState(-1)
  function toggleAccordion(index:number) {
    if (index === accordion) {
      setActiveAccordion(-1)
      return
    }
    setActiveAccordion(index)
  }
  return (
    <>
      <div className={style.parent}>
        <div className={style.accordion__faq}>
          {FaqListLandingPage?.map((item:any, index:number) => {
            return (
              <div
                key={index}
                onClick={() => toggleAccordion(index)}
                className={accordion === index ? `${style.faqParent1} ` : `${style.faqParent} `}
              >
                <div className={style.accordion__faq_heading}>
                {accordion === index ? (
                      <span className={style.verticl}>
                        <Minus/>
                      </span>
                    ) : (
                      <span className={style.horizental}>
                        <Plus/>
                      </span>
                    )}
                  <p className={accordion === index ? `${style.active} ` : `${style.active} `}>
                    {item.question}
                  </p>
                </div>
                  <p className={accordion === index ? `${style.active1} ` : `${style.inactive} `}>
                  {item.answer}
                  </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FrequentlyAskedQuestions