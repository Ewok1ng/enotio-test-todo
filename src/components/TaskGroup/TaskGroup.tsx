import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMoreOutlined } from '@mui/icons-material';

import './TaskGroup.style.scss';

import Task from '../Task/Task';
import { AppContext, TaskType } from '../../context/AppContext';

interface Props {
    groupId: string;
    groupTitle: string;
    tasks: TaskType[];
}

function TaskGroup({ groupId, groupTitle, tasks }: Props) {
    const { toggleTaskSwitch } = React.useContext(AppContext);
    const detailsJSX =
        tasks.length > 0
            ? tasks.map((item) => (
                  <Task
                      key={item.id}
                      {...item}
                      toggleTaskSwitch={() => toggleTaskSwitch(groupId, item.id)}
                  />
              ))
            : 'No tasks';

    return (
        <div className="task-group">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreOutlined />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className="task-group__color" />
                    <h2 className="task-group__title">{groupTitle}</h2>
                </AccordionSummary>
                <AccordionDetails>{detailsJSX}</AccordionDetails>
            </Accordion>
        </div>
    );
}

export default TaskGroup;
