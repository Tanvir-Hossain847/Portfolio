import React from 'react';

const Card = ({card}) => {
    return (
        <div>
             <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={card.logo}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{card.title}</h2>
    <p>{card.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">ZooM</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;