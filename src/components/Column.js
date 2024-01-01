//import React, { useContext, useState } from 'react';
import {useEventListContext} from "../EventProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/sharp-regular-svg-icons';

function Column(props) {
    let colClass = `col half-width ${props.eventType.toLowerCase()}`;
    const {events, addEvent} = useEventListContext();

    const btnClick = (event) => {
        let eventData = {
            type: props.eventType,
            time: new Date()
        }
        //console.log(events);
        addEvent(eventData);
    }

    return (
        <div className={colClass}>
            <column-header>
            <FontAwesomeIcon icon={faCirclePlus} className="addButton" onClick={btnClick} />
            <div>
                {props.columnTitle}
            </div>
            </column-header>
            {events.map((event, index) => {
                console.log(event, index);
                if (event.type.toLowerCase()===props.eventType.toLowerCase()) {
                    return renderEventCard(event,index);
                } else {
                    return null;
                }
                
            })}
        </div>
    );    

    function renderEventCard(event,index) {
        console.log(event);
        return <card-wrapper>
            <card key={index}>
                <card-header>{event.type}</card-header>
                <card-body>
                    <card-row>
                        <card-label className="event-label">Time of {event.type}:</card-label>
                        <card-value className="event-value">{event.time.toLocaleTimeString('en-us', { hour: 'numeric', minute: 'numeric'})}</card-value>
                    </card-row>
                    <card-row>
                        <card-label className="event-label">Duration:</card-label>
                        <card-value className="event-value">{event.walkDuration} minutes</card-value>
                    </card-row>
                </card-body>
            </card>
        </card-wrapper>
    }
}

export default Column;
