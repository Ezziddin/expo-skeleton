import { withBone } from './core';
import { Animated } from 'react-native';

const { View, Text, Image } = Animated;

export const ViewBone = withBone(View);
export const TextBone = withBone(Text);
export const ImageBone = withBone(Image);
