// this layout based on:
// https://github.com/Giuseppetm/mantine-template/blob/main/src/Components/SectionThree.tsx

import {
  Grid,
  Text,
  Container,
  Title,
  Image,
  Button,
  Space,
} from "@mantine/core";
import Smiles_Img from "./pics/sherb_sleepy.jpg";
import Construction_Img from "./pics/pat_construction.gif";

export function FeatureDockTool() {
  return (
    <Container>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Grid justify="space-around">
        <Grid.Col xs={6} sm={8} md={8} lg={8}>
          <div style={{ marginBottom: 20 }}>
            <Text>
              <Title order={1}>Put something here too</Title>
              Dennis Farina is unique among thespians in that he was one of the
              few to achieve success as a "late-bloomer." He did not start
              acting until he was 37 years old, after stints in the military and
              18 years on the Chicago Police Department.
            </Text>
          </div>
          {/* <Button color="yellow">Tell me more</Button> */}
        </Grid.Col>
        <Grid.Col xs={6} sm={4} md={4} lg={4}>
          <Image
            src={Construction_Img}
            alt={"sample2"}
            style={{ width: "100%", maxWidth: 300 }}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
