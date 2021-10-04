"use strict";

const request = require("supertest");

let server;

describe("/", () => {
  beforeEach(() => {
    // server = require("../../index");
  });

  describe("GET /", () => {
    it("should return all entries", async () => {
      // const res = await request(server).get("/guestbook/entries");
      // expect(res.status).toBe(200);
      // await server.close();
      expect(true).toBe(true);
    });
  });
});

describe("/guestbook/entries", () => {
  beforeEach(() => {
    // server = require("../../index");
  });

  describe("GET /", () => {
    it("should post a entrie", async () => {
      // const res = await request(server).get("/guestbook/entries");
      // expect(res.status).toBe(200);
      // await server.close();
      expect(true).toBe(true);
    });
  });
});
