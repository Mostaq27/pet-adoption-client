import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/category`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setCategory(data)
        setLoading(false)
      })
  }, [])
  return (
    <div>
      <h2 className="text-5xl font-bold text-red-300 text-center py-10">Our Adorable Pet Category</h2>
      <p className="text-center">
        "Explore the world of companionship in our diverse pet categories. From the playful antics of dogs to the graceful elegance of cats,<br/> each category holds a unique friend waiting to brighten your life. Adopt joy, adopt love, and make a forever friend today. Your perfect companion is just a category away!"</p>
      {
        loading ? <div className="  justify-center items-center flex py-20">
          <RingLoader
            color="hsla(10, 91%, 27%, 1)"
            cssOverride={{}}
            loading
            size={74}
            speedMultiplier={1}
          />
        </div>
          :
          <div className="grid grid-cols-1 p-12  md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {
              category.map(card => <CategoryCard
                key={card._id}
                card={card}
              >

              </CategoryCard>)
            }
          </div>
      }
    </div>
  );
};

export default Category;