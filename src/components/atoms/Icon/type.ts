import IcomoonIcons from './selection.json';

const icons: string[] = IcomoonIcons.icons.map(({ properties }) => properties.name);

export enum IconSizes {
  xxs = '1rem',
  xs = '1.25rem',
  sm = '1.56rem',
  md = '1.875rem',
  lg = '2.1875rem',
  xl = '2.5rem',
  xxl = '3.125rem'
}

export type IconTypes = typeof icons[number];

export interface IconType {
  icon: IconTypes;
  className?: string;
  color?: string;
  size?: IconSizes;
  rotate?: number;
}
