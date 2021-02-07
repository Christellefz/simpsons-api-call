
import React from 'react';



const QuoteCards = ({simpsons}) => {
    return (
      <figure className="QuoteCard">
        <img src={simpsons.image} alt={simpsons.character} />
        <figcaption>
          <blockquote>{simpsons.quote}</blockquote>
        <p>
            <cite>{simpsons.character}</cite>
        </p>
        </figcaption>
      </figure>
    );
  
}

export default QuoteCards;