-- Create a procedure to log user login time into a log table.

CREATE TABLE user_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    login_time DATETIME DEFAULT CURRENT_TIMESTAMP
);


DELIMITER //

CREATE PROCEDURE log_user_login(IN p_user_id INT)
BEGIN
    INSERT INTO user_log(user_id, login_time)
    VALUES(p_user_id, NOW());
END //

DELIMITER ;

CALL log_user_login(5);
