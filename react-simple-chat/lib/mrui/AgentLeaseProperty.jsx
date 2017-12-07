import Title from './Title';
import SubTitle from './SubTitle';
import Footer from './Footer';
import Content from './Content';
import React from 'react';
import Button from './Button';
import ContentItem from './ContentItem';
import GenericContainer from './GenericContainer';
import PropTypes from 'prop-types';
import LineText from './LineText';
import Toggle from './Toggle';

export default class AgentLeaseProperty extends React.Component {
    constructor( props ) {
        super( props );

        this.triggetNext = this.triggetNext.bind(this);

        // this.state = {
        //   value: null,
        //   trigger: false
        // };
        
    }

    // update property's timestamp in order to display howFresh.. 
    componentWillMount() {
        //const p = this.props;
        //    const t = moment().format('YYYY-MM-DD HH:mm:ss');
        //  this.props.property.realTime = moment( t );

        // Will be active while production
        //this.props.property.setTimeStamp();
    
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
        // const onSharePhone = this.props.onSharePhone;
        const status  = this.props.status;
        const fStatus = this.props.fStatus;
        const p = this.props.property;
        const isFirst = this.props.isFirst;
        const isLast = this.props.isLast;
        
        return (
             <GenericContainer 
               className="cmui-GenericContainer"
               opened="true"
               width="100%">
                <Title className="cmui-Title" isFirst={isFirst} isLast={isLast}>{p.addressLocationLabel}/{p.nameOfBuildingLabel}</Title>
                <SubTitle className="cmui-SubTitle">{p.roleName} : {p.contactNameLabel}</SubTitle>
                <Content>
                <LineText> Agent lease Property </LineText>

                <ContentItem>: {p.leasePriceLabel}</ContentItem>
                <ContentItem>: {p.partitionLabel}</ContentItem>
                <ContentItem>: {p.leasingPeriodLabel}</ContentItem>
                <ContentItem>: {p.isPetAllowedLabel}</ContentItem>
                <ContentItem>: {p.howFresh}</ContentItem>
                <ContentItem>: {p.dayListed}</ContentItem>
                <ContentItem>: {p.hasHomeHardwareLabel}</ContentItem>
                <ContentItem>: {p.earlyTimeToViewLabel}</ContentItem>
                <ContentItem>: {p.isFreeForSevenDayLabel}</ContentItem>
                <ContentItem>: {p.netSizeLabel}</ContentItem>
                <ContentItem>f:{p.fbid}-r:{p.relatedFbid}</ContentItem>
                <Toggle/>
                </Content>
                {
                    onCall && <Button className="cmui-Button" onClick={ () => onCall( p.contactPhone ) } first> { p.contactPhone} </Button>
                }
                {
                    onTriggetNext && <Button className="cmui-Button" onClick={ () => onTriggetNext() } first> triggetNext </Button>
                }
            </GenericContainer>
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


AgentLeaseProperty.propTypes = {
    steps: PropTypes.object,
    triggerNextStep: PropTypes.func,
    onClick : PropTypes.func,
    status  : PropTypes.object,
    fStatus : PropTypes.object,
    property: PropTypes.object,
    isFirst : PropTypes.bool,
    isLast  : PropTypes.bool,
  };
  
AgentLeaseProperty.defaultProps = {
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