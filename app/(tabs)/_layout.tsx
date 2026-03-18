import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/theme';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['light'].tint,
        headerShown: true,
      }}>
      <Tabs.Screen
        name="task1"
        options={{
          title: 'Zadanie 1'
        }}
      />
    </Tabs>
  );
}
