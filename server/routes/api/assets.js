var router = require('express').Router()
const Asset = require('../../models/asset').Asset;

// API for /api/assets (assets collection requests)
router.get('/assets', function(req, res) {
  const querystring = (req.query.idLegacy) ? {idLegacy: req.query.idLegacy} : {}
  query = Asset.find(querystring)
  if (req.query.limit) {
    query.limit(req.query.limit)
  }
  if (req.query.sort) {
    query.sort(req.query.sort)
  }
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, assets) {
      if (err)
          return res.json({
              error: "Error fetching assets",
              error: err
          });
      else if (!assets)
          return res.json({
              error: "Error finding assets",
              error: err
          });
      res.send(assets);
  })
})

router.post('/assets', function(req, res) {
    var asset = new Asset(req.body)

    asset.save(function(err, result) {
        if (err)
            return res.json({
                error: err
            });
        res.json({
            message: "Successfully added asset",
            asset: result
        })
    })
})

// Asset upsert on the basis of idLegacy in query
router.put('/assets', function(req, res) {
    // TODO support update as well as upsert
        // update: :_id present, define query and options accordingly
        // upsert: no :_id present, but :idLegacy present, define query and options accordingly
    var query = {
        'idLegacy': req.body.idLegacy
    }
    Asset.findOneAndUpdate(query, req.body, {upsert: true, new: true},
      function(err, asset) {
        if (err)
            return res.json({
                error: "Error fetching asset para upsert",
                error: err
            });
        else if (!asset)
            return res.json({
                error: "Error finding asset para upsert",
                error: err
            });
        res.json({
            message: "Successfully upserted asset",
            asset: asset
        })
    })
})

// CAUTION will delete all assets
router.delete('/assets', function(req, res) {
    Asset.remove({}, function(err) {
        if (err)
            return res.json({
                error: "Error deleting all assets",
                error: err
            });
        res.json({info: 'All assets removed successfully'})
    })
})

// API for /api/asset/:_id - specific asset with param _id
router.get('/assets/:_id', function(req, res) {
  query = Asset.findOne({_id: req.params._id})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, asset) {
        if (err)
            return res.json({
                error: "Error fetching assets",
                error: err
            });
        else if (!asset)
            return res.json({
                error: "Error finding assets",
                error: err
            });
        res.send(asset);
    })
})

router.delete('/assets/:_id', function(req, res) {
    Asset.findByIdAndRemove({
        _id: req.params._id
    }, function(err) {
        if (err)
            return res.json({
                error: "Error deleting asset",
                error: err
            });
        res.json({info: 'asset removed successfully'})
    })
})

module.exports = router
