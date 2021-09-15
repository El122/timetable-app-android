import React from "react";
import { View, StyleSheet, Button } from "react-native";

export const DateField = ({ setSelectedDate }) => {
	return (
		<View style={styles.container}>
			<View style={{ ...styles.button, marginRight: 20 }}>
				<Button
					color="#fc5d02"
					title="Сегодня"
					onPress={() => setSelectedDate(new Date())}
				/>
			</View>
			<View style={styles.button}>
				<Button
					color="#ffa001"
					title="Завтра"
					onPress={() =>
						setSelectedDate(
							new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
						)
					}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginBottom: 20,
	},
	button: {
		flex: 1,
	},
});
