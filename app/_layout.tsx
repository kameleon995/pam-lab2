import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


export const unstable_settings = {
	anchor: '(tabs)',
};

export default function RootLayout() {
	return (
		<ThemeProvider value={DefaultTheme}>
			<Stack screenOptions={{ headerBackTitle: 'Do zadań', headerTitle: 'Lab 2' }}>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
			<StatusBar style="auto" />
		</ThemeProvider>
	);
}
