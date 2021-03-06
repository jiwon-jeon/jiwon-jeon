/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
//import {useStaticQuery, graphql} from 'gatsby';
//import { StaticImage } from "gatsby-plugin-image"

const Bio = ({writer}) => {
    // const data = useStaticQuery(graphql`
    //     query BioQuery {
    //         site {
    //             siteMetadata {
    //                 author {
    //                     name
    //                     summary
    //                 }
    //                 social {
    //                     twitter
    //                 }
    //             }
    //         }
    //     }
    // `);

    // Set these values by editing "siteMetadata" in gatsby-config.js
    //const author = data.site.siteMetadata?.author;
    //const social = data.site.siteMetadata?.social;

    return (
        <div className="bio">
            {/* 이미지 수정 */}
            {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /> */}
            {writer && (
                <div className="lc-bio-wrap">
                    <div
                        className="lc-bio-thumb"
                        style={{
                            backgroundColor: '#' + parseInt(Math.random() * 0xffffff).toString(16),
                        }}
                    >
                        <span className="lc-bio-thumb-name">{writer}</span>
                    </div>
                    <p className="lc-bio-author">
                        Written by <strong>{writer}</strong>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Bio;
