import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from '../router/stack.routes';

const router: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}

export default router;