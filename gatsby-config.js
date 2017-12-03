module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
  	{
  		resolve: `gatsby-plugin-react-helmet`,
  	},
  	{
  		resolve: `gatsby-plugin-stylus`,
  	},
  	{
	    resolve: `gatsby-plugin-google-analytics`,
	    options: {
	      trackingId: "UA-82164985-1",
	      // Setting this parameter is optional
	      anonymize: true,
	    },
	  },
  ],
}
