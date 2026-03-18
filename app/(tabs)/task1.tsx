import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

let eventCategories: string[] = ['Inne', 'Nauka', 'Muzyka', 'Film', 'Sport'];

class Event {
	constructor(public id: number, public title: string = '', public date: Date = new Date(), public category: string = eventCategories[0], public location: string = '', public favorite: boolean = false) {
		return { id: id, title: title, date: date, category: category, location: location, favorite: favorite }
	}
}

const style = StyleSheet.create({
	main: {
		flex: 1,
		padding: 16,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 16,
	},
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
	listView: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
	},
	listItemTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 4,
		marginRight: 48,
		flexWrap: 'wrap',
	},
});

function renderEvent(event: Event, eventList: Event[], setEventList: React.Dispatch<React.SetStateAction<Event[]>>) {
	return (
		<View style={eventList[eventList.indexOf(event)].favorite ? style.listHighlighted : style.listNormal}>
			<Pressable
				onPress={() => {
					const updatedEvents = [...eventList];
					updatedEvents[eventList.indexOf(event)].favorite = !updatedEvents[eventList.indexOf(event)].favorite;
					setEventList(updatedEvents);
				}}
				style={{ position: 'absolute', top: 8, right: 8, padding: 8, borderRadius: 4 }}>
				<FontAwesome name={eventList[eventList.indexOf(event)].favorite ? "star" : "star-o"} size={24} color="black" />
			</Pressable>
			<Text style={style.listItemTitle}>{event.title}</Text>
			<Text>Data: {event.date.toLocaleDateString('pl-PL')}</Text>
			<Text>Miejsce: {event.location}</Text>
			<Text>Kategoria: {event.category}</Text>
		</View>
	);
}

export default function Task1Screen() {
	const [savedEvents, setSavedEvents] = useState<Event[]>([
		new Event(0, 'Wystawa sztuki nowoczesnej', new Date('2026-05-20'), eventCategories[0], 'Gdańsk', false),
		new Event(1, 'Koncert rockowy', new Date('2026-06-01'), eventCategories[2], 'Warszawa', true),
		new Event(2, 'Premiera filmu', new Date('2026-09-05'), eventCategories[3], 'Kraków', true),
		new Event(4, 'Warsztaty programowania', new Date('2026-07-15'), eventCategories[1], 'Wrocław', false),
		new Event(3, 'Mecz siatkówki', new Date('2026-04-16'), eventCategories[4], 'Poznań', true),
	]);

	return (
		<View style={style.main}>
			<Text style={style.title}>Wydarzenia:</Text>
			<FlatList
				style={style.listView}
				data={savedEvents}
				renderItem={({ item }) => renderEvent(item, savedEvents, setSavedEvents)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}