import React from 'react'
import { Container} from 
'react-bootstrap';
import { FaRegHandPointRight } from 'react-icons/fa';


class TermsOfUse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
          };
          
      }
    
     
    render() {
        return (
        <section className="trems-of-use-section">
            
            <Container>
                <h1 className=" py-4">Terms of use</h1>
                <h4>Please read below "TERMS OF USE" carefully: </h4>
                <ul>
<li><span className="icon"><FaRegHandPointRight/></span> Sapna Foundation is a not for profit initiative and Sapna Foundation helps people needing plasma or blood to connect with people willing to donate plasma or blood.</li>
<li><span className="icon"><FaRegHandPointRight/></span> We allow prospective Plasma or blood Donors to register on the website.</li>
<li><span className="icon"><FaRegHandPointRight/></span> We allow COVID-19 patients who need Plasma to register on the website.</li>
<li><span className="icon"><FaRegHandPointRight/></span> A repository of contacts is maintained, once we have the details of the patient, we share the relevant prospective Plasma Donor's contact details with the patient/patient’s contact.</li>
<li><span className="icon"><FaRegHandPointRight/></span> We do not trade or extract Plasma, neither do we provide any medical consultation or suggestions.</li>
<li><span className="icon"><FaRegHandPointRight/></span> We do not involve in any kind of monetary exchanges with anyone registering/ using our website.</li>
<li><span className="icon"><FaRegHandPointRight/></span> Our role is limited to sharing the prospective Plasma Donor's contact details with the patient/ patients' contact when a suitable match is found.</li>
<li><span className="icon"><FaRegHandPointRight/></span> While registering Plasma Donors, basic details – Blood group, COVID-19 positive date and gender is collected. We do not make any claims on the quality or potency of donors. Blood banks or the hospitals will be the final authority to decide if a person can donate Plasma or not.</li>
<li><span className="icon"><FaRegHandPointRight/></span> We do not guarantee the availability of the Plasma Donor to anyone registering on our website.</li>
<li><span className="icon"><FaRegHandPointRight/></span> This website does not solicit any monetary transaction, no medical opinions/consultations are provided or suggested. This website allows people to voluntarily register and be contacted for plasma requirement/donation.</li>
<li><span className="icon"><FaRegHandPointRight/></span> No liabilities, financial or otherwise shall be enforced upon or have recourse to the website or its owners or its makers or its volunteers. The users are expected to act bona fide and relieve the website, its owners, makers, and its volunteers from the consequences of their activities.</li>
<li><span className="icon"><FaRegHandPointRight/></span> Once you register as a donor or as a patient, it would be deemed that you have fully read and understood the above points.</li>
</ul>
            </Container>
            </section>
        )
    }
}




export default TermsOfUse;