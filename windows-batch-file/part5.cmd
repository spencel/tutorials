@ECHO OFF & REM turn off automatic printing to console.
SETLOCAL ENABLEEXTENSIONS & REM SET local scope--don't preserve overwritten global variables--and turn on processor extenions
REM the following are user defined "constants" but are mutable, increment by power of 2 for bitwise or multiple error numbers
SET /A ERROR_HELP_SCREEN=1
SET /A ERROR_FILE_NOT_FOUND=2
SET /A ERROR_FILE_READ_ONLY=4
SET /A ERROR_UNKNOWN=8
REM End boiler code

REM Start main program

REM Check if a file exists:
IF EXIST "part5-iexist.txt" ECHO found & REM if a file exists then print "found"
IF NOT EXIST "part5-idontexist.txt" ECHO not found & REM if a file doesn't exist then print "not found"

REM Better code than above:
IF EXIST "part5-iexist.txt" (
	ECHO found
) ELSE (
	ECHO not found
)

REM If variable is not set:
IF "%var%"=="" (
	SET var=default value
	REM var hasn't been assigned to the value yet? compiling error?
	SET var2=test
	ECHO. & ECHO.var2 = %var2% 
)
ECHO. & ECHO.var was not set, var now set to: %var%

REM Or:
IF NOT DEFINED var ( 
	SET var=default
) ELSE ( ECHO. & ECHO.You already set the value of var: %var%) & REM Have to have ) before ELSE

REM String match:
SET var=Hello, World!
IF "%var%"=="Hello, World!" (
	ECHO. & ECHO.found!
)
REM Case insensitive:
IF /I "%var%"=="hello, world!" ( REM
	ECHO. & ECHO.found! & ECHO.
)

REM Arithmetic comparisons:
SET /A var=1
IF /I "%var%" EQU "1" ECHO equality with 1
IF /I "%var%" NEQ "0" ECHO inequality with 0
IF /I "%var%" GEQ "0" ECHO greater than or equal to 0
IF /I "%var%" LEQ "2" ECHO less than or equal to 2 & ECHO.

REM Checking a return code:
IF /I "%ERRORLEVEL%" NEQ "0" (
	ECHO execution failed & ECHO.
)