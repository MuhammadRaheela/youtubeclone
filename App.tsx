// import React, { useEffect, useState } from 'react';
// import { View, Text,  StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
// import axios from 'axios';


// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         setPosts(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching posts:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" style={styles.loading} />;
//   }

//   return (
//    <ScrollView contentContainerStyle={styles.container}>
//     <Text style={styles.title}>API DATA.......</Text>
//     {
//       posts.slice(0,10).map((item)=>(
//       <View key={item.id} style={styles.post}>
//         <Text style={styles.postTitle}>{item.title}</Text>
//         <Text>{item.body}</Text>
//       </View>

//       ))}
//    </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding:20,
//      paddingTop: 50,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20
//   },
//   post:{
//     marginBottom: 15,
//     padding:15,
//     backgroundColor:"#f2f2f2",
//     borderRadius: 8
//   },
//   postTitle:{
//     fontSize: 16,
//     fontWeight: 'bold'
//   },
//   loading:{
//     flex: 1,
//     justifyContent:"center"
//   }
// })

// export default App;




// import * as React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './screen/Home';
// import Deatils from './screen/Details';
// import { NavigationContainer } from '@react-navigation/native';

// const Stack = createNativeStackNavigator()

// export default function App(){
// return(
// <NavigationContainer>
//   <Stack.Navigator initialRouteName='Home'>
//           <Stack.Screen name="Home" component={Home} />
//     <Stack.Screen name="Details" component={Deatils} />
//   </Stack.Navigator>
// </NavigationContainer>

//   )
// }


import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe'


const App = () => {

  const [playing, setPlaying] = useState(false)

  return (
    <ScrollView>


      <View style={{ marginTop: 10 }}>
        <View style={styles.container}>
          <Image source={require('./assets/youtube.png')} resizeMode="contain" style={styles.image} />
          <Text style={styles.text}>YouTube</Text>
          <Image resizeMode='contain' source={require('./assets/cast.png')} style={styles.cast} />
          <Image resizeMode="contain" source={require('./assets/Ring.png')} style={styles.Ring} />
          <Image resizeMode='contain' source={require('./assets/search.png')} style={styles.search} />
        </View>


        <View style={styles.container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <Text style={styles.Box}>  All  </Text>
            <Text style={styles.Box}> Shorts </Text>
            <Text style={styles.Box}> New to you </Text>
            <Text style={styles.Box}> News </Text>
            <Text style={styles.Box}> Music </Text>
            <Text style={styles.Box}> SMIT </Text>
            <Text style={styles.Box}> Mixes </Text>
            <Text style={styles.Box}> New to you </Text>
            <Text style={styles.Box}> Live </Text>
            <Text style={styles.Box}> Cricket </Text>
            <Text style={styles.Box}> Comedy </Text>
            <Text style={styles.Box}> Recently uploaded </Text>
            <Text style={styles.Box}> Posts</Text>
            <Text style={styles.Box}> send feedback </Text>
          </ScrollView>
        </View>


        <View style={styles.container}>
          <Image resizeMode='contain' source={require('./assets/shortt.png')} style={styles.short} />
          <Text style={styles.textt}>Shorts</Text>
          <View >
            <Text style={{ fontSize: 20, fontWeight: 900, marginTop: 10, marginRight: 10 }} >⋮</Text>
          </View>
        </View>


        <View style={styles.container}>
          <Image resizeMode='contain' source={require('./assets/Front.jpg')} style={styles.front} />
        </View>


        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/pic.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/pic2.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/pic3.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/pic5.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/pic6.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/pic7.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/image.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/image2.png')} />
          </ScrollView>
        </View>



        <View style={{ gap: 10 }}>
          <YoutubeIframe
            height={200}
            play={playing}
            videoId={'l4mQkhqzPak'}
          />

          <View style={{ flexDirection: 'row', }}>
            <Image
              resizeMode='cover'
              source={require('./assets/youtubeicon2.png')}
              style={styles.videoicon}
            />

            <Text style={{ marginLeft: 8, marginTop: 10 }}>
              Dua Ko Jaldi Qabool Karwane Ka Tarika | {'\n'}
              Important Latest Bayan by Tariq Jameel
              {'\n'}
              <Text style={{ fontSize: 9 }}>  909K views 3 months ago</Text>
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 900, marginTop: 15, marginLeft: 22 }} >⋮</Text>
          </View>

          <YoutubeIframe
            height={200}
            play={playing}
            videoId={'6FKXO8nkmSk'}
          />

          <View style={{ flexDirection: 'row', }}>
            <Image
              resizeMode='cover'
              source={require('./assets/youtubeicon.png')}
              style={styles.videoicon}
            />

            <Text style={{ marginLeft: 10, marginTop: 15 }}>
              CSS CLASS COLOR AD TEXT STYLING...... {'\n'}
              (FONT FAMILY)
              {'\n'}
              <Text style={{ fontSize: 9 }}>
                3 views May 18, 2025
              </Text>
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 900, marginTop: 15, marginLeft: 15 }} >⋮</Text>
          </View>


          <YoutubeIframe
            height={200}
            play={playing}
            videoId={'RM47KpcS48c'}
          />

          <View style={{ flexDirection: 'row', }}>
            <Image
              resizeMode='cover'
              source={require('./assets/youtubeicon3.png')}
              style={styles.videoicon}
            />
            <Text style={{ marginLeft: 10, marginTop: 15 }}>
              ARY News 6 PM Bulletin || 18th May 2025...{'\n'}
              Jamaat-e-Islami March Against India,Israel

              {'\n'}
              <Text style={{ fontSize: 9 }}>
                3,275 views 1 hour ago
              </Text>
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 900, marginTop: 15, marginLeft: 15 }} >⋮</Text>
          </View>


          <YoutubeIframe
            height={200}
            play={playing}
            videoId={'b4-_1BqAcNI'}
          />

          <View style={{ flexDirection: 'row', }}>
            <Image
              resizeMode='cover'
              source={require('./assets/youtubeicon4.png')}
              style={styles.videoicon}
            />
            <Text style={{ marginLeft: 10, marginTop: 15 }}>

              Donald Trump in Qatar: President greeted with {'\n'} red Cybertrucks, signs deal to boost defense,

              {'\n'}
              <Text style={{ fontSize: 9 }}>
                653k views 4 days ago
              </Text>
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 900, marginTop: 15, marginLeft: 15 }} >⋮</Text>
          </View>

          <Image resizeMode='cover'
            source={require('./assets/youtubeicon5.png')}
          />


          <YoutubeIframe
            height={200}
            play={playing}
            videoId={'uu4Rkyp8_FA'}
          />

          <View style={{ flexDirection: 'row', }}>
            <Image
              resizeMode='cover'
              source={require('./assets/youtubeicon4.png')}
              style={styles.videoicon}
            />
            <Text style={{ marginLeft: 10,marginBottom:4, marginTop: 15 }}>

              Mark Zuckerberg: 50% Of Coding Will 
              {'\n'}
              Be Done By AI 
              
               In 2026 | 
              Satya Nadella Ag!

              {'\n'}
              <Text style={{ fontSize: 9, }}>
                73k 2 weeks ago
              </Text>
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 900, marginTop: 15, marginLeft: 15 }} >⋮</Text>
          </View>

           <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/image.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/pic5.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/pic6.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/pic.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/pic2.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/pic3.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/pic7.png')} />
            <Image style={styles.Pictures} resizeMode='contain' source={require('./assets/image2.png')} />
          </ScrollView>
        </View>
        </View>
      </View>
    </ScrollView>
  );

};

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
    gap: '16px',
  },

  videoicon: {
    flexDirection: 'row',
    width: 40,
    height: 40,
    borderRadius: 100,
    marginTop: 10,
    marginLeft: 10
  },
  image: {
    width: 35,
    height: 30,
  },

  front: {
    width: 400,
    height: 350,
  },
  text: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  Ring: {
    width: 35,
    height: 20,
  },
  search: {
    width: 20,
    height: 40,
    marginLeft: 6,
  },
  cast: {
    width: 35,
    height: 20,
    marginLeft: 150
  },

  Box: {
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    height: 30,
    marginHorizontal: 3,
    padding: 3,
    alignSelf: "flex-start",
  },
  short: {
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10,
    width: 35,
    height: 30,
  },
  textt: {
    fontSize: 15,
    marginTop: 10,
    marginRight: 245,
    fontWeight: 'bold',
  },
  Pictures: {
    margin: 10,
    height: 290,
    width: 164,
    borderRadius: 10,
    objectFit: 'cover'
  }

})


export default App;

