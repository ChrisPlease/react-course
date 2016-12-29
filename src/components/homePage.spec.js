import React from 'react';
import Home from './homePage';
import {shallow} from 'enzyme';

fdescribe('The Home module', () => {

  describe('The title in the module', () => {
    it('will display the title', () => {
      const component = shallow(<Home />);
      expect(component.state('title')).toEqual('Hello World');
    });
  });

});
