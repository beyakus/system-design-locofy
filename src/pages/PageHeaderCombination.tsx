import { FunctionComponent, type CSSProperties } from "react";
import PageHeader from "../components/PageHeader";
import Paragraph from "../components/Paragraph";

export type PageHeaderCombinationType = {
  variant?: CSSProperties["variant"];
  textTitle?: boolean;
};

const PageHeaderCombination: FunctionComponent<PageHeaderCombinationType> = ({
  variant,
  textTitle,
}) => {
  return (
    <div className="w-[50rem] relative bg-bg-2 max-w-full flex flex-col items-start">
      <PageHeader variant />
      <Paragraph textTitle={textTitle} />
    </div>
  );
};

export default PageHeaderCombination;
