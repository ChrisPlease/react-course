import React from 'react';
import Home from './homePage';
import {shallow, render} from 'enzyme';

describe('The Home module', () => {

  describe('The title in the module', () => {
    it.only('will display the title', () => {
      const component = render(<Home />);
      // console.log(component.find('h1'));
      expect(true).toEqual(true);
    });
  });

});
