const R = require('../../node_modules/ramda');

var tasks = [
                {username: 'Michael', dueDate: '2014-06-22', title: 'Integrate types with main code'},
                {username: 'Michael',dueDate: '2014-06-15', title: 'Finish algebraic types'},
                {username: 'Michael',dueDate: '2014-06-06', title: 'Types infrastucture'},
                {username: 'Michael',dueDate: '2014-05-24', title: 'Separating generators'},
                {username: 'Michael',dueDate: '2014-05-17', title: 'Add modulo function'},
                {username: 'Richard',dueDate: '2014-06-22', title: 'API documentation'},
                {username: 'Richard',dueDate: '2014-06-15', title: 'Overview documentation'},
                {username: 'Scott',dueDate: '2014-06-22', title: 'Complete build system'},
                {dueDate: '2014-06-15', title: 'Determine versioning scheme'},
                {dueDate: '2014-06-09', title: 'Add `mapObj`'},
                {dueDate: '2014-06-05', title: 'Fix `and`/`or`/`not`'},
                {dueDate: '2014-06-01', title: 'Fold algebra branch back in'}
];


var incomplete = R.filter( R.where( { complete : R.equals( false ) }));
var groupByUser = R.partition(R.prop('username'));

console.log( 'groupByUser', groupByUser(tasks))
// var incompleteTasks = tasks.filter( function( task)  {
//     return !task.complete;
// } )
              
//console.log( 'incomplete', incomplete( tasks ) );

var activeByUser = R.compose(groupByUser, incomplete);

//console.log( 'activeByUser', activeByUser( tasks ));
 
var sortByDate = R.sort( R.prop( 'dueDate'));

//console.log( 'sortByDate', sortByDate( tasks));
//var m = R.mapObjIndexed(sortByDate);
//console.log( 'mapObjIndexed', m(tasks) );

{
    "id": "light",
    "initial": "welcome",
    "states": {
      "welcome": {
        "on": {
          "START": "mrhouse",
          "BUY"  : "buy"
        }
      },
      "mrhouse": {
        "on": {
          "OPTION1": "buy",
          "OPTION2": "other"
        }
      },
      "buy"    : {
         "on" : {
           "START" : "getBuilding"
         }
       }, 
      "getBuilding" {
         "on" : {
           "FILLED" : "getPhone",
           "MISSED" : "getBuilding"
         }
      },
      "other": {
        "on": {
          "TIMER": "green"
        },
        "initial": "walk",
        "states": {
          "walk": {
            "on": {
              "PED_TIMER": "wait"
            }
          },
          "wait": {
            "on": {
              "PED_TIMER": "stop"
            }
          },
          "stop": {}
        }
      }
    }
  }

//var sortUserTasks = R.compose( R.mapObjIndexed(sortByDate), activeByUser);


//var sortUserTasks = R.compose( R.map( R.sortBy( R.prop('dueDate') ) ), activeByUser)
// var sortUserTasks = R.compose(
//     R.mapObjIndexed( R.sortBy( R.prop('dueDate'))),
//     groupByUser,
//     R.filter(R.where( { complete : R.equals( false )}))
// )
var sortByDate = R.sortBy(R.propEq('dueDate'));
var sortUserTasks = R.compose(R.mapObjIndexed(sortByDate), activeByUser);

//console.log( 'sortUserTasks', sortUserTasks( tasks )) 


var incomplete = R.filter(R.where({complete: R.equals(false)}));
var sortByDate = R.sortBy(R.prop('dueDate'));
var sortByDateDescend = R.compose(R.reverse, sortByDate);
var importantFields = R.project(['title', 'dueDate']);
var groupByUser = R.partition(R.propEq('username'));
var activeByUser = R.compose(groupByUser, incomplete);
var topDataAllUsers = R.compose(R.mapObjIndexed(R.compose(importantFields, 
    R.take(5), sortByDateDescend)), activeByUser);

var result = topDataAllUsers( tasks );

console.log( 'result', result );





