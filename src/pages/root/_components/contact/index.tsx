import { useRef } from "react";

import { QUERYELEMENT, ROOTSECTION } from "@/constants/enums";
import { Separator } from "@/components/shadcn/separator";
import { useObserver } from "@/lib/hooks/useObserver";
import { cn } from "@/lib/utils";

import { OtherContacts } from "./other-contacts";
import { ContactForm } from "./contact-form";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useObserver({ elementRef: sectionRef, threshold: 0.5 });

  return (
    <section
      id={ROOTSECTION.contact}
      ref={sectionRef}
      className={cn(
        "min-h-dvh pt-14 pb-6 flex-between flex-col gap-y-6 px-4 xl:px-0 overflow-hidden",
        QUERYELEMENT.rootSection
      )}
    >
      <div className="leading-none flex-center flex-col">
        <h4 className="text-xs lg:text-sm font-bold text-center tracking-widest pt-6 lg:pb-2">
          CONTACT
        </h4>
        <p className="text-xl lg:text-5xl text-center">
          Connect, Collaborate, <span className="text-primary">Create.</span>
        </p>
        <p className="text-xs lg:text-sm text-muted-foreground text-center lg:mt-2 w-3/4 lg:w-full">
          Building meaningful connections to inspire innovation and growth.
        </p>
      </div>

      <ContactForm isVisible={isVisible} />

      <div className="flex-center w-full gap-x-4">
        <Separator />
        <p className="whitespace-nowrap text-xs font-semibold text-muted-foreground">
          or via
        </p>
        <Separator />
      </div>

      <OtherContacts isVisible={isVisible} />
    </section>
  );
};

export { Contact };
