import React from 'react';
import { Carousel, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { Generic } from 'react-simple-chatbot';
import PropTypes from 'prop-types';

export default class Slick extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      data: ['', '', ''],
      initialHeight: 450,
        value: null,
      trigger: false
    };
    this.triggetNext = this.triggetNext.bind(this);
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep( { value: 'building', label : 'matching' });
    });
  }

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};

    return (
        <Carousel
          className="my-carousel"
          autoplay={false}
          dots={true}
          selectedIndex={0}
          swipeSpeed={3}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
        <Generic onClick={this.triggetNext} />
        <Generic onClick={this.triggetNext} />
        <Generic onClick={this.triggetNext} />
      </Carousel>

    );
  }
}

Slick.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

Slick.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};