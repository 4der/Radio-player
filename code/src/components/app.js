import React from "react"
import Radio from "./station"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        channels: json.channels
      })
      console.log(json)
    })
  }

  render() {
    return (
      <div className="channelList">
        {this.state.channels.map((channels, index) => {
          if (index === 35 || index === 2 || index === 0 || index === 5) {
            return <Radio
              name={channels.name}
              image={channels.image}
              audio={channels.liveaudio.url}
              color={channels.color} />
          }
        })}

      </div>
    )
  }
}

export default App
