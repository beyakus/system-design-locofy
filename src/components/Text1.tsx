import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Text1Type = {
  className?: string;
  text?: string;

  /** Variant props */
  variant?: CSSProperties["variant"];

  /** Style props */
  textAlignSelf?: CSSProperties["alignSelf"];
  textColor?: CSSProperties["color"];
  textTextAlign?: CSSProperties["textAlign"];
  textAlignSelf1?: CSSProperties["alignSelf"];
};

const getTextContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "次要":
      return "[&]:flex [&]:[flex-shrink:unset]";
  }
};

const Text1: FunctionComponent<Text1Type> = ({
  className = "",
  variant = "主要",
  text,
  textAlignSelf,
  textColor,
  textTextAlign,
  textAlignSelf1,
}) => {
  const variantKey = `${variant}`;

  const textStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: textAlignSelf,
    };
  }, [textAlignSelf]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      color: textColor,
      textAlign: textTextAlign,
      alignSelf: textAlignSelf1,
    };
  }, [textColor, textTextAlign, textAlignSelf1]);

  return (
    <div
      className={`overflow-hidden hidden flex-col items-start justify-center shrink-0 text-left text-[0.875rem] text-lightslategray font-pingfang-sc ${getTextContainerStyle(
        variantKey
      )} ${className}`}
      style={textStyle}
    >
      <div className="relative leading-[1.375rem]" style={text1Style}>
        {text}
      </div>
    </div>
  );
};

export default Text1;
