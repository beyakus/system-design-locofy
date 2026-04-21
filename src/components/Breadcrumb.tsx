import { FunctionComponent, type CSSProperties } from "react";
import InteractiveButtonhome, {
  getHomeIconStyle,
} from "./InteractiveButtonhome";
import EditobliqueLine from "./EditobliqueLine";

export type BreadcrumbType = {
  className?: string;
  componentsseparatorVariant?: CSSProperties["variant"];
  componentsseparatorVariant1?: CSSProperties["variant"];

  /** Variant props */
  variant?: CSSProperties["variant"];
};

const Breadcrumb: FunctionComponent<BreadcrumbType> = ({
  className = "",
  variant = "斜杠分隔符",
  componentsseparatorVariant,
  componentsseparatorVariant1,
}) => {
  const variantKey = `${variant}`;
  return (
    <div
      className={`flex items-center py-[0.062rem] px-[0rem] text-left text-[0.875rem] text-dimgray font-pingfang-sc ${className}`}
    >
      <InteractiveButtonhome
        variant={false}
        label="Home"
        directiondown="/direction-down@2x.png"
        directionDown={false}
        interactiveButtonHome={false}
        interactiveButtonHome1={
          <img
            className={`h-[1rem] w-[1rem] relative shrink-0 h-[1rem] w-[1rem] relative shrink-0 ${getHomeIconStyle(
              variantKey
            )}`}
            alt=""
            src="/interactive-button-home.svg"
          />
        }
      />
      <EditobliqueLine variant={componentsseparatorVariant} />
      <InteractiveButtonhome
        variant={false}
        label="Channel"
        directiondown="/direction-down@2x.png"
        directionDown={false}
        interactiveButtonHome={false}
        interactiveButtonHome1={
          <img
            className="h-[1rem] w-[1rem] relative hidden shrink-0"
            alt=""
            src="/interactive-button-home.svg"
          />
        }
      />
      <EditobliqueLine variant={componentsseparatorVariant1} />
      <InteractiveButtonhome
        variant
        label="News"
        directiondown="/direction-down1@2x.png"
        directionDown={false}
        interactiveButtonHome={false}
        interactiveButtonHome1={
          <img
            className="h-[1rem] w-[1rem] relative hidden shrink-0"
            alt=""
            src="/interactive-button-home.svg"
          />
        }
      />
    </div>
  );
};

export default Breadcrumb;
