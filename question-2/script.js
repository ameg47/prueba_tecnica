/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */

const args = process.argv.slice(-1);
console.log(`Running question #2 with args ${args}`)

const fs = require('fs');
const path = require('path');
const { parse } = require('fast-csv');

let rows = {};

fs.createReadStream(path.resolve(__dirname, args.toString()))
  .pipe(parse({headers : true}))
  .on('data', row => {
      if(rows[row.entityId]){
        if(row.eventType==="impression"){
            rows[row.entityId].impressions=rows[row.entityId].impressions+1
            rows[row.entityId].ctr=rows[row.entityId].clicks/rows[row.entityId].impressions
        }
        else{
            rows[row.entityId].clicks=rows[row.entityId].clicks+1
            rows[row.entityId].ctr=rows[row.entityId].clicks/rows[row.entityId].impressions
            }
        }
      
      else{
        if(row.eventType==="impression"){
            rows[row.entityId]={
                productId:row.entityId,
                clicks:0,
                impressions:1,
                ctr:0,
            }
        }
        else{
            rows[row.entityId]={
                productId:row.entityId,
                clicks:1,
                impressions:0,
                ctr:0,
            }
        }
      }
      
  })
  .on('end', () => {
      function extractAsCSV() {
        const header = ["productId, clicks, impressions, ctr"];
        const rows1 = []
        for(let key in rows){
            rows1.push(`${rows[key].productId}, ${rows[key].clicks}, ${rows[key].impressions}, ${rows[key].ctr}`)
        }
        
        return header.concat(rows1).join("\n");
      }

      const filename = 'output.csv';

      fs.writeFile(filename, extractAsCSV(), err => {
        if (err) {
          console.log('Error writing to csv file', err);
        } else {
          console.log(`saved as ${filename}`);
        }
      });
  });
