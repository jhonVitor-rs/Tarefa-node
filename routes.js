import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router()
const basePath = path.join(__dirname,'/templates')

router.get('/', (req,res) => {
  res.sendFile(`${basePath}/index.html`)
})

router.get('/1', (req,res) => {
  res.sendFile(`${basePath}/project1.html`)
})

router.get('/2', (req,res) => {
  res.sendFile(`${basePath}/project2.html`)
})

export {router}