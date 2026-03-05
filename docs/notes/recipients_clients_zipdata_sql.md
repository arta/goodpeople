# RC Status indicating a client:

PL, PLCanceled, PLNotPd, Active, RPL, RPLNotPd, TempRPL, TempRPLDone,
Intermittent, InactiveNotPd, InactiveMailing, ReturnedMailing, Inactive

# RC clients grouped (and counted), by Zip:
List of unique zips using this query was fed to Gemini 2.5 Pro (experimental)
to generate our zip-centroids-raw data:
```sql
SELECT
  zip as zipCode,
  --COUNT(*) as clientCount,
  MAX(city) as city,
  MAX(state) as state
FROM
  recipients
WHERE
  status IN ('PL', 'PLCanceled', 'PLNotPd', 'Active', 'RPL', 'RPLNotPd',
             'TempRPL', 'TempRPLDone', 'Intermittent', 'InactiveNotPd',
             'InactiveMailing', 'ReturnedMailing', 'Inactive')
GROUP BY
  zipCode
ORDER BY
  zipCode ASC;
```

# RC clients listed for data cleaning:
```sql
SELECT
  id, status, city, state, zip
FROM
  recipients
WHERE
  status IN ('PL', 'PLCanceled', 'PLNotPd', 'Active', 'RPL', 'RPLNotPd',
             'TempRPL', 'TempRPLDone', 'Intermittent', 'InactiveNotPd',
             'InactiveMailing', 'ReturnedMailing', 'Inactive')
ORDER BY
  state, city, zip;
```
