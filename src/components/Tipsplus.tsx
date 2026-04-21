import { FunctionComponent, type CSSProperties } from "react";

export type TipsplusType = {
  className?: string;
  buttonText?: string;
  tipsPlus?: boolean;
  tipsPlus1?: React.ReactNode;

  /** Variant props */
  variant?: CSSProperties["variant"];
};

const getTipsplusStyle = (styleKey: string) => {
  switch (styleKey) {
    case "次要按钮":
      return "[&]:bg-whitesmoke";
  }
};
export const getPlusIconStyle = (styleKey: string) => {
  switch (styleKey) {
    case "次要按钮":
      return "[&]:hidden";
  }
};
const getButtonText1Style = (styleKey: string) => {
  switch (styleKey) {
    case "次要按钮":
      return "[&]:text-dimgray";
  }
};

const Tipsplus: FunctionComponent<TipsplusType> = ({
  className = "",
  variant = "主要按钮",
  buttonText,
  tipsPlus = false,
  tipsPlus1,
}) => {
  const variantKey = `${variant}`;

  return (
    <button
      className={`cursor-pointer [border:none] py-[0.312rem] px-[1rem] bg-mediumslateblue rounded-num-2 overflow-hidden flex items-center justify-center gap-[0.5rem] ${getTipsplusStyle(
        variantKey
      )} ${className}`}
    >
      {tipsPlus1}
      <div
        className={`relative text-[0.875rem] leading-[1.375rem] font-pingfang-sc text-bg-2 text-left ${getButtonText1Style(
          variantKey
        )}`}
      >
        {buttonText}
      </div>
    </button>
  );
};

export default Tipsplus;
