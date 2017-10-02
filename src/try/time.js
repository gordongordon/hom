//import moment from 'moment';
var moment = require( '../../node_modules/moment')

var a = moment([2008, 0, 28]);
var b = moment([2007, 0, 29]);
console.log( a.toNow('M') );

var day = moment(1318781876406);
console.log( day )
console.log( moment() )
console.log( 'minute', moment().minute() )
console.log( 'hour', moment().hour() )
console.log( 'date', moment().date() )
console.log( 'month', moment().month() )
console.log( 'year', moment().year() )


console.log( moment().get('year') );
// moment().get('month');  // 0 to 11
// moment().get('date');
console.log( 'moment().get(hour)', moment().get('hour') );
// moment().get('minute');
// moment().get('second');
// moment().get('millisecond');

var a = moment().subtract(1, 'day');
var b = moment().add(1, 'day');
console.log( 'moment.max', moment.max(a, b) );  // b

console.log( moment().format('k') );



function getTimeInNum( time ) {
  const MM = moment( time )
  const Y = MM.get('Y') ;
  const M = MM.get('M') // 0 to 11
  const D = MM.get('D');
  const h = MM.get('h') ;
  const m = MM.get('m');
  const s = MM.get('s');

  const Days = M * 30 + D;
  const Hours = Days * 24;
  const Seconds = Hours * 60;
  const Months = M;
  const Years = Y;
  return { Days, Hours, Seconds, Months, Years }
}

// Get all data
var time = getTimeInNum( moment() )
console.log( 'time.Days', time.Days );
console.log( 'time.Hours', time.Hours );
console.log( 'time.Seconds', time.Seconds );
console.log( 'time.Months', time.Months );
console.log( 'time.Years', time.Years );



console.log( 'getday', getTimeInNum( moment() ));
//var MM = moment( moment().format('YYYY-MM-DD HH:mm:ss') );
const MM = moment()
const Y = MM.get('Y') ;
const M = MM.get('M') // 0 to 11
const D = MM.get('D');
const h = MM.get('h') ;
const m = MM.get('m');
const s = MM.get('s');
const end = moment( [Y, M, D, h, m] );
console.log( 'end ', end );
const start   = moment( moment().format('YYYY-MM-DD HH:mm') );
const sDiff =  end.diff( start, 'seconds');
const mDiff =  end.diff( start, 'minutes');
const hDiff =  end.diff( start, 'hours');
const DDiff =  end.diff( start, 'days');
const MDiff =  end.diff( start, 'months');

// console.log( 10 % 13)
console.log( 'sDiff', sDiff)
console.log( 'mDiff', mDiff)
console.log( 'hDiff', hDiff)
console.log( 'DDiff', DDiff)
console.log( 'MDiff', MDiff)
console.log( 70 % 60 | 0 )



//console.log( 'moment( new Date )', moment( new Date() ));

//console.log( 'mDiff', mDiff)
console.log( 'compute', end.diff( start, 'minutes'))
// var Y = moment().get('Y') ;
// var M = moment().get('M') // 0 to 11
// var D = moment().get('D');
// var h = moment().get('h') ;
// var m = moment().get('m');
// var s = moment().get('s');

console.log( `Y: ${Y}, M: ${M}, D: ${D}, h: ${h}, s: ${s}`);

// var mm = moment();
// mm.subtract(Y, 'years');
// mm.subtract(M, 'months');
// mm.subtract(D, 'days');
// mm.subtract(h, 'hours');
// console.log( 'mm', mm)
// moment().subtract(1, 'minutes');

// console.log( moment().daysInMonth() )

var a = moment( moment().format('YYYY-MM-DD HH:mm') );
console.log( 'a', a )
var b = moment([Y, M, D, h, m]).add( 1, 'days');
console.log( 'b', b)
console.log( a.diff(b, 'minutes')  )

console.log( moment.duration().asMinutes() )

//
// const dueDay = moment( moment().format('YYYY-MM-DD') );
// var mm = dueDay.get('M');
// var dd = dueDay.get('D')
// console.log( "due MM", )
const map = f => x => Array.prototype.map.call(x, f)

const getFullName = ({ first, last }) => `${first} ${last}`

getFullName({ first: 'Max', last: 'Power' })
// => 'Max Power'

console.log(map(getFullName)([
  { first: 'Max', last: 'Power' },
  { first: 'Disco', last: 'Stu' },
  { first: 'Joe', last: 'Kickass' }
]))


var myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

var mapIter = [...myMap.values()];
console.log(mapIter); // "0"
