import { FunctionComponent, type CSSProperties } from "react";
import Directionleft from "./Directionleft";
import ButtonGroup from "./ButtonGroup";

export type HorizontalType = {
  className?: string;
  buttonGroup?: React.ReactNode;
  componentsHeadingMain?: React.ReactNode;

  /** Variant props */
  variant?: CSSProperties["variant"];
};

const Horizontal: FunctionComponent<HorizontalType> = ({
  className = "",
  variant = false,
  buttonGroup,
  componentsHeadingMain,
}) => {
  return (
    <div
      className={`self-stretch flex items-center justify-between gap-[1.25rem] text-left text-[1.25rem] text-gray font-pingfang-sc ${className}`}
    >
      {buttonGroup}
      {buttonGroup}
    </div>
  );
};

export default Horizontal;
