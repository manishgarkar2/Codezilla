import React from 'react';
import { View } from 'react-native';
import ProfileComponent from '../../component/ProfileComponent';
import CustomHeader from '../../component/CustomHeader';


const Profile = () => {
    
    return (
        <View style={{flex:1}} >
           <CustomHeader title='Profile' menuIcon />
           <ProfileComponent 
            candidateName='Manish Garkar'
            candidateAge={24}
            candidateEmail='manishgarkar@gmail.com'
            candidateSkills={['React native , android , ios , cicd , AR/VR','java']}
           />
        </View>
    )
}
export default Profile;      