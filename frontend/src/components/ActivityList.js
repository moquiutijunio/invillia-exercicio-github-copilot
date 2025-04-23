import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ActivityList = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('/api/activities')
            .then(response => setActivities(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Atividades</h1>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>
                        <h2>{activity.name}</h2>
                        <p>Participantes:</p>
                        <ul>
                            {activity.participants.map((participant, index) => (
                                <li key={index}>{participant}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityList;
