import React, { useEffect, useRef, useMemo } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const withBone = (Comp) => ({
	boneSize = { width: '100%', height: '100%' },
	...props
}) => {
	const { width, height } = boneSize;

	const Bone = useMemo(() => Comp || View, []);
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
		<Comp style={styles.container}>
			<Bone
				style={{
					transform: [
						{
							translateX,
						},
					],
				}}
				{...props}>
				<LinearGradient
					style={{ width: 300, height: 300 }}
					colors={['#eee', '#fff', '#eee']}
					start={[0, 0]}
					end={[1, 0]}
				/>
			</Bone>
		</Comp>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 300,
		overflow: 'hidden',
		backgroundColor: '#eee',
		borderRadius: 10,
	},
});
