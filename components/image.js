import React from 'react';
import { Image as NativeImage } from 'react-native';
import { ImageBone } from './_core';

// TODO: use Image lifecycles methods
export const Image = ({ children, loading, ...props }) => (
	<NativeImage {...props}>
		{loading ? <ImageBone {...props} /> : children}
	</NativeImage>
);
