// routes/filemanager.js

const express = require('express');
const router = express.Router();
const fileController = require('../controllers/filecontroller');

/**
 * @swagger
 * tags:
 *   name: Files
 *   description: API for file management operations.
 */

/**
 * @swagger
 * /files:
 *   get:
 *     summary: List all files in the base directory.
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: A list of files.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 files:
 *                   type: array
 *                   items:
 *                     type: string
 *       500:
 *         description: Error reading directory.
 */
router.get('/', fileController.listFiles);

/**
 * @swagger
 * /files/{filename}:
 *   get:
 *     summary: Retrieve the contents of a specific file.
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: filename
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the file.
 *     responses:
 *       200:
 *         description: The file content.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 filename:
 *                   type: string
 *                 data:
 *                   type: string
 *       500:
 *         description: Error reading file.
 */
router.get('/:filename', fileController.readFile);

/**
 * @swagger
 * /files:
 *   post:
 *     summary: Create a new file.
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - filename
 *             properties:
 *               filename:
 *                 type: string
 *                 description: The name of the file.
 *               content:
 *                 type: string
 *                 description: The file content.
 *     responses:
 *       201:
 *         description: File created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 filename:
 *                   type: string
 *       400:
 *         description: Bad request, filename is required.
 *       500:
 *         description: Error creating file.
 */
router.post('/', fileController.createFile);

/**
 * @swagger
 * /files/{filename}:
 *   put:
 *     summary: Update an existing file.
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: filename
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the file.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The updated file content.
 *     responses:
 *       200:
 *         description: File updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 filename:
 *                   type: string
 *       500:
 *         description: Error updating file.
 */
router.put('/:filename', fileController.updateFile);

/**
 * @swagger
 * /files/{filename}:
 *   delete:
 *     summary: Delete a file.
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: filename
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the file.
 *     responses:
 *       200:
 *         description: File deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 filename:
 *                   type: string
 *       500:
 *         description: Error deleting file.
 */
router.delete('/:filename', fileController.deleteFile);

module.exports = router;
