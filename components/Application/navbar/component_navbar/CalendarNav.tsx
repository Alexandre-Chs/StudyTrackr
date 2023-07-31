import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

const CalendarNav = () => {
  return (
    <div className="flex">
      <div className="mr-2">
        <CalendarDays />
      </div>
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Schedule</AccordionTrigger>
            <AccordionContent className="text-textViolet">
              <Link href="/application/schedule">All tasks</Link>
            </AccordionContent>
            <AccordionContent className="text-textViolet">
              <Link href="#">Add new task</Link>
            </AccordionContent>
            <AccordionContent className="text-textViolet">
              <Link href="#">Tasks with high priority</Link>
            </AccordionContent>
            <AccordionContent className="text-textViolet">
              <Link href="#">Pending tasks</Link>
            </AccordionContent>
            <AccordionContent className="text-textViolet">
              <Link href="#">Recurring tasks</Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default CalendarNav;
