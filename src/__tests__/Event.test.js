import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event />);
    });

    test('render events', () => {
        expect(EventWrapper.find('.events')).toHaveLength(1);
    });

    test('render list of events', () => {
        const events = EventWrapper.state('events');
        expect(EventWrapper.find('.events li')).toHaveLength(events.length);
        for (let i = 0; i < events.length; i += 1) {
          expect(EventWrapper.find('.events li').at(i).text()).toBe(events[i].name);
        }
    });

    test('render event description', () => {
        const eventObject = { target: { value: 'true' }};
        EventWrapper.find('.details').simulate('click', eventObject);
        expect(EventWrapper.state('showHideFlag')).toBe(true);
    });

});