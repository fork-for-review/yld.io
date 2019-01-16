import React, { Fragment } from 'react'
import Flex from 'styled-flex-component'
import { Padding } from 'styled-components-spacing'
import CaseStudyLayout from './CaseStudyLayout'
import { H1, H5 } from '../../Typography'
import SeoLinks from '../seoLinks'

const CardHeading = H1.withComponent('h2')

const SubSection = ({ heading, items }) => (
  <Padding bottom={1}>
    <H5 noMargin noWrap>
      {heading}
    </H5>
    <Flex alignCenter wrap>
      <SeoLinks noMargin items={items} />
    </Flex>
  </Padding>
)

const SpecialitiesAndServices = ({ specialities, services }) => (
  <Fragment>
    {specialities && (
      <SubSection heading="Technology used" items={specialities} />
    )}
    <SubSection heading="Services provided" items={services} />
  </Fragment>
)

const CaseStudyHero = ({ caseStudy }) => {
  const { posterImage, title, specialities, services } = caseStudy
  return (
    <CaseStudyLayout
      posterImage={posterImage}
      headings={<CardHeading>{title}</CardHeading>}
      mainText={
        <SpecialitiesAndServices
          specialities={specialities}
          services={services}
        />
      }
    />
  )
}

export default CaseStudyHero
