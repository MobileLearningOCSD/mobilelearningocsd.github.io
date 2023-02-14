import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <header className="header">
          <h1>Mobile Support Resources</h1>
          <div>
            <p>We are here to help</p>
            <form className="search">
              <label>
                <input 
                  id="searchInput"
                  className="prompt"
                  type="text"
                  placeholder="Search..."
                  onChange={this}
                  onBlur={this}
                />
                <i className="search-icon">&#9906;</i>
              </label>
              
            </form>
          </div>
        </header>

      <Outlet />
    </div>
  )
}
export default Layout