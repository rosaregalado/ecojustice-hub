import Nav from './Nav';
import {Link} from 'react-router-dom';

function Action() {
  
  return (
    <div className="Action bg-gray-100">
      {/* Nav */}
      <Nav />
      <h1 className="text-2xl font-mono text-blue-800 mt-6 text-center">Take Action</h1>
      <div className="m-10 p-5">
        <p className="text-lg text-gray-800">Environmental justice issues have far-reaching and devastating impacts on marginalized communities 
          around the world, and it is imperative that we take action to address them. According to the World Health Organization, 
          around 12.6 million deaths per year are attributed to environmental risks such as air pollution, chemical exposure, and water contamination. 
          Additionally, studies have shown that communities of color and low-income communities are disproportionately affected by environmental hazards and have higher rates of environmental health problems. 
        </p>
        <br/>
        <p className="text-lg text-red-600 font-bold">Taking action against environmental injustice is not only a matter of social and environmental justice, but it also has significant implications for public health and the well-being of our planet.</p>
      </div>

      <div className="grid grid-cols-2 gap-10 my-10">
        {/* make donation */}
        <div className="flex flex-col items-center m-5">
          <h2 className="text-xl font-bold text-blue-800 hover:underline">Make a Donation</h2>
          <p className="text-lg text-gray-800 text-center m-5">Protecting our planet is a big job — it takes millions of people like you to bring solutions to life. Your support matters.</p>
          <div className="my-4">
            <button type="submit" class=" px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-600">
              Donate Now
            </button>
          </div>
        </div>

        {/* get involved */}
        <div className="flex flex-col items-center m-5">
          <h2 className="text-xl font-bold text-blue-800 hover:underline">Get Involved</h2>
          <p className="text-lg text-gray-800 text-center m-5">Use your voice where it counts. Speak up for the health and safety of the environment and people everywhere.</p>
        </div>
      </div>

      <h2 className="text-center text-2xl py-5 mx-auto my-10 border border-solid border-2 border-gray-300">Take Action on Environmental Issues Today</h2>

      <div class="container mx-auto">
        {/* filter issues */}
        <div class="mr-4">
          <select class="rounded-md border-gray-300 shadow font-bold p-2 mx-20">
            <option value="">Filter Issues</option>
            <option>Fighting Plastic Pollution</option>
            <option>Brazil and Amazon Forest</option>
            <option>Sustainable Seafood</option>
            <option>Oceans</option>
            <option>Deep Sea Mining</option>
            <option>California Climate Emergency</option>
            <option>Defending Democracy</option>
            <option>Forests</option>
            
            <option>Food justice</option>
            <option>Public health</option>
          </select>
        </div>
        {/* grid */}
        <div className="grid grid-cols-2 gap-10 m-10 p-10">
          {/* card 1 */}
          <div className="p-8 bg-blue-900 text-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">
              Protect tigers by switching to forest-friendly products
            </h2>
            <p className="text-lg font-extralight">
              Pledge to do your part to protect forests and save wildlife by supporting products that have the Forest Stewardship CouncilTM (FSC®) label.
            </p>
            <div className="my-4">
              <button className="block w-full bg-white text-black font-semibold p-2 rounded-md hover:bg-gray-300">
                Take the Pledge
              </button>
            </div>
          </div>

          {/* card 2 */}
          <div className="p-8 bg-green-500 text-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">
              Reduce Your Carbon Footprint
            </h2>
            <p className="text-lg font-extralight">
              Make a difference by taking simple steps to reduce your carbon footprint, such as using public transportation or walking, reducing meat consumption, and supporting renewable energy.
            </p>
            <div className="my-4">
              <button className="block w-full bg-white text-black font-semibold p-2 rounded-md hover:bg-gray-300">
                <Link to="/pledge">Take the Pledge</Link>
              </button>
            </div>
          </div>

          {/* card 3 */}
          <div className="p-8 bg-blue-400 text-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">
              Tell President Biden: Ban New Oil and Gas Permits on Public Lands and Waters
            </h2>
            <p className="text-lg font-extralight">
              We cannot allow President Biden to break his campaign promises. We need him to use his presidential powers to halt fossil fuel drilling on public lands and waters.          </p>
            <div className="my-4">
              <button className="block w-full bg-white text-black font-semibold p-2 rounded-md hover:bg-gray-300">
                Sign the Petition
              </button>
            </div>
          </div>

          {/* card 4 */}
          <div className="p-8 bg-red-600 text-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">
              Tell Coca-Cola, PepsiCo, and Nestlé to stop fueling the climate crisis!
            </h2>
            <p className="text-lg font-extralight">
              To tackle the climate crisis, we must break free from single-use plastics made from fossil fuels. Tell Coca-Cola, PepsiCo, and Nestlé to ditch plastic made from fossil fuels and switch to reuse and refill solutions NOW. 
            </p>
            <div className="my-4">
              <button className="block w-full bg-white text-black font-semibold p-2 rounded-md hover:bg-gray-300">
                Sign the Petition
              </button>
            </div>
          </div>
        </div>

        {/* pagination */}
        <div class="flex justify-center m-10">
          <div class="bg-gray-200 text-gray-600 rounded-md p-2">
            <button class="bg-gray-300 mr-2 text-gray-700 border-gray-400 hover:bg-gray-400 hover:text-gray-800 p-1 rounded-md">1</button>
            <button class="mr-2 border-gray-400 hover:border-gray-500 p-1 rounded-md">2</button>
            <button class="mr-2 border-gray-400 hover:border-gray-500 p-1 rounded-md">3</button>
            <button class="mr-2 border-gray-400 hover:border-gray-500 p-1 rounded-md">4</button>
            <button class="mr-2 border-gray-400 hover:border-gray-500 p-1 rounded-md">5</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Action;
