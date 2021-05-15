import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, 
    difficultyLevel: 0.1,

    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },

    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        //Define a porcentagem do espaço do tabuleiro com base no que sobrou do cabeçalho
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return ~~(boardHeight / this.blockSize)
    }
}

export default params