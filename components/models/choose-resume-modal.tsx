"use client";
import React, { Fragment } from "react";
import styles from "@/style/userPopup/userPopup.module.css";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import Logo from "@/public/assets/images/svg-Images/logo";
import Btn from "../btn/btn";

interface ModalProps {
  isOpen: boolean;
  handleCreateUsingAI?: () => void;
  handleCreateResume?: () => void;
  onClose?: () => void;
}

function ChooseResumeModal(props: ModalProps) {
  const { isOpen, handleCreateUsingAI, handleCreateResume, onClose } = props;

  const handleCloseModal = () => {
    onClose && onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[650px] transform overflow-hidden rounded-2xl p-10 text-left align-middle  transition-all">
                <div className="mt-4">
                  <div className={styles.main}>
                    <div className={styles.card}>
                      <Image
                        alt="cross"
                        src={"/assets/images/circleCrossIcon.svg"}
                        width={33}
                        height={32}
                        className={styles.crossIcon}
                        onClick={handleCloseModal}
                      />

                      {/* <div className={styles.tickIconParent}>
                        <Logo />
                      </div> */}

                      <h1 className="text-[40px] font-semibold">Choose a method</h1>
                      <p className="text-[#5E5E5F] text-[16px] font-normal pb-[35px]">Ai Feature is only available one time free</p>

                      <div className={styles.buttonParent}>
                        <div
                          onClick={handleCreateUsingAI}
                        >
                          <Btn title="Create Using AI" />
                        </div>
                        <button
                          className={styles.buttonSecond}
                          onClick={handleCreateResume}
                        >
                          Customize Resume
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ChooseResumeModal;
