const Influx = require('influx');
const os = require('os');
require('dotenv').config();

const INFLUX_HOST = process.env.INFLUX_HOST;
const INFLUX_USER = process.env.INFLUX_USER;
const INFLUX_PASSWORD = process.env.INFLUX_PASSWORD;

const influx = new Influx.InfluxDB({
  host: INFLUX_HOST,
  database: 'express_response_db',
  username: INFLUX_USER,
  password: INFLUX_PASSWORD,
  schema: [
    {
      measurement: 'response_times',
      fields: {
        path: Influx.FieldType.STRING,
        duration: Influx.FieldType.INTEGER
      },
      tags: [
        'host'
      ]
    }
  ]
})

influx.getDatabaseNames()
  .then(names => {
    if (!names.includes('express_response_db')) {
      return influx.createDatabase('express_response_db');
    }
  })
  .then(() => {
    return influx.writePoints([
      {
        measurement: 'response_times',
        tags: { host: os.hostname() },
        fields: { duration: Math.random() * 10000 },
      }
    ])
  })
  .then(() => {
    return influx.query(`
    select * from response_times
    where host = ${Influx.escape.stringLit(os.hostname())}
    order by time desc
    limit 10
    `)
  })
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.error(`Error creating Influx database!`);
    console.error(err);
  })