const EStatus = Object.freeze({
  default: 1,
  active: 2,
});

const EInventoryStatus = Object.freeze({
  inStock: 1,
  outOfStock: 2,
});

const EFilter = Object.freeze({
  cpu: "cpu",
  main: "main",
  ram: "ram",
  hdd: "hdd",
  ssd: "ssd",
  vga: "vga",
  psu: "psu",
  monitor: "monitor",
  pc: "pc",
  laptop: "laptop",
});

module.exports = {
  EStatus,
  EInventoryStatus,
  EFilter
};
