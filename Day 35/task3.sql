-- Trim leading/trailing spaces from email and show rows where trimmed ≠ raw.

select email as raw_email,trim(email) as trimmed_email,(email = trim(email)) as equality
from employees;