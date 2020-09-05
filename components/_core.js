import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Core = () => {
	const translateX = useRef(new Animated.Value(-300)).current;

	useEffect(() => {
		const animateBones = () => {
			Animated.sequence([
				Animated.timing(translateX, {
					toValue: 300,
					duration: 1000,
					easing: Easing.in,
					useNativeDriver: true,
				}),
				Animated.timing(translateX, {
					toValue: -300,
					duration: 0,
					easing: Easing.in,
					useNativeDriver: true,
				}),
			]).start((e) => e.finished && animateBones());
		};
		animateBones();
	}, []);

	return (
		<View style={styles.container}>
			<Animated.View
				style={{
					transform: [
						{
							translateX,
						},
					],
				}}>
				<LinearGradient
					style={{ width: 300, height: 300 }}
					colors={['#eee', '#fff', '#eee']}
					start={[0, 0]}
					end={[1, 0]}
				/>
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 300,
		overflow: 'hidden',
		backgroundColor: '#eee',
	},
});
