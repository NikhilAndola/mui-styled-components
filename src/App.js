import React from 'react';
import './style.css';
import { Box, styled } from '@mui/material';

import MuiAppBar from '@material-ui/core/AppBar';

export default function App() {
  const AppBar = styled(MuiAppBar)`
background-color: red;
${(props) => props.theme.breakpoints.up('sm')} {
  background-color: orange;
}
${(props) => props.theme.breakpoints.up('md')} {
  background-color: yellow;
  color: black;
}
${(props) => props.theme.breakpoints.up('lg')} {
  background-color: green;
  color: white;
}
`;

  const BoxOne = styled(Box)(({ theme }) => ({
    fontSize: '2rem',
    width: 400,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid orange',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      color: 'blue',
    },
  }));

  const ParentBox = styled(Box)`
    height: 100px;
    width: 100%;
    color: red;
    border: 1px solid orange;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;

    ${(props) => props.theme.breakpoints.up('sm')} {
      background-color: cyan;
    }

    :hover {
      color: blue;
      height: 200px;
    }
  `;
  return (
    <div>
      <h1>Mui Styled Components</h1>
      <BoxOne>Hello Box One</BoxOne>
      <ParentBox>Mango</ParentBox>
    </div>
  );
}
