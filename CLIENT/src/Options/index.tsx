import { EGender } from "../Models/Customer";
import {
  ECategory,
  EInventoryStatus,
  EProducer,
  EProductStatus,
} from "../Models/Product";

const options = {
  gender: [
    { label: "Male", value: EGender.male },
    { label: "Female", value: EGender.female },
  ],
  category: [
    { label: "CPU", value: ECategory.cpu },
    { label: "MAINBOARD", value: ECategory.main },
    { label: "RAM", value: ECategory.ram },
    { label: "HDD", value: ECategory.hdd },
    { label: "SSD", value: ECategory.ssd },
    { label: "VGA", value: ECategory.vga },
    { label: "PSU", value: ECategory.psu },
    { label: "MONITOR", value: ECategory.monitor },
    { label: "PC", value: ECategory.pc },
    { label: "LAPTOP", value: ECategory.laptop },
  ],
  cpuProducer: [
    { label: "INTEL", value: EProducer.intel },
    { label: "AMD", value: EProducer.amd },
  ],
  mainProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "ASUS", value: EProducer.asus },
    { label: "MSI", value: EProducer.msi },
    { label: "ASROCK", value: EProducer.asrock },
  ],
  ramProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "CORSAIR", value: EProducer.corsair },
    { label: "KINGSTON", value: EProducer.kingston },
  ],
  ssdProducer: [
    { label: "SAMSUNG", value: EProducer.samsung },
    { label: "KINGSTON", value: EProducer.kingston },
  ],
  hddProducer: [
    { label: "WESTERN", value: EProducer.western },
    { label: "SEAGATE", value: EProducer.seagate },
  ],
  vgaProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "ASUS", value: EProducer.asus },
    { label: "MSI", value: EProducer.msi },
  ],
  psuProducer: [
    { label: "COOLER MASTER", value: EProducer.coolermaster },
    { label: "DEEP COOL", value: EProducer.deepcool },
  ],
  monitorProducer: [
    { label: "LG", value: EProducer.lg },
    { label: "VIEWSONIC", value: EProducer.viewsonic },
    { label: "SAMSUNG", value: EProducer.samsung },
  ],
  laptopProducer: [
    { label: "GIGABYTE", value: EProducer.gigabyte },
    { label: "ASUS", value: EProducer.asus },
    { label: "MSI", value: EProducer.msi },
    { label: "DELL", value: EProducer.dell },
    { label: "HP", value: EProducer.hp },
  ],
  pcProducer: [
    { label: "ZG 01", value: EProducer.zg_01 },
    { label: "ZG 02", value: EProducer.zg_02 },
    { label: "ZG 03", value: EProducer.zg_03 },
    { label: "ZG 04", value: EProducer.zg_04 },
  ],
  productStatus: [
    { label: "Draft", value: EProductStatus.default },
    { label: "Active", value: EProductStatus.active },
  ],
  inventoryStatus: [
    { label: "In stock", value: EInventoryStatus.inStock },
    { label: "Out of stock", value: EInventoryStatus.outOfStock },
  ],
};

export default options;
