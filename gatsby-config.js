module.exports = {
    pathPrefix: `/herriman.net`,
    siteMetadata: {
        title: `Herriman & Associates, Inc.`,
        description: ``,
        author: `Matt Schultz <mattschultz11@gmail.com>`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-ts`,
            options: {
                tsLoader: {
                    logLevel: `warn`,
                },
                forkTsCheckerPlugin: {
                    eslint: true,
                },
                codegen: false,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Herriman & Associates, Inc.`,
                short_name: `Herriman & Associates`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#221F1F`,
                display: `minimal-ui`,
                icon: `src/assets/images/gatsby-icon.png`,
            },
        },
        // `gatsby-plugin-offline`,
    ],
};
