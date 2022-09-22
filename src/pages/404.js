import * as React from "react"
import Layout from "@components/layout"
import * as styles from "@components/404.css"

export default function NotFound() {
  return (
    <div>This is the 404 page</div>
    // <Layout title="404: Page not found">
    //   <Box paddingY={4}>
    //     <Container>
    //       <Flex variant="column">
    //         <Heading variant="mega" className={styles.heading}>
    //           404
    //         </Heading>
    //         <Heading as="h1">Page not found</Heading>
    //         <Flex variant="column" gap={0}>
    //           <Text variant="lead" className={styles.text}>
    //             Sorry! We couldn’t find the page you were looking for.
    //           </Text>
    //           <Link to="/" className={styles.link}>
    //             <span>Back to home</span>
    //             <ChevronRight className={styles.linkChevron} />
    //           </Link>
    //         </Flex>
    //       </Flex>
    //     </Container>
    //   </Box>
    // </Layout>
  )
}
