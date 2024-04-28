import { Container, Box, Heading, Text, Button } from 'theme-ui';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
export default function Banner() {
  return (
    <Box sx={styles.container} id="home">
      <Container sx={styles.container.inner}>
        <Box sx={styles.contentBox}>
          <Heading as="h1" variant="heroPrimary">
          Revolutionize your workflow
          </Heading>
          <Text as="p" variant="heroSecondary">
          Harness the power of our expertise to optimize your development pipeline, revolutionizing how you approach digital projects. Experience seamless collaboration, setting new standards in innovation and excellence.
          </Text>
          <Button variant="primary">Explore</Button>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  container: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    inner: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  contentBox: {
    width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
    mx: 'auto',
    textAlign: 'center',
    mb: ['40px', null, null, null, null, 7],
  },
};