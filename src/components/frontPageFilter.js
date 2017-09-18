import React from "react";
import {
  Card,
  Picker,
  List,
  WhiteSpace,
  InputItem,
  Button,
  SegmentedControl,
  Checkbox,
  Switch,
  Range,
  createTooltip,
  DatePicker,
  Stepper
} from "antd-mobile";
import { createForm } from "rc-form";
import { MTR } from "MTR";
import { PARTITION } from "PARTITION";
import { DISTRICK } from "DISTRICK";
import { Fb } from "firebase-store";
import { Property } from "property";
import { propertys } from "userModelView";

//import moment from "moment";
//import "moment/locale/zh-cn";
import MobxStore from "mobxStore";
import views from 'views';

const RangeWithTooltip = createTooltip(Range);

class FrontPageFilter extends React.Component {
  state = {
  };


  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  onValueChange = (value) => {
    console.log(value);
  }

  addPropertyForRent = v => {
    var p = new Property();

    //p.nearByMtrLine = v.nearByMtrLine;
    //p.nearByMtrStop = v.nearByMtrStop;
    p.uid = MobxStore.app.uid;

    p.addressRegion = v.districk[0];
    p.addressLocation = v.districk[1];
    p.nameOfBuilding = v.districk[2];

    p.jobNature = parseInt(v.jobNature[0]);
    p.income = parseInt(v.income);

    p.earlyTimeToView = v.earlyTimeToView.toJSON();
    //p.rentBudgetMax = parseInt(v.rentBudgetMax);
    p.numOfPeopleLiving = parseInt(v.numOfPeopleLiving);

    //p.netSizeMin = parseInt(v.netSizeMin);

    p.numOfRoom = parseInt(v.partition[0]);
    p.numOfBathroom = parseInt(v.partition[1]);
    p.numOfLivingroom = parseInt(v.partition[2]);
    // p.isPreferPayAnnually = v.isPreferPayAnnually;
    p.isRentAbleNow = v.isRentAbleNow;
    //p.isFreeForSevenDay = v.isFreeForSevenDay;

    p.hasHomeHardware = v.hasHomeHardware;
    //p.isViewAble = v.isViewAble;
    p.contactName = v.contactName;
    p.contactPhone = parseInt(v.contactPhone);
    p.contactEmail = v.contactEmail;

    p.isPetAllowed = v.isPetAllowed;
    p.leasingPeriod = v.leasingPeriod;

    const id = Fb.app.agentRentRef.push().key;
    p.typeFor = "lease";
    p.typeTo = "rent";
    p.fbid = id;
    p.typeBy = "engage";

    p.relatedFbid = MobxStore.router.params.keyID;

    Fb.app.agentRentRef.update({ [id]: p.serialize() });
    Fb.agentPropertys.child(id).set(p.serialize());

    MobxStore.router.goTo(views.matchAgent, {
      keyID: MobxStore.router.params.filterID,
      typeTo: "lease",
      selectedSegmentIndex: 1
    });
  };

  submit = e => {
    const value = this.props.form.getFieldsValue();

    e.preventDefault();
    //  console.log( '地鐵線', value.MTR )
    //  console.log( '呎', value.netSize)
    //  console.log( '租金', value.leasePrice )
    //  console.log( 'Name', value.contactName )
    //  console.log( '聯絡電郵', value.contactEmail )
    //  console.log( '聯絡手機', value.contactPhone )
    //  console.log( '間隔', roomKey[value.room[0]] )

    this.addPropertyForRent(value);
    //console.log(this.props.form.getFieldsValue());
    //    MobxStore.router.goTo( views.second )
  };

  sale = () => {};

  // '房東', '租人','賣家','買家'
  render() {
    const { getFieldProps } = this.props.form;
    // const leaseWith = [
    //   { value: 0, label: "包差餉" },
    //   { value: 1, label: "包地租/稅" },
    //   { value: 2, label: "包管理費" }
    // ];

    // <Picker data={NameOfBuilding} cols={1} {...getFieldProps('nameOfBuilding', {
    //     initialValue: ['MOSDBC'],
    //   })} className="forss" title="請選擇大廈/屋苑" extra="請選擇大廈/屋苑">
    //   <List.Item arrow="horizontal">大廈/屋苑</List.Item>
    // </Picker>

    //console.log( MobxStore.router.params.keyID )

    // Get the last property to generate default form values
    //const property = MobxStore.app.passByRef;
    //const addressArray = property.addressToArray;
    //const partitionArray = property.partitionToArray;

    // For DatePicker
    // const minDate = moment()
    //   .locale("zh-cn")
    //   .utcOffset(8);
    // const maxDate = moment(minDate).add(6, "M");

    return (
      <div>
      <SegmentedControl
          values={['買家', '房東', '業主','租客']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
          tintColor={'#ff0000'}
          style={{ height: '2rem', fontsize: '1rem' }}          
        />
      
        <List  style={{ backgroundColor: "white" }} >
          <Picker
            data={DISTRICK}
            cols={3}
            {...getFieldProps("districk", {
              initialValue: ['NTTV','MOS','MOS0001'],
            })}
            className="forss"
            title="請選擇大廈/屋苑"
            extra="請選擇大廈/屋苑"
          >
            <List.Item arrow="horizontal">大廈/屋苑</List.Item>
          </Picker>
          </List>

          <WhiteSpace />
          <List style={{ backgroundColor: "red" }} >
          <Picker
            data={PARTITION}
            cols={2}
            title="選擇間隔"
            cascade={false}
            {...getFieldProps("partition", {
              initialValue: ['0','0','0','2'],
            })}
            extra="選擇間隔"
            onOk={e => console.log("ok", e)}
            onDismiss={e => console.log("dismiss", e)}
          >
            <List.Item arrow="horizontal">間隔</List.Item>
          </Picker>
          </List>
          <WhiteSpace />
          <List style={{ backgroundColor: "white" }} >
          <InputItem
            {...getFieldProps("income", {
              initialValue: 0,
              normalize: (v, prev) => {
                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                  if (v === ".") {
                    return "0.";
                  }
                  return prev;
                }
                return v;
              }
            })}
            type="number"
            placeholder=""
            clear
            extra="元"
          >
          價錢
          </InputItem>


          <Button className="btn" type="primary" size="small" onClick={this.submit}>獲得匹配</Button>
        </List>
      </div>
    );
  }
}

export default createForm()(FrontPageFilter);
