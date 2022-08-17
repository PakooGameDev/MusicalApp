//-----------------------------------Blocks-------------------------------------------------------------
import { Header, ValidationHeader } from './Blocks/header.js';
import { MusicList,Recommendations } from './Blocks/Playlist.js';
import LoginForm from './Blocks/LogInForm.js';
import SignUpForm from './Blocks/SignUpForm.js';
//-----------------------------------Items-------------------------------------------------------------
import { CurrentMusic } from './Items/CurrentSong.js';
//-----------------------------------Inputs-------------------------------------------------------------
import { Search } from './Inputs/search.js';
//-----------------------------------Text-------------------------------------------------------------
import { Title } from './Text/title.js';
//-----------------------------------Buttons-------------------------------------------------------------
import ValidationSelectorBtn from './Buttons/ValidationSelectorBtn';

export {Header,ValidationSelectorBtn, Recommendations, MusicList, CurrentMusic, Search, Title, LoginForm, SignUpForm, ValidationHeader}