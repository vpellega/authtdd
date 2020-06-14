const { User } = require("../../src/app/models");

describe("Authenticate", () => {
  it("should sum two numbers", async (done) => {
    const user = await User.create({
      name: "Victor",
      email: "victor.pellegrino@outlook.com",
      password_hash: "123456",
    });
    console.log(user);

    expect(user.email).toBe("victor.pellegrino@outlook.com");
    done();
  });
});
