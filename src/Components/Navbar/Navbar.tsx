import styled from 'styled-components'; 
import { SingleTag } from '../JobOffer/JobOffer';
import { ReactComponent as Close } from '../../RemoveButton/icon-remove.svg'


const NavbarDiv = styled.div`
width: 100%; 
height: 156px; 
background-image: url('/images/bg-header-mobile.svg');
background-size: cover;
background-color: #5CA5A5; 
margin-bottom: 30px; 
@media (min-width: 768px) {
background-image: url('/images/bg-header-desktop.svg'); 
margin-bottom: 54px; 
}
`;

const FilterBar = styled.div`
width: 86%; 
height: auto; 
position: absolute; 
border-radius: 5px; 
background-color: #FFFFFF;
padding: 20px; 
box-shadow: 5px 5px 15px rgba(92, 165, 165, 0.5); 
top: 120px; 
left: 23px;
width: calc(100% - 86px);
display: flex; 
flex-direction: row; 
justify-content: space-between;
align-items: center; 
@media (min-width: 1024px) {
left: 162px;
width: calc(100% - 364px);
}
`

const Nav = styled.nav<{$isMargin: boolean}>`
position: relative; 
margin-bottom: ${props => props.$isMargin ? '100px' : '0px' }
`

const SingleTagNavbar = styled(SingleTag)`
display: flex;
align-items: center;
padding: 0;
padding-left: 5px; 
@media (min-width: 1024px) 
 {
    &:hover {
        cursor: auto;
        background-color: #EFFAFA; 
        color: #5CA5A5;
    }
 }

`
const CloseButton = styled(Close)`
background-color: #5CA5A5; 
display: flex; 
align-items: center; 
justify-content: center; 
margin-left: 10px; 
padding: 5px; 
border-top-right-radius: 5px; 
border-bottom-right-radius: 5px;
@media (min-width: 1024px) {
    cursor: pointer; 
    &:hover {
        background-color: black; 
    }
}
`

const ClearButton = styled.button`
color: #5CA5A5; 
font-weight: bold;
font-size: 15px; 
border: none; 
background: none;  
    @media (min-width: 1024px) {
        cursor: pointer; 
        &:hover {
            text-decoration: underline; 
        }
    }
 `

const TagWrapper = styled.div`
 display: flex;
    flex-direction: row;
    flex-wrap: wrap;`


interface NavbarProps {
    toggleTag: (tag: string) => void;  
    selectedTags: string[]; 
    clearTags: () => void; 
}

const Navbar: React.FC<NavbarProps>= ({selectedTags, toggleTag, clearTags}) => {
    return (
        <Nav $isMargin = {selectedTags.length > 0 }>
            {selectedTags.length > 0 && <FilterBar>
                <TagWrapper>{selectedTags.map((tag, i) => (
                <SingleTagNavbar key={i}>{tag}<CloseButton onClick={() => toggleTag(tag)}/></SingleTagNavbar>
            ))}</TagWrapper>
                <ClearButton onClick={()=>clearTags()}>Clear</ClearButton>
        </FilterBar>}
            <NavbarDiv />
        </Nav>
    )
} 
export default Navbar;