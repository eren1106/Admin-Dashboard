import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img
              src="https://i1.sndcdn.com/avatars-NtHnPGTBJs2ezZEU-9RaSQA-t500x500.jpg"
              alt=""
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar