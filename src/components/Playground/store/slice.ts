import { createSlice } from "@reduxjs/toolkit"
import { IPlaygroundState } from "./types"
import { ARR_ARROW_CODES } from "../constants"

const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
  totalSuccess: 0,
  totalFailed: 0,
  isWin: null,
}

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1
    },
    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW_CODES.length)
      state.steps.push({
        currentValue: ARR_ARROW_CODES[randomKeys],
        enteredValue: null,
        step: state.currentStep,
        success: null,
      })
    },
    setFail: (state) => {
      if (!state.steps.length) return

      const step = state.steps[state.currentStep - 1]
      if (step.enteredValue) return

      state.steps[state.currentStep - 1] = {
        ...step,
        success: false,
      }

      state.totalSuccess = 0
      ++state.totalFailed
    },
    setEnteredValue: (state, action) => {
      if (!state.steps.length) return

      const step = state.steps[state.currentStep - 1]
      if (step.enteredValue) return

      const success = step.currentValue === action.payload
      state.steps[state.currentStep - 1] = {
        ...step,
        enteredValue: action.payload,
        success,
      }

      if (success) ++state.totalSuccess
      else {
        state.totalSuccess = 0
        ++state.totalFailed
      }
    },
    resetState: () => initialState,
  },
})

export const {
  setCurrentStep,
  setSteps,
  setFail,
  setEnteredValue,
  resetState,
} = playgroundSlice.actions
export default playgroundSlice.reducer
