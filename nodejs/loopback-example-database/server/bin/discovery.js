const loopback = require('loopback');
const promisify = require('util').promisify;
const fs = require('fs');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdirp = promisify(require('mkdirp'));

const DATASOURCE_NAME = 'gwpd';
const dataSourceConfig = require('../datasources.json');
const db = new loopback.DataSource(dataSourceConfig[DATASOURCE_NAME]);

discover().then(
  success => process.exit(),
  error => { console.error('UNHANDLED ERROR:\n', error); process.exit(1); },
);

async function discover() {
  // It's important to pass the same "options" object to all calls
  // of dataSource.discoverSchemas(), it allows the method to cache
  // discovered related models
  const options = {relations: true};

  // Discover models and relations
  const tableNames =[
    "disinfection",
    "genome_type",
    "gram_stain_group",
    "organism",
    "organism_common",
    "organism_family",
    "organism_genus",
    "organism_species",
    "organism_subfamily",
    "organism_type"
  ]

  for ( i in tableNames ) {
    var tableName = tableNames[ i ]
    const organismSchema = await db.discoverSchemas(tableName, options);

    // Create model definition files
    await mkdirp('../common/models');
    await writeFile(
      `../common/models/${tableName}.json`,
      JSON.stringify(organismSchema[`heroku_b2cf77a96af7a57.${tableName}`], null, 2)
    );
  }


  // Expose models via REST API
  const configJson = await readFile('../model-config.json', 'utf-8');
  console.log('MODEL CONFIG', configJson);
  const config = JSON.parse(configJson);
  config.Organism = {dataSource: DATASOURCE_NAME, public: true};
  await writeFile(
    '../model-config.json',
    JSON.stringify(config, null, 2)
  );
}