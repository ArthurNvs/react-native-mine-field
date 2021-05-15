import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'
import dificultyLevels from './dificultyLevels'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
               visible={props.isVisible} animationType='slide'
               transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}> Dificuldade </Text>

                    {dificultyLevels.map((d, i) => {
                        return (
                            <TouchableOpacity 
                                key={i}
                                style={[styles.button, d.stl === 'bgEasy' ? styles.bgEasy : 
                                    d.stl === 'bgNormal' ? styles.bgNormal : styles.bgHard]}
                                onPress={() => props.onLvlSelected(d.dificulty)}>
                                    <Text style={styles.buttonLabel}> {d.text} </Text>
                            </TouchableOpacity>
                        )
                    })}
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