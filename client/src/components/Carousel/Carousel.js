import React, { Component} from "react";
import { Grid, Image, Reveal } from "semantic-ui-react";
// import API from "../../utils/API";
import "./Carousel.css";

const GridExampleVerticallyDivided = () => (
  <div>
    <Grid divided="vertically">
      <Grid.Row columns={3}>
        <Grid.Column className="carousel-column">
          <Reveal animated="small fade">
            <Reveal.Content visible>
              <Image src="/assets/images/brs5.jpg" className="carousel" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src="/assets/images/brs6.jpg" className="carousel" />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
        <Grid.Column className="carousel-column">
          <Reveal animated="small fade">
            <Reveal.Content visible>
              <Image src="/assets/images/brs7.jpeg" className="carousel" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src="/assets/images/brs2.jpg" className="carousel" />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
        <Grid.Column className="carousel-column">
          <Reveal animated="small fade">
            <Reveal.Content visible>
              <Image src="/assets/images/brs3.jpg" className="carousel" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src="/assets/images/brs9.jpg" className="carousel" />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default GridExampleVerticallyDivided;


