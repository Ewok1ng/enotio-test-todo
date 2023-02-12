import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';

import { AppContext } from './context/AppContext';
import customTheme from './customTheme';
import { data } from './data';

import Main from './pages/Main';

function App() {
    const [isCheckboxChecked, setCheckboxChecked] = React.useState(true);
    const [isNewsLineVisible, setNewsLineVisible] = React.useState(true);
    const [groups, setGroups] = React.useState(data);

    const handleCheckboxChange = () => {
        setCheckboxChecked((prev) => !prev);
    };

    const handleSwitchToggle = () => {
        setNewsLineVisible((prev) => !prev);
    };

    const toggleTaskSwitch = (groupId: string, taskId: string) => {
        setGroups((prevState) => {
            return prevState.map((group) => {
                if (group.groupId === groupId) {
                    return {
                        ...group,
                        tasks: group.tasks.map((task) => {
                            if (task.id === taskId) {
                                return {
                                    ...task,
                                    active: !task.active,
                                };
                            }
                            return task;
                        }),
                    };
                }
                return group;
            });
        });
    };

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={customTheme}>
                <AppContext.Provider
                    value={{
                        groups,
                        isNewsLineVisible,
                        handleSwitchToggle,
                        isCheckboxChecked,
                        handleCheckboxChange,
                        toggleTaskSwitch,
                    }}
                >
                    <div className="app">
                        <Main />
                    </div>
                </AppContext.Provider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
