import { INITIAL_STATE, IAppState, rootReducer } from './index';
import { AllActions } from '../users.actions'
import { NgRedux } from '@angular-redux/store';


describe('Reducer', () => {

    describe('undefined action', () => {
        it('should return the default state', () => {
            const initialState = INITIAL_STATE;
            const action = {};
            const state = rootReducer(INITIAL_STATE, action);

            expect(state).toBe(initialState)
          });
    })
 
  
 
  
})