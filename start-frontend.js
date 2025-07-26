#!/usr/bin/env node

// Simple frontend-only starter script
const { spawn } = require('child_process');
const path = require('path');

console.log('Starting frontend-only portfolio application...');

// Start Vite dev server
const vite = spawn('npx', ['vite', '--port', '5000'], {
  cwd: process.cwd(),
  stdio: 'inherit'
});

vite.on('error', (err) => {
  console.error('Failed to start Vite:', err);
  process.exit(1);
});

vite.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
  process.exit(code);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nShutting down...');
  vite.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\nShutting down...');
  vite.kill('SIGTERM');
});