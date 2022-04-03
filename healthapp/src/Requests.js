import { useState } from "react";

const Requests = () => {
  const [data, setData] = useState(() => {
    const savedContainers = localStorage.getItem("containerData");
    if (savedContainers) {
      console.log(savedContainers);
      return JSON.parse(savedContainers);
    } else {
      return [];
    }
  });

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        All Requests
      </h2>
      {data.length === 0 ? (
        <h4 className="text-md text-gray-600">
          No Information has been requested yet!
        </h4>
      ) : (
        <>
          {data.map((item) => (
            <div className="flex flex-row justify-between items-center">
              <h4>{item.subject}</h4>
              <a
                href={`/recievedinfo/${item.containerId}`}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2"
              >
                View
              </a>
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default Requests;
