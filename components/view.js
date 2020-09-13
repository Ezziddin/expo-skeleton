import React from 'react';
import { StyleSheet, View as NativeView } from 'react-native';
import { ViewBone } from './_core';

export const View = ({ loading, animated, children, style, ...props }) => (
	<NativeView
		style={[loading ? styles.conatiner_loading : {}, style]}
		{...props}>
		{loading ? <ViewBone style={style} {...props} /> : children}
	</NativeView>
);

const styles = StyleSheet.create({
	conatiner_loading: {
		borderRadius: 5,
		overflow: 'hidden',
	},
});
