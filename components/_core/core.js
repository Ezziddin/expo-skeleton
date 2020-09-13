import React, {
	useEffect,
	useRef,
	useMemo,
	useCallback,
	useState,
} from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BONE_COLOR, DURATION, HIGHLIGHT_COLOR } from '../constants';

export const withBone = (Comp) => ({
	boneSize,
	boneColor = BONE_COLOR,
	highlightColor = HIGHLIGHT_COLOR,
	duration = DURATION,
	style,
	...props
}) => {
	const [layout, setLayout] = useState({});
	const onLayout = useCallback(({ nativeEvent }) => {
		const { width, height } = nativeEvent.layout;
		setLayout({ width, height });
	}, []);

	const Bone = useMemo(() => Comp || View, []);
	const translateX = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		const animateBones = () => {
			const { width } = layout;
			Animated.sequence([
				Animated.timing(translateX, {
					toValue: width,
					duration: duration,
					easing: Easing.in,
					useNativeDriver: true,
				}),
				Animated.timing(translateX, {
					toValue: -width,
					duration: 0,
					easing: Easing.in,
					useNativeDriver: true,
				}),
			]).start((e) => e.finished && animateBones());
		};
		animateBones();
	}, [layout]);

	return (
		<Comp
			onLayout={onLayout}
			style={[
				styles.container,
				{ backgroundColor: boneColor, height: style.height ? '100%' : 'auto' },
			]}>
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
					style={{ width: layout.width, height: layout.height }}
					colors={[boneColor, highlightColor, boneColor]}
					start={[0, 0]}
					end={[1, 0]}
				/>
			</Bone>
		</Comp>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		overflow: 'hidden',
	},
});
