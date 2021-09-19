import Image from "next/image";

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
  const data = await res.json();

  let meal = {};
  if (data.meals) {
    meal = data.meals[0];
  }

  return {
    props: { meal: meal },
  };
};

const Meal = ({ meal }) => {
  return (
    <div className="container mt-4">
      {meal.strMeal ? (
        <>
          <div className="row pb-4">
            <div className="col-4 text-center">
              <Image src={meal.strMealThumb} width={400} height={300} />
              <h5>{meal.strCategory}</h5>
              <p>{meal.strArea}</p>
            </div>
            <div className="col-8">
              <h2 className="mb-3">{meal.strMeal}</h2>
              <p>{meal.strInstructions}</p>
            </div>
          </div>
          <div className="row pb-4">
            <div className="col">
              <h4 className="text-center mb-4">
                Watch a Video About {meal.strMeal}
              </h4>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  width="560"
                  height="315"
                  className="embed-responsive-item"
                  src={meal.strYoutube.replace("/watch?v=", "/embed/")}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
};

export default Meal;
