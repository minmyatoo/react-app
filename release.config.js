module.exports = {
  branches: "master",
  repositoryURL: "https://github.com/minmyatoo/react-app/",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github"
  ]
};
