import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();

  return {
    props: { categories: data.categories },
  };
};

const Home = ({ categories }) => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-4">Good Meals, Good Life</h1>
              <p className="lead">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="col">
              <Image
                className={styles.jumbotronImage}
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center">Categories</h2>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col text-center">
            {categories.map((category) => (
              <Link
                key={category.idCategory}
                href={"/category/" + category.strCategory}
              >
                <a className="btn btn-light btn-lg mx-4 my-2">
                  {category.strCategory}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
