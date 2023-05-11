import settings from '../images/limit_ip_address_tracking/settings.jpg'
import wifi from '../images/limit_ip_address_tracking/wifi.jpg'
import cnet2 from '../images/limit_ip_address_tracking/cnet2.jpg'
import off from '../images/limit_ip_address_tracking/limit_ip_address_tracking.jpg'
import done from '../images/limit_ip_address_tracking/done.jpg'
import warning from '../images/limit_ip_address_tracking/warning.jpg'

const LimitIPAddressTracking = () => {
  return(
    <section>
      <h1>Limit IP Address Tracking</h1>
      <h2>Toggle IP Address Tracking</h2>
      <pre>
        <code>
          Tap Settings > Wi-Fi > cnet2 > Limit IP Address Tracking = OFF
        </code>
      </pre>

      <h2>Video</h2>
      <iframe width="500" height="320" src="https://youtube.com/embed/0TajntMRpzE"></iframe>
      
      <hr></hr>
      <h2>Step by Step</h2>
      <ol>
        <li>
          <p>Tap Settings</p>
          <img width="500" src={settings} alt="Tap Settings on iPadOS 16.3" />
        </li>
        <li>
          <p>Tap Wi-Fi</p>
          <img width="500" src={wifi} alt="Tap Wi-Fi on iPadOS 16.3" />
        </li>
        <li>
          <p>Tap cnet2</p>
          <img width="500" src={cnet2} alt="Tap active network on iPadOS 16.3" />
        </li>
        <li>
          <p>Toggle Limit IP Address Tracking to OFF</p>
          <img width="500" src={off} alt="Tap limit IP address tracking on iPadOS 16.3" />
        </li>
        <li>
          <p>Done</p>
          <img width="500" src={done} alt="Finished" />
        </li>
      </ol>

      <div className="warning">
        <h2>WARNING</h2>
        <pre>
          <code>Do NOT toggle Private Wi-Fi Address.</code>
        </pre>
        <img width="500" src={warning} alt="Finished" />
        <p>It will temporarily remove the cnet2 profile and may prevent iPad from reconnecting to network.</p>
        <p><b>Leave it OFF or Leave it ON</b></p>
      </div>
      
    </section>
  )
}
export default LimitIPAddressTracking