import React from 'react';
import { AppRegistry } from 'react-native';  
import {name as appName} from './app.json';
//import App from './App';
//import OtpScreen2 from './components/others/otp/OtpScreen2';
//import Anim3 from './screens/Anim3';
//import Screen16 from './screens/Screen16';
//import Screen17 from './screens/Screen17';
//import Screen8 from './screens/Screen8';
//import Screen19 from './screens/Screen19';
//import HomeScreen from './screens/HomeScreen';
//import Hide2 from './screens/Hide2';
//import Screen8 from './screens/Screen8';
//import Model from './screens/Model';
//import Radio from './screens/Radio';
import BottomNav from './screens/BottomNav';
//import Appp from './Appp';
//import UploadImage from './components/others/UploadImage';
//import Gradient from './screens/Gradient';
//import Screen15 from './screens/Screen15';
//import Buttons from './screens/Buttons';
//import Screen20 from './screens/Screen20';
//import Screen21 from './screens/Screen21';
//import Backbutton from './screens/Backbutton';
//import Anim4 from './screens/Anim4';
//import OtpScreen from './components/others/otp/OtpScreen';
//import SliderButtons from './screens/SliderButtons';
//import UpcomingScreen from './components/others/UpcomingScreen';
//import OngoingScreen from './components/others/OngoingScreen';
//import CompletedScreen from './components/others/CompletedScreen';
//import LoanScreen from './components/others/LoanScreen';

const index = () => {
    return (
    <BottomNav/>
    );
};

AppRegistry.registerComponent(appName, () => index);
