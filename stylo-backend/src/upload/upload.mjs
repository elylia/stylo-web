import multer from "multer";
import { Router } from "express";
import { mkdir, rm } from "fs/promises";

const router = Router();

const storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    if (!req.uniqueSuffix) {
      req.uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      req.dircreation = mkdir("corpus" + "/" + req.uniqueSuffix + "/", {
        recursive: true,
      });
    }
    await req.dircreation;
    cb(null, "corpus" + "/" + req.uniqueSuffix + "/");
  },

  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.array("file", 400), (req, res) => {
  console.log(req.files);
  res.status(200).json({
    message: "File uploaded successfully",
    suffix: req.files[0].destination,
  });
});

router.delete(`/corpus/:uniqueSuffix/`, async (req, res) => {
  const { uniqueSuffix } = req.params;
  const filePath = `corpus/${uniqueSuffix}/`;
  try {
    await rm(filePath, { recursive: true });

    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    console.error("Error deleting file:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the file" });
  }
});

export default router;
