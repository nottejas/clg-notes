REM   Script: ADBMS_LAB2
REM   PRAC

DECLARE 
    counter NUMBER := 1; 
BEGIN 
    FOR counter IN 1..5 LOOP 
        DECLARE 
            square NUMBER; 
        BEGIN 
            square := counter * counter; 
            DBMS_OUTPUT.PUT_LINE('Square of ' || counter || ' is ' || square); 
            IF square > 10 THEN 
                DBMS_OUTPUT.PUT_LINE('Square exceeds 10'); 
            END IF; 
        END; 
    END LOOP; 
END; 
/

DECLARE 
    first_name VARCHAR2(50) := 'Arya'; 
    age NUMBER := 21; 
    joining_date DATE := TO_DATE('2025-01-27', 'YYYY-MM-DD'); 
BEGIN 
    DBMS_OUTPUT.PUT_LINE('First Name: ' || first_name); 
    DBMS_OUTPUT.PUT_LINE('Age: ' || age); 
    DBMS_OUTPUT.PUT_LINE('Joining Date: ' || joining_date); 
END; 
/

DECLARE 
    counter NUMBER; 
BEGIN 
    FOR counter IN 1..10 LOOP 
        DBMS_OUTPUT.PUT_LINE(counter * 5); 
    END LOOP; 
END; 
/

DECLARE 
    num NUMBER := 5;  
    factorial NUMBER := 1; 
BEGIN 
    WHILE num > 0 LOOP 
        factorial := factorial * num; 
        num := num - 1; 
    END LOOP; 
    DBMS_OUTPUT.PUT_LINE('Factorial is: ' || factorial); 
END; 
/

DECLARE 
    num NUMBER := 7; 
BEGIN 
    IF num > 0 THEN 
        DBMS_OUTPUT.PUT_LINE('The number is positive'); 
        IF MOD(num, 2) = 0 THEN 
            DBMS_OUTPUT.PUT_LINE('The number is even'); 
        ELSE 
            DBMS_OUTPUT.PUT_LINE('The number is odd'); 
        END IF; 
    ELSIF num < 0 THEN 
        DBMS_OUTPUT.PUT_LINE('The number is negative'); 
    ELSE 
        DBMS_OUTPUT.PUT_LINE('The number is zero'); 
    END IF; 
END; 
/

DECLARE 
    first_name VARCHAR2(50) := 'Arya'; 
    last_name VARCHAR2(50) := 'Bhatt';  
    full_name VARCHAR2(100); 
BEGIN 
    full_name := first_name || ' ' || last_name; 
    DBMS_OUTPUT.PUT_LINE('Full Name: ' || full_name); 
END; 
/

DECLARE 
    num NUMBER := 123;  
    sum_of_digits NUMBER := 0; 
BEGIN 
    WHILE num > 0 LOOP 
        sum_of_digits := sum_of_digits + MOD(num, 10); 
        num := FLOOR(num / 10); 
    END LOOP; 
    DBMS_OUTPUT.PUT_LINE('Sum of digits: ' || sum_of_digits); 
END; 
/

DECLARE 
    counter NUMBER := 1; 
BEGIN 
    FOR counter IN 1..5 LOOP 
        DECLARE 
            square NUMBER; 
        BEGIN 
            square := counter * counter; 
            DBMS_OUTPUT.PUT_LINE('Square of ' || counter || ' is ' || square); 
            IF square > 10 THEN 
                DBMS_OUTPUT.PUT_LINE('Square exceeds 10'); 
            END IF; 
        END; 
    END LOOP; 
END; 
/

DECLARE 
    first_name VARCHAR2(50) := 'Arya'; 
    age NUMBER := 21;
    joining_date DATE := TO_DATE('2025-01-27', 'YYYY-MM-DD'); 
BEGIN 
    DBMS_OUTPUT.PUT_LINE('First Name: ' || first_name); 
    DBMS_OUTPUT.PUT_LINE('Age: ' || age); 
    DBMS_OUTPUT.PUT_LINE('Joining Date: ' || joining_date); 
END; 
/

DECLARE 
    counter NUMBER; 
BEGIN 
    FOR counter IN 1..10 LOOP 
        DBMS_OUTPUT.PUT_LINE(counter * 5); 
    END LOOP; 
END; 
/

DECLARE 
    num NUMBER := 5;  
    factorial NUMBER := 1; 
BEGIN 
    WHILE num > 0 LOOP 
        factorial := factorial * num; 
        num := num - 1; 
    END LOOP; 
    DBMS_OUTPUT.PUT_LINE('Factorial is: ' || factorial); 
END; 
/

DECLARE 
    num NUMBER := 7; 
BEGIN 
    IF num > 0 THEN 
        DBMS_OUTPUT.PUT_LINE('The number is positive'); 
        IF MOD(num, 2) = 0 THEN 
            DBMS_OUTPUT.PUT_LINE('The number is even'); 
        ELSE 
            DBMS_OUTPUT.PUT_LINE('The number is odd'); 
        END IF; 
    ELSIF num < 0 THEN 
        DBMS_OUTPUT.PUT_LINE('The number is negative'); 
    ELSE 
        DBMS_OUTPUT.PUT_LINE('The number is zero'); 
    END IF; 
END; 
/

DECLARE 
    first_name VARCHAR2(50) := 'Arya'; 
    last_name VARCHAR2(50) := 'Bhatt';  
    full_name VARCHAR2(100); 
BEGIN 
    full_name := first_name || ' ' || last_name; 
    DBMS_OUTPUT.PUT_LINE('Full Name: ' || full_name); 
END; 
/

DECLARE 
    num NUMBER := 123;  
    sum_of_digits NUMBER := 0; 
BEGIN 
    WHILE num > 0 LOOP 
        sum_of_digits := sum_of_digits + MOD(num, 10); 
        num := FLOOR(num / 10); 
    END LOOP; 
    DBMS_OUTPUT.PUT_LINE('Sum of digits: ' || sum_of_digits); 
END; 
/

