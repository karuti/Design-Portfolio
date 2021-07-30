const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blogpost.js`)
  const workPage = path.resolve(`./src/templates/workpost.js`)

  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
              blogTitle
            }
          }
        }

        allContentfulWorkPortfolio {
          edges {
            node {
              id
              slug
              projectTitle
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const work = result.data.allContentfulProductPage.edges
    const posts = result.data.allContentfulBlogPost.edges

    //create blog posts page
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.slug,
        component: blogpost,
        context: {
          slug: post.node.slug,
          language: post.node.language,
          previous,
          next,
        },
      })
    })

    // Create work pages.

    work.forEach((workTemp, index) => {
      const previous = index === work.length - 1 ? null : work[index + 1].node
      const next = index === 0 ? null : work[index - 1].node

      createPage({
        path: workTemp.node.slug,
        component: workpost,
        context: {
          slug: workTemp.node.slug,
          previous,
          next,
        },
      })
    })
  })
}
