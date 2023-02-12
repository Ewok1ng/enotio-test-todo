import React from 'react';
import { FormControlLabel, IconButton, Menu, MenuItem, Switch } from '@mui/material';
import { Settings } from '@mui/icons-material';

import { AppContext } from '../../context/AppContext';

import './Header.style.scss';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const { isNewsLineVisible, handleSwitchToggle } = React.useContext(AppContext);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSwitchClick = () => {
        handleSwitchToggle();
        setAnchorEl(null);
    };

    return (
        <header className="header">
            <h1 className="header__title">To Do</h1>
            <IconButton aria-label="settings" onClick={handleClick}>
                <Settings className="header__settings-icon" />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem>
                    <FormControlLabel
                        className="header__switch"
                        control={
                            <Switch
                                className="header__switch"
                                checked={isNewsLineVisible}
                                onChange={handleSwitchClick}
                            />
                        }
                        labelPlacement="start"
                        label="Show news line"
                    />
                </MenuItem>
            </Menu>
        </header>
    );
}

export default Header;
