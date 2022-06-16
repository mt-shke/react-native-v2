import React from 'react';
import {View} from 'react-native';

interface IGapProps {
  height?: number;
  width?: number;
  backgroundColor?: string;
}

const Gap: React.FC<IGapProps> = ({height, width, backgroundColor}) => {
  const style = {
    height: height ?? 0,
    width: width ?? 0,
    backgroundColor: backgroundColor ?? 'transparent',
  };
  return <View style={style} />;
};

export default Gap;
