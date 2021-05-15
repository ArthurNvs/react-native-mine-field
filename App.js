import React, { Component } from 'react'
import params from './src/params'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native'

import MineField from './src/components/MineField'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'

import { 
  createMinedBoard, 
  cloneBoard,
  openField,
  hasExplosion,
  winGame,
  showMines,
  invertFlag,
  flagsUsed 
} from './src/gameLogic'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultyLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLvlSelection: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hasExplosion(board)
    const won = winGame(board)

    if(lost) {
      showMines(board)
      Alert.alert('Fim de Jogo', 'Não foi dessa vez...')
    }

    if(won) {
      Alert.alert('Parabéns', 'Você é um vencedor!')
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = winGame(board)

    if (won) {
      Alert.alert('Parabéns', 'Você venceu!')
    }

    this.setState({ board, won })
  }

  onLvlSelected = lvl => {
    params.difficultyLevel = lvl
    this.setState(this.createState())
  }

  render() { 
    return (
      <SafeAreaView style={styles.container}>
        <LevelSelection isVisible={this.state.showLvlSelection}
                        onLvlSelected={this.onLvlSelected}
                        onCancel={() => this.setState({ showLvlSelection: false })} />
      <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
              onNewGame={() => this.setState(this.createState())}
              onFlagPress={() => this.setState({ showLvlSelection: true })} />
      <View style={styles.board}>
        <MineField 
          board={this.state.board}
          onOpenField={this.onOpenField}
          onSelectField={this.onSelectField}
           />
      </View>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});

