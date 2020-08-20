import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import AllItem from "../AllItem";

describe("<App /> component tests", () => {
  test("check if all items exists", () => {
    const AppWrapper = shallow(<App />);

    expect(AppWrapper.find(AllItem)).toHaveLength(1);
  });
});
