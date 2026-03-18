import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	listNormal: {
		width: '100%',
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		backgroundColor: '#fafafa',
	},
	listHighlighted: {
		width: '100%',
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		backgroundColor: '#fff6b9',
	},
	listItemTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 4,
		marginRight: 48,
		flexWrap: 'wrap',
	},
});

const EventCard = ({ id, title, date, location, category, favorite, eventList, eventListUpdateCallback }: { id: number, title: string, date: Date, location: string, category: string, favorite: boolean, eventList: any[], eventListUpdateCallback: React.Dispatch<React.SetStateAction<any[]>> }) => {
	return (
		<View style={favorite ? styles.listHighlighted : styles.listNormal}>
			<Pressable
				onPress={() => {
					const updatedEvents = [...eventList];
					updatedEvents[id].favorite = !updatedEvents[id].favorite;
					eventListUpdateCallback(updatedEvents);
				}}
				style={{ position: 'absolute', top: 8, right: 8, padding: 8, borderRadius: 4 }}>
				<FontAwesome name={favorite ? "star" : "star-o"} size={24} color="black" />
			</Pressable>
			<Text style={styles.listItemTitle}>{title}</Text>
			<Text>Data: {date.toLocaleDateString('pl-PL')}</Text>
			<Text>Miejsce: {location}</Text>
			<Text>Kategoria: {category}</Text>
		</View>
	);
}

export default EventCard;