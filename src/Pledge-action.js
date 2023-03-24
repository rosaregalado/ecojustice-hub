import Nav from './Nav';

function Pledge() {
  return (
    <div>
      {/* nav */}
      <Nav />

      <div>
        <h1 className="text-center text-3xl m-10 text-green-600">Pledge to Cut Your Carbon Footprint</h1>
        <p className="m-10 text-gray-500">Your impact on climate change primarily comes from: what you eat, how you power your homes and mobile devices, and how you travel from place to place. The average US citizen emits 20 tons of greenhouse gas emissions per year due primarily to these activities. (This is ten times the emissions from the average person in India, for example.)</p>

        <div className="grid grid-cols-2 gap-10 m-10 p-10">
          {/* pledge */}
          <div className="">
            <h2 className="font-bold p-3 m-2">Can you commit to cutting your carbon footprint?</h2>
            <div className="border border-solid p-6 m-5">
              <p className="text-red-600">I can commit to reducing my carbon footprint by taking a hard look the footprint of my food, the electricity I use, and how I get from place to place. I can start making an impact right away by committing to the following:</p>
              <ul>
                <li className="font-bold my-5">Food</li>
                <ul className="list-disc mx-8">
                  <li>I will set a goal of reducing the food waste in my home from its current levels.</li>
                  <li>I commit to only buying what I need and eat what I buy!</li>
                </ul>

                <li className="font-bold my-5">Electricity</li>
                <ul className="list-disc mx-8">
                  <li>I will check out solar panels or look into community solar projects in my area.</li>
                  <li>I will look into options to switch to renewable energy from my utilities company.</li>
                </ul>

                <li className="font-bold my-5">Transportation</li>
                <ul className="list-disc mx-8">
                  <li>I commit to reducing the fossil fuel impact of my daily commute to work or school by walking, riding my bike, carpooling, or using public transportation one or more days per week.</li>
                </ul>
              </ul>
            </div>
          </div>

          {/* form */}
          <div>
            {/* <h2 className="font-bold p-3 my-2">Fill out your information</h2> */}
            <form className="m-5">
              <div className="my-4">
                <label className="block text-gray-700 font-bold mb-2">First Name:</label>
                <input type="text" className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="my-4">
                <label className="block text-gray-700 font-bold mb-2">Last Name:</label>
                <input type="text" className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="my-4">
                <label className="block text-gray-700 font-bold mb-2">Your Email:</label>
                <input type="email" className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="my-4">
                <label className="block text-gray-700 font-bold mb-2">ZIP / Postal Code:</label>
                <input type="text" className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="my-4">
                <label className="block text-gray-700 font-bold mb-2">Country:</label>
                <input type="text" className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" Required />
              </div>
              <div className="my-4">
                <label className="block text-gray-700 font-bold my-2">Choose a Country:</label>
                <select>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                </select>
              </div>
              <div className="my-4">
                <label className="block text-gray-700 font-bold mb-2">Mobile Phone:</label>
                <input type="text" className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              
              <div class="flex-shrink-0">
                <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-blue-600 mt-2 sm:mt-0">
                  Count Me In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pledge;