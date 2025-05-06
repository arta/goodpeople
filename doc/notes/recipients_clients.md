# RC Status indicating a client:

PL, PLCanceled, PLNotPd, Active, RPL, RPLNotPd, TempRPL, TempRPLDone,
Intermittent, InactiveNotPd, InactiveMailing, ReturnedMailing, Inactive

# RC clients grouped, and counted, by Zip:

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
