import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { Timetable } from "./components/Timetable";

import data from "./db.json";

export default function App() {
	const [theme, changeTheme] = React.useState("dark");
	const [selectedValue, setSelectedValue] = React.useState(data.data[1].group);
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	return (
		<View
			style={
				theme == "dark"
					? { ...styles.container, backgroundColor: "rgb(33,37,41)" }
					: { ...styles.container }
			}
		>
			<Header theme={theme} changeTheme={changeTheme} />
			<Filter
				selectedValue={selectedValue}
				setSelectedValue={setSelectedValue}
				setSelectedDate={setSelectedDate}
				data={data.data}
				textColor={theme}
			/>
			<Timetable
				group={selectedValue}
				date={selectedDate}
				data={data.data}
				theme={theme}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingTop: 40,
	},
});
