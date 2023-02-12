import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

import { compareDates, formatDate } from '../../utils/datesUtil';
import { AppContext } from '../../context/AppContext';
import { useDates } from '../../hooks/useDates';

import './Main.style.scss';

import Header from '../../components/Header';
import TaskGroup from '../../components/TaskGroup';
import NewsLine from '../../components/NewsLine';
import Task from '../../components/Task';

function Main() {
    const { groups, isNewsLineVisible, isCheckboxChecked, handleCheckboxChange, toggleTaskSwitch } =
        React.useContext(AppContext);
    const { today, tomorrow } = useDates();

    const taskGroupsJSX = groups.map((item) => {
        if (compareDates(item.date, today.current)) {
            return (
                isCheckboxChecked && (
                    <div key={item.groupId} className="todo-app__today">
                        {item.tasks.length > 0 ? (
                            item.tasks.map((task) => (
                                <Task
                                    key={task.id}
                                    {...task}
                                    toggleTaskSwitch={() => toggleTaskSwitch(item.groupId, task.id)}
                                />
                            ))
                        ) : (
                            <h2>There is no tasks for today</h2>
                        )}
                    </div>
                )
            );
        } else {
            return (
                <TaskGroup
                    key={item.groupId}
                    groupId={item.groupId}
                    groupTitle={
                        compareDates(item.date, tomorrow.current)
                            ? 'Tomorrow'
                            : formatDate(item.date)
                    }
                    tasks={item.tasks}
                />
            );
        }
    });

    return (
        <div className="todo-app">
            <Header />
            <main>
                <FormControlLabel
                    className="todo-app__checkbox"
                    control={
                        <Checkbox
                            color="default"
                            checked={isCheckboxChecked}
                            onChange={handleCheckboxChange}
                        />
                    }
                    label="Today Tasks:"
                />
                {taskGroupsJSX}
            </main>
            <footer>{isNewsLineVisible && <NewsLine />}</footer>
        </div>
    );
}

export default Main;
