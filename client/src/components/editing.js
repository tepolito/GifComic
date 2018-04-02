import React from 'react';

import Search from './search.js';

export default function Editing(props) {
//  console.log(props)
  const isEditing = props.editing;
  if (isEditing)
  {
    return (
      <div className='toolBox'>

        <br/>
          <label className='tool'>
            <span>Cell Text:</span>
            <input id="textBox" type="text" onChange={props.handleChange} />
          </label>

          <div className="slidecontainer tool">
            <span>Cell Width: {props.slider}</span>
            <input type="range" min="200" max="1000" step="100" class="slider" id="slider" onChange={props.handleChange}/>
          </div>

          <select className='tool' id="textSelect" name="textLocation" onChange={props.handleChange}>
            <option value="text top-left">Top Left</option>
            <option value="text bottom-right">Bottom right</option>
            {/*<option value="speech-bubble">Speech Bubble</option> */}
          </select>

          <button className='tool' onClick={()=>props.save(props.editingCard, props.textBox, props.slider, props.textSelect)}>Save</button>

      {/*  <Search searchGiphs={props.searchGiphs} /> */}
        {props.giphs.map((g, i) => {
      //    console.log(g);
          return (
            <div className="giphContainer" onClick={() => props.selectGiph(g, props.identifyer)}>
              <iframe
                key={i}
                src={g.embed_url}
                width="40"
                height="30"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                style={{pointerEvents:'none'}}
              />
          </div>
          )
        })}

    </div>
  )
  }
  return <button className="toolBox tool" onClick={()=>props.edit(props.editingCard)}>{props.butName}</button>
}
