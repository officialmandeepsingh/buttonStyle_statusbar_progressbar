import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

const App = () => {
  const [showIndicator, setShowIndicator] = useState(false);
  const [statusColor, setStatusColor] = useState('black');

  const updateIndicatorStatus = () => {
    setShowIndicator(true);
    setTimeout(() => {
      setShowIndicator(false);
    }, 3000);
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={statusColor} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Button Style</Text>
      </View>

      <TouchableHighlight
        onPress={() => console.warn('Primary Button Pressed')}
        onLongPress={() => setStatusColor('green')}
        onPressOut={updateIndicatorStatus}
        style={[styles.touchableButtonContainer, styles.primary]}>
        <Text style={[styles.title, styles.whiteTextColor]}>Primary</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => console.warn('Error Button Pressed')}
        onLongPress={() => setStatusColor('red')}
        onPressOut={updateIndicatorStatus}
        style={[styles.touchableButtonContainer, styles.error]}>
        <Text style={[styles.title, styles.whiteTextColor]}>Error</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => console.warn('Warning Button Pressed')}
        onLongPress={() => setStatusColor('yellow')}
        onPressOut={updateIndicatorStatus}
        style={[styles.touchableButtonContainer, styles.warning]}>
        <Text style={[styles.title, styles.blackTextColor]}>Warning</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => console.warn('Info Button Pressed')}
        onLongPress={() => setStatusColor('blue')}
        onPressOut={updateIndicatorStatus}
        style={[styles.touchableButtonContainer, styles.info]}>
        <Text style={[styles.title, styles.whiteTextColor]}>Information</Text>
      </TouchableHighlight>

      <ActivityIndicator size={50} color="red" animating={showIndicator} />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  textContainer: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  touchableButtonContainer: {
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',

    justifyContent: 'center',
  },
  primary: {
    backgroundColor: 'green',
  },
  error: {
    backgroundColor: 'red',
  },
  warning: {
    backgroundColor: 'yellow',
  },
  info: {
    backgroundColor: 'blue',
  },
  whiteTextColor: {
    color: 'white',
  },
  blackTextColor: {
    color: 'black',
  },
});

export default App;
