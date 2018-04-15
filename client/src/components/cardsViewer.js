import React from 'react';

import Editing from './editing';

//import './card.css';

export default function CardsViewer(props) {
  console.log(props);



    return (
      <article className="comic">
      {props.protectedData.map((g, i) => {
        return (
          <div key={i} className='panel' style={{flexBasis: Number(g.slider)}}>
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

            <div className={g.textSelect}>
              {g.textBox}
            </div>

        </div>
        )
      })}
    </article>
    );
};
