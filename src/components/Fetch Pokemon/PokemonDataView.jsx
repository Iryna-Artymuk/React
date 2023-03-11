export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
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
    >
      <img src={sprites.other['official-artwork'].front_default} width="100%" alt={name} />
      <h2>{name}</h2>
      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
