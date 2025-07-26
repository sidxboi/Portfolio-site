// Temporary workaround: This file redirects to the frontend-only Vite server
// This keeps the workflow working while maintaining frontend-only architecture

import { spawn } from 'child_process';
import path from 'path';

console.log('🚀 Starting frontend-only portfolio application...');
console.log('📁 Running Vite development server for React portfolio');

// Change to root directory and start Vite
const vite = spawn('npx', ['vite', '--port', '5000'], {
  cwd: path.resolve(process.cwd()),
  stdio: 'inherit'
});

vite.on('error', (err) => {
  console.error('❌ Failed to start Vite:', err);
  process.exit(1);
});

vite.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
  process.exit(code || 0);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down frontend server...');
  vite.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n👋 Shutting down frontend server...');
  vite.kill('SIGTERM');
});