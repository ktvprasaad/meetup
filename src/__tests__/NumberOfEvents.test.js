import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}}/>);
    });

    test('render number of events', () => {
        expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
    });

    test('render number input correctly', () => {
        const number = NumberOfEventsWrapper.state('displayCount');
        expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(number);
        expect(NumberOfEventsWrapper.state('error')).toBe(false);
    });

    test('change number of events when input changes', () => {
        const eventObject = { target: { value: '10' }};
        NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('displayCount')).toBe('10');
        expect(NumberOfEventsWrapper.state('error')).toBe(false);
    });

    test('change number of events when input changes', () => {
        const eventObject = { target: { value: '0' }};
        NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('displayCount')).toBe('0');
        expect(NumberOfEventsWrapper.state('error')).toBe(true);
    });

});