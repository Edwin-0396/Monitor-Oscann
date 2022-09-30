/// cron request
const cron = require("node-cron");
const { http, signs } = require("./util");
const Model = require('../db/models/model');

class Main {
  static async getHoroscope() {
    const todayHoroscope = [];
    for (const sign of signs) {
      const { horoscope } = (await http.get("/" + sign)).data;
      todayHoroscope.push({
        sign,
        horoscope
      });
    }

    const name = new Date()
      .toDateString()
      .split(" ")
      .join("_");

    Model.collection.insertOne({todayHoroscope})
  }
}

cron.schedule("* * * * * *", () => {
  Main.getHoroscope();
});
