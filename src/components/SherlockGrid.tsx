import {
  Badge,
  Container,
  Grid,
  Text,
  Title,
  Space,
  Image,
} from "@mantine/core";

import { useScrollIntoView } from "@mantine/hooks";

import ReactIcon from "./pics/react.svg";
import SherbParis from "./pics/sherb_paris.jpg";
import SherbSleepy from "./pics/sherb_sleepy.jpg";
import SherbPath from "./pics/sherb_path.jpg";
import SherbProf from "./pics/sherlock_prof.jpg";

import { useRef } from "react";

// ****************
// NOT WORTH FIGURING OUT MAPPING ETC. W/ JSON AT THIS TIME LOL
// **************

// type appDescrip = {
//   image: string;
//   title: string;
//   country: string;
//   description: string;
//   badges: {
//     emoji: string;
//     label: string;
//   }[];
// };

// const hemeStuff: appDescrip = JSON.parse(heme);

// export function appCardsSection(): JSX.Element {
export function SherlockGrid() {
  // the fn might return more than just targetRef, just hoping to import this elsewhere
  return (
    <Container>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />

      {/* NOTE: no special export for ID below, see Hero_landing for how implemented */}
      <div id="sherbID">
        <Text align="center">
          <Title>Sherlock</Title>
        </Text>
      </div>
      {/* title option: order={1} mb="30px" */}
      <Space h="xl" />
      <Space h="xl" />

      <Grid>
        <Grid.Col md={6} lg={6}>
          <div style={{ width: 360, marginLeft: "auto", marginRight: "auto" }}>
            <Image radius="md" src={SherbParis} caption="Sherlock in Paris" />
          </div>
        </Grid.Col>

        <Grid.Col md={6} lg={6}>
          <div style={{ width: 360, marginLeft: "auto", marginRight: "auto" }}>
            <Image
              radius="md"
              src={SherbPath}
              caption="Sherlock on the Path 🐺"
            />
          </div>
          {/* </Grid.Col> */}

          {/* <Grid.Col md={6} lg={6}>
          <div style={{ width: 360, marginLeft: "auto", marginRight: "auto" }}>
            <Image
              radius="md"
              src={SherbProf}
              caption="Sherlock stretching after lecturing at the UN"
            />
          </div>
        </Grid.Col> */}
          <Space h="md" />
          {/* <Grid.Col md={6} lg={6}> */}
          <div style={{ width: 360, marginLeft: "auto", marginRight: "auto" }}>
            <Image
              radius="md"
              src={SherbSleepy}
              caption="Sherlock after the Path"
            />
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
