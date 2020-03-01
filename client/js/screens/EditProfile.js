import React, {useState} from 'react'
import { Modal, TouchableOpacity, Text, SafeAreaView, View } from 'react-native'
import LeftArrow from '../components/LeftArrow'
import BellIcon from '../../assets/icons/profile/icon-profile-bell.svg'
import UserIcon from '../../assets/icons/profile/icon-profile-user.svg'
import DeleteIcon from '../../assets/icons/profile/icon-profile-delete.svg'
import SettingItem from '../components/SettingItem'

import styles from './styles'

// to be changed to settings component
const EditProfile = ({modal}) => {

  return (
    <SafeAreaView>
      <View style={styles.settings_container}>
        <View style={styles.settings_leftArrow}>
        <TouchableOpacity 
            onPress={() => {
              modal(false)
          }}>
          <LeftArrow />
        </TouchableOpacity>
        </View>
        <View style={styles.settings_contentContainer}>
          <Text style={styles.settings_title}>
            Edit Profile
          </Text>
          
        </View>
      </View>
    </SafeAreaView>
  )
}

export default EditProfile