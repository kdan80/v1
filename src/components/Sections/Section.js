import React from "react";
import styled from "styled-components";
import mixins from "@styles/_mixins";
import PropTypes from "prop-types";

const StyledSection = styled.section`
    ${mixins.flexCenter};
    padding: var(--pd-win-sm);
    z-index: var(--layer-1);
    min-height: calc(var(--vh) * 100px);
    width: 100vw;
`;

const Section = ({viewportHeight, children, ...props}) => {

    return (
        <StyledSection 
            style={{"--vh": viewportHeight * 0.01}}
            {...props}>
                {children}
        </StyledSection>
    );
};

Section.propTypes = {
    viewportHeight: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
};


export default Section;