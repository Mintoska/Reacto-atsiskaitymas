import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useState} from 'react';
import LoginForm from './Loginas';


const Header = () => {
  const [value, setValue] = useState(0);
  return ( 
    <header>
    <h1>Sunkus kelias per kopas</h1>
    <LoginForm/>
    {/* {isLoggedIn ? (
      <button onClick={onLogout}>LogOut</button>
    ) : (
      <button onClick={onLogin}>LogIn</button>
    )} */}
  </header>
   );
}
export default Header;
