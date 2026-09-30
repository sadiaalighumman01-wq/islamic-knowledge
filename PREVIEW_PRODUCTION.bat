@echo off
title Islamic Knowledge Hub - Production Preview
echo ===================================================
echo     ISLAMIC KNOWLEDGE HUB - PRODUCTION PREVIEW
echo ===================================================
echo.
echo Launching compiled production build...
echo.

:: Open browser
start "" http://localhost:4173/

:: Start Vite preview
call npm run preview -- --host 127.0.0.1 --port 4173

pause
