import { FunctionComponent, type CSSProperties } from "react";

export type EditobliqueLineType = {
  className?: string;

  /** Variant props */
  variant?: CSSProperties["variant"];
};

const EditobliqueLine: FunctionComponent<EditobliqueLineType> = ({
  className = "",
  variant = "斜杠分隔符",
}) => {
  return (
    <div className={`overflow-hidden flex items-center ${className}`}>
      <img
        className="h-[0.75rem] w-[0.75rem] relative"
        loading="lazy"
        alt=""
        src="/edit-oblique-line.svg"
      />
    </div>
  );
};

export default EditobliqueLine;
