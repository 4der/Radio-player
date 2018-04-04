import React from "react"

class Station extends React.Component {
  render() {
    return <div className="station">

<div className="stationContainer" style={{ backgroundColor: "#" + this.props.color}}>
        <div>
          <h1>{this.props.name}</h1>
        </div>

        <div className="images">
          <img src={this.props.image} alt="img" />
        </div>

        <div className="audiobar">
          <audio controls>
            <source src={this.props.audio} />
          </audio>
        </div>
      </div>
    </div>
  }
}

export default Station
