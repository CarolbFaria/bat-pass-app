import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard'

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

  return (
    <>
         <BatTextInput pass={pass}/>
         
        <Pressable
            onPress={handleGenerateButton}
            style={styles.button}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable
            onPress={handleCopyButton}
            style={styles.button}
        >
            <Text style={styles.text}>⚡️ COPY</Text>
        </Pressable>
    </>

  );
}