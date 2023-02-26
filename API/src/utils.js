const bcryptjs = require("bcryptjs");
const dotenv = require("dotenv");
const fs = require("fs");
const { promisify } = require("util");
const { ESortBy } = require("./enum/base.enum");

dotenv.config();

const utils = {
  uuid: () => {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return `${s4()}-${s4()}${s4()}-${s4()}${s4()}-${s4()}`;
  },

  filterAndSort: (list, query, fields) => {
    if (!list && !query && !fields) return;

    const { filter, searchText, sortBy } = query;
    const { filterField, searchField, createdField, priceField } = fields;

    let newList = [];

    // FILTER AND SEARCH
    if (filter && filter !== null) {
      if (searchText) {
        newList = list.filter(
          (i) =>
            i[filterField] === filter &&
            i[searchField].toLowerCase().includes(searchText).toLowerCase()
        );
      } else {
        newList = list.filter((i) => i[filterField] === filter);
      }
    } else if (searchText) {
      newList = list.filter((i) =>
        i[searchField].toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      newList = list;
    }

    // SORT
    if (sortBy) {
      switch (sortBy) {
        case ESortBy.newest: {
          newList.sort((a, b) => {
            new Date(b[createdField] ?? "").getTime() -
              new Date(a[createdField] ?? "").getTime();
          });
          break;
        }
        case ESortBy.oldest: {
          newList.sort((a, b) => {
            new Date(a[createdField] ?? "").getTime() -
              new Date(b[createdField] ?? "").getTime();
          });
          break;
        }
        case ESortBy.priceGoUp: {
          newList.sort((a, b) => {
            if (a[priceField] < b[priceField]) return -1;
            if (a[priceField] > b[priceField]) return 1;
            return 0;
          });
          break;
        }
        case ESortBy.priceGoDown: {
          newList.sort((a, b) => {
            if (a[priceField] < b[priceField]) return 1;
            if (a[priceField] > b[priceField]) return -1;
            return 0;
          });
          break;
        }
      }
    }

    return newList;
  },

  paging: (models, p, l) => {
    if (models && Array.isArray(models)) {
      const page = Number(p);
      const limit = Number(l);

      const total = models.length;
      const start = (page - 1) * limit;
      const end = start + limit;
      const list = models.slice(start, end);

      return {
        total,
        page,
        limit,
        list,
      };
    }
    return;
  },

  hashPassword: (password) => {
    if (!password) return "";
    const salt = bcryptjs.genSaltSync(10);
    const hashPass = bcryptjs.hashSync(password, salt);

    return hashPass;
  },

  getFullName: (lastName, firstName) => {
    if (!lastName && !firstName) return "";
    if (lastName && !firstName) return lastName;
    if (!lastName && firstName) return firstName;
    if (lastName && firstName) return lastName + firstName;
  },

  getImage: (file, type, defaultImage, defaultImages) => {
    if (!file) return null;
    let image = null;
    let images = null;

    switch (type) {
      case "single": {
        if (file) {
          image = {
            id: utils.uuid(),
            path: `${process.env.DOMAIN}/${file.path}`,
            size: file.size,
          };
        } else {
          image = defaultImage;
        }
        return image;
      }
      case "multiple": {
        if (file && Array.isArray(file) && file.length) {
          const newFiles = file.map((f) => ({
            id: utils.uuid(),
            path: `${process.env.DOMAIN}/${f.path}`,
            size: f.size,
          }));

          if (defaultImages) {
            if (newFiles.length && !defaultImages.length) {
              images = newFiles;
            } else if (!newFiles.length && defaultImages.length) {
              images = JSON.parse(defaultImages);
            } else if (newFiles.length && defaultImages.length) {
              images = newFiles.concat(JSON.parse(defaultImages));
            }
          } else {
            images = newFiles;
          }
        }
        return images;
      }
    }
  },

  calRatePoints: (rates) => {
    if (!rates.length) return 0;

    let points = 0;

    const oneRates = rates.filter((r) => r.point === 1);
    const twoRates = rates.filter((r) => r.point === 2);
    const threeRates = rates.filter((r) => r.point === 3);
    const fourRates = rates.filter((r) => r.point === 4);
    const fiveRates = rates.filter((r) => r.point === 5);

    const totalPoint =
      oneRates.length * 1 +
      twoRates.length * 2 +
      threeRates.length * 3 +
      fourRates.length * 4 +
      fiveRates.length * 5;

    const totalRes =
      oneRates.length +
      twoRates.length +
      threeRates.length +
      fourRates.length +
      fiveRates.length;

    points = Math.ceil(totalPoint / totalRes);
    return points
  },

  destroyFile: async (path) => {
    if (path) {
      const unlinkAsync = promisify(fs.unlink);
      await unlinkAsync(path);
    }
  },
};

module.exports = utils;
