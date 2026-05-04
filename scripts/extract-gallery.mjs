import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const htmlPath =
  process.argv[2] ?? path.join(root, '_gallery_page.html')
const html = fs.readFileSync(htmlPath, 'utf8')

const items = []
const figRe =
  /<figure class="gallery-strips-item[^"]*"[^>]*>([\s\S]*?)<\/figure>/g
let fm
while ((fm = figRe.exec(html)) !== null) {
  const block = fm[1]
  const srcM = block.match(
    /data-src="(https:\/\/images\.squarespace-cdn\.com[^"]+)"/,
  )
  if (!srcM) continue
  const capM = block.match(
    /<p class="gallery-caption-content">([\s\S]*?)<\/p>/,
  )
  let caption = capM
    ? capM[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
    : ''
  if (!caption) {
    const altM = block.match(/alt="([^"]*)"/)
    caption = altM ? altM[1].replace(/\s+/g, ' ').trim() : 'Garden project'
  }
  if (/\.jpe?g$/i.test(caption) && caption.length < 48) {
    caption = 'Garden project'
  }
  items.push({ src: srcM[1], caption })
}

const outPath =
  process.argv[3] ?? path.join(root, 'src/foodscaping/content/galleryFromSite.json')
fs.writeFileSync(outPath, JSON.stringify(items, null, 2), 'utf8')
console.log('count', items.length, '→', outPath)
