var replace = require('replace-in-file');
var buildVersion = formatDate(new Date());
const initialoptions = {
  files: 'package.json',
  from: /0.0.0/g,
  to: buildVersion,
  allowEmptyPaths: false,
};

replace.sync(initialoptions);

function formatDate(date) {
  var d = new Date(date),
      month = "" + (d.getMonth() +1),
      day = "" + d.getDate(),
      year = "" + d.getFullYear(),
      hour = "" + d.getHours(),
      minutes = "" + d.getMinutes(),
      seconds = "" + d.getSeconds();
  
  if (month.length < 2)
      month = '0' + month;
  if (day.length < 2)
      day = '0' + day;
  if (hour.length < 2)
      hour = '0' + hour;
  if (minutes.length < 2)
      minutes = '0' + minutes;
  if (seconds.length < 2)
      seconds = '0' + seconds;
  
  var dateVersion = [year, month, day].join('');
  var timeVersion = [hour, minutes, seconds].join('');
  
  return [dateVersion, timeVersion, 1].join('.');
  }
