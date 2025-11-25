
-- Phone Validation View: Create a VIEW named vw_valid_phones that returns employees with phone numbers normalized to E.164 format (or marks invalid numbers).

select phone as raw_phone , replace(replace(phone,'-',''),'.','') as e164_phone
from employees;

SELECT 
    phone AS raw_phone,
    CASE 
        WHEN phone LIKE '+91%' THEN
            CONCAT('+', REGEXP_REPLACE(phone, '[^0-9]', ''))
        ELSE
            CONCAT('+91', REGEXP_REPLACE(phone, '[^0-9]', ''))
    END AS e164_phone
FROM employees;
