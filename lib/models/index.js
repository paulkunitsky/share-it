const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path').posix
const schemasDir = path.join(__dirname, './schemas')

/**
 * require and register every direct child
 * of ./schemas directory as mongoose model
 * 
 * for example:
 *  1. ./schemas/UserSchema
 *  2. becomes User mongoose model
 */
const models = {}

fs.readdirSync(schemasDir).forEach(schemaName => {
  const schemaDotPath = `./schemas/${schemaName}`

  const schema = require(schemaDotPath)
  const modelName = schemaName.replace('Schema', '')

  const model = mongoose.model(modelName, schema)
  models[modelName] = model
})

module.exports = models
