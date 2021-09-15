import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TimetableElement } from "./TimetableElement";

const compareDates = (firstDate, secondDate) => {
	const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
	firstDate = new Date(firstDate.replace(pattern, "$3-$2-$1"));

	return (
		firstDate.getDate() == secondDate.getDate() &&
		firstDate.getMonth() == secondDate.getMonth() &&
		firstDate.getFullYear() == secondDate.getFullYear()
	);
};

export const Timetable = ({ group, date, data, theme }) => {
	const timetableData = data.filter(
		(elem) => elem.group == group && compareDates(elem.date, date)
	);

	const timetableTemplate = timetableData[0]?.rasp.map((data) => (
		<TimetableElement data={data} theme={theme} />
	));
	debugger;

	return (
		<View>
			{timetableTemplate ? (
				[timetableTemplate]
			) : (
				<Text style={theme == "light" ? { color: "#000" } : { color: "#fff" }}>
					Расписания нет
				</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingTop: 40,
	},
});
