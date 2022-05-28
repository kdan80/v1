import * as React from "react";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { Layout } from "@components";
import styled from "styled-components";
import mixins from "@styles/_mixins";

const Container = styled.div`
    ${mixins.flexCenter};
    ${mixins.flexCol};
    
    .title {
        font-size: 10rem;
        font-family: var(--ft-mono);
        font-weight: 600;
        color: var(--fg-highlight);

        @media screen and (min-width: 768px){
            font-size: 12.5rem;
        }
    }

    .subtitle {
        font-size: 2rem;
        margin-top: -3.5rem;
        color: var(--fg-main-dark);

        @media screen and (min-width: 768px){
            margin-top: -4.5rem;
            font-size: 2.5rem;
        }
    }

    a{
        margin-top: 2.5rem;
        ${mixins.bigButton};
    }
`;

const NotFoundPage = ({location}) => {

    return (
        <Layout location={{...location, pathname: "404"}}>
            <Container>
                <Helmet title="Page Not Found" />
                <h1 className="title">404</h1>
                <h2 className="subtitle">Page Not Found!</h2>
                <Link to={"/"}>Return Home</Link>
            </Container>
        </Layout>
    );
};

NotFoundPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default NotFoundPage;
