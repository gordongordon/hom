import React from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Slick extends React.Component {
  state = {
    data: ['', '', ''],
    initialHeight: 200,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
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
        <div>
        A尋找樓盤: {getBuildingUserInput.value}
        <br />
        最少實用面積: {getNetSizeMinUserInput.value} 呎
        <br />
        付出預算上限: {getBuyBudgetMaxInput.value}
        <br />
        間隔: {getNumOfRoom.value}房,{getNumOfBathroom.vlaue}廁,{getNumOfLivingroom.value}廳
        <br />
        你會唔會養物: {isPetAllowedBoolean.value}
        <br />
        冇樓睇租左俾人會唔會買: {isBuyWithLeaseBoolean.value}
        <br />
        姓名: {getLastNameUserInput.value} {getSexUserInput.value} 
        <br />
        聯絡手機: {getPhoneUserInput.value}
        <br />
        電郵: {getEmailUserInput.value}
        <br />
      </div>
      <div>
        B尋找樓盤: {getBuildingUserInput.value}
        <br />
        最少實用面積: {getNetSizeMinUserInput.value} 呎
        <br />
        付出預算上限: {getBuyBudgetMaxInput.value}
        <br />
        間隔: {getNumOfRoom.value}房,{getNumOfBathroom.vlaue}廁,{getNumOfLivingroom.value}廳
        <br />
        你會唔會養物: {isPetAllowedBoolean.value}
        <br />
        冇樓睇租左俾人會唔會買: {isBuyWithLeaseBoolean.value}
        <br />
        姓名: {getLastNameUserInput.value} {getSexUserInput.value} 
        <br />
        聯絡手機: {getPhoneUserInput.value}
        <br />
        電郵: {getEmailUserInput.value}
        <br />
      </div>      
        </Carousel>

    );
  }
}