REM   Script: ADBMS_LAB3
REM   PRAC

DECLARE 
    TYPE Employee_Record IS RECORD ( 
        emp_id   NUMBER, 
        emp_name VARCHAR2(50), 
        salary   NUMBER 
    ); 
 
    emp Employee_Record; 
BEGIN 
     
    emp.emp_id := 1001; 
    emp.emp_name := 'Arya Bhatt'; 
    emp.salary := 50000; 
 
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || emp.emp_id); 
    DBMS_OUTPUT.PUT_LINE('Employee Name: ' || emp.emp_name); 
    DBMS_OUTPUT.PUT_LINE('Employee Salary: ' || emp.salary); 
END; 
/

DECLARE 
    total_tables NUMBER; 
BEGIN 
     
    SELECT COUNT(*) INTO total_tables 
    FROM all_tables; 
 
    DBMS_OUTPUT.PUT_LINE('Total Number of Tables in the System: ' || total_tables); 
END; 
/

DECLARE 
    total_user_tables NUMBER; 
BEGIN 
   
    SELECT COUNT(*) INTO total_user_tables 
    FROM user_tables; 
 
    DBMS_OUTPUT.PUT_LINE('Total Number of User-Created Tables: ' || total_user_tables); 
END; 
/

CREATE TABLE Student ( 
    st_id   NUMBER, 
    st_name VARCHAR2(50), 
    sub1    NUMBER, 
    sub2    NUMBER, 
    sub3    NUMBER, 
    Total   NUMBER 
);

DECLARE 
     
    TYPE Student_Type IS TABLE OF Student%ROWTYPE; 
    student_record Student%ROWTYPE; 
 
    v_sub1 Student.sub1%TYPE; 
    v_sub2 Student.sub2%TYPE; 
    v_sub3 Student.sub3%TYPE; 
BEGIN 
    
    student_record.st_id := 101; 
    student_record.st_name := 'ABC'; 
    student_record.sub1 := 85; 
    student_record.sub2 := 90; 
    student_record.sub3 := 88; 
 
    student_record.Total := student_record.sub1 + student_record.sub2 + student_record.sub3; 
 
    DBMS_OUTPUT.PUT_LINE('Student ID: ' || student_record.st_id); 
    DBMS_OUTPUT.PUT_LINE('Student Name: ' || student_record.st_name); 
    DBMS_OUTPUT.PUT_LINE('Total Marks: ' || student_record.Total); 
END; 
/

CREATE TABLE Employee ( 
    emp_id    NUMBER, 
    emp_name  VARCHAR2(50), 
    TA        NUMBER, 
    DA        NUMBER, 
    HRA       NUMBER, 
    Gross     NUMBER, 
    bonus     NUMBER 
);

DECLARE 
  
    TYPE Employee_Type IS TABLE OF Employee%ROWTYPE; 
    employee_record Employee%ROWTYPE; 
 
    v_TA Employee.TA%TYPE; 
    v_DA Employee.DA%TYPE; 
    v_HRA Employee.HRA%TYPE; 
BEGIN 
 
    employee_record.emp_id := 1001; 
    employee_record.emp_name := 'Arya Bhatt'; 
    employee_record.TA := 5000; 
    employee_record.DA := 4000; 
    employee_record.HRA := 3000; 
 
    employee_record.Gross := employee_record.TA + employee_record.DA + employee_record.HRA; 
 
    employee_record.bonus := 0.10 * employee_record.Gross; 
 
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || employee_record.emp_id); 
    DBMS_OUTPUT.PUT_LINE('Employee Name: ' || employee_record.emp_name); 
    DBMS_OUTPUT.PUT_LINE('Gross Salary: ' || employee_record.Gross); 
    DBMS_OUTPUT.PUT_LINE('Bonus: ' || employee_record.bonus); 
END; 
/

