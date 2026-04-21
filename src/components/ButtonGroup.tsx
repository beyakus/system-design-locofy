import { FunctionComponent, type CSSProperties } from "react";
import Tipsplus, { getPlusIconStyle } from "./Tipsplus";

export type ButtonGroupType = {
  className?: string;

  /** Variant props */
  variant?: CSSProperties["variant"];
};

const ButtonGroup: FunctionComponent<ButtonGroupType> = ({
  className = "",
  variant = false,
}) => {
  const variantKey = `${variant}`;
  return (
    <div className={`flex items-center gap-[0.5rem] ${className}`}>
      <Tipsplus
        variant="次要按钮"
        buttonText="Cancel"
        tipsPlus={false}
        tipsPlus1={
          <img
            className="h-[0.875rem] w-[0.875rem] relative hidden"
            alt=""
            src="/tips-plus.svg"
          />
        }
      />
      <Tipsplus
        variant="主要按钮"
        buttonText="Save"
        tipsPlus={false}
        tipsPlus1={
          <img
            className={`h-[0.875rem] w-[0.875rem] relative h-[0.875rem] w-[0.875rem] relative ${getPlusIconStyle(
              variantKey
            )}`}
            alt=""
            src="/tips-plus.svg"
          />
        }
      />
    </div>
  );
};

export default ButtonGroup;
