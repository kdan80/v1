import * as React from "react";
import PropTypes from "prop-types";
import { About, Contact, Featured, Landing, Layout } from "@components";

const IndexPage = ({location}) => {

    return (
        <Layout location={location}>
            <Landing />
            <About />  
            <Featured />
            <Contact />
        </Layout>
    );
};

IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default IndexPage;