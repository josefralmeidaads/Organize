import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewMain from '../screens/ViewMain';
import theme from '../styles/theme';
import { Icon } from 'react-native-elements';
import ViewSessions from '../screens/ViewSessions';
import StackAuthRoutes from './stack.auth.routes';

const Tab = createBottomTabNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme?.colors?.gray_700,
        tabBarInactiveTintColor: theme?.colors?.white,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.blue_500,
          height: 60,
        },
      }}
    >
      <Tab.Screen 
        name="ViewMain" 
        component={ViewMain}
        options={{
          tabBarIconStyle: {
            marginBottom: -20
          },
          tabBarLabelStyle: {
            marginVertical: 7
          },
          tabBarLabel: 'Especialistas',
          tabBarIcon: (({color, size}) => (
            <Icon tvParallaxProperties type="font-awesome-5" color={color} size={size} name="address-card"/>
          ))
        }}
      />
      <Tab.Screen 
        name="ViewSessions" 
        component={ViewSessions}
        options={{
          tabBarIconStyle: {
            marginBottom: -20
          },
          tabBarLabelStyle: {
            marginVertical: 7
          },
          tabBarLabel: 'Sessões',
          tabBarIcon: (({color, size}) => (
            <Icon tvParallaxProperties type="font-awesome-5" color={color} size={size} name="address-book"/>
          ))
        }}
      />
      <Tab.Screen 
        name="StackAuthRoutes" 
        component={StackAuthRoutes}
        options={{
          tabBarIconStyle: {
            marginBottom: -20
          },
          tabBarLabelStyle: {
            marginVertical: 7
          },
          tabBarLabel: 'Perfil',
          tabBarIcon: (({color, size}) => (
            <Icon tvParallaxProperties type="font-awesome-5" color={color} size={size} name="user"/>
          ))
        }}
      />
    </Tab.Navigator>
  );
}

export default AuthRoutes;