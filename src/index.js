import 'promise-polyfill';

export function worldAirports(term) {
  return new Promise((resolve, reject) => {
    var options = {
      host: 'airports.p.mashape.com',
      port: 443,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Mashape-Key': 'NyE91agj31mshGnoZv7CfnjEQbNmp1woGA1jsnYy2rssyyUz6y'
      }
    };

    var req = https.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', resolve);
    });

    req.on('error', reject);

    req.write(JSON.stringify({ search: term }));
    req.end();
  });
}
