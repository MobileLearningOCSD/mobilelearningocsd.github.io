// import {Link} from 'react-router-dom'
import restrictions from '../data/mdm_restrictions_shared.json'

const MDMRestrictionsShared = () => {
  return(
    <section>
      <h1>MDMRestrictions <span>Shared</span></h1>
      <p>Revision 20240828.1128</p>
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
export default MDMRestrictionsShared