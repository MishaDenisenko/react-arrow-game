import playgroundReducer, { initialState, setCurrentStep, resetState } from '../slice';

describe('resetState', function () {
    it('should check resetState', function () {
        const setCurrentStepState = playgroundReducer(initialState, setCurrentStep());
        const resetStateReducer = playgroundReducer(setCurrentStepState, resetState());

        expect(resetStateReducer).toEqual(initialState);
    });
});