import LegalPage from '@/components/LegalPage';

export const metadata = { title: 'Data Processing Agreement – Mynzo' };

export default function DataProcessingPage() {
  return (
    <LegalPage
      title="Data Processing Agreement"
      subtitle="Last updated: January 2025"
      intro="This Data Processing Agreement ('DPA') forms part of the contract for services between Mynzo Carbon Pvt. Ltd. ('Processor') and the customer ('Controller'). It sets out the terms under which Mynzo processes personal data on behalf of customers."
      sections={[
        { title: '1. Definitions', content: '"Personal Data" means any information relating to an identified or identifiable natural person. "Processing" means any operation performed on Personal Data. "Controller" means the entity that determines the purposes and means of processing. "Processor" means Mynzo, which processes data on behalf of the Controller.' },
        { title: '2. Processing Instructions', content: 'Mynzo will process Personal Data only on documented instructions from the Controller, unless required to do so by applicable law. Mynzo will inform the Controller if any instruction infringes applicable data protection laws.' },
        { title: '3. Confidentiality', content: 'Mynzo ensures that persons authorised to process the Personal Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.' },
        { title: '4. Security Measures', content: ['Mynzo implements appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including: encryption of personal data, ability to ensure ongoing confidentiality, integrity, availability, and resilience of processing systems.', 'These measures include regular testing and evaluation of the effectiveness of security measures.'] },
        { title: '5. Sub-processors', content: 'Mynzo will not engage sub-processors without prior written authorisation from the Controller. Where sub-processors are engaged, Mynzo ensures they are bound by data protection obligations equivalent to those in this DPA.' },
        { title: '6. Data Subject Rights', content: 'Mynzo will assist the Controller in fulfilling its obligations to respond to requests from data subjects exercising their rights under applicable data protection law, including rights of access, rectification, erasure, and portability.' },
        { title: '7. Data Breach Notification', content: 'Mynzo will notify the Controller without undue delay after becoming aware of a personal data breach, providing sufficient information to allow the Controller to meet any obligations to report the breach to supervisory authorities or data subjects.' },
        { title: '8. Data Deletion', content: 'Upon termination of services, Mynzo will, at the Controller\'s choice, delete or return all Personal Data to the Controller, and delete existing copies unless applicable law requires storage.' },
        { title: '9. Audits', content: 'Mynzo will make available to the Controller all information necessary to demonstrate compliance with obligations under this DPA and allow for audits or inspections conducted by the Controller or an authorised auditor.' },
      ]}
    />
  );
}
