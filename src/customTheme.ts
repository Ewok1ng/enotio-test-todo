import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    typography: {
        fontFamily: ['Abhaya Libre', 'serif'].join(','),
    },
    components: {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: '#F4F4F4',
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '28px',
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: 50,
                    height: 30,
                    padding: 0,
                    borderRadius: '20px',
                },
                thumb: {
                    boxSizing: 'border-box',
                    width: 26,
                    height: 26,
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8976 13.1218L6.61086 7.82669L1.32411 13.1218L0.143738 11.9414L5.4388 6.65462L0.143738 1.36787L1.32411 0.1875L6.61086 5.48256L11.8976 0.195813L13.0697 1.36787L7.78293 6.65462L13.0697 11.9414L11.8976 13.1218Z" fill="rgb(169, 169, 169)"/></svg>')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                },
                track: {
                    borderRadius: 26 / 2,
                    backgroundColor: '#366EFF',
                    opacity: 1,
                },
                switchBase: {
                    padding: 0,
                    margin: 2,
                    transitionDuration: '300ms',

                    '&.Mui-checked': {
                        transform: 'translateX(20px)',
                        color: '#fff',

                        '& .MuiSwitch-thumb': {
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937V1.1937Z" fill="rgb(169, 169, 169)"/></svg>')`,
                        },

                        '& + .MuiSwitch-track': {
                            backgroundColor: '#10C200',
                            opacity: 1,
                            border: 0,
                        },
                    },
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '28px',
                    color: '#F4F4F4',
                    background: '#282828',
                    boxShadow:
                        '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
                    '&:last-of-type': {
                        borderRadius: '25px',
                    },

                    '& #panel1a-header': {
                        padding: '14px 37px 14px 14px',
                    },
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                expandIconWrapper: {
                    color: '#282828',
                    background: '#F4F4F4',
                    borderRadius: '50%',
                },
                content: {
                    '& h2': {
                        fontWeight: 600,
                        fontSize: '24px',
                        lineHeight: '28px',
                        color: '#F4F4F4',
                    },
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: '4px 25px 18px 17px',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    padding: '0 8px',

                    '& label': {
                        margin: '0 8px',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: '#282828',
                    color: '#f4f4f4',
                },
            },
        },
    },
});

export default customTheme;
