import { NativeModules } from 'react-native';

type AwesomeNativeType = {
  multiply(a: number, b: number): Promise<number>;
};

const { AwesomeNative } = NativeModules;

export default AwesomeNative as AwesomeNativeType;
