import React from 'react';
import { Text as NativeText } from 'react-native';
import { TextBone } from './_core';

export const Text = ({ loading, animated, children, ...props }) => (
	<NativeText {...props}>
		{loading ? <TextBone {...props} /> : children}
	</NativeText>
);
