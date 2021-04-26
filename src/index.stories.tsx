import React from 'react';
import { ReactAnimatedHeadline } from './index';

export default {
  title: 'React Animated Headline',
};

const text = ['Leo Phan', 'Clement Le', 'David Tran'];
const headline = 'My name is';

export const Rotate1 = (): JSX.Element => (
  <ReactAnimatedHeadline type="rotate-1" text={text} headline={headline} />
);
export const Slide = (): JSX.Element => (
  <ReactAnimatedHeadline type="slide" text={text} headline={headline} />
);
export const Zoom = (): JSX.Element => (
  <ReactAnimatedHeadline type="zoom" text={text} headline={headline} />
);
export const Push = (): JSX.Element => (
  <ReactAnimatedHeadline type="push" text={text} headline={headline} />
);
export const Type = (): JSX.Element => (
  <ReactAnimatedHeadline type="type" text={text} headline={headline} />
);
