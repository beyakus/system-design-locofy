import { FunctionComponent, type CSSProperties } from "react";
import Breadcrumb from "./Breadcrumb";
import ButtonGroup from "./ButtonGroup";
import Directionleft from "./Directionleft";
import Horizontal from "./Horizontal";

export type PageHeaderType = {
  className?: string;

  /** Variant props */
  variant?: CSSProperties["variant"];
};

const PageHeader: FunctionComponent<PageHeaderType> = ({
  className = "",
  variant = false,
}) => {
  return (
    <section
      className={`self-stretch bg-bg-2 border-gainsboro border-solid border-b-[1px] flex flex-col items-start py-[0.75rem] px-[1.5rem] gap-[0.25rem] text-left text-[0.875rem] text-dimgray font-pingfang-sc ${className}`}
    >
      <Breadcrumb
        variant="斜杠分隔符"
        componentsseparatorVariant="斜杠分隔符"
        componentsseparatorVariant1="斜杠分隔符"
      />
      <Horizontal
        variant
        buttonGroup={<ButtonGroup variant />}
        componentsHeadingMain={
          <Directionleft
            variant
            tag
            divider
            directionLeft
            variant1="垂直"
            variant21={false}
            variant31={false}
            variant4="无"
          />
        }
      />
    </section>
  );
};

export default PageHeader;
