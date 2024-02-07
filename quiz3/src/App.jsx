import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import First from "./component/first";
import Second from "./component/second";
import Third from "./component/third";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/play-quiz" element={<Second />}></Route>
        <Route path="/finish-quiz" element={<Third />}></Route>
      </Routes>
    );
  }
}