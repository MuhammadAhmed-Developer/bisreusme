import Image from "next/image";
import styles from "./companies.module.css";
import GoogleAnimateLogo from "@/public/assets/images/svg-Images/google-animation-logo";
import TeslaAnimateLogo from "@/public/assets/images/svg-Images/tesla-animation-logo";
import AmazonAnimateLogo from "@/public/assets/images/svg-Images/amazon-animation-logo";
import ShopifyAnimationLogo from "@/public/assets/images/svg-Images/shopify-animation-logo";
import AppleAnimateLogo from "@/public/assets/images/svg-Images/apple-animation-logo";
import MetaAnimateLogo from "@/public/assets/images/svg-Images/meta-animation-logo";
import FacebookAnimateLogo from "@/public/assets/images/svg-Images/facebook-animation-logo";
import ChatgptAnimateLogo from "@/public/assets/images/svg-Images/chatgpt-animate-logo";
import AlexaAnimationLogo from "@/public/assets/images/svg-Images/alexa-animation-logo";
import DialogFlowAnimationLogo from "@/public/assets/images/svg-Images/dialogflow-animation-logo";
export default function Companies() {
  return (
    <>
      <section>
        <div className="text-center mt-[24px] md:mt-[32px] lg:mt-[48px] ">
          <div>
            <h1 className="lg:text-[48px] md:text-[35px] text-[30px] text-medium-blue font-Claris-sans ">
              <span>Top</span>{" "}
              <span className="text-primary-blue">companies hire</span> &nbsp;
              <span>our customers</span>{" "}
            </h1>
          </div>
          <div className={styles.containerr}>
            <div
              className={`lg:ml-[202px] ${styles.slideContainer2}  md:mx-[120px] mx-[40px] mt-[65px] flex lg:gap-[91px] md:gap-[30px] gap-7 `}
            >
              <div className={styles.slideImage}>
                <div className={styles.movingImage}>
                  <GoogleAnimateLogo />
                </div>
              </div>
              <div className={styles.slideImage}>
                <div className={styles.movingImage}>
                  <TeslaAnimateLogo />
                </div>
              </div>
              <div className={styles.slideImage}>
                <div className={styles.movingImage}>
                  <AmazonAnimateLogo />
                </div>
              </div>
              <div className={styles.slideImage}>
                <div className={styles.movingImage}>
                  <ShopifyAnimationLogo />
                </div>
              </div>
              <div className={styles.slideImage}>
                <div className={styles.movingImage}>
                  <AppleAnimateLogo />
                </div>
              </div>
              <div className={styles.slideImage}>
                <div className={styles.movingImage}>
                  <GoogleAnimateLogo />
                </div>
              </div>
              <div className={styles.slideImage}>
                <div className={styles.movingImage}>
                  <TeslaAnimateLogo />
                </div>
              </div>
              <div className={styles.slideImage}>
                <div className={styles.movingImage}>
                  <AmazonAnimateLogo />
                </div>
              </div>
              <div className={styles.slideImage}>
                <div className={styles.movingImage}>
                  <ShopifyAnimationLogo />
                </div>
              </div>
              <div className={styles.slideImage}>
                <div className={styles.movingImage}>
                  <AppleAnimateLogo />
                </div>
              </div>
            </div>

            <div className={styles.containerr}>
              <div
                className={`mt-[5px] ${styles.slideContainer} flex lg:gap-[91px] md:gap-[30px] gap-7 mb-[80px] lg:mx-[193px] md:mx-[120px] mx-[40px] justify-center`}
              >
                <div className={styles.slideImage}>
                  <div className={styles.movingImage}>
                    <MetaAnimateLogo />
                  </div>
                </div>
                <div className={styles.slideImage}>
                  <div className={styles.movingImage}>
                    <FacebookAnimateLogo />
                  </div>
                </div>
                <div className={styles.slideImage}>
                  <div className={styles.movingImage}>
                    <ChatgptAnimateLogo />
                  </div>
                </div>
                <div className={styles.slideImage}>
                  <AlexaAnimationLogo />
                </div>
                <div className={styles.slideImage}>
                  <div className={styles.movingImage}>
                    <DialogFlowAnimationLogo />
                  </div>
                </div>
                <div className={styles.slideImage}>
                  <div className={styles.movingImage}>
                    <MetaAnimateLogo />
                  </div>
                </div>
                <div className={styles.slideImage}>
                  <div className={styles.movingImage}>
                    <FacebookAnimateLogo />
                  </div>
                </div>
                <div className={styles.slideImage}>
                  <div className={styles.movingImage}>
                    <ChatgptAnimateLogo />
                  </div>
                </div>
                <div className={styles.slideImage}>
                  <div className={styles.movingImage}>
                    <AlexaAnimationLogo />
                  </div>
                </div>
                <div className={styles.slideImage}>
                  <div className={styles.movingImage}>
                    <DialogFlowAnimationLogo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
