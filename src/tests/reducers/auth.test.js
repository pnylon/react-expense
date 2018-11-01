import authReducer from '../../reducers/auth';

test('should create a user uid when logged in', () => {
    const action = {
        type: 'LOGIN',
        uid: 'qwer1234'
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('should remove the user uid when logged out', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'asdf1234' }, action);
    expect(state).toEqual({});
});