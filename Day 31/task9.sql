
ALTER TABLE lessons
ADD CONSTRAINT lesson_no foreign key (lesson_no)
references assignments(lesson_no)
on delete cascade;