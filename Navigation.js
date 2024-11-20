import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Welcome from './Welcome';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{ 
            headerShown: false, 
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerShown: false, 
          }}
        />
         <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ 
            headerShown: false, 
          }}
        />
        <Stack.Screen 
          name="ForgetPassword" 
          component={ForgetPassword} 
          options={{ 
            headerShown: false, 
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
