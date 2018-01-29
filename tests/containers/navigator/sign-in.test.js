import React from 'react';

import { SignIn } from '../../../src/containers/navigator/sign-in';

describe('<SignIn />', () => {
  let wrapper;
  let isAuthenticatedBool;
  let loginStatusSpy;
  let loginUserSpy;
  let logoutUserSpy;

  beforeEach(() => {
    isAuthenticatedBool = true;

    loginStatusSpy = spy();
    loginUserSpy = spy();
    logoutUserSpy = spy();

    wrapper = shallow(<SignIn // eslint-disable-line react/jsx-filename-extension
      isAuthenticated={isAuthenticatedBool}
      loginStatus={loginStatusSpy}
      loginUser={loginUserSpy}
      logoutUser={logoutUserSpy}
    />);
  });

  it('renders element', () => {
    expect(wrapper.find('button').length).toBe(1);
  });

  describe('mapDispatchToProps', () => {
    xit('dispatchs are defined', () => {
    });
  });

  describe('.componentWillMount', () => {
    it('loginStatus is called', () => {
      expect(loginStatusSpy.called).toBe(true);
    });
  });

  describe('when isAuthenticated is true', () => {
    it('labels the button with "Log Out"', () => {
      expect(wrapper.find('span').text()).toBe('Log Out');
    });

    describe('.signInOrOut', () => {
      it('logoutUser is called', () => {
        wrapper.find('button').simulate('click');
        expect(loginUserSpy.called).toBe(false);
        expect(logoutUserSpy.called).toBe(true);
      });
    });
  });

  describe('when isAuthenticated is false', () => {
    beforeEach(() => {
      isAuthenticatedBool = false;

      wrapper = shallow(<SignIn // eslint-disable-line react/jsx-filename-extension
        isAuthenticated={isAuthenticatedBool}
        loginStatus={loginStatusSpy}
        loginUser={loginUserSpy}
        logoutUser={logoutUserSpy}
      />);
    });

    it('labels the button with "Log In"', () => {
      expect(wrapper.find('span').text()).toBe('Log In');
    });

    describe('.signInOrOut', () => {
      it('loginUser is called', () => {
        wrapper.find('button').simulate('click');
        expect(loginUserSpy.called).toBe(true);
        expect(logoutUserSpy.called).toBe(false);
      });
    });
  });
});