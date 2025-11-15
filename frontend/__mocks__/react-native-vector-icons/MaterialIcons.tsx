import React from 'react';
import {Text} from 'react-native';

type Props = {
  name?: string;
  size?: number;
  color?: string;
};

const MaterialIconsMock: React.FC<Props> = ({name}) => {
  return <Text>{name ?? 'icon'}</Text>;
};

export default MaterialIconsMock;
