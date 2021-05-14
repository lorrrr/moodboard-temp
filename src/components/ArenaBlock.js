import React, {useState} from 'react'
import Draggable from 'react-draggable';
import useWindowSize from "../utils/useWindowSize";

function ArenaBlock(props){


  const [position, setPosition]= useState({ x: 0, y: 0 });
  const [relPos, setRelPos]= useState({ x: 0, y: 0 });
  const [window,setWindow] = useState(useWindowSize());
  const handleStart= (e, data) => {

    // setRelPos({x:(relPos.x+data.deltaY)/window.width, y:(relPos.y+data.deltaY)/window.height});
  };

  const handleDrag = (e, data) => {
    console.log(data);
    setPosition({x:data.x,y:data.y});
  // setRelPos({x:(relPos.x+data.deltaY)/window.width, y:(relPos.y+data.deltaY)/window.height});
  };

  const handleStop = (e, data) => {
    console.log(data);
    // setPosition({x:0,y:0});
    setRelPos({x:(relPos.x+data.deltaY)/window.width, y:(relPos.y+data.deltaY)/window.height});
  };


    const block=props.block;
    const blockContent = ()=> {

      if (block.class=="Image") {
        return (
          <img src={block.image.original.url} draggable="false"/>
        );
      } else if (block.class=="Text") {
        return (
          <div>{block.content}</div>
        );
      } else if (block.class=="Link") {
        return (
          <div>
          <img src= {block.image.display.url} draggable="false"/>
          <a href={block.source.url} target="_blank">{block.source.url}</a>
          </div>
        );
      }
    }

    return(

      <Draggable
      axis="both"
      position={position}
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}>

        <div className="block"  style={{ left: `${relPos.x*100}vw`, top:` ${relPos.y*100}vh`}}>
        {blockContent()}
        </div>

      </Draggable>

    )
  }


export default ArenaBlock;
