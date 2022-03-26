import React from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";

// const Family = [
//   {
//     'id': 1,
//     'name': 'Оля',
//     'image': 'http://img.crazys.info/files/pics/2018.08/022018-8-22-15_13_11.jpg',
//     'rating': 4.3
//   },
//   {
//     'id': 2,
//     'name': 'Абоба',
//     'image': 'https://yt3.ggpht.com/ytc/AKedOLQdVTWwTRduzaFrcLhyb0kfoNscsN3C1cjPwETO=s900-c-k-c0x00ffffff-no-rj',
//     'rating': 3.7
//   }
// ]

// function Myname({name, picture, rating}) {
//   return (
//     <div>
//       <h3>Меня зовут {name}</h3>
//       <h4>{rating} / 5.0</h4>
//       <img src={picture} alt="" width="500px"/>
//     </div>
//   );
// }

// Myname.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }

// function renderName(familyMember) {
//   return <Myname key={familyMember.id} name={familyMember.name} picture={familyMember.image} rating={familyMember.rating} />
// }

// function App() {
//   return (
//     <div>
//       {Family.map(renderName)}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       {Family.map(family => <Myname name={family.name} picture={family.image} />)}
//     </div>
//   );
// }

class App extends React.Component {
state = {
  count: 666
}

add = () => {
  this.setState({count: this.state.count++});
}

minus = () => {

}
  render() {
    return <div>
      <h1>Привет, текущее число: {this.state.count}</h1>
      <button onClick={this.add}>Плюс</button>
      <button onClick={this.minus}>Минус</button>
    </div>
  }
}

export default App;
