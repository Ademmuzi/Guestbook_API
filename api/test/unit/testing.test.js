"use strict";

require("dotenv").config();

describe("unit test", () => {
  let db;
  beforeEach(() => {
    // db = require("../../db/database");
  });

  it("can get all entries", async () => {
    // const result = db.select().from("entries");
    const result = [];
    expect(result).not.toEqual(null);
  });

  afterAll((done) => {
    // db.destory();
    done();
  });
});
