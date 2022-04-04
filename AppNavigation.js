import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Loader } from './src/components/Loader';
import { connect } from 'react-redux';
import { NavigationService } from './src/config';
import Login from './src/screens/Login';
import CustomPrayers from './src/screens/CustomPrayers';
import StartUpScreen from './src/screens/StartUpScreen';
import SignUp from './src/screens/SignUp';
import BottomTabs from './src/components/BottomTabs';
import AudioPlayer from './src/components/AudioPlayer';
import SliderPage1 from './src/screens/SliderPage1';
import SliderPage2 from './src/screens/SliderPage2';
import SliderPage3 from './src/screens/SliderPage3';
import Payement from './src/screens/Payement';
import PremiumScreen from './src/screens/PremiumScreen';
import AskPrayer from './src/screens/AskPrayer';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="StartUpScreen">
      <Stack.Screen name="StartUpScreen" component={StartUpScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SliderPage1" component={SliderPage1} />
      <Stack.Screen name="SliderPage2" component={SliderPage2} />
      <Stack.Screen name="SliderPage3" component={SliderPage3} />
    </Stack.Navigator>
  );
};

// const BottomStack = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="PPCDashboard"
//       drawerContent={props => <BottomComp {...props} />}>
//       <Drawer.Screen name="Home" component={Home} />
//     </Drawer.Navigator>
//   );
// };

class AppNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { loader, user } = this.props;
    // console.warn(user);
    return (
      <>
        <NavigationContainer
          ref={ref => NavigationService.setTopLevelNavigator(ref)}>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={'AuthStack'}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="CustomPrayers" component={CustomPrayers} />
            <Stack.Screen name="Payment" component={Payement} />
            <Stack.Screen name="PremiumScreen" component={PremiumScreen} />
            <Stack.Screen name="AskPrayer" component={AskPrayer} />
            <Stack.Screen name="AudioPlayer" component={AudioPlayer} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* {loader ? <Loader /> : null} */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loader: state.LoaderReducer.loader,
    user: state.AuthReducer.user,
  };
};

export default connect(mapStateToProps, null)(AppNavigation);
