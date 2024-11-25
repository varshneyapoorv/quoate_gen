// import React, { Profiler } from "react";
// import { useForm, FormProvider, useFormContext } from "react-hook-form";
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
//       sections: {
//         header: false,
//         sprints: false,
//         resources: false,
//       },
//       sprints: [],
//       resources: [],
//     },
//     mode: "onBlur", // Validation trigger mode (onBlur, onChange, etc.)
//   });

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//     // Handle PDF generation or API submission here
//   };

//   return (
//     <FormProvider {...methods}>
//       <form
//         onSubmit={methods.handleSubmit(onSubmit)}
//         className="container mx-auto p-6"
//       >
//         {/* 1 Header Component */}
//         <FormSection sectionId="header" title="Header">
//           <Header />
//         </FormSection>

//         {/* 2 Project UnderStanding */}
//         <FormSection sectionId="understandings" title="Project Understandings">
//           <Understanding />
//         </FormSection>

//         {/* 3   Goals and Objectives */}
//         <FormSection sectionId="goals" title="Goals & Objectives">
//           <Goals />
//         </FormSection>

        
//         {/* 4 Phases Table */}
//         <FormSection sectionId="phases" title="Phases Table ">
//           <SprintTable/>
//         </FormSection>

//         {/* 5 Training, Support, Maintenance  */}
//         <FormSection sectionId="tsm" title="Training, Support, Maintenance">
//           <TSM />
//         </FormSection>


//         {/* 6 Resources (table)  */}
//         <FormSection sectionId="resources" title="Resources">
//           <ResourceTable />
//         </FormSection>


//         {/* 7 Tech Stack */}
//         <FormSection sectionId="tech_stack" title="Tech Stack">
//           <TechStack/>
//         </FormSection>


//         {/* 8 Performance Objectives  */}
//         <FormSection sectionId="performance_objectives" title="Performance Objectives">
//           <PerformanceObjectives/>
//         </FormSection>

//         {/* 9 Team Structure (table selectable)  */}
//         <FormSection sectionId="team" title="Team Structure">
//           <TeamStructure/>
//         </FormSection>


//         {/* 10 Additional Cost */}
//         <FormSection sectionId="cost" title="Additional Cost">
//           <Cost/>
//         </FormSection>



//         {/* 11 Case Studies  */}
//         <FormSection sectionId="case_studies" title="Case Studies">
//           <CaseStudies/>
//         </FormSection>


//         {/* 12 Client References */}
//         <FormSection sectionId="client" title="Client References">
//           <Client/>
//         </FormSection>



//         {/* 13 Profiles */}
//         <FormSection sectionId="profiles" title="Profiles">
//           <Profiles/>
//         </FormSection>

//         <button
//           type="submit"
//           className="mt-6 px-4 py-2 bg-green-500 text-white rounded"
//         >
//           Generate PDF
//         </button>
//       </form>
//     </FormProvider>
//   );
// };

// export default FormPage;











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















// import React, { useState } from "react";
// import { useForm, FormProvider, useFormContext } from "react-hook-form";
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
// import Checkbox from "../components/Checkbox";

// const FormPage = () => {
//   const methods = useForm({
//     defaultValues: {
//       sections: {
//         header: false,
//         understandings: false,
//         goals: false,
//         phases: false,
//         tsm: false,
//         resources: false,
//         tech_stack: false,
//         performance_objectives: false,
//         team: false,
//         cost: false,
//         case_studies: false,
//         client: false,
//         profiles: false,
//       },
//       header: {
//         title: "",
//         subtitle: "",
//       },
//       understandings: {
//         description: "",
//       },
//       goals: {
//         objectives: "",
//       },
//       // Add similar defaults for other sections
//     },
//     mode: "onBlur",
//   });

//   const { watch, setValue } = methods;

//   const [expandedSections, setExpandedSections] = useState({});
//   const sectionStates = watch("sections");

//   const toggleSection = (sectionId) => {
//     setExpandedSections((prevState) => ({
//       ...prevState,
//       [sectionId]: !prevState[sectionId],
//     }));
//   };

//   const checkValidation = (sectionId, sectionValues) => {
//     const allFieldsFilled = Object.values(sectionValues).every(
//       (value) => value !== "" && value !== undefined
//     );
//     setValue(`sections.${sectionId}`, allFieldsFilled);
//   };

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//     // Handle PDF generation or API submission here
//   };

//   return (
//     <FormProvider {...methods}>
//       <form
//         onSubmit={methods.handleSubmit(onSubmit)}
//         className="container mx-auto p-6"
//       >
//         {Object.keys(sectionStates).map((sectionId) => {
//           const isExpanded = expandedSections[sectionId];
//           const sectionValues = watch(sectionId);

//           return (
//             <div key={sectionId} className="mb-6">
//               {/* Dropdown Header */}
//               <div className="flex items-center justify-between bg-gray-200 p-4 rounded">
//                 <h3 className="font-semibold capitalize">
//                   {sectionId.replace("_", " ")}
//                 </h3>
//                 <button
//                   type="button"
//                   onClick={() => toggleSection(sectionId)}
//                   className="text-blue-500"
//                 >
//                   {isExpanded ? "Hide Input" : "Show Input"}
//                 </button>
//               </div>

//               {/* Form Section Content */}
//               {isExpanded && (
//                 <div className="mt-4">
//                   <FormSection
//                     sectionId={sectionId}
//                     title={sectionId.replace("_", " ")}
//                   >
//                     {sectionId === "header" && (
//                       <Header
//                         onBlur={() =>
//                           checkValidation(sectionId, watch(sectionId))
//                         }
//                       />
//                     )}
//                     {sectionId === "understandings" && (
//                       <Understanding
//                         onBlur={() =>
//                           checkValidation(sectionId, watch(sectionId))
//                         }
//                       />
//                     )}
//                     {sectionId === "goals" && (
//                       <Goals
//                         onBlur={() =>
//                           checkValidation(sectionId, watch(sectionId))
//                         }
//                       />
//                     )}
//                     {sectionId === "phases" && (
//                       <SprintTable
//                         onBlur={() =>
//                           checkValidation(sectionId, watch(sectionId))
//                         }
//                       />
//                     )}
//                     {sectionId === "resources" && (
//                       <ResourceTable
//                         onBlur={() =>
//                           checkValidation(sectionId, watch(sectionId))
//                         }
//                       />
//                     )}
//                     {sectionId === "tech_stack" && (
//                       <TechStack
//                         onBlur={() =>
//                           checkValidation(sectionId, watch(sectionId))
//                         }
//                       />
//                     )}
//                     {sectionId === "performance_objectives" && (
//                       <PerformanceObjectives
//                         onBlur={() =>
//                           checkValidation(sectionId, watch(sectionId))
//                         }
//                       />
//                     )}
//                     {sectionId === "team" && (
//                       <TeamStructure
//                         onBlur={() =>
//                           checkValidation(sectionId, watch(sectionId))
//                         }
//                       />
//                     )}
//                     {sectionId === "cost" && (
//                       <Cost
//                         onBlur={() =>
//                           checkValidation(sectionId, watch(sectionId))
//                         }
//                       />
//                     )}
//                     {sectionId === "case_studies" && (
//                       <CaseStudies
//                         onBlur={() =>
//                           checkValidation(sectionId, watch(sectionId))
//                         }
//                       />
//                     )}
//                     {sectionId === "client" && (
//                       <Client
//                         onBlur={() =>
//                           checkValidation(sectionId, watch(sectionId))
//                         }
//                       />
//                     )}
//                     {sectionId === "profiles" && (
//                       <Profiles
//                         onBlur={() =>
//                           checkValidation(sectionId, watch(sectionId))
//                         }
//                       />
//                     )}
//                   </FormSection>
//                 </div>
//               )}

//               {/* Validation Checkbox */}
//               <Checkbox
//                 label={`Activate ${sectionId.replace("_", " ")}`}
//                 isChecked={sectionStates[sectionId]}
//                 onChange={() =>
//                   setValue(`sections.${sectionId}`, !sectionStates[sectionId])
//                 }
//               />
//             </div>
//           );
//         })}

//         <button
//           type="submit"
//           className="mt-6 px-4 py-2 bg-green-500 text-white rounded"
//           disabled={Object.values(sectionStates).some((state) => !state)}
//         >
//           Generate PDF
//         </button>
//       </form>
//     </FormProvider>
//   );
// };

// export default FormPage;



import React, { useState } from "react";
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
import Checkbox from "../components/Checkbox";

const FormPage = () => {
  const methods = useForm({
    defaultValues: {
      sections: {
        header: false,
        sprints: false,
        resources: false,
        understanding: false,
        goals: false,
        tsm: false,
        techStack: false,
        caseStudies: false,
        profiles: false,
        performanceObjectives: false,
        team: false,
        cost: false,
        client: false,
      },
      sprints: [],
      resources: [],
    },
    mode: "onBlur", // Validation trigger mode (onBlur, onChange, etc.)
  });

  const [activeSections, setActiveSections] = useState({
    header: false,
    sprints: false,
    resources: false,
    understanding: false,
    goals: false,
    tsm: false,
    techStack: false,
    caseStudies: false,
    profiles: false,
    performanceObjectives: false,
    team: false,
    cost: false,
    client: false,
  });

  const handleSectionToggle = (section) => {
    setActiveSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));

    // Reset form fields when deactivating a section
    if (!activeSections[section]) {
      methods.resetField(section); // Reset specific section fields
    }
  };

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
        {/* Header Section */}
        <FormSection sectionId="header" title="Header">
          <Checkbox
            label="Activate Header"
            isChecked={activeSections.header}
            onChange={() => handleSectionToggle("header")}
          />
          {activeSections.header && <Header />}
        </FormSection>

        {/* Project Understanding Section */}
        <FormSection sectionId="understanding" title="Project Understanding">
          <Checkbox
            label="Activate Project Understanding"
            isChecked={activeSections.understanding}
            onChange={() => handleSectionToggle("understanding")}
          />
          {activeSections.understanding && <Understanding />}
        </FormSection>

        {/* Goals Section */}
        <FormSection sectionId="goals" title="Goals & Objectives">
          <Checkbox
            label="Activate Goals & Objectives"
            isChecked={activeSections.goals}
            onChange={() => handleSectionToggle("goals")}
          />
          {activeSections.goals && <Goals />}
        </FormSection>

        {/* Sprint Table Section */}
        <FormSection sectionId="sprints" title="Sprints">
          <Checkbox
            label="Activate Sprints"
            isChecked={activeSections.sprints}
            onChange={() => handleSectionToggle("sprints")}
          />
          {activeSections.sprints && <SprintTable />}
        </FormSection>

        {/* TSM Section */}
        <FormSection sectionId="tsm" title="Training, Support, Maintenance">
          <Checkbox
            label="Activate Training, Support, Maintenance"
            isChecked={activeSections.tsm}
            onChange={() => handleSectionToggle("tsm")}
          />
          {activeSections.tsm && <TSM />}
        </FormSection>

        {/* Resources Section */}
        <FormSection sectionId="resources" title="Resources">
          <Checkbox
            label="Activate Resources"
            isChecked={activeSections.resources}
            onChange={() => handleSectionToggle("resources")}
          />
          {activeSections.resources && <ResourceTable />}
        </FormSection>

        {/* Tech Stack Section */}
        <FormSection sectionId="techStack" title="Tech Stack">
          <Checkbox
            label="Activate Tech Stack"
            isChecked={activeSections.techStack}
            onChange={() => handleSectionToggle("techStack")}
          />
          {activeSections.techStack && <TechStack />}
        </FormSection>

        {/* Case Studies Section */}
        <FormSection sectionId="caseStudies" title="Case Studies">
          <Checkbox
            label="Activate Case Studies"
            isChecked={activeSections.caseStudies}
            onChange={() => handleSectionToggle("caseStudies")}
          />
          {activeSections.caseStudies && <CaseStudies />}
        </FormSection>

        {/* Profiles Section */}
        <FormSection sectionId="profiles" title="Profiles">
          <Checkbox
            label="Activate Profiles"
            isChecked={activeSections.profiles}
            onChange={() => handleSectionToggle("profiles")}
          />
          {activeSections.profiles && <Profiles />}
        </FormSection>

        {/* Performance Objectives Section */}
        <FormSection sectionId="performanceObjectives" title="Performance Objectives">
          <Checkbox
            label="Activate Performance Objectives"
            isChecked={activeSections.performanceObjectives}
            onChange={() => handleSectionToggle("performanceObjectives")}
          />
          {activeSections.performanceObjectives && <PerformanceObjectives />}
        </FormSection>

        {/* Team Structure Section */}
        <FormSection sectionId="team" title="Team Structure">
          <Checkbox
            label="Activate Team Structure"
            isChecked={activeSections.team}
            onChange={() => handleSectionToggle("team")}
          />
          {activeSections.team && <TeamStructure />}
        </FormSection>

        {/* Cost Section */}
        <FormSection sectionId="cost" title="Additional Cost">
          <Checkbox
            label="Activate Additional Cost"
            isChecked={activeSections.cost}
            onChange={() => handleSectionToggle("cost")}
          />
          {activeSections.cost && <Cost />}
        </FormSection>

        {/* Client Section */}
        <FormSection sectionId="client" title="Client References">
          <Checkbox
            label="Activate Client References"
            isChecked={activeSections.client}
            onChange={() => handleSectionToggle("client")}
          />
          {activeSections.client && <Client />}
        </FormSection>

        {/* Submit Button */}
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
