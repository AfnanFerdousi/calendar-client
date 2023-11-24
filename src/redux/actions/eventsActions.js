// Action Types
export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';

// Action Creators
export const addEvent = (event) => ({
    type: ADD_EVENT,
    payload: event,
});

export const deleteEvent = (eventId) => ({
    type: DELETE_EVENT,
    payload: eventId,
});

export const editEvent = (eventId, updatedEvent) => ({
    type: EDIT_EVENT,
    payload: { eventId, updatedEvent },
});
