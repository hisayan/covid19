#!/bin/sh

# Copy all json files that the scripts generate into the `data` dir.
# FROM covid19_nagano_csv_to_json
curl -o data/data.json https://raw.githubusercontent.com/wataruoguchi/covid19_nagano_csv_to_json/master/src/.json/data.json
curl -o data/soudan.json https://raw.githubusercontent.com/wataruoguchi/covid19_nagano_csv_to_json/master/src/.json/soudan.json
curl -o data/kensa.json https://raw.githubusercontent.com/wataruoguchi/covid19_nagano_csv_to_json/master/src/.json/kensa.json
curl -o data/hasseijoukyou.json https://raw.githubusercontent.com/wataruoguchi/covid19_nagano_csv_to_json/master/src/.json/hasseijoukyou.json

# FROM covid19_nagano_scraper
curl -o data/news.json https://raw.githubusercontent.com/wataruoguchi/covid19_nagano_scraper/master/src/.json/news.json