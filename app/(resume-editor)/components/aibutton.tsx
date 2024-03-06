'use client'
import React from "react";
import style from "@/style/mainScreen/mainScreen.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";

function AiButton() {

  const handleClickAiButton = () => {
     localStorage.setItem('clickOnAiButton', 'true');
  }
  return <button onClick={handleClickAiButton} className={style.buttonSecond}>Create Using AI</button>;
}
export default AiButton;
