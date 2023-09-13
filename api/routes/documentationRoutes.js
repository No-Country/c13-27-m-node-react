const express = require('express');
const router = express.Router();
const fs = require('fs');
const marked = require('marked');
const path = require('path');

router.get('/', async (req, res) => {
  const file = await fs.promises.readFile(
    path.join(__dirname, '../README.md'),
    'utf-8'
  );

  const html = marked.parse(file);

  const response = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0d1117;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: #333;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        h1 {
            background-color: #24292e;
            color: #58a6ff;
            padding: 20px;
            margin: 0;
            font-size: 28px;
        }

        .markdown-body {
            background-color: #161b22;
            border: 1px solid #e1e4e8;
            border-radius: 6px;
            padding: 20px;
        }

        a {
            color: #0366d6;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        ul {
            list-style-type: disc;
            margin: 0;
            padding: 0 0 0 20px;
        }

        ol {
            list-style-type: decimal;
            margin: 0;
            padding: 0 0 0 20px;
        }

        li {
            margin-bottom: 10px;
        }

        code {
            font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
            background-color: #f6f8fa;
            padding: 0.2em 0.4em;
            font-size: 85%;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="markdown-body" style="color: whitesmoke;">
           ${html}
        </div>
    </div>
</body>
</html>
`;

  res.send(response);
});

module.exports = router;
