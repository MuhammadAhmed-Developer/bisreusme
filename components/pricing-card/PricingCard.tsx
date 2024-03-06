import React from 'react';
import CheckCircleIcon from '@/public/assets/images/svg-Images/check-circle-Icon';
import { PricingCardProps } from '@/redux/types';
import { urlFor } from '@/utils/urlFor';

const PricingCard: React.FC<PricingCardProps> = ({ card }) => {
  const {
    cardType,
    cardPrice,
    cardDescription,
    cardPlan,
    cardFacilities,
    mainImage,
    cardGroup,
    popular
  } = card;


  const getColors = () => {
    switch (popular) {
      case true:
        return {
          backgroundColor: '#2871DE',
          textColor: '#FFFFFF',
          textColor1: '#D9DBE9',
          textColor2: '#D9DBE9',
          buttonColor: '#FFFFFF',
          btnColor: '#2871DE',
        };
      default:
        return {
          backgroundColor: 'transparent',
          textColor: '#170F49',
          textColor1: '#6F6C90',
          textColor2: '#170F49',
          buttonColor: '#3B82F6',
          btnColor: '#FFFFFF',
        };
    }
  };

  const { backgroundColor, textColor, buttonColor, textColor1, textColor2, btnColor } = getColors();

  return (
    <div
      className="max-w-[400px] py-10 pl-8 pr-6 bg-white rounded-3xl shadow-lg"
      style={{ backgroundColor }}
    >
      <div className="flex gap-[18px] relative">
        <img
          className="mb-4 h-16"
          src={urlFor(mainImage).url()}
          alt={mainImage.alt}
        />
        <div>
          <h2 className={`text-lg font-DM-Sans  font-semibold`} style={{ color: textColor1 }}>
            {cardGroup}
          </h2>
          <h2 className={`text-[24px] font-DM-Sans font-bold`} style={{ color: textColor }}>
            {cardType}
          </h2>
        </div>

       { popular === true? <button
          className={` px-[24px] font-DM-Sans h-10 top-[-14px] absolute right-0 rounded-xl text-[14px] font-normal text-white items-center bg-[white]/20`}
          >
          Popular
        </button> :''}

          </div>
      <p className={`text-[18px] font-DM-Sans`} style={{ color: textColor1 }}>
        {cardDescription}
      </p>
      <div className="flex items-center gap-2">
        <p className={`text-[54px] font-DM-Sans font-bold`} style={{ color: textColor }}>
          {cardPrice}
        </p>
        <p className={`text-[20px] font-DM-Sans pt-3`} style={{ color: textColor1 }}>
          /{cardPlan}
        </p>
      </div>
      <h2 className={`text-[18px] font-DM-Sans font-bold`} style={{ color: textColor }}>
        What’s included
      </h2>
      <ul className={`flex flex-col font-DM-Sans gap-4 mt-6 font-normal text-lg`} style={{ color: textColor2 }}>
        {cardFacilities.map((facility: string, index: number) => (
          <li key={index} className="flex gap-[14px]">
            <CheckCircleIcon cardType={cardType} />
            <p>{facility}</p>
          </li>
        ))}
        <button
          className={`px-[38px] font-DM-Sans py-[26px] mt-8 rounded-full text-[18px] font-bold flex justify-center items-center`}
          style={{ color: btnColor, backgroundColor: buttonColor }}
        >
          Get started
        </button>
      </ul>
    </div>
  );
};

export default PricingCard;
