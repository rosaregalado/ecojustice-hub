import Nav from './Nav';

function Action() {
  
  return (
    <div className="Action bg-gray-100">
      {/* Nav */}
      <Nav />
      <h1 className="text-2xl font-mono text-blue-800 mt-6 text-center">Take Action</h1>
      <div className="m-10 p-5">
        <p>Environmental justice issues have far-reaching and devastating impacts on marginalized communities 
          around the world, and it is imperative that we take action to address them. According to the World Health Organization, 
          around 12.6 million deaths per year are attributed to environmental risks such as air pollution, chemical exposure, and water contamination. 
          Additionally, studies have shown that communities of color and low-income communities are disproportionately affected by environmental hazards and have higher rates of environmental health problems. 
        </p>
        <br/>
        <p className="text-red-600 font-bold">Taking action against environmental injustice is not only a matter of social and environmental justice, but it also has significant implications for public health and the well-being of our planet.</p>
      </div>

      <div className="grid grid-rows-2 my-10">
        <div>
          <h1 className="text-center text-2xl overline hover:underline">Make a Donation</h1>
          <p className="m-5 text-center">Protecting our planet is a big job — it takes millions of people like you to bring solutions to life. Your support matters.</p>
          <div class="mx-20">
            <button type="submit" class=" px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-600">
              Donate Now
            </button>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <h2 className="text-center text-2xl overline hover:underline">Get Involved</h2>
          <p className="m-5 text-center">Use your voice where it counts. Speak up for the health and safety of the environment and people everywhere.</p>
        </div>

        <div className="grid grid-cols-2">
          {/* card 1 */}
          <div className="p-6 m-10 bg-blue-900 text-white rounded-lg shadow-md">
            <h1 className="text-lg font-bold text-white mb-2">
              Protect tigers by switching to forest-friendly products
            </h1>
            <p className="text-white font-extralight">
              Pledge to do your part to protect forests and save wildlife by supporting products that have the Forest Stewardship CouncilTM (FSC®) label.
            </p>
            <button className="block w-70 mt-4 bg-white text-black font-semibold p-3 rounded hover:bg-blue-600">
              Take Action
            </button>
          </div>

          {/* card 2 */}
          <div className="p-6 m-10 outline-double bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              No plastic in nature by 2030            </h2>
            <p className="text-gray-700">
              Urge the world's leaders to act strongly and decisively in developing the full content of the treaty to end plastic pollution by 2024.
            </p>
            <button className="block w-70 mt-4 bg-blue-900 text-white font-semibold p-3 rounded hover:bg-blue-600">
              Take Action
            </button>
          </div>

          {/* card 3 */}
          <div className="p-6 m-10 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Use Sustainable Transportation
            </h2>
            <p className="text-gray-700">
              Reduce your carbon footprint by walking, biking, or using public transportation whenever possible.
            </p>
            <button className="block w-70 mt-4 bg-blue-900 text-white font-semibold p-3 rounded hover:bg-blue-600">
              Take Action
            </button>
          </div>

          {/* card 4 */}
          <div className="p-6 m-10 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Plant Trees
            </h2>
            <p className="text-gray-700">
              Plant trees in your community or support reforestation efforts around the world.
            </p>
            <button className="block w-70 mt-4 bg-blue-900 text-white font-semibold p-3 rounded hover:bg-blue-600">
              Take Action
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Action;
