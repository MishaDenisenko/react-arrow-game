import playgroundReducer, { initialState } from '../slice';

describe('initial state', function () {
    it('should check initial state', function () {
        const setInitialState = playgroundReducer(undefined, {type: 'unknown'});

        expect(setInitialState).toEqual(initialState);
    });
})