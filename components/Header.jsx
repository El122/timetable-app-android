import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const Header = ({ theme, changeTheme }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Расписание занятий</Text>
			<TouchableHighlight
				onPress={() =>
					theme == "dark" ? changeTheme("light") : changeTheme("dark")
				}
			>
				{theme == "dark" ? (
					<Icon name="sunny-outline" size={25} color="#f5a623" />
				) : (
					<Icon name="moon-outline" size={25} color="#f5a623" />
				)}
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		fontSize: 28,
		color: "#7f51fd",
	},
});
