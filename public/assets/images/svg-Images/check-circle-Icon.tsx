import React from 'react';

interface CheckCircleIconProps {
  width?: number;
  height?: number;
  cardType: string;
}

const CheckCircleIcon: React.FC<CheckCircleIconProps> = ({
  width = 26,
  height = 26,
  cardType,
}) => {
  // Define a function to get the fill and stroke colors based on cardType
  const getIconColors = () => {
    switch (cardType) {
      case 'Pro':
        return { fill: 'white', stroke: '#2871DE' };
        // Add more cases for other card types if needed
        default:
        return { fill: '#2871DE', stroke: 'white' };
    }
  };

  const { fill, stroke } = getIconColors();

  return (
    <svg width={width} height={height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Check Circle Icon">
        <path
          id="Vector"
          d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
          fill={fill}
        />
        <path
          id="Check"
          d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CheckCircleIcon;
