module.exports = {
    siteMetadata: {
        title: "Kieran Dansey",
        description:
            "Kieran Dansey freelance web developer",
        siteUrl: "https://kierandansey.co.uk", // No trailing slash allowed!
        image: "/og.webp" // Path to your image you placed in the 'static' folder
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-remark",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "KieranDansey",
              short_name: "KieranDansey",
              start_url: "/",
              background_color: "#26272a",
              theme_color: "#151618",
              display: "minimal-ui",
              icon: "src/images/logo.png",
            },
          },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                "name": "images",
                "path": `${__dirname}/src/images/`
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: "content",
              path: `${__dirname}/content/`,
            },
            __key: "content"
        }
    ]
};
