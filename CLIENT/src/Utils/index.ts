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

  formatPhoneNumber: (n: string) => {
    if(!n) return "--"
    if (n.length > 10) return "--";
    let format = "(xxx)-xxx xxxx";
    for (let i = 0; i < format.length; i++) {
      format = format.replace("x", n[i]);
    }
    return format;
  },

  getCustomerName: (firstName: string, lastName: string) => {
    if (!firstName && !lastName) return "--";
    if (firstName && !lastName) return firstName;
    if (!firstName && lastName) return lastName;
    if (firstName && lastName) return firstName + " " + lastName;
  },
};

export default utils;
