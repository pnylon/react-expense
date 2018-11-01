//import { firebase, googleAuthProvider } from '../../firebase/firebase';
import { login, logout, startLogin, startLogout } from '../../actions/auth';

test('should generate login action object', () => {
    const action = login('qwer1234');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'qwer1234'
    });
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});