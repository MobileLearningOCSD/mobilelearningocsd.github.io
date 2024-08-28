// import {Link} from 'react-router-dom'
import restrictions from '../data/mdm_restrictions_anonymous.json'

const MDMRestrictionsAnonymous = () => {
  return(
    <section>
      <h1>MDMRestrictions <span>Anonymous</span></h1>
      <p>Revision 20240821.1121</p>
      <hr></hr>

      <dl>

        <ul>

          {restrictions.map(restriction => (
            <li key={restriction.id}>
              <dt>{restriction.title}</dt>
              <span>{restriction.supervised}</span>
              <dd>{restriction.definition}</dd>
            </li>
          ))}

        </ul>

      </dl>

    </section>
  )
}
export default MDMRestrictionsAnonymous