require('dotenv').config();
const cassandra = require('cassandra-driver');

const CASSANDRA_HOST = process.env.CASSANDRA_HOST;
const CASSANDRA_USER = process.env.CASSANDRA_USER;
const CASSANDRA_PASSWORD = process.env.CASSANDRA_PASSWORD;

var authProvider = new cassandra.auth.PlainTextAuthProvider(CASSANDRA_USER, CASSANDRA_PASSWORD);

const client = new cassandra.Client({ 
  authProvider,
  contactPoints: [CASSANDRA_HOST], 
  localDataCenter: 'datacenter1', 
  keyspace: 'system' });





const query = 'select * from system_schema.keyspaces;';
client.execute(query)
  .then(result => console.log(result.rows.map(r => `${r.keyspace_name}`).join('\n')))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })