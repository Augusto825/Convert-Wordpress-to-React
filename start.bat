@echo off
:: Save the current directory path
set ROOT_DIR=%~dp0

:: Navigate to the backend folder and start the backend server
cd /d "%ROOT_DIR%%backend"
start cmd /k "npm start"

:: Navigate to the frontend folder and start the frontend server
cd /d "%ROOT_DIR%frontend"
start cmd /k "npm start"