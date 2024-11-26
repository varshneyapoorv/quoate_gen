// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import "./FormPage.css";

import FormSection from "../components/FormSection";
import SprintTable from "../components/SprintTable";
import ResourceTable from "../components/ResourceTable";
import Header from "../components/header/Header";
import Understanding from "../components/understanding/Understanding";
import Goals from "../components/goals/Goals";

import TechStack from "../components/techStack/TechStack";
import CaseStudies from "../components/caseStudies/CaseStudies";
import Profiles from "../components/profiles/Profiles";
import PerformanceObjectives from "../components/performance/Performance";
import TeamStructure from "../components/team/Team";
import Cost from "../components/cost/Cost";
import Client from "../components/client/Client";
import TSM from "../components/trainning_support/tsm";
import Project from "../components/understanding/Project";

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
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {/* Header */}
        <FormSection sectionId="header" title="Header">
          <Header />
        </FormSection>

        {/* Understandings */}
        {/* <FormSection sectionId="understandings" title="Project Understandings">
          <Understanding />
        </FormSection> */}
        <FormSection sectionId="projects" title="Project Understandings">
          <Project/>
        </FormSection>

        {/* Goals */}
        <FormSection sectionId="goals" title="Goals & Objectives">
          <Goals />
        </FormSection>

        {/* Sprint Table */}
        <FormSection sectionId="phases" title="Phases Table">
          <SprintTable />
        </FormSection>

        {/* Training, Support, Maintenance */}
        <FormSection sectionId="tsm" title="Training, Support, Maintenance">
          <TSM/>
        </FormSection>

        {/* Resources */}
        <FormSection sectionId="resources" title="Resources">
          <ResourceTable />
        </FormSection>

        {/* Tech Stack */}
        <FormSection sectionId="tech_stack" title="Tech Stack">
          <TechStack />
        </FormSection>

        {/* Performance Objectives */}
        <FormSection sectionId="performance_objectives" title="Performance Objectives">
          <PerformanceObjectives />
        </FormSection>

        {/* Team Structure */}
        <FormSection sectionId="team" title="Team Structure">
          <TeamStructure />
        </FormSection>

        {/* Additional Costs */}
        <FormSection sectionId="cost" title="Additional Costs">
          <Cost />
        </FormSection>

        {/* Case Studies */}
        <FormSection sectionId="case_studies" title="Case Studies">
          <CaseStudies />
        </FormSection>

        {/* Client References */}
        <FormSection sectionId="client" title="Client References">
          <Client />
        </FormSection>

        {/* Profiles */}
        <FormSection sectionId="profiles" title="Profiles">
          <Profiles />
        </FormSection>

        {/* Submit Button */}
        <button type="submit">Generate PDF</button>
      </form>
    </FormProvider>
  );
};

export default FormPage;




// for final validation if any of it field is empty
// import React from "react";
// import { useForm, FormProvider } from "react-hook-form";
// import FormSection from "../components/FormSection";
// import SprintTable from "../components/SprintTable";
// import ResourceTable from "../components/ResourceTable";
// import Header from "../components/header/Header";
// import Understanding from "../components/understanding/Understanding";
// import Goals from "../components/goals/Goals";
// import TSM from "../components/tsm/tsm";
// import TechStack from "../components/techStack/TechStack";
// import CaseStudies from "../components/caseStudies/CaseStudies";
// import Profiles from "../components/profiles/Profiles";
// import PerformanceObjectives from "../components/performance/Performance";
// import TeamStructure from "../components/team/Team";
// import Cost from "../components/cost/Cost";
// import Client from "../components/client/Client";

// const FormPage = () => {
//   const methods = useForm({
//     defaultValues: {
//       header: "",
//       understandings: "",
//       goals: "",
//       phases: "",
//       tsm: "",
//       resources: "",
//       tech_stack: "",
//       performance_objectives: "",
//       team: "",
//       cost: "",
//       case_studies: "",
//       client: "",
//       profiles: "",
//     },
//     mode: "onChange", // Real-time validation
//   });

//   const { handleSubmit, watch, formState: { isValid } } = methods;

//   // Watch all form values
//   const formValues = watch();

//   // Check if any section is empty
//   const isFormIncomplete = Object.values(formValues).some((value) =>
//     typeof value === "string" ? value.trim() === "" : value === ""
//   );

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//     // Handle PDF generation or API submission here
//   };

//   return (
//     <FormProvider {...methods}>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="container mx-auto p-6"
//       >
//         {/* 1 Header Component */}
//         <FormSection sectionId="header" title="Header">
//           <Header />
//         </FormSection>

//         {/* 2 Project Understandings */}
//         <FormSection sectionId="understandings" title="Project Understandings">
//           <Understanding />
//         </FormSection>

//         {/* 3 Goals and Objectives */}
//         <FormSection sectionId="goals" title="Goals & Objectives">
//           <Goals />
//         </FormSection>

//         {/* 4 Phases Table */}
//         <FormSection sectionId="phases" title="Phases Table">
//           <SprintTable />
//         </FormSection>

//         {/* 5 Training, Support, Maintenance */}
//         <FormSection sectionId="tsm" title="Training, Support, Maintenance">
//           <TSM />
//         </FormSection>

//         {/* 6 Resources (table) */}
//         <FormSection sectionId="resources" title="Resources">
//           <ResourceTable />
//         </FormSection>

//         {/* 7 Tech Stack */}
//         <FormSection sectionId="tech_stack" title="Tech Stack">
//           <TechStack />
//         </FormSection>

//         {/* 8 Performance Objectives */}
//         <FormSection sectionId="performance_objectives" title="Performance Objectives">
//           <PerformanceObjectives />
//         </FormSection>

//         {/* 9 Team Structure */}
//         <FormSection sectionId="team" title="Team Structure">
//           <TeamStructure />
//         </FormSection>

//         {/* 10 Additional Cost */}
//         <FormSection sectionId="cost" title="Additional Cost">
//           <Cost />
//         </FormSection>

//         {/* 11 Case Studies */}
//         <FormSection sectionId="case_studies" title="Case Studies">
//           <CaseStudies />
//         </FormSection>

//         {/* 12 Client References */}
//         <FormSection sectionId="client" title="Client References">
//           <Client />
//         </FormSection>

//         {/* 13 Profiles */}
//         <FormSection sectionId="profiles" title="Profiles">
//           <Profiles />
//         </FormSection>

//         {/* Generate PDF Button */}
//         <button
//           type="submit"
//           disabled={isFormIncomplete || !isValid} // Disable button if form is incomplete or invalid
//           className={`mt-6 px-4 py-2 rounded ${
//             isFormIncomplete || !isValid
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-green-500 hover:bg-green-600"
//           } text-white`}
//         >
//           Generate PDF
//         </button>
//       </form>
//     </FormProvider>
//   );
// };

// export default FormPage;