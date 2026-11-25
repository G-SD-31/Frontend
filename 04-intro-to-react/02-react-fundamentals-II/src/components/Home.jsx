import RecipeCard from './RecipeCard';

const recipes = [
  {
    id: 1,
    name: 'Classic Margherita Pizza',
    image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
    difficulty: 'Easy',
    rating: 4.6,
  },
  {
    id: 2,
    name: 'Vegetarian Stir-Fry',
    image: 'https://cdn.dummyjson.com/recipe-images/2.webp',
    difficulty: 'Medium',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Chocolate Chip Cookies',
    image: 'https://cdn.dummyjson.com/recipe-images/3.webp',
    difficulty: 'Easy',
    rating: 4.9,
  },
];

const user = {
  name: 'John',
};

// const user = null;

const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.suche.value);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <main className='flex-1'>
      <h1 className='text-3xl text-neutral-content font-bold text-center'>
        {/* Willkommen bei Overcooked! {user ? user.name : 'Gast'} */}
        Willkommen bei Overcooked! {user && user.name}
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='text'
          className='input'
          name='suche'
        />
        <button className='btn btn-primary'>Suchen</button>
      </form>

      {/* <button
        onClick={() => {
          console.log('Geklickt!');
        }}
        className='btn btn-primary m-2'
      >
        Suchen
      </button> */}
      {/* Props = Properties */}
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </main>
  );
};

export default Home;
