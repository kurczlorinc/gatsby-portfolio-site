import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import React from 'react'

export default function Banner() {
    const data = useStaticQuery(graphql`
    query {
            poppinshapes: file(relativePath: { eq: "poppin-shades.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            diamonds: file(relativePath: { eq: "diamonds.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            orange: file(relativePath: { eq: "sexy-orange.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="sideImage left">
                        <Img fluid={data.diamonds.childImageSharp.fluid} />
                    </div>
                    <div className="mainText">
                        Oladimeji Odunsi
                    </div>
                    <div className="mainImage">
                        <Img fluid={data.poppinshapes.childImageSharp.fluid} />
                    </div>
                    <div className="sideImage right">
                        <Img fluid={data.orange.childImageSharp.fluid} />
                    </div>
                </div>
                <div className="scroll">
                    <span>Scroll down</span>
                </div>
            </div>
            <div className="fixedMisc">
                Visual artist xyz
            </div>
        </div>
    )
}
