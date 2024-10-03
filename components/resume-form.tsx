"use client";

import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

import { useResumeForm } from "@/hooks/use-resume-form";
import { ResumeFormData } from "@/interfaces";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ExperienceForm from "./preview/_components/experience-form";
import EducationForm from "./preview/_components/education-form";
import SkillsForm from "./preview/_components/skills-form";
import PersonalInfoForm from "./preview/_components/personal-information-form";

interface ResumeFormProps {
  form: UseFormReturn<ResumeFormData>;
}

export default function ResumeForm({ form }: ResumeFormProps) {
  const { onSubmit, onError } = useResumeForm();

  const [expandedItems, setExpandedItems] = useState(["personal-info"]);

  const error = form.formState.errors;

  return (
    <div className="w-full pb-20 overflow-auto h-screen p-4 bg-background">
      <div className="flex justify-between gap-2 bg-foreground p-2 rounded-lg mb-6">
        <Button type="button" className="w-full bg-background">
          Create
        </Button>
        <Button type="button" className="w-full bg-transparent border-0">
          Templates
        </Button>
      </div>

      <form className="w-full" onSubmit={form.handleSubmit(onSubmit, onError)}>
        <Accordion
          type="multiple"
          value={expandedItems}
          onValueChange={setExpandedItems}
          className="w-full"
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

        <Button variant="primary" type="submit" className="w-full mt-6">
          Submit Resume
        </Button>
      </form>
    </div>
  );
}
