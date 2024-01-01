import React from 'react';

const EventContext = React.createContext();

function EventProvider({children}) {
    const [events, setEvents] = React.useState([]);

    const addEvent = (data) => {
        console.log("data:", JSON.stringify(data));
        let newEvent = { type: data.type, time: data.time, walkDuration: 25};
        setEvents([...events, newEvent]);
    };

    return (
        <EventContext.Provider value={{events, addEvent}} >
            {children}
        </EventContext.Provider>
    );
}

export const useEventListContext = () => React.useContext(EventContext);
export default EventProvider;
