import { StyledSpinner } from './StyledLodding';
const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function Lodding() {
  return (
    <div role="alert">
      <div style={styles.spinner}>
        <StyledSpinner size="32" />
        Загружаем...
      </div>
    </div>
  );
}
