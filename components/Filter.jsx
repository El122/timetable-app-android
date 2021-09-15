import React from "react";
import { StyleSheet, Picker, View, Button } from "react-native";
import { DateField } from "./Date";

export const Filter = ({
	data,
	textColor,
	selectedValue,
	setSelectedValue,
	setSelectedDate,
}) => {
	let groupList = [];
	data.forEach((item) => {
		if (!(groupList.indexOf(item.group) + 1)) groupList.push(item.group);
	});
	groupList = groupList.map((item) => (
		<Picker.Item label={item} value={item} key={item} />
	));

	return (
		<View>
			<View style={styles.select}>
				<Picker
					selectedValue={selectedValue}
					onValueChange={(itemValue) => setSelectedValue(itemValue)}
					style={textColor == "dark" ? { color: "#fff" } : { color: "#000" }}
				>
					{groupList}
				</Picker>
			</View>
			<DateField setSelectedDate={setSelectedDate} />
		</View>
	);
};

const styles = StyleSheet.create({
	select: {
		borderBottomColor: "#04d435",
		borderRadius: 8,
		borderBottomWidth: 2,
		marginBottom: 15,
	},
});
