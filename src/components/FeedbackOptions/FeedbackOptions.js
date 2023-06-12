const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <section>
      {options.map(item => {
        return (
          <button type="button" onClick={onLeaveFeedback} name={item} key={item}>
            {item}
          </button>
        );
      })}
    </section>
  );
};


export default FeedbackOptions;
