import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const TimetableElement = ({ data, theme }) => {
	return (
		<View style={styles.timetable}>
			<View style={styles.blockHeader}>
				<Text style={styles.number}>{data.number}</Text>
				<Text style={styles.time}>{data.time}</Text>
			</View>
			<View style={styles.info}>
				<Text
					style={
						theme == "light"
							? { ...styles.name, color: "#000" }
							: { ...styles.name, color: "#fff" }
					}
				>
					{data.name}
				</Text>
				<Text style={theme == "light" ? { color: "#000" } : { color: "#fff" }}>
					{data.teacher}
				</Text>
			</View>
			<Text style={theme == "light" ? { color: "#000" } : { color: "#fff" }}>
				{data.classroom} кабинет
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	timetable: {
		marginBottom: 20,
		paddingBottom: 10,
		borderBottomColor: "#7f51fd",
		borderBottomWidth: 2,
	},
	blockHeader: {
		flexDirection: "row",
		alignItems: "center",
	},
	number: {
		padding: 10,
		backgroundColor: "#7f51fd",
		borderRadius: 8,
		color: "#fff",
		marginRight: 20,
	},
	time: {
		color: "#fc5d02",
	},
	info: {
		marginTop: 10,
		marginBottom: 10,
	},
	name: {
		fontSize: 20,
	},
});
