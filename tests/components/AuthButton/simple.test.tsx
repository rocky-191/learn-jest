import * as React from "react";
import { render, screen } from "@testing-library/react";
import AuthButton from "components/AuthButton";

describe("AuthButton", () => {
  it("正常展示", () => {
    const btnText = "登录";
    render(<AuthButton>{btnText}</AuthButton>);

    expect(screen.getByText(btnText)).toBeDefined();
    expect(screen.getByText(btnText)).toBeInTheDocument();
  });
});
