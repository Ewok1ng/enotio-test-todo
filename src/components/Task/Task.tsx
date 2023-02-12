import React from 'react';
import { Switch } from '@mui/material';

import './Task.style.scss';

interface Props {
    id: string;
    title: string;
    description: string;
    active: boolean;

    toggleTaskSwitch: (id: string) => void;
}

function Task({ id, title, description, active, toggleTaskSwitch }: Props) {
    const colors = [
        '#ccc',
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#9d32a8',
        '#db4e16',
        '#16cbdb',
        '#4716db',
    ];
    return (
        <div className={`task ${!active ? 'task--completed' : ''}`}>
            <div className="task__info">
                <div className="task__color" style={{ backgroundColor: colors[Number(id)] }} />
                <div className="task__description">
                    <h3 className="task__title">{title}</h3>
                    <p className="task__text">{description}</p>
                </div>
            </div>
            <Switch
                checked={active}
                onChange={() => {
                    toggleTaskSwitch(id);
                }}
            />
        </div>
    );
}

export default Task;
