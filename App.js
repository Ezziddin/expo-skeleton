import React from 'react';
import { View } from './components';
import { StyleSheet, Text } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View loading style={styles.view}>
				<Text>Test</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	view: {
		backgroundColor: 'blue',
		width: '60%',
		height: 20,
	},
});
