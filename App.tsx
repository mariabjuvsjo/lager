import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PostList from './components/PostList';
import warehouse from './assets/skrew.png';

// 72f9bba02fae6b6f226cf148ed5f9e8c 
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 15 }}>
        <Text style={{ fontSize: 35, color: '#b8b8b8', textAlign: "center" }} >Lager Appen!</Text>
        <Image source={warehouse} style={{ width: 320, height: 240 }} />
        <PostList />
        <StatusBar style="auto" />

      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  }
});
