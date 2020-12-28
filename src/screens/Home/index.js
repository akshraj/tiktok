import React from 'react';
import { View, FlatList, Text, Dimensions } from 'react-native';
import Post from '../../components/post';
import styles from './styles';
import posts from '../../../data/post'

const Home = () => {
  return (
    <View style={{flex:1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={({item}) => <Post post={item}/>}
        keyExtractor={item => item.id}
        snapToInterval={Dimensions.get('window').height - 48}
        decelerationRate='fast'
        snapToAlignment='start'
      />
    </View>
  );
// eslint-disable-next-line semi
}

export default Home;
