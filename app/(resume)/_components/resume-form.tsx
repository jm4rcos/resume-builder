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
import {
  BriefcaseBusinessIcon,
  GraduationCapIcon,
  LightbulbIcon,
  User2Icon,
} from "lucide-react";
import PersonalInfoForm from "@/components/preview/_components/personal-information-form";
import ExperienceForm from "@/components/preview/_components/experience-form";
import EducationForm from "@/components/preview/_components/education-form";
import SkillsForm from "@/components/preview/_components/skills-form";

interface ResumeFormProps {
  form: UseFormReturn<ResumeFormData>;
}

export default function ResumeForm({ form }: ResumeFormProps) {
  const { onSubmit, onError } = useResumeForm();

  const [expandedItems, setExpandedItems] = useState(["personal-info"]);

  const error = form.formState.errors;

  return (
    <div className="w-full pb-20 overflow-auto h-screen p-4 bg-background">
      <div className="md:flex hidden p-2 justify-between gap-2 bg-foreground  rounded-lg mb-6">
        <Button type="button" className="w-full bg-background">
          Create
        </Button>
        <Button
          type="button"
          disabled
          className="w-full cursor-not-allowed bg-transparent border-0"
        >
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
            <AccordionTrigger icon={User2Icon} error={error.personalInfo}>
              Personal Information
            </AccordionTrigger>
            <AccordionContent>
              <PersonalInfoForm />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="experiences">
            <AccordionTrigger
              icon={BriefcaseBusinessIcon}
              error={error.experience}
            >
              Experiences
            </AccordionTrigger>
            <AccordionContent>
              <ExperienceForm />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="education">
            <AccordionTrigger icon={GraduationCapIcon} error={error.education}>
              Education
            </AccordionTrigger>
            <AccordionContent>
              <EducationForm />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="skills">
            <AccordionTrigger icon={LightbulbIcon} error={error.skills}>
              Skills
            </AccordionTrigger>
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
