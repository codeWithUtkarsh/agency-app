import React, { useState } from 'react';
import {
  Container,
  Box,
  Grid,
  Text,
  Heading
} from 'theme-ui';
import Image from 'next/image';
import { keyframes } from '@emotion/react'
import TextFeature from 'components/text-feature';

import ServiceThumb from '../assets/service-thumb.png';
import shapePattern from '../assets/shape-pattern1.png';

import Smart from '../assets/services/smart.svg';
import Secure from '../assets/services/secure.svg';

const data = {
  subTitle: 'our services',
  // title: 'Business Goals Achieved with Design',
  features: [
    {
      id: 1,
      imgSrc: Secure,
      altText: 'Streamlined Processes',
      title: 'Streamlined Processes',
      text:
        'Optimize workflows, automate tasks, and implement best practices for innovation-driven growth, eliminating inefficiencies.',
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: 'Cost Reduction',
      title: 'Cost Reduction',
      text:
        'Reduce costs by minimizing downtime, errors, and infrastructure expenses through streamlined DevOps pipelines.',
    },
    {
      id: 3,
      imgSrc: Secure,
      altText: 'Security',
      title: 'Security',
      text:
        'Harden the security of your code and pipeline with our comprehensive security solutions.',
    },
    {
      id: 4,
      imgSrc: Secure,
      altText: 'Future-Proofing with AI/ML',
      title: 'Future-Proofing with AI/ML',
      text:
        'Our visionary approach integrates AI and machine learning models into your DevOps workflows, paving the way for smarter, data-driven decision-making.',
    },
  ],
};export default function ServiceSection() {
  return (
    <Box sx={{ variant: 'section.services' }}>
      <Container sx={styles.containerBox}>
        {/* Replace the thumbnail with the provided image */}
        <Box sx={styles.thumbnail}>
          <img src="https://cretive-agency.netlify.app/static/media/Frame.33e98a43d45c0c82f896.png" alt="Thumbnail" style={styles.image} />
    
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} />

          <Grid sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Image src={item.imgSrc} alt={item.altText} style={styles.icon} />

                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}


const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    width: '100%',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: '100%',
      width: '100%',
    },
    position: 'relative',
    zIndex: 1,
  },
  image: {
    // Add depth by applying box shadow
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px', // Optionally, you can add border radius for rounded corners
    width: '100%', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    flexShrink: 0,
   marginRight: '10px'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
};
