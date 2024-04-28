import { Container, Grid, Box } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCard from '../components/feature-card.js';
import Performance from '../assets/feature/performance.svg';
import Partnership from '../assets/feature/partnership.svg';
import Subscription from '../assets/feature/subscription.svg';
import Support from '../assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Automated Deployment',
    title: 'Automated Deployment',
    text:
      'Say goodbye to manual deployments and hello to seamless automation. Our solution automates the deployment process, reducing errors and accelerating time-to-market.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Scalability',
    title: 'Scalability',
    text:
      'Scale your infrastructure effortlessly to meet growing demands. Our solution is designed to accommodate your evolving needs without compromising performance or stability.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Security Hardening',
    title: 'Security Hardening',
    text:
      'Protect your code and pipeline from cyber threats with our robust security measures. From vulnerability scanning to access control, we\'ve got you covered',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'AI/ML Integration',
    title: 'AI/ML Integration',
    text:
      'Harness the power of artificial intelligence and machine learning to optimize your DevOps processes. Predictive analytics, anomaly detection, and intelligent automation—all at your fingertips.',
  }
];

export default function Feature() {
  return (
    <Box id="feature" sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Amazing useful features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
