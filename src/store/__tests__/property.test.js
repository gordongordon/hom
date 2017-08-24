import {Property} from 'property'
import moment from 'moment'
//import firebase from 'firebase';

describe('mobx property component', () => {

    it ( 'equalTo nameOfBuilding', () => {

        var p = new Property();

        p.nameOfBuilding = 'MOS0001'
        p.orderByChild = 'nameOfBuilding'
        expect( p.equalTo ).toEqual( 'MOS0001')

        p.nameOfBuilding = 'MOS0001'
        p.addressLocation = 'MOS'
        p.orderByChild = 'addressLocation'
        expect( p.equalTo ).toEqual( 'MOS')
    } ),

    it ( 'equalTo addressLocation', () => {
        var p = new Property();
        p.nameOfBuilding = 'MOS0001'
        p.addressLocation = 'MOS'
        p.orderByChild = 'addressLocation'
        expect( p.equalTo ).toEqual( 'MOS')
    }),

    it ('howFresh ', () => {

//        const createTime = moment().format('YYYY-MM-DD HH:mm:ss');
        //const testTime = moment(createTime).add(2, 'D');

        var p = new Property();
        // Test for nothing added! 
        expect( p.howFresh ).toEqual("超新鮮")
        // Test for adding one hour
        p.realTime = moment(p.createTime).add(1, 'hours');
        expect( p.howFresh ).toEqual("勁新鮮")
        // Test for adding one day
        p.realTime = moment(p.createTime).add(1, 'days');
        expect( p.howFresh ).toEqual("好新鮮")
        // Test for adding seven days
        p.realTime = moment(p.createTime).add(8, 'days');
        expect( p.howFresh ).toEqual("")

    }),

    it ( 'nameOfBuildingLabel' , () => {
        var p = new Property();

        p.addressRegion = 'NTTV'
        p.addressLocation = 'MOS'
        p.nameOfBuilding = 'MOS0001'

        expect( p.nameOfBuildingLabel ).toEqual('迎海')

        p.addressRegion = ''
        expect( p.nameOfBuildingLabel ).toEqual("region doesn't exist!");

        p.addressRegion = 'NTTV'
        p.addressLocation = ""
        expect( p.nameOfBuildingLabel ).toEqual("location doesn't exist!");
    }),
    it ( 'dayListed', () => {
        var p = new Property();
        // Test for nothing added! 
        expect( p.dayListed ).toContain("秒前")
        p.realTime = moment(p.createTime).add(1, 'minutes');
        expect( p.dayListed ).toContain("分鐘前")
        p.realTime = moment(p.createTime).add(1, 'hours');
        expect( p.dayListed ).toContain("小時前")
        p.realTime = moment(p.createTime).add(1, 'days');
        expect( p.dayListed ).toContain("日前")
    }),
    it (' '),
    it ('priceToLabel()', () => {
        var p = new Property();

        expect( p.priceToLabel(100) ).toEqual("1百")
        expect( p.priceToLabel(1000) ).toEqual("1千")
        expect( p.priceToLabel(10000) ).toEqual("1萬")
        expect( p.priceToLabel(11100) ).toEqual("1萬1千1百")
    })
        // const myMock = jest.fn();
        // myMock('1');
        // myMock('a', 'b');

        // console.log( myMock.mock.calls);
})

