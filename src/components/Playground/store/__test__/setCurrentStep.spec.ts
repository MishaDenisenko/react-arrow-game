import playgroundReducer, { initialState, setCurrentStep } from '../slice';

describe('setCurrentStep', function () {
    it('should check currentStep', function () {
        const setCurrentStepState = playgroundReducer(initialState, setCurrentStep());

        expect(initialState.currentStep).toBe(0);
        expect(setCurrentStepState.currentStep).toBe(1);
    });
});