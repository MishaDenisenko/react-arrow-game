import playgroundReducer, { initialState, setFail, setCurrentStep, setSteps } from '../slice';

describe('setFail', function () {
    it('should check setFail', function () {
        const setCurrentStepState = playgroundReducer(initialState, setCurrentStep());
        const setStepsState = playgroundReducer(setCurrentStepState, setSteps());
        const setFailState = playgroundReducer(setStepsState, setFail());

        expect(setFailState.totalFailed).toBe(1);
        expect(setFailState.steps[0].success).toBe(false);
    });
});