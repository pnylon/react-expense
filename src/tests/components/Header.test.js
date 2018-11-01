import React from 'react';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';
import { LoginPage } from '../../components/LoginPage';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();

    // Before enzyme-to-json was installed and setup/
    //expect(toJSON(wrapper)).toMatchSnapshot();
    // Example test.
    //expect(wrapper.find('h1').text()).toBe('Expensify');

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    //console.log(renderer.getRenderOutput());
});

test('should call startLogout on button click in Header', () => {
    const startLogoutSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogoutSpy} />);
    wrapper.find('button').simulate('click');
    expect(startLogoutSpy).toHaveBeenCalled();
});

test('should call startLogin on button click in LoginPage', () => {
    const startLoginSpy = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />);
    wrapper.find('button').simulate('click');
    expect(startLoginSpy).toHaveBeenCalled();
});
