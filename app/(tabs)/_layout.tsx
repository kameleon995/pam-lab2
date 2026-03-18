import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

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
					title: 'Ekran zadania 1',
					tabBarIcon: ({ color, size }) => (
						<View style={{ flexDirection: 'row', gap: 4 }}>
							<FontAwesome6 name="0" size={size} color={color} />
							<FontAwesome6 name="1" size={size} color={color} />
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="task2"
				options={{
					title: 'Ekran zadania 2',
					tabBarIcon: ({ color, size }) => (
						<View style={{ flexDirection: 'row', gap: 4 }}>
							<FontAwesome6 name="0" size={size} color={color} />
							<FontAwesome6 name="2" size={size} color={color} />
						</View>
					),
				}}
			/>
		</Tabs>
	);
}
