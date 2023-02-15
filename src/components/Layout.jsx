import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <header className="header">
          <h1>Mobile Support <span>Resources</span></h1>
          <div>
            <p>We're here to help</p>
            <form className="search">
              <label>
                <input 
                  id="searchInput"
                  className="prompt"
                  type="text"
                  placeholder="Search Currently Unavailable:  Indexing"
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