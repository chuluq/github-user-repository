import "./styles.css";

const AutoComplete = ({
  isShow,
  searchText,
  filtered,
  handleClick,
  active,
}) => {
  if (isShow && searchText) {
    if (filtered.length) {
      return (
        <ul className="autocomplete">
          {filtered.map((suggestion, index) => {
            console.log(suggestion);
            let className;
            if (index === active) {
              className = "active";
            }
            return (
              <li
                className={className}
                key={suggestion.id}
                onClick={handleClick}
              >
                {suggestion.login}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <div className="no-autocomplete">
          <em>Not found</em>
        </div>
      );
    }
  }

  return;
};

export default AutoComplete;
