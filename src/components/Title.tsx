import { FunctionComponent, type CSSProperties } from "react";
import Text1 from "./Text1";

export type TitleType = {
  className?: string;
  title?: string;
  textText?: boolean;
  iconWrapper?: boolean;
  showTitle?: boolean;
  variant1?: CSSProperties["variant"];
  text?: string;
  textAlignSelf?: CSSProperties["alignSelf"];
  textColor?: CSSProperties["color"];
  textTextAlign?: CSSProperties["textAlign"];

  /** Variant props */
  variant?: CSSProperties["variant"];
};

const Title: FunctionComponent<TitleType> = ({
  className = "",
  variant = false,
  title = "ArcoDesign",
  textText = false,
  iconWrapper = false,
  showTitle,
  variant1 = "主要",
  text,
  textAlignSelf,
  textColor,
  textTextAlign,
}) => {
  return (
    !!showTitle && (
      <div
        className={`overflow-hidden flex items-end gap-[0.25rem] text-left text-[1.25rem] text-gray font-pingfang-sc ${className}`}
      >
        <h3 className="m-0 relative text-[length:inherit] leading-[1.75rem] font-medium font-[inherit] shrink-0">
          {title}
        </h3>
        {!!iconWrapper && (
          <div className="h-[1.5rem] overflow-hidden flex flex-col items-center justify-center shrink-0">
            <img
              className="w-[1rem] h-[1rem] relative"
              alt=""
              src="/tips-question-circle.svg"
            />
          </div>
        )}
        {!!textText && (
          <Text1
            variant={variant1}
            text={text}
            textAlignSelf={textAlignSelf}
            textColor={textColor}
            textTextAlign={textTextAlign}
          />
        )}
      </div>
    )
  );
};

export default Title;
