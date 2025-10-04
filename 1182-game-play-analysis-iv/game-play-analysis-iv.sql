-- Write your PostgreSQL query statement below
SELECT 
    ROUND(
        COUNT(DISTINCT a1.player_id)::decimal / COUNT(DISTINCT a.player_id),
        2
    ) AS fraction
FROM Activity a
LEFT JOIN Activity a1
    ON a.player_id = a1.player_id
    AND a1.event_date = a.event_date + INTERVAL '1 day'
WHERE a.event_date = (
    SELECT MIN(event_date)
    FROM Activity
    WHERE player_id = a.player_id
);
