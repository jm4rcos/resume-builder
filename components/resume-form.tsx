"use client";

import { useState } from "react";
import { FormProvider } from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import PersonalInfoForm from "./preview/_components/personal-information-form";
import { useResumeForm } from "@/hooks/use-resume-form";
import ExperienceForm from "./preview/_components/experience-form";
import EducationForm from "./preview/_components/education-form";
import SkillsForm from "./preview/_components/skills-form";

export default function ResumeForm() {
  const { form, onSubmit, onError } = useResumeForm();

  const [expandedItems, setExpandedItems] = useState(["personal-info"]);

  return (
    <FormProvider {...form}>
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex justify-between mb-6">
          <Button variant="outline">Create</Button>
          <Button variant="outline">Templates</Button>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
          <Accordion
            type="multiple"
            value={expandedItems}
            onValueChange={setExpandedItems}
            className="w-full space-y-4"
          >
            <AccordionItem value="personal-info">
              <AccordionTrigger>Personal Information</AccordionTrigger>
              <AccordionContent>
                <PersonalInfoForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="employment-history">
              <AccordionTrigger>Employment History</AccordionTrigger>
              <AccordionContent>
                <ExperienceForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education">
              <AccordionTrigger>Education</AccordionTrigger>
              <AccordionContent>
                <EducationForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="skills">
              <AccordionTrigger>Skills</AccordionTrigger>
              <AccordionContent>
                <SkillsForm />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button type="submit" className="w-full mt-6">
            Submit Resume
          </Button>
        </form>
      </div>
    </FormProvider>
  );
}
