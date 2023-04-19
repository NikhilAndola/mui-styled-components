import { createTheme } from '@mui/material';

export default createTheme({
  // breakpoints: {
  //   values: {
  //     mobile: 0,
  //     tablet: 640,
  //     laptop: 1024,
  //     desktop: 1200,
  //   },
  // },
  components: {
    MuiBadge: {
      styleOverrides: {
        colorSecondary: {
          color: '#000000',
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          fontWeight: 400,
        },
      },
      defaultProps: {
        size: 'small',
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          width: 'max-content',
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#C2C2C2',
          padding: 0,
        },
      },
    },
    MuiChip: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#EDEDED',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '12px',
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          color: '#477245',
          //   border: "1px solid #477245",
          borderRadius: '4px',
          //   ":hover": { background: "transparent" },
        },
        sizeSmall: {
          padding: 4,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '::placeholder': {
            color: '#B3B3B3',
            opacity: 1,
          },
        },
      },
      defaultProps: {
        size: 'small',
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          width: 'auto',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontSize: '14px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          border: '1px solid #EDEDED',
          borderRadius: '8px 8px 0 0',
          marginLeft: '2px',
          marginRight: '2px',
          padding: '8px 16px',
          minHeight: '36px',

          '&.Mui-selected': {
            backgroundColor: '#F7F7F7',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: '36px',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: '0',
          border: '0',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '0.5px solid #CCCCCC',
          borderLeft: 0,
          borderRight: 0,
          padding: '4px 8px',
          whiteSpace: 'nowrap',
          zIndex: 3,
          fontSize: '14px',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          flex: 1,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          border: 0,
          fontSize: '13px',
          fontWeight: '500',
          textTransform: 'none',
          background: '#F7F7F7',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: '42px',
          minHeight: '42px',
          maxHeight: '42px',
          ':hover': {
            background: '#FBFBFB',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#6FB184',
          padding: '8px',
          fontSize: '14px',
        },
        arrow: {
          color: '#6FB184',
        },
      },
      defaultProps: {
        disableInteractive: true,
        placement: 'top',
        arrow: true,
      },
    },
  },
  palette: {
    background: {
      paper: '#FFFFFF',
      default: '#F0F0F0',
    },
    common: {
      black: '#333333',
      white: '#FDFDFD',
    },
    divider: '#CCCCCC',
    error: {
      main: '#C00808',
    },
    info: {
      main: '#3393F2',
    },
    primary: {
      main: '#477245',
    },
    secondary: {
      main: '#477245',
    },
    success: {
      main: '#1AAA55',
    },
    warning: {
      main: '#F59600',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    body1: {
      fontSize: '14px',
      color: '#333333',
    },
    body2: {
      fontSize: '12px',
      color: '#A3A3A3',
    },
    caption: {
      fontSize: '10px',
      color: '#A3A3A3',
    },
  },
  zIndex: {
    appBar: 2,
    drawer: 1,
  },
});
