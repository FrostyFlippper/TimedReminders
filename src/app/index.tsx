import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Appbar } from 'react-native-paper';

//List of example reminders
const reminders = [
  { id: '1', title: 'Take medication', time: '09:00' },
  { id: '2', title: 'Water plants', time: '18:00' },
];

// Describes the data each row in the list receives
type ItemProps = {
  title: string;
  time: string;
};

// Define a function called Item. It receives an ItemProps object, extracts its title and time, and returns the UI below
// We destructure the ItemProps input type using { title, time }
// And return the expression inside the () without needing a return statement
const Item = ({ title, time }: ItemProps) => (
  //Layout container
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.time}>{time}</Text>
  </View>
);

// We create the top bar using a material design theme
function RemindersTopBar() {
  return (
    <Appbar.Header statusBarHeight={0} style={styles.header}>
      <Appbar.Action
        icon="menu"
        iconColor="white"
        //onPress={() =>

        //}
      />
      <Appbar.Content title="Reminders" color="white" />
    </Appbar.Header>
  );
}

// We descibe the entire screen
const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <RemindersTopBar />

      <FlatList
        data={reminders}
        renderItem={({ item }) => <Item title={item.title} time={item.time} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

// We describe the style for each element
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#121212',
    fontSize: 16,
  },
  item: {
    backgroundColor: '#1f1f1f',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  time: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
