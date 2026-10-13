// The support team from avortyx.com's help chat: photo, name and role for each teammate
const TEAM = [
  ['maya-decker', 'Maya Decker', 'Sales lead'],
  ['jordan-kim', 'Jordan Kim', 'Solutions engineer'],
  ['milena-govich', 'Milena Govich', 'Customer success'],
]

export default function SupportTeam({ className = '' }) {
  return (
    <ul className={`avx-team ${className}`.trim()}>
      {TEAM.map(([slug, name, role]) => (
        <li key={slug} className="avx-team-member">
          <img src={`/assets/avx-site/img/team/${slug}.webp`} alt={name} width="48" height="48" loading="lazy" />
          <span>
            <span className="avx-team-name">{name}</span>
            <span className="avx-team-role">{role}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
