import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import TemplateSection from "../../components/resumes-section/resumes-section";
import CircleCrossIcon from "@/public/assets/images/svg-Images/circle-cross-icon";

function TemplatesModal({
  shownModel,
  onClose,
  editTemplateModelSize,
}: {
  shownModel: boolean;
  onClose?: () => void;
  editTemplateModelSize: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center"></div>

      <Transition appear show={shownModel} as={Fragment}>
        <Dialog as="div" className="relative " onClose={closeModal}>
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

          <div className="fixed inset-0">
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
                <Dialog.Panel
                  className={`${
                    editTemplateModelSize && "w-[70%]"
                  } w-[80%]  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
                >
                  <TemplateSection
                    modelCardSize={true}
                    shownHeading={true}
                    navigateModel={true}
                    showScrollBar={true}
                  />
                  <div
                    onClick={onClose}
                    className="absolute top-7 right-7 cursor-pointer"
                  >
                    <CircleCrossIcon />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default TemplatesModal;
