// CommonImage.tsx
import React, { useState } from "react";

interface CommonImageProps {
  height: number;
  width: number;
  src: string;
  alt: string;
  classname?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  radius?: string;
}

const CommonImage: React.FC<CommonImageProps> = ({
  src,
  alt,
  onChange,
  height,
  width,
  classname,
  radius,
}) => {
  const [showCameraIcon, setShowCameraIcon] = useState(false);

  const handleHover = () => {
    setShowCameraIcon(true);
  };

  const handleLeave = () => {
    setShowCameraIcon(false);
  };

  const containerStyle: React.CSSProperties = {
    cursor: "pointer",
    height: `${height}px`,
    position: "relative",
    display: "inline-block",
  };

  const backgroundImageStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // borderRadius: "100%",
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div
        style={{ ...backgroundImageStyle, borderRadius: `${radius}%` }}
        className={`block ${classname} overflow-hidden max-w-[${width.toString()}px]`}
      />

      {showCameraIcon && (
        <label
          htmlFor="imageInput"
          className="absolute top-[50%] left-[50%] cursor-pointer"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <span role="img" aria-label="camera" className="text-[24px]">
            📷
          </span>
        </label>
      )}

      <input
        type="file"
        id="imageInput"
        accept="image/*"
        className="hidden"
        onChange={onChange}
      />
    </div>
  );
};

export default CommonImage;
