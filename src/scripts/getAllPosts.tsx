import fs from 'fs'
import grayMatter from 'gray-matter'
import remarkHtml from 'remark-html'
import { remark } from 'remark'

export function getAllPosts() {
  const allPostsFileNames = fs.readdirSync('public/posts')

  const posts = allPostsFileNames.map((filename) => {
    const fileContent = fs.readFileSync(`public/posts/${filename}`, 'utf-8')
    const { content, data: metadata } = grayMatter(fileContent)
    const htmlContent = remark().use(remarkHtml).processSync(content).toString()

    return {
      metadata: {
        ...metadata,
        slug: filename.replace('.md', ''),
      },
      content: htmlContent,
    }
  })

  return posts
}
