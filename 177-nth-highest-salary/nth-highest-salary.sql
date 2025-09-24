CREATE OR REPLACE FUNCTION NthHighestSalary(N INT)
RETURNS TABLE (Salary INT) AS $$
BEGIN
  -- If n is invalid (<= 0), return no rows
  IF N <= 0 THEN
    RETURN;
  END IF;

  RETURN QUERY
  SELECT DISTINCT e.salary
  FROM Employee e
  ORDER BY e.salary DESC
  LIMIT 1 OFFSET N - 1;
END;
$$ LANGUAGE plpgsql;
