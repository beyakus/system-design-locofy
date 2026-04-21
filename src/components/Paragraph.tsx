import { FunctionComponent } from "react";
import Title from "./Title";
import Text1 from "./Text1";

export type ParagraphType = {
  className?: string;
  textTitle?: boolean;
};

const Paragraph: FunctionComponent<ParagraphType> = ({
  className = "",
  textTitle = false,
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start py-[1.25rem] px-[2rem] gap-[1rem] ${className}`}
    >
      {!!textTitle && (
        <Title
          title="For other uses, see Design"
          textText={false}
          iconWrapper={false}
          showTitle={false}
          variant1="主要"
          text="This is a subtitle"
          textAlignSelf="unset"
          textColor="#86909c"
          textTextAlign="left"
        />
      )}
      <Text1
        variant="主要"
        text="A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design expresses the process of developing a design. In some cases, the direct construction of an object without an explicit prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be considered to be a design activity. The design usually has to satisfy certain goals and constraints, may take into account aesthetic, functional, economic, or socio-political considerations, and is expected to interact with a certain environment. Major examples of designs include architectural blueprints,engineering drawings, business processes, circuit diagrams, and sewing patterns.Major examples of designs include architectural blueprints,engineering drawings, business processes, circuit diagrams, and sewing patterns."
        textAlignSelf="stretch"
        textColor="#1d2129"
        textTextAlign="justify"
        textAlignSelf1="stretch"
      />
      <div className="overflow-hidden flex items-center gap-[31.25rem] shrink-0">
        <div className="h-[0rem] w-[0rem] relative" />
        <div className="h-[0rem] w-[0rem] relative" />
      </div>
    </section>
  );
};

export default Paragraph;
