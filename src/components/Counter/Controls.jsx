const Controls = ({ OnIncrement, OnDecrement }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={OnIncrement}
        style={{
          width: "200px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "green",
          borderRadius: "10px",
          fontSize: "24px",
        }}
      >
        Збільшити на 1
      </button>
      <button
        style={{
          width: "200px",
          height: "50px",

          background: "red",
          borderRadius: "10px",
          fontSize: "24px",
        }}
        onClick={OnDecrement}
      >
        {" "}
        Зменшити на 1
      </button>
    </div>
  );
};
export default Controls;
