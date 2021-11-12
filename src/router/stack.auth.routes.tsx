import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewAboutMeInfo from '../screens/ViewAboutMeInfo';
import ViewAboutMe from '../screens/ViewAboutMe';

const Stack = createNativeStackNavigator();

const StackAuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ViewAboutMe" component={ViewAboutMe}/>
      <Stack.Screen name="ViewAboutMeInfo" component={ViewAboutMeInfo}/>
    </Stack.Navigator>
  );
}

export default StackAuthRoutes;