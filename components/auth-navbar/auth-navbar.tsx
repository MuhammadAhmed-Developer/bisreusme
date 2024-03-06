import React from "react";
import style from "@/style/authnavbar/authnavbar.module.css";
import Link from "next/link";
import Logo from "@/public/assets/images/svg-Images/logo";

export default function AuthNavbar() {
  return (
    <nav className={style.main}>
      <Link href={"/"}>
        <div className={style.logoParent}>
          <Logo/>
        </div>
      </Link>
    </nav>
  );
}
