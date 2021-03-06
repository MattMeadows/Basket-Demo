import { FC } from 'react';
import IcoMoon from 'react-icomoon';
import iconSet from './selection.json';
import { IconType, IconSizes } from './type';

const Icon: FC<IconType> = ({
  icon,
  size,
  className = '',
  rotate = 0,
  color,
  ...props
}: IconType) => (
  <IcoMoon
    {...props}
    size={size ? IconSizes?.[size] : IconSizes?.sm}
    rotate={rotate}
    icon={icon}
    iconSet={iconSet}
    className={className}
    color={color}
  />
);

export default Icon;
