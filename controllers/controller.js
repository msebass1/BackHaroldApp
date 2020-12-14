const express = require('express');
const XLSX = require('xlsx');
const fs = require('fs'); 

const app = express();

function wipefiles(filename){
  fs.unlink(filename, (err)=>{console.log(err)});
}

app.get('/:type/:id', (req,res) => {
  const filename = `./docs/${req.params.type}.xlsx`;
  fs.open(`./docs/${req.params.id}.xlsx`, 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
    let workbook = XLSX.readFile(filename);
    let first_sheet_name = workbook.SheetNames[0];
    let worksheet = workbook.Sheets[first_sheet_name];
    worksheet['L1'].v = String(req.params.id);
    console.log(err)
    XLSX.writeFile(workbook, `./docs/${req.params.id}.xlsx`);

    res.download(`./docs/${req.params.id}.xlsx`);

    setTimeout(()=>wipefiles(`./docs/${req.params.id}.xlsx`), 2000);
  });
})

module.exports = app;
