import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import elli from "../assets/Ellipse.jpg";

function TreeCounterCard({ name, treesPlanted, rank }) {
  return (
    <div className="w-fit h-fit">
      <div className="w-auto h-auto">
        <div>
          <h1 className="font-jostBold6 text-lg mx-2 md:text-2xl md:mx-5">
            {rank === 1 && "First"}
            {rank === 2 && "Second"}
            {rank === 3 && "Third"}
          </h1>
        </div>
        <div className="bg-customGreen bg-opacity-50 rounded-xl p-4">
          <div className="flex items-center mb-2 w-auto h-auto">
            <div className="mr-10">
              <img
                className="w-fit h-fit rounded-full"
                src={elli}
                alt="pfp"
              ></img>
            </div>
            <div>
              <div className="flex items-center mt-4 mb-[-10px]">
                <div className="w-[83px] h-[30px] text-xl whitespace-nowrap overflow-hidden md:text-3xl font-jostBold6 ">
                  {name}
                </div>
                <div>
                  {rank === 1 && (
                    <img
                      className="w-8 h-12 ml-8 mr-4"
                      src={one}
                      alt="First place"
                    />
                  )}
                  {rank === 2 && (
                    <img
                      className="w-8 h-12 ml-8 mr-4"
                      src={two}
                      alt="Second place"
                    />
                  )}
                  {rank === 3 && (
                    <img
                      className="w-8 h-12 ml-8 mr-4"
                      src={three}
                      alt="Third place"
                    />
                  )}
                </div>
              </div>
              <hr className="border-t-2 border-white mt-10 ml-[-20px] mr-[-80px]" />
            </div>
          </div>

          <div className="w-auto h-auto ">
            <h1 className=" font-jostBold6 text-center mt-10 text-xl  md:text-3xl whitespace-nowrap">
              Trees Planted: {treesPlanted}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export const TopThree = () => {
  const data = [
    { name: "John Doe", treesPlanted: 1799, rank: 1 },
    { name: "Doe sdfkldcsv sdfDfads", treesPlanted: 1234, rank: 2 },
    { name: "Sivani", treesPlanted: 534, rank: 3 },
  ];
  return (
    <>
      <div className="flex flex-col gap-4 flex-wrap md:flex-row md:justify-evenly justify-center items-center md:items-center">
        {data.map((person, index) => (
          <TreeCounterCard key={index} {...person} />
        ))}
      </div>
    </>
  );
};
