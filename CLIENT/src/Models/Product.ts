import { IImage } from "./Image";

export enum ECategory {
    cpu = "cpu",
    main = "mainboard",
    ram = "ram",
    hdd = "hdd",
    ssd = "ssd",
    vga = "vga",
    psu = "psu",
    monitor = "monitor",
    pc = "pc_set",
    laptop = "laptop",
  }
  
  export enum EProducer {
    asus = "asus",
    asrock = "asrock",
    gigabyte = "gigabyte",
    msi = "msi",
    intel = "intel",
    amd = "amd",
    seagate = "seagate",
    western = "western",
    kingston = "kingston",
    corsair = "corsair",
    deepcool = "deepcool",
    coolermaster = "coolermaster",
    dell = "dell",
    hp = "hp",
    samsung = "samsung",
    lg = "lg",
    viewsonic = "viewsonic",
    zg_01 = "zg_01",
    zg_02 = "zg_02",
    zg_03 = "zg_03",
    zg_04 = "zg_04",
  }
  
  export enum EProductStatus {
    default = 1,
    active = 2,
  }
  
  export enum EInventoryStatus {
    inStock = 1,
    outOfStock = 2,
  }

export interface IProduct {
  id?: string;
  name?: string;
  images?: IImage;
  newImages?: IImage;
  initialCapital?: number;
  profitPercent?: number;
  price?: number;
  status?: number;
  warranty?: number;
  inventory?: number;
  inventoryStatus?: number;
  bestSale?: boolean;
  outstand?: boolean;
  categoryId?: string;
  producerId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
