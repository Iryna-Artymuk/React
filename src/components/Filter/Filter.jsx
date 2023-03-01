const Filter = ({ value, onFilterEnter }) => {
  //   console.log(value, onFilterEnter);
  return (
    <label
      style={{
        width: '70%',
        padding: '12px 16px',

        borderRadius: 10,
        boxShadow: '0.3em 0.3em rgba(0.4, 0.4, 0.4, 0.4)',
      }}
    >
      Filter
      <input
        type="text"
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: 10,
          marginTop: 5,
          fontSize: 24,
        }}
        value={value}
        onChange={onFilterEnter}
      />
    </label>
  );
};

export default Filter;
