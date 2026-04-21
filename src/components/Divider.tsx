import { FunctionComponent, type CSSProperties } from "react";

export type DividerType = {
  className?: string;

  /** Variant props */
  variant?: CSSProperties["variant"];
};

const Divider: FunctionComponent<DividerType> = ({
  className = "",
  variant = "水平",
}) => {
  return (
    <div className={`h-[1rem] bg-gainsboro flex items-center ${className}`}>
      <img
        className="self-stretch w-[0.063rem] relative max-w-full overflow-hidden max-h-full"
        alt=""
        src="/line.svg"
      />
    </div>
  );
};

export default Divider;
