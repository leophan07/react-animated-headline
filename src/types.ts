export type Type =
  | 'rotate-1'
  | 'rotate-2'
  | 'rotate-3'
  | 'type'
  | 'loading-bar'
  | 'slide'
  | 'clip'
  | 'zoom'
  | 'scale'
  | 'push';

export interface ReactAnimatedHeadlineProps {
  type: Type;
  text: string[];
  headline: string;
}
