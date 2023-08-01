import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QuestionsAboutProject = () => {
  return (
    <div
      id="questions"
      className="flex flex-col items-center justify-center max-w-xs mx-auto mt-16 sm:max-w-xl md:max-w-3xl xl:max-w-6xl"
    >
      <h4 className="text-4xl font-bold text-center md:text-5xl text-third_color">
        Somes questions about the project...
      </h4>
      <p className="mt-4 text-base text-center md:text-lg text-paragrapheColor">
        Here is a compilation of topics that we believe you might have questions
        about regarding Study Trackr.
      </p>
      <Accordion type="single" collapsible className="w-full mt-12 [&>*]:p-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. Its animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default QuestionsAboutProject;
