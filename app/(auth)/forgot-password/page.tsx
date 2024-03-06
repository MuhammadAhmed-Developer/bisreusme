"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "@/style/forgotScreen/forgotScreen.module.css";
import Logo from "@/public/assets/images/svg-Images/logo";
import EmailLogo from "@/public/assets/images/svg-Images/email-logo";
import EmailLogoFocus from "@/public/assets/images/svg-Images/email-logo-focus";

function ForgotPassword() {
  const [focusEmail, setFocusEmail] = useState(false);
  const [emailLength, setEmailLength] = useState(false);

  const handleFocusEmail = () => {
    setFocusEmail(true);
  };

  const handleBlurEmail = () => {
    if (!emailLength) {
      setFocusEmail(false);
    }
  };

  const handleChangeEmail = (e: any) => {
    const data = e.target.value;
    if (data.length > 0) {
      setEmailLength(true);
    }

    if (data.length == 0) {
      setEmailLength(false);
    }
  };

  return (
    <>
      <div className={style.main}>
        <div
          className={`${style.contentParent} sm:px-4 lg:!h-[80vh] md:!h-[60vh] !h-[100vh]`}
        >
          <div className={style.formParent}>
            <div className={style.formSection}>
              <div className={style.logoImgParent}>
                <Logo />
              </div>

              <h1 className={style.signup}>Reset Password</h1>

              <p className={style.registerContent}>
                We will send you the
                <span className={style.blueTxt}> OTP </span>
                for verification
              </p>

              <p className={style.emailTxt}>Email</p>
              <div className={style.inputParent}>
                <div className={`${style.emailIcon} mt-2`}>
                  {focusEmail ? <EmailLogoFocus /> : <EmailLogo />}
                </div>

                <input
                  placeholder="Enter Your Email"
                  className={style.emailBox}
                  type="text"
                  onFocus={handleFocusEmail}
                  onBlur={handleBlurEmail}
                  onChange={handleChangeEmail}
                />
              </div>

              <Link href={"/verify-otp"}>
                <button className={style.signinButton}>Send</button>
              </Link>

              <p className={style.copyRightTxt}>©2023 All Rights Reserved</p>
            </div>
          </div>

          <div className={style.ImgParent}>
            <div className={style.signupImgParent}>
              <Image
                className={style.Img}
                alt="signup"
                src={"/assets/images/signup-side-image.jpg"}
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
