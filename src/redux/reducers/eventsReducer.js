/* eslint-disable no-case-declarations */
import { ADD_EVENT, DELETE_EVENT, EDIT_EVENT } from "../actions/eventsActions";
import Cookies from 'js-cookie';

const initialState = {
    events: getCookiesEvents(),
};

function getCookiesEvents() {
    const eventsCookie = Cookies.get('events');
    return eventsCookie ? JSON.parse(eventsCookie) : [];
}

function setCookiesEvents(events) {
    Cookies.set('events', JSON.stringify(events));
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            const newEvents = [...state.events, action.payload];
            setCookiesEvents(newEvents);
            return {
                ...state,
                events: newEvents,
            };
        case DELETE_EVENT:
            const updatedEventsAfterDelete = state.events.filter(event => event.id !== action.payload);
            setCookiesEvents(updatedEventsAfterDelete);
            return {
                ...state,
                events: updatedEventsAfterDelete,
            };
        case EDIT_EVENT:
            const updatedEventsAfterEdit = state.events.map(event =>
                event.id === action.payload.eventId
                    ? { ...event, ...action.payload.updatedEvent }
                    : event
            );
            setCookiesEvents(updatedEventsAfterEdit);
            return {
                ...state,
                events: updatedEventsAfterEdit,
            };
        default:
            return state;
    }
};

export default eventsReducer;
