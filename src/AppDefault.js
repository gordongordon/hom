 import React, { Component } from 'react';
//import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { NavBar, Button, Icon, List } from 'antd-mobile';
import {FormSalePropertyAntMobileWrapper} from 'formSalePropertyAntMobile'
import {PropertysView} from 'propertysView'
import {FrontPapePanelView} from 'frontPagePanelView'
import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'
import {ListTestingWrapper } from 'listTesting'
import {MatchPanelViewWrapper} from 'matchPanelView'
import {ListOfPropertysView} from 'ListOfPropertysView'
//import {MenuBar} from 'menuBar'
import {FrontPageView} from 'FrontPageView'
import {Main} from 'main'
import {Header} from 'header'


// @observer
// class App extends Component {
//
//   constructor(props) {
//     super(props)
//     this.state = {
//        keyID : 0
//     }
// }
//
//   handleNextProperty = ( keyID ) => {
//      this.setState( {
//         keyID
//      })
//      console.log( 'App Keyid', keyID )
//   }
//   display = () => {
//     if ( this.state.keyID !== 0) {
//       return <MatchPanelViewWrapper keyID={this.state.keyID} />
//     }
//
//   }

//   render() {

//     //const keyID = this.state.keyID;

//     return (
//       <div>
//         <Header />
//         <Main />
//       </div>
//     );
//   }
// // };

//
// <MenuBar />
//   { this.display() }
//   <ListOfPropertysView handleNextProperty={ this.handleNextProperty.bind(this) } />
//   <FrontPapePanelViewSegment />

//<div style={{ margin: 5 }}>
//<DevTools />

// { this.display() }
// <ListOfPropertysView handleNextProperty={ this.handleNextProperty.bind(this) } />
// <FrontPapePanelViewSegment />

// <Router history={history}>
//     <div>
//       <NavBar leftContent="back"
//         mode="light"
//         onLeftClick={() => history.push('/list') }
//         rightContent={[
//           <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
//           <Icon key="1" type="ellipsis" />,
//         ]}
//       >NavBar</NavBar>
//    <ul>
//      <li><Link to="/">Home</Link></li>
//      <li><Link to="/list">list</Link></li>
//    </ul>
//   <Route exact path="/" component={FrontPapePanelViewSegment} />
//   <Route path="/list" component={ListOfPropertysView} />
//     </div>
// </Router>
      // <NavBar leftContent="back"
      //   mode="light"
      //   onLeftClick={() => that.props.history.push('/list') }
      //   rightContent={[
      //     <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
      //     <Icon key="1" type="ellipsis" />,
      //   ]}
      // >NavBar</NavBar>

// <ListOfPropertysView />
// <FrontPapePanelViewSegment />

// ,
//
// <div style={{ margin: 5 }}>
//   <ListOfPropertysView />
// <FrontPapePanelViewSegment />
//   <DevTools />
// </div>

// export default App;
// <FrontPapePanelViewSegment />
//<MatchPanelViewWrapper  />
// <FrontPapePanelViewSegment />
