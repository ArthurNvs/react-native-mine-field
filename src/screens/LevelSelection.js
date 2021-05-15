import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
               visible={props.isVisible} animationType='slide'
               transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}> Dificuldade </Text>
                    <TouchableOpacity 
                        style={[styles.button, styles.bgEasy]}
                        onPress={() => props.onLvlSelected(0.05)}>
                            <Text style={styles.buttonLabel}> Fácil </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.button, styles.bgNormal]}
                        onPress={() => props.onLvlSelected(0.1)}>
                            <Text style={styles.buttonLabel}> Normal </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={[styles.button, styles.bgHard]}
                        onPress={() => props.onLvlSelected(0.25)}>
                            <Text style={styles.buttonLabel}> Difícil </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },

    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },

    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    button: {
        marginTop: 10,
        padding: 5,
    },

    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },

    bgEasy: {
        backgroundColor: '#49b65d'
    },

    bgNormal: {
        backgroundColor: '#2765F7'
    },

    bgHard: {
        backgroundColor: '#F26337'
    }
})