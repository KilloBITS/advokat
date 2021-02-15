const clc = require("cli-color");
const path = require("path");
const fs = require("fs");
const LoadDB = require('./beans/DB/db');

const error = clc.red.bold;
const warn = clc.yellow;
const notice = clc.blue;

const array_table = [
  "about",
  "blog",
  "config",
  "contacts",
  "design",
  "divorce",
  "head",
  "menu",
  "news",
  "services",
  "socials",
  "statistic",
  "users",
];

class SystemData {
  async diff(a1, a2) {
    return a1
      .filter((i) => !a2.includes(i))
      .concat(a2.filter((i) => !a1.includes(i)));
  }
  async getDatabase() {
    let db = await LoadDB();
    let collections = await db.listCollections().toArray();
    var server = await new Promise(async (resolve, reject) => {
      console.log(notice("Проверка таблиц базы данных..."));
      let parses = collections.map((t) => {
        return t.name;
      });
      var res = array_table.filter((n) => parses.indexOf(n) === -1);
      //Все таблицы на месте
      if (res.length === 0) {
        console.log(notice("Все таблицы на месте!"));
      } else {
        res.map((err) =>
          console.log(warn(`WARN - Не хватает таблицы: ${err}`))
        );
        console.log(notice(`Создаем нужные таблицы...`));

        for (let r in res) {
          let cd = await db.createCollection(res[r]);
          console.log(notice(`Таблица - ${res[r]}, успешно создана!`));
          const pathFile = path.join(__dirname, `../other/DB/${res[r]}.json`);
          if (fs.existsSync(pathFile)) {
            console.log(warn(`Импортируем стандартные данные...`));
            const file = JSON.parse(fs.readFileSync(pathFile, "utf8"));
            for (let j in file) {
              delete file[j]._id;
            }
            db.collection(res[r]).insertMany(file);
            console.log(warn(`Данные - ${res[r]},успешно импортированы :)`));
          } else {
            console.log(warn(`Нет данных для импорта!`));
          }
        }
      }
      resolve({
        status: true,
      });
    });

    return server;
  }
}

module.exports = SystemData;
