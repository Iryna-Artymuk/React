import errorImage from './error.jpg';
function ErrorView({ errorText }) {
  console.log(errorText);
  return (
    <div
      style={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
        padding: 20,

        margin: 'auto',
        fontSize: 24,
        boxShadow: '0.3em 0.3em 0.3em 0.3em rgba(0.4, 0.4, 0.4, 0.4)',
      }}
      role="alert"
    >
      <img src={errorImage} width="100%" alt="sadcat" />
      <p>{errorText}</p>
    </div>
  );
}

export default ErrorView;
