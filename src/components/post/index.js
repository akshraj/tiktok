import React,{ useState } from 'react'
import { View, TouchableWithoutFeedback, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'

import Video from 'react-native-video'
import styles from './styles'

const post = (props) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [post, setPost] = useState(props.post)
    const onVideoPress = () => {
        setIsVideoPlaying(!isVideoPlaying)
    }
    const likePressed = () => {
        const likeAdded = isLiked ? -1 : 1
        setPost({
            ...post,
            likes: post.likes + likeAdded
        })
        setIsLiked(!isLiked)
    }

    return(
        <View style={styles.post}>
            <TouchableWithoutFeedback onPress={onVideoPress}>
                <View>
                    <Video
                        source={{uri: post.videoUri}}
                        style={styles.video}
                        resizeMode={'cover'}
                        onError = {(e)=> console.log(e)}
                        repeat={true}
                        paused={isVideoPlaying}
                    />
                    <View style={styles.uiContainer}>
                        <View style={styles.post__right}>

                            <Image style={styles.profilePicture} source={{uri:post.profilePic}}/>
                            <View style={styles.iconContainer}>
                                <TouchableWithoutFeedback  onPress={likePressed}>
                                    <AntDesign name='heart' size={35} color={isLiked?'red':'#fff'}/>
                                </TouchableWithoutFeedback>
                                <Text style={styles.statsLabel}>{post.likes}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <FontAwesome name='commenting' size={35} color='#fff'/>
                                <Text style={styles.statsLabel}>{post.comments}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Fontisto name='share-a' size={35} color='#fff'/>
                                <Text style={styles.statsLabel}>{post.shares}</Text>
                            </View>
                        </View>
                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.handle}>
                                    {post.username}
                                </Text>
                                <Text style={styles.description}>
                                    {post.songDes}
                                </Text>
                                <View style={styles.post__songRow}>
                                    <Entypo name='beamed-note' size={24} color='white'/>
                                    <Text style={styles.songName}>{post.songname}</Text>
                                </View>
                            </View>
                            <Image source={{uri:post.songImage}}
                            style={styles.songImage}/>
                        </View>
                    </View>
            </View>
        </TouchableWithoutFeedback>
    </View>
    )
}

export default post;
