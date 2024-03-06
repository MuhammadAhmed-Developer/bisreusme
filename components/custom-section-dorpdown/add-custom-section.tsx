import DropdownIcon from "@/public/assets/images/svg-Images/dropdown-Icon";
import SectionPlusIcon from "@/public/assets/images/svg-Images/section-plus-icon";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const solutions = [
  {
    name: "custom",
  },
  {
    name: "languages",
  },
  {
    name: "certifications",
  },
  {
    name: "courses",
  },
];

export default function AddSection() {
  const updateData = useAppSelector((state) => state.templateTheme);
  const dispatch = useAppDispatch();
  const [selectedSuggestions, setSelectedSuggestions] = useState<number[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (itemName: string, index:number) => {
    const isSelected = selectedSuggestions.includes(index);
    if (isSelected) {
      // setSelectedSuggestions(selectedSuggestions.filter((item) => item !== index));
      setSelectedSuggestions(selectedSuggestions.filter((item) => item !== index));
      dispatch(
        updateThemeValue({
          path: `visibleSections.${itemName}`,
          value:
            !updateData?.themeConfiguration?.visibleSections?.[
              itemName.toLowerCase() as
                | "custom"
                | "languages"
                | "certifications"
                | "awards"
                | "courses"
            ],
        })
      );
    } else {
      setSelectedSuggestions([...selectedSuggestions, index]);
      dispatch(
        updateThemeValue({
          path: `visibleSections.${itemName}`,
          value:
            !updateData?.themeConfiguration?.visibleSections?.[
              itemName.toLowerCase() as
                | "custom"
                | "languages"
                | "certifications"
                | "awards"
                | "courses"
            ],
        })
      );
    }

  };

  return (
    <div className=" mt-5  ">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "text-white" : "text-white/90"}
                flex justify-between items-center w-[100%] px-[20px] rounded-[10px] shadow-md drop-shadow-md bg-white text-black text-[20px] py-[20px] text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <span className="text-[14px] text-black">Choose Section</span>
              <div
          className={` cursor-pointer  ${
            dropdownOpen && "rotate-180 duration-500 transition-transform"
          }`}
          onClick={handleDropdownToggle}
        >
          <DropdownIcon />
        </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-[50%] z-10 mt-3 w-full max-w-m -translate-x-1/2 transform px-4 sm:px-0 ">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-8 w-[100%] bg-white p-5 ">
                    {solutions.map((item, index) => {
                      const isIncluded =  (updateData?.themeConfiguration?.visibleSections as any)[item?.name] ;

                      return (
                      <div
                        key={item?.name}
                        className={`-m-3 cursor-pointer flex items-center rounded-lg p-2 transition duration-150 ease-in-out   focus:outline-none focus-visible:ring hover:bg-blue-100`}
                        onClick={() => handleItemClick(item.name, index)}
                      >
                        <div className="ml-4 flex gap-3">
                       
                          <SectionPlusIcon color={updateData?.themeConfiguration?.themeColor?.primaryColor}  name={item?.name} clicked={isIncluded}/>
                          {/* <SectionPlusIcon color={selectedSuggestions.includes(index) ? "red" : "green"}  name={item.name} clicked={isIncluded||selectedSuggestions.includes(index)}/> */}
                          <p className={`text-[12px] font-medium text-gray-900`}>
                            {item?.name}
                          </p>
                        </div>
                      </div>
                    )})}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}