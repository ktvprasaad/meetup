import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    // beforeAll(() => {
    //     EventWrapper = shallow(<Event />);
    // });

    beforeAll(() => {
        EventWrapper = shallow(
          <Event event={
            {
                local_date: '2020-02-01',
                local_time: '08:00',
                name: 'The Purpose of Life in Buddhism',
                group: {
                    name: 'München Meanings of Life in Buddhism Meetup',
                    localized_location: 'München, Germany',
                },
            }
          }/>
        );
    });

    beforeEach(() => {
        EventWrapper.setState({ showHideFlag: false });
    });

    test('render less details', () => {
        expect(EventWrapper.find('.less .date')).toHaveLength(1);
        expect(EventWrapper.find('.less .time')).toHaveLength(1);
        expect(EventWrapper.find('.less .name')).toHaveLength(1);
        expect(EventWrapper.find('.details')).toHaveLength(1);
        expect(EventWrapper.state('showHideFlag')).toBe(false);
    });

    test('render more details', () => {
        const eventObject = { target: { value: 'true' }};
        EventWrapper.find('.details').simulate('click', eventObject);
        expect(EventWrapper.state('showHideFlag')).toBe(true);
        expect(EventWrapper.find('.more .groupName')).toHaveLength(1);
        expect(EventWrapper.find('.more .location')).toHaveLength(1);

    });

    test('render previous state', () => {
        EventWrapper.setState({ showHideFlag: true });
        const eventObject = { target: { value: 'false' }};
        EventWrapper.find('.details').simulate('click', eventObject);
        expect(EventWrapper.state('showHideFlag')).toBe(false);
        expect(EventWrapper.find('.more .groupName')).toHaveLength(0);
        expect(EventWrapper.find('.more .location')).toHaveLength(0);
    });

    test('hide more details', () => {
        EventWrapper.setState({ showHideFlag: false });
        expect(EventWrapper.find('.more .groupName')).toHaveLength(0);
        expect(EventWrapper.find('.more .location')).toHaveLength(0);
    });

    test('render correct information', () => {
        expect(EventWrapper.find('.date').text()).toEqual('2020-02-01');
        expect(EventWrapper.find('.time').text()).toEqual('08:00');
        expect(EventWrapper.find('.name').text()).toEqual('The Purpose of Life in Buddhism');
        const eventObject = { target: { value: 'true' }};
        EventWrapper.find('.details').simulate('click', eventObject);
        expect(EventWrapper.find('.groupName').text()).toEqual('München Meanings of Life in Buddhism Meetup');
        expect(EventWrapper.find('.location').text()).toEqual('München, Germany');
    });

    // test('render event', () => {
    //     expect(EventWrapper.find('.events')).toHaveLength(1);
    // });

    // test('render list of events', () => {
    //     const events = EventWrapper.state('events');
    //     expect(EventWrapper.find('.events li')).toHaveLength(events.length);
    //     for (let i = 0; i < events.length; i += 1) {
    //       expect(EventWrapper.find('.events li').at(i).text()).toBe(events[i].name);
    //     }
    // });

    // test('render event description', () => {
    //     const eventObject = { target: { value: 'true' }};
    //     EventWrapper.find('.details').simulate('click', eventObject);
    //     expect(EventWrapper.state('showHideFlag')).toBe(true);
    // });

    // test('hide event description', () => {
    //     const eventObject = { target: { value: 'false' }};
    //     EventWrapper.find('.details').simulate('click', eventObject);
    //     expect(EventWrapper.state('showHideFlag')).toBe(false);
    // });

});