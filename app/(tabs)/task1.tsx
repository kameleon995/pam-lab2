import EventCard from '@/resources/EventCard';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

let eventCategories: string[] = ['Inne', 'Nauka', 'Muzyka', 'Film', 'Sport'];

class Event {
	constructor(public idNumber: number, public title: string = '', public date: Date = new Date(), public category: string = eventCategories[0], public location: string = '', public favorite: boolean = false) {
		return { idNumber: idNumber, title: title, date: date, category: category, location: location, favorite: favorite }
	}
}

const style = StyleSheet.create({
	main: {
		flex: 1,
		padding: 16,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	text: {
		marginBottom: 8,
	},
	unselectedCategory: {
		fontSize: 14,
		marginHorizontal: 8,
		padding: 8,
		fontWeight: 'normal',
	},
	selectedCategory: {
		fontSize: 14,
		marginHorizontal: 8,
		padding: 8,
		fontWeight: 'bold',
		backgroundColor: '#ddd',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	listView: {
		width: '100%',
		height: '100%',
		marginTop: 8,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
	},
	searchBox: {
		width: '100%',
		padding: 12,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
		marginVertical: 16,
	},
});

function filterEvents(events: Event[], category: string, nameFilter: string): Event[] {
	return events.filter(event => {
		if (category === 'Ulubione') {
			return event.favorite === true;
		} else if (category === 'Wszystkie' || category === '') {
			return true;
		}
		return event.category === category;
	}).filter(event => event.title.toLowerCase().includes(nameFilter.toLowerCase()));
}

export default function Task1Screen() {
	const [savedEvents, setSavedEvents] = useState<Event[]>([
		new Event(0, 'Wystawa sztuki nowoczesnej', new Date('2026-05-20'), eventCategories[0], 'Gdańsk', false),
		new Event(1, 'Koncert rockowy', new Date('2026-06-01'), eventCategories[2], 'Warszawa', true),
		new Event(2, 'Premiera filmu', new Date('2026-09-05'), eventCategories[3], 'Kraków', true),
		new Event(4, 'Warsztaty programowania', new Date('2026-07-15'), eventCategories[1], 'Wrocław', false),
		new Event(3, 'Mecz siatkówki', new Date('2026-04-16'), eventCategories[4], 'Poznań', true),
	]);
	const [selectedCategory, setSelectedCategory] = useState<string>('Wszystkie');
	const [nameFilter, setNameFilter] = useState<string>('');

	return (
		<View style={style.main}>
			<Text style={style.title}>Wydarzenia:</Text>
			<Text style={style.text}>W obecnie wybranej kategorii: {filterEvents(savedEvents, selectedCategory, nameFilter).length}</Text>
			<Text style={style.text}>Filtruj wg kategorii:</Text>
			<FlatList
				style={{ gap: 8, height: '8%' }}
				data={[ 'Wszystkie', 'Ulubione', ...eventCategories ]}
				renderItem={({ item }) => <Text style={item === selectedCategory ? style.selectedCategory : style.unselectedCategory} onPress={() => setSelectedCategory(item)}>{item}</Text>}
				keyExtractor={(item) => item}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			/>
			<TextInput
				style={style.searchBox}
				value={nameFilter}
				onChangeText={setNameFilter} />
			<FlatList
				style={style.listView}
				data={filterEvents(savedEvents, selectedCategory, nameFilter)}
				renderItem={({ item }) => <EventCard id={item.idNumber} title={item.title} date={item.date} location={item.location} category={item.category} favorite={item.favorite} eventList={savedEvents} eventListUpdateCallback={setSavedEvents} />}
				keyExtractor={(item) => item.idNumber.toString()}
			/>
		</View>
	);
}