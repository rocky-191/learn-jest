import reducer, { updateUserName } from "store/user/reducer";

describe("reducer", () => {
  describe("测试 reducer", () => {
    describe("updateUserName", () => {
      it("更新用户姓名", () => {
        const currentState = reducer(
          {
            id: "",
            name: "",
            age: 0,
            status: "",
          },
          updateUserName({ name: "rocky" })
        );

        expect(currentState.name).toBe("rocky");
      });
    });
  });
});
