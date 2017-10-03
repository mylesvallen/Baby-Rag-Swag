import React from "react";
import { Grid, Image } from "semantic-ui-react";

const GridExampleVerticallyDivided = () => (
  <Grid divided='vertically'>
   <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='/assets/images/baby1.jpeg' />
      </Grid.Column>
      <Grid.Column>
        <Image src="/assets/images/baby1.jpeg" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/assets/images/baby1.jpeg" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleVerticallyDivided
