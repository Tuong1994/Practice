const utils = {
  uuid: () => {
    const s4 = () =>
      Math.floor((1 + Math.random()) * 0x100000)
        .toString(16)
        .substring(1);
    return `${s4()}-${s4()}-${s4()}${s4()}-${s4()}-${s4()}`;
  },
  isAdd: (pathname: string) => {
    if (pathname.includes("add")) return true;
    return false;
  },
};

export default utils;
