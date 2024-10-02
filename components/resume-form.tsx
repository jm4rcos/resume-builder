"use client";

import { useState } from "react";
import { FormProvider } from "react-hook-form";

import { useResumeForm } from "@/hooks/use-resume-form";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import PersonalInfoForm from "./preview/_components/personal-information-form";
import ExperienceForm from "./preview/_components/experience-form";
import EducationForm from "./preview/_components/education-form";
import SkillsForm from "./preview/_components/skills-form";

export default function ResumeForm() {
  const { form, onSubmit, onError } = useResumeForm();

  const [expandedItems, setExpandedItems] = useState(["personal-info"]);

  const error = form.formState.errors;

  return (
    <FormProvider {...form}>
      <div className="w-full max-w-[250px] overflow-auto h-screen p-4 bg-background">
        <div className="flex justify-between mb-6">
          <Button variant="outline">Create</Button>
          <Button variant="outline">Templates</Button>
        </div>

        <form
          className="w-full"
          onSubmit={form.handleSubmit(onSubmit, onError)}
        >
          <Accordion
            type="multiple"
            value={expandedItems}
            onValueChange={setExpandedItems}
            className="w-full space-y-4"
          >
            <AccordionItem value="personalInfo">
              <AccordionTrigger error={error.personalInfo}>
                Personal Information
              </AccordionTrigger>
              <AccordionContent>
                <PersonalInfoForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="experiences">
              <AccordionTrigger error={error.experience}>
                Experiences
              </AccordionTrigger>
              <AccordionContent>
                <ExperienceForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education">
              <AccordionTrigger error={error.education}>
                Education
              </AccordionTrigger>
              <AccordionContent>
                <EducationForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="skills">
              <AccordionTrigger error={error.skills}>Skills</AccordionTrigger>
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
