import React from 'react';
import { Carousel, WhiteSpace, WingBlank, Button } from 'antd-mobile';

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
          infinite
          selectedIndex={1}
          swipeSpeed={35}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
        <div style={hProp} key={1}>
        尋找樓盤: 
        <br />
        最少實用面積: 
        <br />
        付出預算上限: 
        <br />
        間隔:    
        <br />
        你會唔會養物: 
        <br />
        冇樓睇租左俾人會唔會買: 
        <br />
        姓名: 
        <br />
        聯絡手機: 
        <br />
        電郵: 
        <br />
        <Button onClick={ () => this.triggetNext() }>call now</Button>
      </div>       
        <div style={hProp} key={2}>
        尋找樓盤: 
        <br />
        最少實用面積: 
        <br />
        付出預算上限: 
        <br />
        間隔:    
        <br />
        你會唔會養物: 
        <br />
        冇樓睇租左俾人會唔會買: 
        <br />
        姓名: 
        <br />
        聯絡手機: 
        <br />
        電郵: 
        <br />
        <Button onClick={ () => this.triggetNext() }>call now</Button>
        </div>       
      <div style={hProp} key={3}>
      尋找樓盤: 
      <br />
      最少實用面積: 
      <br />
      付出預算上限: 
      <br />
      間隔:    
      <br />
      你會唔會養物: 
      <br />
      冇樓睇租左俾人會唔會買: 
      <br />
      姓名: 
      <br />
      聯絡手機: 
      <br />
      電郵: 
      <br />
      <Button onClick={ () => this.triggetNext() }>call now</Button>
      </div>       
      </Carousel>

    );
  }
}