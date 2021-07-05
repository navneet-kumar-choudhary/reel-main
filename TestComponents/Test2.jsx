// export class Profile extends Component {
//     state = {
//         name: "Backbencher",
//         age: 23,
//     };
//     onNameChange = (e) => {
//         this.setState({
//             name: e.target.value,
//         });
//     };
//     onAgeChange = (e) => {
//         this.setState({
//             age: e.target.value,
//         });
//     };
//     render() {
//         return (
//             <div>
//                 <form>
//                     <input
//                         type="text"
//                         value={this.state.name}
//                         onChange={this.onNameChange}
//                     />
//                     <input
//                         type="text"
//                         value={this.state.age}
//                         onChange={this.onAgeChange}
//                     />
//                     <h2>
//                         Name: {this.state.name}, Age: {this.state.age}
//                     </h2>
//                 </form>
//             </div>
//         );
//     }
// }

// export class Banner extends Component {
//     state = {
//         count: 0,
//     };
//     updateState = () => {
//         this.setState({
//             count: this.state.count + 1,
//         });
//     };
//     componentDidMount() {
//         console.log("Boom");
//     }
//     componentDidUpdate() {
//         console.log("Boom");
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.updateState}>
//                     State: {this.state.count}
//                 </button>
//             </div>
//         );
//     }
// }

// import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// const App = () => {
//     return <div>App</div>;
// };
// const Dashboard = () => {
//     return <div>Dashboard</div>;
// };
// const Profile = () => {
//     return <div>Profile</div>;
// };
// const Router = () => {
//     return (
//         <BrowserRouter>
//             <Route path="/" component={App}></Route>
//             <Route exact path="/dashboard/profile" component={Profile}></Route>
//             <Route path="/dashboard" component={Dashboard}></Route>
//         </BrowserRouter>
//     );
// };


