// // import React, { useEffect, useState } from 'react';
// // import { View, Text,  StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
// // import axios from 'axios';


// // const App = () => {
// //   const [posts, setPosts] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     axios.get('https://jsonplaceholder.typicode.com/posts')
// //       .then((response) => {
// //         setPosts(response.data);
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching posts:', error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) {
// //     return <ActivityIndicator size="large" style={styles.loading} />;
// //   }

// //   return (
// //    <ScrollView contentContainerStyle={styles.container}>
// //     <Text style={styles.title}>API DATA.......</Text>
// //     {
// //       posts.slice(0,10).map((item)=>(
// //       <View key={item.id} style={styles.post}>
// //         <Text style={styles.postTitle}>{item.title}</Text>
// //         <Text>{item.body}</Text>
// //       </View>

// //       ))}
// //    </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding:20,
// //      paddingTop: 50,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20
// //   },
// //   post:{
// //     marginBottom: 15,
// //     padding:15,
// //     backgroundColor:"#f2f2f2",
// //     borderRadius: 8
// //   },
// //   postTitle:{
// //     fontSize: 16,
// //     fontWeight: 'bold'
// //   },
// //   loading:{
// //     flex: 1,
// //     justifyContent:"center"
// //   }
// // })

// // export default App;




// // import * as React from 'react';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import Home from './screen/Home';
// // import Deatils from './screen/Details';
// // import { NavigationContainer } from '@react-navigation/native';

// // const Stack = createNativeStackNavigator()

// // export default function App(){
// // return(
// // <NavigationContainer>
// //   <Stack.Navigator initialRouteName='Home'>
// //           <Stack.Screen name="Home" component={Home} />
// //     <Stack.Screen name="Details" component={Deatils} />
// //   </Stack.Navigator>
// // </NavigationContainer>

// //   )
// // }




