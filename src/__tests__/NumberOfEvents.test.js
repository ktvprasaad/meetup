import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render number of events', () => {
        expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
    });

    test('change number of events when input changes', () => {
        const eventObject = { target: { value: '10' }};
        NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('displayCount')).toBe('10');
    });

});