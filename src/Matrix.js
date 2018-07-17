import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: '#FFF'
    }
  }

  // HOW DO I GET MATRIX'S COLOR STATE INTO CELL

  //pass this function to a child
  changeColor = (trickleUpColors) => {
    this.setState({color: trickleUpColors}, function() {
      console.log(this.state.color)
    })
  }

  genRow = (vals) => (
    vals.map(val => <Cell color={val} coloring={this.state.color}/>)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector deltaColor={this.changeColor}/> {}
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
