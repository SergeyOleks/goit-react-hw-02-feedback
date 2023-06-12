const Statistics = ({ good, neutral, bad, total, positivePercent }) => {

  if (total > 0) {
    
  }
  return (
    <section>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercent}%</p>
    </section>
  );
  
};


export default Statistics