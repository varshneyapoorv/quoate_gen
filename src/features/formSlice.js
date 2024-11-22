import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sections: {
    header: false,
    contact: false,
    phases: false,
    sprints: false,
    techStack: false,
    teamStructure: false,
    caseStudies: false,
    clientReferences: false,
    profiles: false,
  },
  formData: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    toggleSection: (state, action) => {
      state.sections[action.payload] = !state.sections[action.payload];
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { toggleSection, updateFormData } = formSlice.actions;
export default formSlice.reducer;
