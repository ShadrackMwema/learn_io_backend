const fs = require('fs').promises;
const path = require('path');

// Define the base directory for file operations
const baseDir = path.join(__dirname, '..', 'files');

// Helper function to resolve file paths safely
function resolveFilePath(filename) {
  return path.join(baseDir, filename);
}

/**
 * List all files in the base directory.
 */
async function listFiles(req, res) {
  try {
    const files = await fs.readdir(baseDir);
    res.json({ files });
  } catch (error) {
    res.status(500).json({ error: 'Error reading directory', details: error.message });
  }
}

/**
 * Read the content of a file.
 */
async function readFile(req, res) {
  try {
    const filename = req.params.filename;
    const filePath = resolveFilePath(filename);
    const data = await fs.readFile(filePath, 'utf8');
    res.json({ filename, data });
  } catch (error) {
    res.status(500).json({ error: 'Error reading file', details: error.message });
  }
}

/**
 * Create a new file.
 */
async function createFile(req, res) {
  try {
    const { filename, content } = req.body;
    if (!filename) {
      return res.status(400).json({ error: 'Filename is required' });
    }
    const filePath = resolveFilePath(filename);
    await fs.writeFile(filePath, content || '', 'utf8');
    res.status(201).json({ message: 'File created successfully', filename });
  } catch (error) {
    res.status(500).json({ error: 'Error creating file', details: error.message });
  }
}

/**
 * Update an existing file.
 */
async function updateFile(req, res) {
  try {
    const filename = req.params.filename;
    const { content } = req.body;
    const filePath = resolveFilePath(filename);
    // Check if the file exists
    await fs.access(filePath);
    await fs.writeFile(filePath, content || '', 'utf8');
    res.json({ message: 'File updated successfully', filename });
  } catch (error) {
    res.status(500).json({ error: 'Error updating file', details: error.message });
  }
}

/**
 * Delete a file.
 */
async function deleteFile(req, res) {
  try {
    const filename = req.params.filename;
    const filePath = resolveFilePath(filename);
    await fs.unlink(filePath);
    res.json({ message: 'File deleted successfully', filename });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting file', details: error.message });
  }
}

module.exports = {
  listFiles,
  readFile,
  createFile,
  updateFile,
  deleteFile
};