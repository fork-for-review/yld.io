import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Padding } from 'styled-components-spacing'
import Flex from 'styled-flex-component'
import { format } from 'date-fns'
import { Row, Col, Grid } from 'react-styled-flexboxgrid'
import { H1, H4, H3, H5, Paragraph } from '../components/Typography'
import StyledLink from '../components/styledLink'
import {
  AnimatedLink,
  CardHeader,
  PosterImage
} from '../components/Common/animatedLink'
import Companies from '../components/Homepage/companies'
import Layout from '../components/layout'
import GrayBackground from '../components/GrayBG'
import BlueBackground from '../components/BlueBG'

const IntroBorder = styled(Col)`
  border: 1px solid rgba(255, 255, 255, 0.3);
`
const IntroRectangle = ({ introTextTitle, introTextBody }) => (
  <IntroBorder md={4} sm={12} xs={12}>
    <Padding top={2} bottom={2}>
      <Paragraph bold reverse>
        {introTextTitle}
      </Paragraph>
      <Paragraph muted reverse>
        {introTextBody.content[0].content[0].value}
      </Paragraph>
    </Padding>
  </IntroBorder>
)

const PosterLinks = ({ project }) => (
  <AnimatedLink to={`/case-study/${project.slug}`}>
    <section
      style={{
        background: `#${project.posterColor}`
      }}
    >
      <CardHeader>
        <H3 noMargin reverse>
          {project.title}
        </H3>
        <Paragraph reverse muted>
          {project.introSentence}
        </Paragraph>
      </CardHeader>
      <PosterImage justifyCenter alignCenter color={project.posterColor}>
        <img
          alt={project.posterImage.title}
          src={project.posterImage.file.url}
          style={{ maxHeight: '100%' }}
        />
      </PosterImage>
    </section>
  </AnimatedLink>
)

const Specialty = ({ data }) => {
  const specialty = data.allContentfulSpeciality.edges[0].node
  const site = data.site
  console.log(specialty)
  return (
    <Layout blue>
      <Helmet
        title={`${site.siteMetadata.title}  ${
          specialty.title ? '- ' + specialty.title : ''
        } ${specialty.seoTitle ? '- ' + specialty.seoTitle : ''} `}
        meta={[
          {
            name: 'description',
            content: specialty.seoMetaDescription
          }
        ]}
      >
        <html lang="en" />
      </Helmet>
      <BlueBackground>
        <Padding top={2} bottom={5}>
          <Grid className="grid">
            <Row>
              <Col xs={12} sm={12} md={6}>
                <Flex full column justifyCenter>
                  <H1 reverse>{specialty.title}</H1>
                  <Paragraph reverse muted>
                    {specialty.seoText.content[0].content[0].value}
                  </Paragraph>
                </Flex>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <img
                  alt={specialty.introGraphic.title}
                  src={specialty.introGraphic.file.url}
                  style={{ maxHeight: '100%' }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12} xs={12}>
                <Padding top={2} bottom={2}>
                  <H4 reverse>{specialty.introTitle}</H4>
                </Padding>
              </Col>
              <IntroRectangle
                introTextTitle={specialty.introTextTitle1}
                introTextBody={specialty.introTextBody1}
              />
              <IntroRectangle
                introTextTitle={specialty.introTextTitle2}
                introTextBody={specialty.introTextBody2}
              />
              <IntroRectangle
                introTextTitle={specialty.introTextTitle3}
                introTextBody={specialty.introTextBody3}
              />
            </Row>
          </Grid>
        </Padding>
      </BlueBackground>
      <Grid className="grid">
        <Padding top={5} bottom={5}>
          <Row>
            <Col md={6} sm={12} xs={12}>
              <H1 noMargin>{specialty.title}</H1>
              <H1 noMargin muted>
                related projects
              </H1>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <PosterLinks project={specialty.relatedProjects[1]} />
            </Col>
            <Col md={6} sm={12} xs={12}>
              <PosterLinks project={specialty.relatedProjects[0]} />
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12} xs={12}>
              <Padding top={5} bottom={3}>
                <H5 bold>Other Clients we helped</H5>
              </Padding>
            </Col>
            <Companies companies={specialty.clients} />
          </Row>
        </Padding>
      </Grid>
      <GrayBackground noTop>
        <Padding top={4} bottom={6}>
          <Grid className="grid">
            <Row>
              <Col md={6} sm={12} xs={12}>
                <H1>{`${specialty.title} training`}</H1>
                <Paragraph>
                  {specialty.trainingIntroText.content[0].content[0].value}
                </Paragraph>
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={12} xs={12}>
                <Padding bottom={1.5}>
                  <img
                    src={`https://${specialty.trainingTextIcon1.file.url}`}
                    alt={specialty.trainingTextIcon1.title}
                  />
                </Padding>
                <H5 bold>{specialty.trainingTextTitle1}</H5>
                <Paragraph>
                  {specialty.trainingTextBody1.content[0].content[0].value}
                </Paragraph>
              </Col>
              <Col md={4} sm={12} xs={12}>
                <Padding bottom={1.5}>
                  <img
                    src={`https://${specialty.trainingTextIcon2.file.url}`}
                    alt={specialty.trainingTextIcon2.title}
                  />
                </Padding>
                <H5 bold>{specialty.trainingTextTitle2}</H5>
                <Paragraph>
                  {specialty.trainingTextBody2.content[0].content[0].value}
                </Paragraph>
              </Col>
              <Col md={4} sm={12} xs={12}>
                <Padding bottom={1.5}>
                  <img
                    src={`https://${specialty.trainingTextIcon3.file.url}`}
                    alt={specialty.trainingTextIcon3.title}
                  />
                </Padding>
                <H5 bold>{specialty.trainingTextTitle3}</H5>
                <Paragraph>
                  {specialty.trainingTextBody3.content[0].content[0].value}
                </Paragraph>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12} xs={12}>
                <StyledLink>{`Request ${specialty.title} training`}</StyledLink>
              </Col>
            </Row>
          </Grid>
        </Padding>
      </GrayBackground>
      <BlueBackground>
        <Grid className="grid">
          <Padding top={6} bottom={6}>
            <Row>
              <Col md={6} sm={12} xs={12}>
                <img
                  alt={specialty.communityLogo.title}
                  src={specialty.communityLogo.file.url}
                  style={{ maxHeight: '100%' }}
                />
              </Col>
              <Col md={6} sm={12} xs={12}>
                <H1 reverse>{`${specialty.title} community`}</H1>
                <Paragraph reverse muted>
                  {specialty.communityText.content[0].content[0].value}
                </Paragraph>
              </Col>
            </Row>
          </Padding>
        </Grid>
      </BlueBackground>
      <Grid className="grid">
        <Padding top={6} bottom={6}>
          <Row>
            <Col md={6} sm={12} xs={12}>
              <H1>{`Upcoming ${specialty.title} events`}</H1>
            </Col>
            <Col md={6} sm={12} xs={12}>
              {specialty.events
                .filter(({ startTime }) => new Date(startTime) > new Date())
                .map(event => (
                  <div key={`${event.id}`}>
                    <img
                      src={`https://${specialty.eventIcon.file.url}`}
                      alt={specialty.eventIcon.title}
                    />
                    <H5 bold>
                      <a
                        href={event.linkToEvent}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {event.eventTitle}
                      </a>
                    </H5>
                    {format(new Date(event.date), 'MMMM DD[,] dddd')}
                  </div>
                ))}
            </Col>
          </Row>
        </Padding>
      </Grid>
      <GrayBackground noTop>
        <Grid className="grid">
          <Padding top={5} bottom={5}>
            <Row>
              <Col md={6} sm={12} xs={12}>
                <H1>{`Talk to us about ${specialty.title}`}</H1>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <Paragraph>{specialty.contactText}</Paragraph>
                <StyledLink to="/contact/">Get in touch</StyledLink>
              </Col>
            </Row>
          </Padding>
          <Padding bottom={3} />
        </Grid>
      </GrayBackground>
    </Layout>
  )
}

export default Specialty

export const pageQuery = graphql`
  query($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulSpeciality(filter: { id: { eq: $id } }) {
      edges {
        node {
          slug
          title
          seoTitle
          seoMetaDescription
          seoText {
            nodeType
            content {
              nodeType
              content {
                nodeType
                value
              }
            }
          }
          introGraphic {
            id
            title
            file {
              fileName
              url
            }
          }
          introTitle
          introTextTitle1
          introTextBody1 {
            nodeType
            content {
              nodeType
              content {
                nodeType
                value
              }
            }
          }
          introTextTitle2
          introTextBody2 {
            nodeType
            content {
              nodeType
              content {
                nodeType
                value
              }
            }
          }
          introTextTitle3
          introTextBody3 {
            nodeType
            content {
              nodeType
              content {
                nodeType
                value
              }
            }
          }
          relatedProjects {
            ... on ContentfulCaseStudy {
              title
              slug
              introSentence
              posterColor
              posterImage {
                title
                file {
                  url
                }
              }
            }
          }
          clients {
            id
            title
            file {
              url
              fileName
            }
          }
          trainingIntroText {
            nodeType
            content {
              nodeType
              content {
                nodeType
                value
              }
            }
          }
          trainingTextIcon1 {
            id
            title
            file {
              url
              fileName
            }
          }
          trainingTextTitle1
          trainingTextBody1 {
            nodeType
            content {
              nodeType
              content {
                nodeType
                value
              }
            }
          }
          trainingTextIcon2 {
            id
            title
            file {
              url
              fileName
            }
          }
          trainingTextTitle2
          trainingTextBody2 {
            nodeType
            content {
              nodeType
              content {
                nodeType
                value
              }
            }
          }
          trainingTextIcon3 {
            id
            title
            file {
              url
              fileName
            }
          }
          trainingTextTitle3
          trainingTextBody3 {
            nodeType
            content {
              nodeType
              content {
                nodeType
                value
              }
            }
          }
          communityText {
            nodeType
            content {
              nodeType
              content {
                nodeType
                value
              }
            }
          }
          communityLogo {
            id
            title
            file {
              fileName
              url
            }
          }
          eventIcon {
            id
            title
            file {
              fileName
              url
            }
          }
          events {
            id
            eventTitle
            date
            startTime
            linkToEvent
            blurb {
              blurb
            }
          }
          contactText
        }
      }
    }
  }
`
