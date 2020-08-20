import React from "react";
import { shallow } from "enzyme";
import AllItem from "../AllItem";
import Item from "../Item";

describe("<AllItem /> tests", () => {
  let AllItemWrapper;
  beforeAll(() => {
    AllItemWrapper = shallow(<AllItem />);
  });

  test("state returns the correct things", () => {
    AllItemWrapper.setState({
      items: [{}, {}, {}, {}],
    });
    expect(AllItemWrapper.find(Item)).toHaveLength(4);
  });

  test("state returns the correct things", () => {
    //   this.setState()
    AllItemWrapper.setState({
      items: [{}, {}, {}],
    });
    expect(AllItemWrapper.find(Item)).toHaveLength(3);
  });
});
