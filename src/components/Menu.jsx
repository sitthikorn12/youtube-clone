import React from 'react'
import styled from 'styled-components'
import sitthikorn from "../img/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ShortsIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SubscriptionsIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusicOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEventsOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsportsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
flex:1;
background-color: ${({theme}) =>theme.bgLighter};
height: 160vh;
color: ${({theme}) =>theme.text};
font-size: 14px;
position: sticky;
top: 0;
`;

const Wrapper = styled.div`
padding: 18px 26px;
`;

const Logo = styled.div`
    display:flex;
    align-items:center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`;

const Img = styled.img`
    height: 25px;
`;

const Item = styled.div`
    display:flex;
    align-items:center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;
    textDecoration: nonoe;
    &:hover {
        background-color: ${({ theme }) => theme.soft };
    }
`;



const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) =>theme.soft};
`;

const Login = styled.div`

`;

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500; 
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-botttom: 20px;
`;

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
            <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
            <Logo>
                <Img src={sitthikorn}/>
                SITTHIKORN
            </Logo>
            </Link>
            <Link to="/" style={{textDecoration:'none',color:"inherit"}}>
            <Item>
                <HomeIcon/>
                Home
            </Item>
            </Link>
            <Link to={'https://www.youtube.com/shorts/-i7QJPyz6sw'} style={{textDecoration:'none',color:"inherit"}} >
            <Item>
                <ShortsIcon />
                Shorts
            </Item>
            </Link>
            <Link to={'https://www.youtube.com/feed/subscriptions'} style={{textDecoration:'none',color:"inherit"}} >
            <Item>
                <SubscriptionsIcon/>
                Subscriptions
            </Item>
            </Link>
            <Hr/>
            <Link to={'https://www.youtube.com/feed/library'} style={{textDecoration:'none',color:"inherit"}} >
            <Item>
                <VideoLibraryIcon/>
                Library
            </Item>
            </Link>
            <Link to={'https://www.youtube.com/feed/history'} style={{textDecoration:'none',color:"inherit"}} >
            <Item>
                <HistoryIcon/>
                History
            </Item>
            </Link>
            <Hr/>
            <Login>
                Sign in to like videos, comment, and subscribe.
             <Link to="signin" style={{textDecoration:"none"}}>
                <Button>
                    <AccountCircleOutlinedIcon/>
                    SIGN IN
                </Button>
             </Link>
            </Login>
            <Hr/>
            <Title>
                SITTHIKORN
            </Title>
            <Link to={'https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ'} style={{textDecoration:'none',color:"inherit"}} >
            <Item>
                <LibraryMusicIcon/>
                Music
            </Item>
            </Link>
            <Link to={'https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw'}  style={{textDecoration:'none',color:"inherit"}} >
            <Item>
                <EmojiEventsIcon/>
                Sport
            </Item>
            </Link>
            <Link to={'https://www.youtube.com/gaming'} style={{textDecoration:'none',color:"inherit"}} >
            <Item>
                <SportsEsportsIcon/>
                Gaming
            </Item>
            </Link>
            <Link to={'https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw'} style={{textDecoration:'none',color:"inherit"}} >
            <Item>
                <FeedOutlinedIcon/>
                News
            </Item>
            </Link>
            <Link to={'https://www.youtube.com/results?search_query=news+live'} style={{textDecoration:'none',color:"inherit"}} >
            <Item>
                <LiveTvOutlinedIcon/>
                Live
            </Item>
            </Link>
            <Hr/>
            <Link to={'https://www.youtube.com/account'} style={{textDecoration:'none',color:"inherit"}} >
            <Item>
                <SettingsOutlinedIcon/>
                Settings
            </Item>
            </Link>
            <Link to={'https://www.youtube.com/reporthistory'} style={{textDecoration:'none',color:"inherit"}} >
            <Item>
                <FlagOutlinedIcon/>
                Report
            </Item>
            </Link>
            <Link to={'https://support.google.com/youtube/community?hl=en'} style={{textDecoration:'none',color:"inherit"}} >
            <Item>
                < HelpOutlineOutlinedIcon/>
                Help
            </Item>
            </Link>
            <Item onClick={() => setDarkMode(!darkMode)}>
                <SettingsBrightnessOutlinedIcon/>
                {darkMode ? "Light" : "Dark"} Mode
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu