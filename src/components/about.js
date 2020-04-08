import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import React from 'react'

export default function About() {
    const data = useStaticQuery(graphql`
    query {
            flower: file(relativePath: { eq: "flower-mouth.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            fist: file(relativePath: { eq: "fist.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <div className="about">
            <div className="container">
                <div className="innerBlurb">
                    <div className="content">
                        <h3>The ability to care</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad at amet ratione velit incidunt libero cum, voluptas et dolorum qui impedit distinctio quidem sint possimus, ipsam, tempore quam reprehenderit molestias dolore rem? Dignissimos temporibus debitis sequi, sunt non esse aliquam excepturi odio modi, ipsa facere cumque aspernatur doloremque alias reiciendis officiis nihil ipsam dicta totam amet tenetur libero. Debitis, obcaecati!</p>
                        <div className="btnRow">
                            <Link to="/work">View Series</Link>
                        </div>
                    </div>
                    <div className="images">
                        <div className="topRight">
                            <Img fluid={data.fist.childImageSharp.fluid} />
                        </div>
                        <div className="bottomLeft">
                            <Img fluid={data.flower.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="blackBox"></div>
            <div className="blackBox overlay"></div>
        </div>
    )
}
