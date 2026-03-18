import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
	main: {
		flex: 1,
		padding: 16,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	listNormal: {
		width: '100%',
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	listHighlighted: {
		width: '100%',
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		backgroundColor: '#efb7b7',
	},
});

function renderEvent(event: any) {
	return (
		<View>
		</View>
	);
}

export default function Task1Screen() {
	return (
		<View style={style.main}>
			<Text style={style.title}>Zadanie 1</Text>
			<Text>Wydarzenia:</Text>
			{/* do the thing */}
		</View>
	);
}