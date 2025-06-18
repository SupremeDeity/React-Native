// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });





// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { Carousel } from 'react-native-snap-carousel'; // ✅ CORRECT

// const { width: screenWidth } = Dimensions.get('window');

// const data = [
//   { title: 'Slide 1', backgroundColor: '#FF6B6B' },
//   { title: 'Slide 2', backgroundColor: '#6BCB77' },
//   { title: 'Slide 3', backgroundColor: '#4D96FF' },
// ];

// export default function App() {
//   const renderItem = ({ item }) => (
//     <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
//       <Text style={styles.title}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth * 0.8}
//         loop={true}
//         autoplay={true}
//         autoplayInterval={2500}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   slide: {
//     borderRadius: 10,
//     height: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   webview: {
//     flex: 1,
//   },
// });





import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const data = ['Slide 1', 'Slide 2', 'Slide 3'];

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={200}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ index }) => (
          <View style={[styles.slide, { backgroundColor: index % 2 === 0 ? '#3498db' : '#9b59b6' }]}>
            <Text style={styles.text}>{data[index]}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});












// import React from 'react';
// import AppNavigator from './src/navigation/AppNavigator';

// export default function App() {
//   return <AppNavigator />;
// }

// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// const { width: screenWidth } = Dimensions.get('window');

// const data = [
//   { title: 'Slide 1', backgroundColor: '#FF6B6B' },
//   { title: 'Slide 2', backgroundColor: '#6BCB77' },
//   { title: 'Slide 3', backgroundColor: '#4D96FF' },
// ];

// export default function App() {
//   const renderItem = ({ item }) => (
//     <View style={[styles.item, { backgroundColor: item.backgroundColor }]}>
//       <Text style={styles.title}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth * 0.8}
//         loop={true}
//         autoplay={true}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   item: {
//     borderRadius: 10,
//     height: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 22,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
