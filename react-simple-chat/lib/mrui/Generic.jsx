import PropTypes from 'prop-types';


// import Title from './Title';
// import SubTitle from './SubTitle';
// import Footer from './Footer';
// import Content from './Content';
// import React from 'react';
// import Button from './Button';
// import ContentItem from './ContentItem';
// import GenericContainer from './GenericContainer';
// import LineText from './LineText';
// import Toggle from './Toggle';

import Carousel from './Carousel';

export default class Generic extends React.Component {
    constructor( props ) {
        super( props );

        this.triggetNext = this.triggetNext.bind(this);

        // this.state = {
        //     value: null,
        //     trigger: false
        //   };
        
    }

    // update property's timestamp in order to display howFresh.. 
    componentWillMount() {
        //const p = this.props;
        //    const t = moment().format('YYYY-MM-DD HH:mm:ss');
        //  this.props.property.realTime = moment( t );
        this.props.property.setTimeStamp();
    
        //    console.log( 'realTime will mount', this.props.property.realTime)
      }    

    // // For Chatbot Custom Component Return 
    triggetNext() {
        const label = 'gordon';
        console.log( 'triggetNext() ');
        this.setState({ trigger: true }, () => {
          this.props.triggerNextStep( { value: label, label : label });
        });

    }

    render() {
        const onCall = this.props.onCall;
        const onTriggetNext = this.props.onTriggetNext;
        const onSharePhone = this.props.onSharePhone;
        const status  = this.props.status;
        const fStatus = this.props.fStatus;
        const p = this.props.property;
        const isFirst = this.props.isFirst;
        const isLast = this.props.isLast;
        
        return (
             <Carousel 
               className="cmui-GenericContainer"
               opened="true"
               width="100%"
             >
                <Carousel.Title className="cmui-Title" isFirst={isFirst} isLast={isLast}>{p.addressLocationLabel}/{p.nameOfBuildingLabel}</Carousel.Title>
                <Carousel.SubTitle className="cmui-SubTitle">{p.roleName} : {p.contactNameLabel}</Carousel.SubTitle>
                <Carousel.Content>
                <Carousel.LineText> Main </Carousel.LineText>
                <Carousel.ContentItem>Size: {p.netSizeLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>Price: {p.salePriceLabel} </Carousel.ContentItem>
                <Carousel.ContentItem>Pet: {p.isPetAllowedLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>View: {p.isViewAbleLabel}:</Carousel.ContentItem
                ><Carousel.ContentItem>Partition {p.partitionLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>Level:  {p.levelLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>With lease:  {p.isSaleWithLeaseLabel}</Carousel.ContentItem>
                <Carousel.LineText> Time </Carousel.LineText>
                <Carousel.ContentItem>Due Day: {p.dueDayLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>Time: {p.earlyTimeToViewLabel}</Carousel.ContentItem>
                <Carousel.ContentItem>Day Listed:  {p.dayListed}</Carousel.ContentItem>
                <Carousel.ContentItem>Status: {p.howFresh}</Carousel.ContentItem>
                <Carousel.ContentItem>f:{p.fbid}-r:{p.relatedFbid}</Carousel.ContentItem>
                <Carousel.Toggle/>
                </Carousel.Content>
                {
                    onSharePhone()
                }
                {
                    onCall && <Carousel.Button className="cmui-Button" onClick={ () => onCall( status.contactPhone ) } first> { status.contactPhone} </Carousel.Button>
                }
                {
                    onTriggetNext && <Carousel.Button className="cmui-Button" onClick={ () => onTriggetNext() } first> triggetNext </Carousel.Button>
                }
            </Carousel.GenericContainer>
        );

    }
}

                {/* <Title className="cmui-Title">迎海 Double Cove</Title>
                <SubTitle className="cmui-SubTitle">烏溪沙路8號 地區：馬鞍山</SubTitle>
                <Content>
                <ContentItem>最少實用面積: </ContentItem><ContentItem left>330</ContentItem>
                <ContentItem>付出預算上限:</ContentItem><ContentItem left>$800</ContentItem>
                <ContentItem>你會唔會養物:</ContentItem><ContentItem left>會</ContentItem>
                <ContentItem>冇樓睇租左俾人會唔會買: </ContentItem><ContentItem left>330</ContentItem>
                <ContentItem>間隔::</ContentItem><ContentItem left> Studio</ContentItem>
                </Content>
                <Button className="cmui-Button" onClick={ () => onClick() } first>Set Phone </Button>
                <Button className="cmui-Button" onClick={ () => onClick() } first>Text Me </Button>
                <Button className="cmui-Button" onClick={ () => onClick() } first> Call 96181448 </Button> */}


Generic.propTypes = {
    steps: PropTypes.object,
    triggerNextStep: PropTypes.func,
    onClick : PropTypes.func,
    status  : PropTypes.object,
    fStatus : PropTypes.object,
    property: PropTypes.object,
    isFirst : PropTypes.bool,
    isLast  : PropTypes.bool,
  };
  
Generic.defaultProps = {
    steps: undefined,
    triggerNextStep: false,
    status  : undefined,
    fStatus : undefined,
    property: undefined,
    isFirst : false,
    isLast  : false,
  };

           {/* <GenericContainer className="cmui-GenericContainer">
               <Title className="cmui-Title">Title</Title>
               <SubTitle className="cmui-SubTitle">SubTitle</SubTitle>
               <Content className="cmui-Content">Content</Content>
               <Footer className="cmui-Footer">Footer</Footer>
           </GenericContainer> */}