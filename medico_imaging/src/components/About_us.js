import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faUserTie,
    faMapMarkerAlt,
    faUsers,
    faHandshake,
    faChartLine,
    faTools,
    faCreditCard,
    faTruck,
    faCheckCircle,
    faGears,
    faMoneyBill,
    faFileInvoiceDollar,
    faHome,
    faRulerCombined,
    faUser,
    faLightbulb,
    faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

// Styled Components for better styling
const AboutUsContainer = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  max-width: 1200px; /* Adjust as needed */
  margin: 0 auto;
  line-height: 1.6;
  color: #333;
  margin-bottom:40px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 15px;
  color: #003366; /* A primary color */
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    margin-right: 10px;
    color: #555; /* Icon color */
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;

    svg {
      margin-bottom: 5px;
    }
  }
`;

const Strong = styled.strong`
  font-weight: bold;
  margin-right: 5px;
`;

const USPList = styled.ul`
  list-style: none;
  padding: 0;
`;

const USListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  svg {
    margin-right: 10px;
    color: #28a745; /* Success/checkmark color */
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;

    svg {
      margin-bottom: 5px;
    }
  }
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CardGrid>
        <Card>
          <CardTitle>Company Overview</CardTitle>
          <InfoItem>
            <FontAwesomeIcon icon={faBuilding} />
            <Strong>Nature of Business:</Strong> Service Provider & Retail
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faUserTie} />
            <Strong>CEO:</Strong> Nitin Patil
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <Strong>Address:</Strong> 2-204, Krishna Residency, Bankar Mala, Kathe Galli, Near Trikoni Garden, Dwarka, Nashik- 422011, Maharashtra, India
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faUsers} />
            <Strong>Employees:</Strong> Up to 10
          </InfoItem>
        </Card>

        <Card>
          <CardTitle>Financial & Legal</CardTitle>
          <InfoItem>
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
            <Strong>Annual Turnover:</Strong> ₹1.5 - 5 Cr
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faHandshake} />
            <Strong>Legal Status:</Strong> Proprietorship
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faShieldAlt} />
            <Strong>GST Partner Name:</Strong> Nitin Suresh Patil
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faChartLine} />
            <Strong>GST Registration Date:</Strong> 01-07-2017
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faChartLine} />
            <Strong>GST No.:</Strong> 27AMPPP0767N1Z7
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faMoneyBill} />
            <Strong>Banker:</Strong> ICICI BANKING CORPORATION LTD / ICICI BANK
          </InfoItem>
        </Card>

        <Card>
          <CardTitle>Infrastructure & Team</CardTitle>
          <InfoItem>
            <FontAwesomeIcon icon={faHome} />
            <Strong>Location:</Strong> Urban
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faBuilding} />
            <Strong>Building:</Strong> Permanent
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faRulerCombined} />
            <Strong>Premises Size:</Strong> 800 sq ft
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <Strong>Space Around:</Strong> Front Porch
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faUser} />
            <Strong>Research/QC Staff:</Strong> 1-5
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faTools} />
            <Strong>Engineers/Technicians:</Strong> 1-5
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faUser} />
            <Strong>Skilled Staff:</Strong> 1-5
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faUser} />
            <Strong>Semi-skilled Staff:</Strong> 1-5
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faUser} />
            <Strong>Consultants:</Strong> 1-5
          </InfoItem>
        </Card>

        <Card>
          <CardTitle>Unique Selling Points (USPs)</CardTitle>
          <USPList>
            <USListItem>
              <FontAwesomeIcon icon={faCheckCircle} /> After Sales Support
            </USListItem>
            <USListItem>
              <FontAwesomeIcon icon={faCheckCircle} /> Installation Training
            </USListItem>
            <USListItem>
              <FontAwesomeIcon icon={faCheckCircle} /> Onsite Support
            </USListItem>
            <USListItem>
              <FontAwesomeIcon icon={faCheckCircle} /> Operational Training
            </USListItem>
            <USListItem>
              <FontAwesomeIcon icon={faCheckCircle} /> User Manual
            </USListItem>
          </USPList>
        </Card>

        <Card>
          <CardTitle>Competitive Advantages</CardTitle>
          <USPList>
            <USListItem>
              <FontAwesomeIcon icon={faLightbulb} /> Good Financial Position & TQM
            </USListItem>
            <USListItem>
              <FontAwesomeIcon icon={faLightbulb} /> Large Product Line
            </USListItem>
            <USListItem>
              <FontAwesomeIcon icon={faLightbulb} /> Quality Measures / Testing Facilities
            </USListItem>
          </USPList>
        </Card>

        <Card>
          <CardTitle>Packaging/Payment and Shipment Details</CardTitle>
          <InfoItem>
            <FontAwesomeIcon icon={faGears} />
            <Strong>Customized Packaging:</Strong> Yes
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faCreditCard} />
            <Strong>Payment Modes:</Strong> Cash, Cheque, Credit Card, DD
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faTruck} />
            <Strong>Shipment Modes:</Strong> By Cargo, By Road
          </InfoItem>
        </Card>
      </CardGrid>
    </AboutUsContainer>
  );
};

export default AboutUs;
