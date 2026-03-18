import { Text, View } from "react-native";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				padding: 32,
			}}
		>
			<Text style={{ fontSize: 18, textAlign: 'center' }}>Ta aplikacja łączy oba zadania i wyświetla wyniki za pomocą kart. </Text>
		</View>
	);
}
