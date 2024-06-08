function opentime ( req,req,time ) {
    let currentDate = new Date();
    if (
      currentDate.getHours() > 9 &&
      currentDate.getHours() < 21 &&
      currentDate.getDay() > 0 &&
      currentDate.getDay() < 6
    ) {
      next();
    } else {
      res.sendFile(path.join(__dirname, "../", "pages", "open.html"));
    }
  }
  
  module.exports = { opentime };
