"use client";
import React, { useState } from "react";
import style from "@/style/signup/signup.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/svg-Images/logo";
import GoogleSigninLogo from "@/public/assets/images/svg-Images/google-signin-logo";
import UserLogoFocus from "@/public/assets/images/svg-Images/user-logo-focus";
import UserLogo from "@/public/assets/images/svg-Images/user-logo";
import EmailLogoFocus from "@/public/assets/images/svg-Images/email-logo-focus";
import EmailLogo from "@/public/assets/images/svg-Images/email-logo";
import LockLogoFocus from "@/public/assets/images/svg-Images/lock-logo-focus";
import LockLogo from "@/public/assets/images/svg-Images/lock-logo";
import EyeLogo from "@/public/assets/images/svg-Images/eye-logo";
import EyeLogoClose from "@/public/assets/images/svg-Images/eye-logo-close";

function Signup() {
  const [focus, setFocus] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusUsername, setFocusUsername] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [emailLength, setEmailLength] = useState(false);
  const [usernameLength, setUsernameLength] = useState(false);


  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    if (!passwordLength) {
      setFocus(false);
    }
  };

  const handleFocusEmail = () => {
    setFocusEmail(true);
  };

  const handleBlurEmail = () => {
    if (!emailLength) {
      setFocusEmail(false);
    }
  };

  const handleFocusUsername = () => {
    setFocusUsername(true);
  };

  const handleBlurUsername = () => {
    if (!usernameLength) {
      setFocusUsername(false);
    }
  };

  const handleShownPassword = () => {
    setShowPassword(true);
    if (showPassword) {
      setShowPassword(false);
    }
  };

  const handleChangeText = (e: any) => {
    const data = e.target.value;
    if (data.length > 0) {
      setPasswordLength(true);
    }


    if (data.length == 0) {
      setPasswordLength(false);
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

  const handleChangeUsername = (e: any) => {
    const data = e.target.value;
    if (data.length > 0) {
      setUsernameLength(true);
    }


    if (data.length == 0) {
      setUsernameLength(false);
    }
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.contentParent}>
          <div className={style.formParent}>
            <div className={style.formSection}>
              <div className={style.logoImgParent}>
                <Logo/>
              </div>

              <h1 className={style.signup}>Sign Up</h1>
              <p className={style.registerContent}>
                Already have an account?
                <Link href={"/signin"}>
                  <span className={style.blueTxt}> Login</span>
                </Link>
              </p>

              <p className={style.emailTxt}>Name</p>
              <div className={style.inputParent}>
                <div className={`${style.emailIcon} mt-2`}>
                  {focusUsername ? <UserLogoFocus/> : <UserLogo/>}
                </div>
                <input
                  placeholder="Enter Your Name"
                  className={style.emailBox}
                  type="text"
                  onFocus={handleFocusUsername}
                  onBlur={handleBlurUsername}
                  onChange={handleChangeUsername}
                />
              </div>

              <p className={style.emailTxt}>Email</p>
              <div className={style.inputParent}>
                <div className={`${style.emailIcon} mt-2`}>
                  {focusEmail ? <EmailLogoFocus/> : <EmailLogo/>}
                </div >
                <input
                  placeholder="Enter Your Email"
                  className={style.emailBox}
                  type="text"
                  onFocus={handleFocusEmail}
                  onBlur={handleBlurEmail}
                  onChange={handleChangeEmail}
                />
              </div>
              <p className={style.password}>Password</p>
              <div className={style.passwordBoxParent}>
                <div className="">
                  {focus ? <LockLogoFocus/> : <LockLogo/>}
                </div>
              
                <input
                  className={style.passwordBox}
                  placeholder="Enter Your Password"
                  type={showPassword ? "text" : "password"}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChangeText}
                />
                <div onClick={handleShownPassword} className="">
                  {showPassword? <EyeLogo/> : <EyeLogoClose/>}
                </div>
               
              </div>

              <div className={style.forgotParent}>
                <div className={style.checkboxParent}>
                  <input type="checkbox" />
                  <p className={style.rememberTxt}>&nbsp; Remember Me</p>
                </div>
                <Link href={'/forgot-password'}>

                <p className={`${style.forgotTxt} cursor-pointer`}>Forgot Password?</p>
                </Link>
              </div>

              <button className={style.signinButton}>Sign Up</button>
              <div className={style.hrParent}>
                <hr className={style.hrTag} />
                <p className={style.orTxt}>or</p>
                <hr className={style.hrTag} />
              </div>
              <button className={style.googleBtn}>
                <GoogleSigninLogo/>
                Sign Up with Google
              </button>

              <p className={style.copyRightTxt}>©2023 All Rights Reserved</p>
            </div>
          </div>

          <div className={style.ImgParent}>
            <div className={style.signupImgParent}>
              <Image
                className={style.Img}
                alt="signup"
                src={"/assets/images/signup-image.svg"}
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
