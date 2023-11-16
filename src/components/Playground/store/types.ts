export interface IPlaygroundStepsState {
  currentValue: string | null
  enteredValue: string | null
  step: number
  success: boolean | null
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsState[]
  totalSuccess: number
  totalFailed: number
  isWin: boolean | null
}
