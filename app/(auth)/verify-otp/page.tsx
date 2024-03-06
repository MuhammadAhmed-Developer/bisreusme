"use client";
import React, { useState, useEffect, useRef } from "react";
import style from "@/style/verifyToken/verifyToken.module.css";

function VerifyOTP() {
  const [timer, setTimer] = useState(159);
  const [resendClicked, setResendClicked] = useState(false);

  const inputRefs: any = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    let interval: any;
    if (timer > 0 && !resendClicked) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, resendClicked]);

  const handleResendClick = () => {
    setTimer(159);
    setResendClicked(false);
    inputRefs[0].current.focus();
  };

  const handleInputChange = (index: number, value: any, event: any) => {
    if (/^\d$/.test(value) && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    } else if (event.key === "Backspace" && index > 0 && !value) {
      inputRefs[index].current.value = "";
      inputRefs[index].current.focus();
    } else if (event.key === "Backspace" && index === 0 && !value) {
      inputRefs[index].current.value = "";
      inputRefs[index].current.focus();
    }
  };

  const handleSubmit = () => {};

  return (
    <>
      <div className={style.main}>
        <div className={style.mainCard}>
          <h1 className={style.mainHeading}>Verification Code</h1>
          <p className={style.paraGraph}>
            We have sent the verification code to your email{" "}
            <span className={style.boldTxt}>syedaliusman@gmail.com</span>
          </p>
          <div className={style.inputsParent}>
            {inputRefs.map((ref: any, index: number) => (
              <input
                key={index}
                ref={ref}
                className={style.inputBox}
                type="text"
                maxLength={1}
                onChange={(e) => handleInputChange(index, e.target.value, e)}
                onKeyDown={(e) => handleInputChange(index, "", e)}
              />
            ))}
          </div>

          <p className={style.time}>{`${Math.floor(timer / 60)
            .toString()
            .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`}</p>

          <button className={style.btn} onClick={handleSubmit}>
            Submit
          </button>

          <p className={style.paraText}>
            Didn’t receive the code?{" "}
            <span
              className={`${style.textBlue} cursor-pointer `}
              onClick={handleResendClick}
            >
              Resend
            </span>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default VerifyOTP;
