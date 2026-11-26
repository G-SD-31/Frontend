import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

// const recipes = [
//   {
//     id: 1,
//     name: 'Classic Margherita Pizza',
//     image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
//     difficulty: 'Easy',
//     rating: 4.6,
//   },
//   {
//     id: 2,
//     name: 'Vegetarian Stir-Fry',
//     image: 'https://cdn.dummyjson.com/recipe-images/2.webp',
//     difficulty: 'Medium',
//     rating: 4.7,
//   },
//   {
//     id: 3,
//     name: 'Chocolate Chip Cookies',
//     image: 'https://cdn.dummyjson.com/recipe-images/3.webp',
//     difficulty: 'Easy',
//     rating: 4.9,
//   },
// ];

const user = {
  name: 'John',
};

// const user = null;

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://dummyjson.com/recipes', {
      signal: controller.signal,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.recipes);
        setRecipes(data.recipes);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Fetch anfrage wurde abgebrochen');
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  // Async/Await Version des obigen useEffect
  useEffect(() => {
    const controller = new AbortController();

    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes', {
          signal: controller.signal,
        });
        const data = await response.json();
        console.log(data.recipes);
        setRecipes(data.recipes);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch anfrage wurde abgebrochen');
        }
      }
    };

    // Nicht vergessen: Die Funktion direkt aufrufen!
    fetchRecipes();

    return () => {
      controller.abort();
    };
  }, []);

  // useEffect(() => {
  //   console.log('Re-render');
  // });

  // useEffect(() => {
  //   console.log('Number geändert');
  // }, [number]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log('Timer running');
  //     setNumber(1);
  //   }, 2000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.suche.value);
  };

  return (
    <main className='flex-1'>
      <h1 className='text-3xl text-neutral-content font-bold text-center'>
        {/* Willkommen bei Overcooked! {user ? user.name : 'Gast'} */}
        Willkommen bei Overcooked! {user && user.name}
      </h1>
      <form onSubmit={handleSubmit}>
        <input type='text' className='input' name='suche' />
        <button className='btn btn-primary'>Suchen</button>
      </form>
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </main>
  );
};

export default Home;
