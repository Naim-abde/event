import { useContext, useEffect } from "react";
import { CategoryContext } from "../../context/CategoryContext";

const CategoriesAdmin = () => {
  const { categories, getCategories } = useContext(CategoryContext);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {categories && categories.length > 0 ? (
        categories.map((element) => (
          <div
            key={element.id}
            className="bg-black border border-zinc-800 rounded-3xl overflow-hidden hover:border-blue-600 transition"
          >

            {/* IMAGE FULL WIDTH */}
            <div className="h-40 w-full">
              <img
                src={`http://localhost:8000/storage/${element.image}`}
                alt={element.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              <div className="flex items-center justify-between">

                <h2 className="text-xl font-bold text-white">
                  {element.name}
                </h2>

                <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white">
                  12
                </span>

              </div>

              {/* BUTTONS */}
              <div className="mt-6 flex gap-2">

                <button className="flex-1 bg-zinc-900 hover:bg-zinc-800 py-2.5 rounded-xl transition text-white">
                  Delete
                </button>

                <button className="flex-1 bg-blue-600 hover:bg-blue-700 py-2.5 rounded-xl transition text-white">
                  Update
                </button>

              </div>

            </div>

          </div>
        ))
      ) : (
        <div className="text-zinc-400">
          there is no categories
        </div>
      )}

    </div>
  );
};

export default CategoriesAdmin;