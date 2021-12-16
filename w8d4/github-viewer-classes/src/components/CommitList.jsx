import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commits } = props;

  const parsedCommits =
    Array.isArray(commits) &&
    commits.map((commitObj) => (
      <CommitListItem
        key={commitObj.commit.tree.sha}
        name={commitObj.commit.author.name}
        message={commitObj.commit.message}
      />
    ));

  return <section>{parsedCommits}</section>;
}
