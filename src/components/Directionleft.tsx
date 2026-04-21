import { FunctionComponent, type CSSProperties } from "react";
import Title from "./Title";
import Divider from "./Divider";
import Text1 from "./Text1";
import TipscheckCircleFill from "./TipscheckCircleFill";

export type DirectionleftType = {
  className?: string;
  tag?: boolean;
  divider?: boolean;
  directionLeft?: boolean;
  variant1?: CSSProperties["variant"];
  variant21?: CSSProperties["variant2"];
  variant31?: CSSProperties["variant3"];
  variant4?: CSSProperties["variant4"];

  /** Variant props */
  variant?: CSSProperties["variant"];
};

const Directionleft: FunctionComponent<DirectionleftType> = ({
  className = "",
  variant = false,
  tag = true,
  divider = true,
  directionLeft = true,
  variant1,
  variant21,
  variant31,
  variant4,
}) => {
  return (
    <div
      className={`flex items-center gap-[0.75rem] text-left text-[1.25rem] text-gray font-pingfang-sc ${className}`}
    >
      {!!directionLeft && (
        <img
          className="h-[1rem] w-[1rem] relative"
          loading="lazy"
          alt=""
          src="/direction-left.svg"
        />
      )}
      <Title
        variant
        title="ArcoDesign"
        textText={false}
        iconWrapper={false}
        showTitle
        variant1="主要"
        text="This is a subtitle"
      />
      {!!divider && <Divider variant={variant1} />}
      <Text1
        variant="次要"
        text="This is a description"
        textAlignSelf="unset"
        textColor="#86909c"
        textTextAlign="left"
        textAlignSelf1="unset"
      />
      {!!tag && (
        <TipscheckCircleFill
          variant="迷你"
          tag="Default"
          tipsClose={false}
          tipsCheckCircleFill={false}
          tipsCheckCircleFill1={
            <img
              className="h-[0.75rem] w-[0.75rem] relative shrink-0 h-[0.75rem] w-[0.75rem] relative shrink-0"
              alt=""
              src="/tips-check-circle-fill.svg"
            />
          }
        />
      )}
    </div>
  );
};

export default Directionleft;
