-- Replace all hyphens in phone with nothing using REPLACE().

select phone as raw_phone , replace(phone,'-','') as replaced_phone from employees;