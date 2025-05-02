import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Canvas, Path, Skia } from '@shopify/react-native-skia';

export default function App() {
  const { width, height } = Dimensions.get('window');

  // Sample path (like a squiggle line)
  const path = Skia.Path.Make();
  path.moveTo(50, 50);
  path.lineTo(150, 150);
  path.lineTo(100, 200);

  return (
    <View style={styles.container}>
      <Canvas style={{ width, height }}>
        <Path path={path} color="lime" style="stroke" strokeWidth={4} />
      </Canvas>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
