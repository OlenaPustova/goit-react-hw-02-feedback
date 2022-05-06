import { nanoid } from 'nanoid';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const arrOptions = Object.keys(options);
  return (
    <>
      <div>
        {arrOptions.map(item => (
          <button
            key={nanoid()}
            className="btn"
            type="button"
            name={item}
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
