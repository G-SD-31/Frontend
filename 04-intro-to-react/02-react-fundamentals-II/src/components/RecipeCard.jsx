const RecipeCard = ({ recipe: { name, difficulty, rating, image } }) => {
  return (
    <div className='card bg-base-100 w-80 shadow-sm'>
      <figure>
        <img src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>{difficulty}</div>
          <div className='badge badge-outline'>{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
