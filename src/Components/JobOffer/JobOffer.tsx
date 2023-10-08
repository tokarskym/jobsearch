import styled from 'styled-components'; 

const JobCard = styled.div<{ $isNew: boolean}>`
border-radius: 5px; 
margin: 30px 23px;  
background-color: #FFFFFF;
position: relative; 
padding: 20px; 
box-shadow: 5px 5px 15px rgba(92, 165, 165, 0.5); 
border-left: ${props => props.$isNew ? '7px solid #5CA5A5' : 'none'};
@media (min-width: 768px) {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
}
`
const CompanyLogo = styled.img`
width: 48px; 
border-radius: 50%; 
position: absolute; 
top: -22px; 
left: 20px;
@media (min-width: 768px) {
    position: static; 
    width: 100px;  
    margin-right: 30px; 
}
`
const JobDetails = styled.div`
display: flex; 
flex-direction: column; 
width: 100%; 
`
const JobDetailsRow = styled.div`
display: flex; 
flex-direction: row; 
align-items: center; 
`
const CompanyName = styled.h3`
font-size: 13px; 
color: #5CA5A5; 
margin-right: 30px; 
`
const HighlightTag = styled.div<HighlightTagProps>`
background-color: ${({ type }) => (type === 'new' ? '#5CA5A5' : '#2B3939')};
margin-right: ${({type}) => (type === 'new' ? '10px' : '0px ')}; 
border-radius: 20px; 
padding: 6px 15px; 
font-weight: bold;
color: #FFF;
font-size: 14px;
`
const CompanyPosition = styled.h2`
font-size: 15px; 
font-weight: bold; 
color: #2B3939; 
`
const JobSpecs = styled.p`
font-size: 16px; 
font-weight: medium; 
color: #7C8F8F;
`
const StyledDot = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: #B7C4C4;
  border-radius: 50%; 
  margin: 0 10px 0 10px; 
`
const StyledHr = styled.hr`
height: 2px; 
width: 100%; 
background-color: #B7C4C4; 
border: none; 
margin-bottom: 20px; 
@media (min-width: 768px) {
    display: none;
  }
`
const JobTags = styled.div`
width: 100%; 
display: flex;
flex-direction: row; 
flex-wrap: wrap; 
@media (min-width: 768px) {
    justify-content: flex-end; 
}
`

export const SingleTag = styled.button`
background-color: #EFFAFA; 
border-radius: 5px; 
margin-right: 16px; 
color: #5CA5A5;
font-size: 16px; 
font-weight: bold; 
border: none; 
padding: 7px; 
margin-bottom: 10px; 
@media (min-width: 1024px) {
    cursor: pointer; 
    &:hover {
        background-color: #5CA5A5; 
        color: white; 
    }
}
`


interface HighlightTagProps {
  type: 'new' | 'featured';
}

export interface Offer {
  id: number; 
  company: string; 
  logo: string; 
  new: boolean; 
  featured: boolean;
  position: string; 
  role: string;
  level: string;
  postedAt: string; 
  contract: string; 
  location: string; 
  languages: string[];
  tools: string[];
}

interface JobOfferProps {
    offer: Offer;
    toggleTag: (tag: string) => void;  
}

const JobOffer: React.FC<JobOfferProps> = ({ offer, toggleTag}) => {


   const tags: string[] = [
    offer.role,
    offer.level,
    ...offer.languages,
    ...offer.tools
];
    
    return (
        <JobCard $isNew={offer.new} >
            <div>
                <CompanyLogo src={offer.logo} alt="Company logo" />
            </div>
            <JobDetails>
                <JobDetailsRow>
                    <CompanyName>{offer.company}</CompanyName>
                    {offer.new && <HighlightTag type="new">New!</HighlightTag>} 
                    {offer.featured && <HighlightTag type="featured">Featured</HighlightTag>}
                </JobDetailsRow>
                <JobDetailsRow>
                    <CompanyPosition>{offer.position}</CompanyPosition>
                </JobDetailsRow>
                <JobDetailsRow>
                    <JobSpecs >{offer.postedAt}</JobSpecs>
                    <StyledDot /> 
                    <JobSpecs >{offer.contract} </JobSpecs>
                    <StyledDot /> 
                     <JobSpecs >{offer.location} </JobSpecs>
                </JobDetailsRow>
            </JobDetails>
            <StyledHr />
            <JobTags>
              {tags.map((tag, index) => (
                <SingleTag key={index} onClick={()=>toggleTag(tag)}>{tag}</SingleTag>
            ))}
            </JobTags>
        </JobCard>
    )
}

export default JobOffer; 