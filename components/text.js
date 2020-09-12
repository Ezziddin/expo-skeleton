import React from 'react';
import { Text as NativeText } from 'react-native';

export const Text = ({
	loading,
	animated,
	boneSize,
	numberOfLines,
	bonePlaceholder,
	...props
}) => <NativeText {...props} />;
