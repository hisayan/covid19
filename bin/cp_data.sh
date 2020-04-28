#!/bin/sh

# Copy all json files that the scripts generate into the `data` dir.
# FROM covid19_nagano_csv_to_json
curl -o data/data.json https://raw.githubusercontent.com/wataruoguchi/covid19_nagano_csv_to_json/master/src/.json/data.json
curl -o data/patients.json https://raw.githubusercontent.com/wataruoguchi/covid19_nagano_csv_to_json/master/src/.json/patients.json
curl -o data/test_count.json https://raw.githubusercontent.com/wataruoguchi/covid19_nagano_csv_to_json/master/src/.json/test_count.json
curl -o data/call_center.json https://raw.githubusercontent.com/wataruoguchi/covid19_nagano_csv_to_json/master/src/.json/call_center.json

# FROM covid19_nagano_scraper
curl -o data/news.json https://raw.githubusercontent.com/wataruoguchi/covid19_nagano_scraper/master/src/.json/news.json