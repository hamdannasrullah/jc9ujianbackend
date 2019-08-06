const router = require('express').Router();
const connect = require('../connection/index.js');

// ADD CATEGORY
router.post('/addcategory', (req, res) => {
  let query1 = `INSERT INTO categories SET ?;`;
  let query2 = `SELECT * FROM categories;`;
  let data = req.body;

  connect.query(query1, data, (err, result) => {
    if (err) return res.send(err.sqlMessage);

    connect.query(query2, (err, result) => {
      if (err) return res.send(err);

      res.send(result);
    });
  });
});

// SHOW CATEGORIES
router.get('/category', (req, res) => {
  let query1 = `SELECT * FROM categories;`;

  connect.query(query1, (err, result) => {
    if (err) return res.send(err.sqlMessage);

    res.send(result);
  });
});


// EDIT CATEGORY
router.patch('/editcategory/:categoryid', (req, res) => {
  let query1 = `UPDATE categories SET ? WHERE id = ?;`;
  let query2 = `SELECT * FROM categories;`;
  let data = [req.body, req.params.categoryid];

  connect.query(query1, data, (err, result) => {
    if (err) return res.send(err.sqlMessage);

    var resultq1 = result;

    connect.query(query2, (err, result2) => {
      if (err) return res.send(err.message);

      res.send({ resultq1, result2 });
    });
  });
});

// DELETE CATEGORY
router.delete('/deletecategory/:categoryid', (req, res) => {
  let query1 = `DELETE FROM categories WHERE id = ?;`;
  let query2 = `SELECT * FROM categories;`;
  let id = req.params.categoryid;

  connect.query(query1, id, (err, result) => {
    if (err) return res.send(err.sqlMessage);

    var resultq1 = result;

    connect.query(query2, (err, result2) => {
      if (err) return res.send(err.message);

      res.send({ resultq1, result2 });
    });
  });
});


module.exports = router;