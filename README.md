# PulsdCodeChallenge
## Submitted by: Anuj Pant
### anuj.pant41@gmail.com

I used a template that was created during my bootcamp studies. The project has following features/assumptions:

(1) Uses Google oAuth however there are no keys in my development environment and so cannot login via Google as currently written
<br />
(2) Requires a 'anujPulsd' table; table name can be changed in "./server/db/db/js"
(3) Can only add to database after logged in
(4) Database is agnostic of the user entering the event
(5) For cron job, I used 'node-cron' library
    - Refer to "./server/index.js" row 28; current scheduled to repeat every hour
    - This allows me to call cronFunc which uses closure to look up new rows of events in SQL table
        - Current issues with cronFunc explained in 'cron.js'