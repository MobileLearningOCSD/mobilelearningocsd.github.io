import {Link} from 'react-router-dom'

const Home = () => {
  return(
    <div className="cards">
          <Link to="/limit-ip-address-tracking" className="card">
            <i>icon</i>
            <h3>Limit IP Address Tracking</h3>
            <p>Set limit IP address tracking to OFF</p>
            <p>Helpful fix for Pearson Textbooks not connecting.</p>
          </Link>
          <Link to="/native-translation" className="card">
            <i>icon</i>
            <h3>Translate</h3>
            <p>Native translation on iPads</p>
          </Link>
          <section className="card">
            <i>B</i>
            <h3>Title</h3>
            <p>Short Text Description</p>
          </section>
          <section className="card">
            <i>B</i>
            <h3>Title</h3>
            <p>Short Text Description</p>
          </section>
          <section className="card">
            <i>B</i>
            <h3>Title</h3>
            <p>Short Text Description</p>
          </section>
        </div>
  )
}
export default Home