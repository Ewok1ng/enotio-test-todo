import React from 'react';

export type TaskType = {
    id: string;
    title: string;
    description: string;
    active: boolean;
};

export type TaskGroupType = {
    groupId: string;
    date: string;
    tasks: TaskType[];
};

export type AppContextType = {
    groups: TaskGroupType[];
    isCheckboxChecked: boolean;
    isNewsLineVisible: boolean;
    handleSwitchToggle: () => void;
    handleCheckboxChange: () => void;
    toggleTaskSwitch: (groupId: string, taskId: string) => void;
};

export const AppContext = React.createContext<AppContextType>({
    groups: [],
    isCheckboxChecked: false,
    isNewsLineVisible: false,
    handleSwitchToggle: () => {},
    handleCheckboxChange: () => {},
    toggleTaskSwitch: (groupId, taskId) => {},
});
