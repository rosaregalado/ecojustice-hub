import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav className="bg-blue-900 text-white p-6">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 mr-6">
            <span className="font-bold text-2xl font-light font-mono">EcoJustice Hub</span>
            <img src={process.env.PUBLIC_URL + '/env-justice-logo.png'} alt="env-justice-logo" className="h-12 w-12 ml-3"/>
          </div>
          <div className="flex-grow">
            <ul className="flex justify-end">
              <li className="px-4 py-2 text-white rounded-md hover:bg-gray-700">
                <Link
                  to="/"
                  className="nav-link">
                  Home
                </Link>
              </li>
              <li className="px-4 py-2 text-white rounded-md hover:bg-gray-700">
                <Link 
                  className="nav-link"
                  to="/glossary">Glossary
                </Link>
              </li>
              <li className="px-4 py-2 text-white rounded-md hover:bg-gray-700">
                <Link 
                  className="na-link"
                  to="/action">Take Action
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav;



