import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Category.module.css";

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + slug
  );
  const data = await res.json();

  return {
    props: { meals: data.meals, slug: slug },
  };
};

const Category = ({ meals, slug }) => {
  console.log(meals);
  return (
    <div className="container">
      <div className="pt-4">
        <div className="text-center">
          <h2>Some {slug} meals that we serve</h2>
        </div>
        <div className="container d-flex row justify-content-center">
          {meals.map((meal) => (
            <div
              className="card text-center"
              style={{ width: "18rem", margin: "24px" }}
            >
              <Image
                className={styles.meal}
                src={meal.strMealThumb}
                width={256}
                height={200}
              />
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <Link href={"/meal/" + meal.idMeal}>
                  <a className="btn btn-primary mt-4">See the detail</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
