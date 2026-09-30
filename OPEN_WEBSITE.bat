@echo off
title Islamic Knowledge Hub - Launcher
echo ===================================================
echo        ISLAMIC KNOWLEDGE HUB - LAUNCHER
echo ===================================================
echo.
echo Starting the website server...
echo.

:: Open default browser after 2 seconds
start "" http://localhost:5173/

:: Start the Vite development server
call npm run dev -- --host 127.0.0.1 --port 5173

pause
