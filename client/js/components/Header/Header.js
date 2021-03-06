import React from 'react'
import {View} from 'react-native'
import styles from './styles'

const Header = ({children}) => {
  return <View style={styles.header}>{children}</View>
}

export default Header
