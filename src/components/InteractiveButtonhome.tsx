import { FunctionComponent, type CSSProperties } from "react";

export type InteractiveButtonhomeType = {
  className?: string;
  label?: string;
  directiondown?: string;
  directionDown?: boolean;
  interactiveButtonHome?: boolean;
  interactiveButtonHome1?: React.ReactNode;

  /** Variant props */
  variant?: CSSProperties["variant"];
};

export const getHomeIconStyle = (styleKey: string) => {
  switch (styleKey) {
    case "true":
      return "[&]:hidden";
  }
};
const getLabelTextStyle = (styleKey: string) => {
  switch (styleKey) {
    case "true":
      return "[&]:text-gray [&]:font-medium";
  }
};
const getDownIconStyle = (styleKey: string) => {
  switch (styleKey) {
    case "true":
      return "[&]:hidden";
  }
};

const InteractiveButtonhome: FunctionComponent<InteractiveButtonhomeType> = ({
  className = "",
  variant = false,
  label = "Home",
  directiondown,
  directionDown = false,
  interactiveButtonHome = false,
  interactiveButtonHome1,
}) => {
  const variantKey = `${variant}`;

  return (
    <div
      className={`flex items-center py-[0rem] px-[0.25rem] gap-[0.25rem] text-left text-[0.875rem] text-dimgray font-pingfang-sc ${className}`}
    >
      {interactiveButtonHome1}
      <div
        className={`relative leading-[1.375rem] shrink-0 ${getLabelTextStyle(
          variantKey
        )}`}
      >
        {label}
      </div>
      {!!directionDown && (
        <img
          className={`h-[0.75rem] w-[0.75rem] relative object-contain shrink-0 ${getDownIconStyle(
            variantKey
          )}`}
          alt=""
          src={directiondown}
        />
      )}
    </div>
  );
};

export default InteractiveButtonhome;
