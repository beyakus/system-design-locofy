import { FunctionComponent, type CSSProperties } from "react";

export type TipscheckCircleFillType = {
  className?: string;
  tag?: string;
  tipsClose?: boolean;
  tipsCheckCircleFill?: boolean;
  tipsCheckCircleFill1?: React.ReactNode;

  /** Variant props */
  variant?: CSSProperties["variant"];
};

const TipscheckCircleFill: FunctionComponent<TipscheckCircleFillType> = ({
  className = "",
  variant = "小",
  tag = "Default",
  tipsClose = false,
  tipsCheckCircleFill = false,
  tipsCheckCircleFill1,
}) => {
  return (
    <div
      className={`rounded-num-2 bg-mistyrose overflow-hidden flex items-center py-[0rem] px-[0.5rem] gap-[0.25rem] text-left text-[0.75rem] text-tomato font-pingfang-sc ${className}`}
    >
      {tipsCheckCircleFill1}
      <div className="relative leading-[1.25rem] font-medium shrink-0">
        {tag}
      </div>
      {!!tipsClose && (
        <img
          className="h-[0.75rem] w-[0.75rem] relative shrink-0"
          alt=""
          src="/tips-close.svg"
        />
      )}
    </div>
  );
};

export default TipscheckCircleFill;
