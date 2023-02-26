const multer = require("multer");
const { acceptFile } = require("./common");

const customerUpload = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/customer");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname.replace(/\\/g, "/")}`);
    },
  });
  const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
      if (file && acceptFile.includes(file.mimetype)) cb(null, true);
      else {
        cb(null, false);
        return cb(new Error(`Only accept jpg, jpeg, png file type`));
      }
    },
    limits: { fileSize: 2 * 1024 * 1024 },
  });
  return upload.single("avatar");
};

module.exports = {
  customerUpload,
};
