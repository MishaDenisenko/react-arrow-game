import playgroundReducer, { initialState, setEnteredValue, setCurrentStep, setSteps } from '../slice';
import { ARR_ARROW_CODES } from '../../constants';

describe('setEnteredValue', function () {
    it('should check setEnteredValue', function () {
        const enteredValue = ARR_ARROW_CODES[0];

        const setCurrentStepState = playgroundReducer(initialState, setCurrentStep());
        const setStepsState = playgroundReducer(setCurrentStepState, setSteps());
        const setEnteredValueState = playgroundReducer(setStepsState, setEnteredValue(enteredValue));

        expect(setStepsState.steps[0].enteredValue).toBe(null);
        expect(setEnteredValueState.steps[0].enteredValue).toBe(enteredValue);
    });

    it('should check totalSuccess and totalFailed', function () {
        const setCurrentStepState = playgroundReducer(initialState, setCurrentStep());
        const setStepsState = playgroundReducer(setCurrentStepState, setSteps());
        const setEnteredValueState = playgroundReducer(setStepsState, setEnteredValue(setStepsState.steps[0].currentValue));

        expect(setStepsState.totalSuccess).toBe(0);
        expect(setStepsState.totalFailed).toBe(0);
        expect(setEnteredValueState.totalSuccess).toBe(1);
        expect(setEnteredValueState.totalFailed).toBe(0);
    });
});