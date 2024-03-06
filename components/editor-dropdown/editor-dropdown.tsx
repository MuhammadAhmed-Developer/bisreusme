"use client";
import DropdownIcon from "@/public/assets/images/svg-Images/dropdown-Icon";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { useAppDispatch } from "@/redux/store";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const menuItems = [
  // "Poppins",
  // "Cursive",
  "Inter",
  // "Monospace",
  "Prompt",
  // "Lobster",
  "Ubuntu",
  "Roboto",
  "OpenSans"
];

export default function EditorDropdown() {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const fontChangeHandler = (item: string) => {
    setSelectedItem(item);
    dispatch(
      updateThemeValue({
        path: "fontFamily",
        value: item,
      })
    );
  };

  return (
    <div className="mt-4">
      <Menu as="div" className="relative inline-block text-center w-[100%] ">
        <div>
          <Menu.Button className="flex justify-between items-center w-[100%] px-[20px] rounded-[10px] shadow-md bg-white text-black text-[20px] py-[20px] text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <div className="text-[14px]">{selectedItem}</div>
            <div className="flex justify-between items-center">
              <div
                className={` cursor-pointer ${
                  dropdownOpen && "rotate-180 duration-500 transition-transform"
                }`}
                onClick={handleDropdownToggle}
              >
                <DropdownIcon />
              </div>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10  left-0 mt-2 w-[100%] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            {menuItems.map((item, index) => (
              <div key={index} className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => fontChangeHandler(item)}
                      className={`${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-[14px]`}
                    >
                      {item}
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
