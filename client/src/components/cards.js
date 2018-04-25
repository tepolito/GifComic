import React from 'react';

import Editing from './editing';

//import './card.css';

export default function Cards(props) {
  console.log(props);



    return (
      <article className="comic">
      {props.cards.map((g, i) => {

        let style = {
          flexBasis: Number(g.slider)
        }

        if(g.iframeSelect == 'cover')
        {
          style.width = '177.7777777vh';
          style.height = '56vh';
          style.top = '100%';
        }
        console.log(g);

        return (
          <div onClick={()=>props.selectCard(i)} key={i} className='panel' style={style}>
        {/*  {g.id} slider value{g.slider} */}

            <div className="container">
              <iframe
                src={g.giph}

                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                style={{pointerEvents:'none'}}
              />
            </div>

            <div className={g.textSelect} contentEditable={props.editing}>
              {g.textBox}
            </div>

            {/*<Editing {...props} identifyer={i} butName='Edit'/> */}
        </div>
        )
      })}
    </article>
    );
};
