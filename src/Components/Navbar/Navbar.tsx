import styled from 'styled-components'; 

const NavbarDiv = styled.div`
    width: 100%; 
    height: 156px; 
    background-image: url('/images/bg-header-mobile.svg');
    background-size: cover;
    background-color: #5CA5A5; 
`;

const Navbar: React.FC = () => {
    return (
        <nav>
        <NavbarDiv/>
        </nav>
    )
}

export default Navbar; 