import { useEffect, useState } from "react";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=f1c0aa83b17f46589525fd1d09a2a3c4&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  return (
    <>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </>
  );
};

export default Popular;
