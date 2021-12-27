import {useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../Context/ThemContextProvider'


const Footer = styled.footer`
    width: 99.8%;
    
    border: 1px solid blue;
    background: aqua;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
   
    text-align: center;
`

export default function Foot(){
    const [{theme,themeData}]= useContext(ThemeContext);
    const currentTheme = themeData[theme];

    return (
        <Footer style={{
            color: currentTheme.color,
            background: currentTheme.background
        }}>
            <h1>Footer</h1>
            <img src="https://img.icons8.com/nolan/50/react-native.png"/>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"/>
            <p>This is the footer of React Context Api Theme Context Assignment</p>
        </Footer>
    )
}