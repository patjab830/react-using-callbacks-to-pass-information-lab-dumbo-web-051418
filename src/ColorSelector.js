import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} data-color={str}/>
    })
  )

  clickHandler = (e) => {
    return e.target.dataset.color
  }

  render() {
    return (
      <div id="colorSelector" onClick={(e) => {this.props.deltaColor(this.clickHandler(e))}}>
        {this.makeColorSwatches()}
      </div>
    )
  }

}
