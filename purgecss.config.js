module.exports = {
  content: ['./_site/**/*.html', './_layouts/**/*.html', './_includes/**/*.html'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
};

