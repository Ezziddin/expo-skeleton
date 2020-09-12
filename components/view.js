import React from 'react';
import { View as NativeView } from 'react-native';
import { ViewBone } from './_core';

export const View = ({ loading, animated, children, ...props }) => (
	<NativeView {...props}>
		{loading ? <ViewBone {...props} /> : children}
	</NativeView>
);
