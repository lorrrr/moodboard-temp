import React from 'react'
import ArenaBlock from "./ArenaBlock"


class ArenaChannel extends React.Component {

  constructor(props) {
   super(props);

   this.state = {
     channel: [],
     blocks: []
   };
 }
 componentDidMount() {
   this.getData();
 }
  getData(){
    const Arena = require("are.na");
    const arena = new Arena();

    arena.channel(this.props.slug).get().then(chan => {
      const channel = chan;
      const blocks= Array.from(chan.contents);
      this.setState({ channel,blocks });

    })

  };
  render() {

    return (
      <div>
        <h1>{this.state.channel.title}</h1>
        { this.state.blocks.map(block => <ArenaBlock block={block}/>)}
      </ div>
    );
  }
}

export default ArenaChannel;
