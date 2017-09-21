var router = require('express').Router()
const Writer = require('../../models/writer').Writer;

// API for /api/writers (writers collection requests)
router.get('/writers', function(req, res) {
  const querystring = (req.query.idLegacy) ? {idLegacy: req.query.idLegacy} : {}
  query = Writer.find(querystring)
  if (req.query.limit) {
    query.limit(req.query.limit)
  }
  if (req.query.sort) {
    query.sort(req.query.sort)
  }
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, writers) {
      if (err)
          return res.json({
              error: "Error fetching writers",
              error: err
          });
      else if (!writers)
          return res.json({
              error: "Error finding writers",
              error: err
          });
      res.send(writers);
  })
})

router.post('/writers', function(req, res) {
    //console.log('adding new writer: ' + req.body.title)
    var writer = new Writer(req.body)

    writer.save(function(err, result) {
        if (err)
            return res.json({
                error: err
            });
        res.json({
            message: "Successfully added writer",
            writer: result
        })
    })
})

// Writer upsert on the basis of idLegacy in query
router.put('/writers', function(req, res) {
    // TODO support update as well as upsert
        // update: :_id present, define query and options accordingly
        // upsert: no :_id present, but :idLegacy present, define query and options accordingly
    var query = {
        'idLegacy': req.body.idLegacy
    }
    Writer.findOneAndUpdate(query, req.body, {upsert: true, new: true},
      function(err, writer) {
        if (err)
            return res.json({
                error: "Error fetching writer para upsert",
                error: err
            });
        else if (!writer)
            return res.json({
                error: "Error finding writer para upsert",
                error: err
            });
        res.json({
            message: "Successfully upserted writer",
            writer: writer
        })
    })
})

// CAUTION will delete all writers
router.delete('/writers', function(req, res) {
    Writer.remove({}, function(err) {
        if (err)
            return res.json({
                error: "Error deleting all writers",
                error: err
            });
        res.json({info: 'All writers removed successfully'})
    })
})

// API for /api/writer/:_id - specific writer with param _id
router.get('/writers/:_id', function(req, res) {
  query = Writer.findOne({_id: req.params._id})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, writer) {
        if (err)
            return res.json({
                error: "Error fetching writers",
                error: err
            });
        else if (!writer)
            return res.json({
                error: "Error finding writers",
                error: err
            });
        res.send(writer);
    })
})

router.delete('/writers/:_id', function(req, res) {
    Writer.findByIdAndRemove({
        _id: req.params._id
    }, function(err) {
        if (err)
            return res.json({
                error: "Error deleting writer",
                error: err
            });
        res.json({info: 'writer removed successfully'})
    })
})


module.exports = router
