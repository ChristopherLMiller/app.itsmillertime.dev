import { Fragment, useState } from 'react';
import styled from 'styled-components';
import SiteTitle from './SiteTitle';
import { useMedia} from 'react-use';
import { CompactButton } from 'src/components/Buttons';
import MobileNav from './nav/mobile/Mobile';

const StyledTopBar = styled.div`
    background: var(--color-grey-darker);
    position: fixed;
    display: grid;
    grid-template-columns: auto 1fr;

    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    min-height: 5rem;
`;

const TopBar = () => {
    const [isOpen, setOpen] = useState(false);
    const isMobile = useMedia('(max-width: 600px)');
    
    return (
    <Fragment>
        <StyledTopBar>
            {isMobile && <CompactButton onClick={() => setOpen(!isOpen)}>{isOpen ? "Close" : "Menu"}</CompactButton>}
            <SiteTitle />
        </StyledTopBar> 
        {isMobile && isOpen && <MobileNav />} 
    </Fragment>  
    );   
};

export default TopBar;