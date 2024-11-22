import React, { Profiler } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import FormSection from "../components/FormSection";
import SprintTable from "../components/SprintTable";
import ResourceTable from "../components/ResourceTable";
import Header from "../components/header/Header";
import Understanding from "../components/understanding/Understanding";
import Goals from "../components/goals/Goals";
import TSM from "../components/tsm/tsm";
import TechStack from "../components/techStack/TechStack";
import CaseStudies from "../components/caseStudies/CaseStudies";
import Profiles from "../components/profiles/Profiles";
import PerformanceObjectives from "../components/performance/Performance";
import TeamStructure from "../components/team/Team";
import Cost from "../components/cost/Cost";
import Client from "../components/client/Client";



const FormPage = () => {
  const methods = useForm({
    defaultValues: {
      sections: {
        header: false,
        sprints: false,
        resources: false,
      },
      sprints: [],
      resources: [],
    },
    mode: "onBlur", // Validation trigger mode (onBlur, onChange, etc.)
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Handle PDF generation or API submission here
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="container mx-auto p-6"
      >
        {/* 1 Header Component */}
        <FormSection sectionId="header" title="Header">
          <Header />
        </FormSection>

        {/* 2 Project UnderStanding */}
        <FormSection sectionId="understandings" title="Project Understandings">
          <Understanding />
        </FormSection>

        {/* 3   Goals and Objectives */}
        <FormSection sectionId="goals" title="Goals & Objectives">
          <Goals />
        </FormSection>

        
        {/* 4 Phases Table */}
        <FormSection sectionId="phases" title="Phases Table ">
          <SprintTable/>
        </FormSection>

        {/* 5 Training, Support, Maintenance  */}
        <FormSection sectionId="tsm" title="Training, Support, Maintenance">
          <TSM />
        </FormSection>


        {/* 6 Resources (table)  */}
        <FormSection sectionId="resources" title="Resources">
          <ResourceTable />
        </FormSection>


        {/* 7 Tech Stack */}
        <FormSection sectionId="tech_stack" title="Tech Stack">
          <TechStack/>
        </FormSection>


        {/* 8 Performance Objectives  */}
        <FormSection sectionId="performance_objectives" title="Performance Objectives">
          <PerformanceObjectives/>
        </FormSection>

        {/* 9 Team Structure (table selectable)  */}
        <FormSection sectionId="team" title="Team Structure">
          <TeamStructure/>
        </FormSection>


        {/* 10 Additional Cost */}
        <FormSection sectionId="cost" title="Additional Cost">
          <Cost/>
        </FormSection>



        {/* 11 Case Studies  */}
        <FormSection sectionId="case_studies" title="Case Studies">
          <CaseStudies/>
        </FormSection>


        {/* 12 Client References */}
        <FormSection sectionId="client" title="Client References">
          <Client/>
        </FormSection>



        {/* 13 Profiles */}
        <FormSection sectionId="profiles" title="Profiles">
          <Profiles/>
        </FormSection>

        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded"
        >
          Generate PDF
        </button>
      </form>
    </FormProvider>
  );
};

export default FormPage;
