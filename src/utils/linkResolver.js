const linkResolver = doc => {
  if (doc.type === "page") {
    return `/news/${doc.uid}`
  }

  if (doc.type === "post") {
    return `/news/${doc.uid}`
  }
  return "/"
}

module.exports = linkResolver
