const viewPdf = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "uploads", filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found!");
  }

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `inline; filename="${path.basename(filePath)}"`
  );

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
};

module.exports = viewPdf;
