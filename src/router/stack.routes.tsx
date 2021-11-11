import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewStart from '../screens/ViewStart';
import ViewLogin from '../screens/ViewLogin';
import ViewTypePerson from '../screens/ViewTypePerson';
import ViewCreateAccountUser from '../screens/ViewCreateAccountUser';

const Stack = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ViewStart" component={ViewStart} />
      <Stack.Screen name="ViewLogin" component={ViewLogin} />
      <Stack.Screen name="ViewTypePerson" component={ViewTypePerson} />
      <Stack.Screen name="ViewCreateAccountUser" component={ViewCreateAccountUser} />
    </Stack.Navigator>
  );
}

export default StackRoutes;