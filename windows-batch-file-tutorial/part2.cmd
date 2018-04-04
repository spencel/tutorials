@rem Turn console printing off.
@echo off

rem Use the 'set' command to assign values to  variables--global by default.
rem Do not use white space, e.g., 'foo = bar'.
set foo=bar
echo. & echo.foo = %foo%

rem Use the 'setlocal' command to make subsequent variable assignments local.
setlocal
echo. & echo.entered local scope
set v=local value
echo. & echo.v = %v%
rem Use 'endlocal' to make subsequent variable assignments global again.
endlocal
echo. & echo.exited local scope
echo. & echo.v = %v%

rem The '/a' switch enables arithmetic operations, which is useful for validating user input.
set /a four=2+2
rem The '%' postfix gets the value of the variable.
echo. & echo.four = %four%

rem Calling 'set' will list all system and bath file declared variables.
echo. & echo.set:
set

echo. & echo.date = %date%

echo. & echo.cd = %cd%

rem Command line arguments are retrived using %0 to %9, use 'shift' to get more arguments
rem %0 is the name of the file or script:
set thisFileName=%0
echo. & echo.thisFileName = %thisFileName%

set noQuotesThisFileName=%~0
echo. & echo.noQuotesThisFileName = %noQuotesThisFileName%

set thisFullFilePath=%~f0
echo. & echo.thisFullFilePath = %thisFullFilePath%

set thisParentDirectory=%~dp0
echo. & echo.thisParentDirectory = %thisParentDirectory%

set thisFullFileName=%~nx0
echo. & echo.thisFullFileName = %thisFullFileName%
