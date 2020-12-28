import React, {useState, useRef} from 'react';
import { View, TouchableOpacity, Alert, PermissionsAndroid, Platform } from 'react-native'
import CameraRoll from '@react-native-community/cameraroll'
import {RNCamera} from 'react-native-camera';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './style'


function Camera(){

const cameraRef = useRef(null)
const [cam, setCam] = useState(RNCamera.Constants.Type.back)
const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.on)
const [flashOn,setFlashOn] = useState(false)

const takePicture = async () => {
    cameraRef.resumePreview()
    if(cameraRef){
        let options = {
            quality: 0.85,
            fixOrientation: true,
            forceUpOrientation: true,
        };
            try {
                const data = await cameraRef.current.takePictureAsync(options);
                    // hasAndroidPermission ()
                        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
                            return;
                        }
                        else if(await hasAndroidPermission()){
                            CameraRoll.save(data.uri,{ type: 'auto', album:'TikTik' })
                        }
                    } catch (err) {
                Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
            return;
        } 
    }
}

async function hasAndroidPermission () {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission === true || hasPermission === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    
    const status = await PermissionsAndroid.request(permission);

    return (status === 'granted' || status === true);
  }

    const flipCamera = () => {
        if(cam === RNCamera.Constants.Type.back){
            setCam(RNCamera.Constants.Type.front)
        }else{
            setCam(RNCamera.Constants.Type.back)
        }
    }

    const flashToggle = () => {
        if(flash === RNCamera.Constants.FlashMode.on){
            setFlash(RNCamera.Constants.FlashMode.off)
            setFlashOn(true)
        }else{
            setFlash(RNCamera.Constants.FlashMode.on)
            setFlashOn(false)
        }
    }

    return (
        <View style={styles.container}>
            <RNCamera 
                ref={cameraRef}
                flashMode={flash}
                captureAudio={true}
                style={styles.preview}
                type={cam}
                faceDetectionMode={true}
                pauseAfterCapture={true}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }} 
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}
            >
            <View style={{ flex: 0, flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity onPress={flipCamera}>
                        <MaterialCommunityIcons name='camera-switch' color='white' size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.5}
                        onPress={takePicture}
                        style={styles.capture}>
                        <Entypo name='camera' size={60} color='black'/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.5}
                        onPress={flashToggle}>
                        {!flashOn ? <Ionicons name='flash' size={30} color='white'/>:
                        <Ionicons name='flash-off' size={30} color='white'/>}
                    </TouchableOpacity>
                
            </View>
            </RNCamera>
        </View>
    )
}

export default Camera