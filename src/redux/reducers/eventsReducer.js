import { ADD_EVENT, DELETE_EVENT, EDIT_EVENT } from "../actions/eventsActions";


const initialState = {
    events: [],
};

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload],
            };
        case DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.payload),
            };
        case EDIT_EVENT:
            return {
                ...state,
                events: state.events.map(event =>
                    event.id === action.payload.eventId
                        ? { ...event, ...action.payload.updatedEvent }
                        : event
                ),
            };
        default:
            return state;
    }
};

export default eventsReducer;
