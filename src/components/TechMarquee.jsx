import { memo } from 'react'

// Original-colour tech icons (Devicon), bundled locally by Vite
const files = import.meta.glob('../assets/icons/*.svg', { eager: true, import: 'default' })
const icon = (name) => files[`../assets/icons/${name}.svg`]

const ROW_1 = [
  ['react', 'React'],
  ['typescript', 'TypeScript'],
  ['javascript', 'JavaScript'],
  ['nextjs', 'Next.js', true],
  ['redux', 'Redux Toolkit'],
  ['html5', 'HTML5'],
  ['css3', 'CSS3'],
  ['tailwindcss', 'Tailwind CSS'],
  ['materialui', 'Material UI'],
]
const ROW_2 = [
  ['nodejs', 'Node.js'],
  ['express', 'Express.js', true],
  ['bootstrap', 'Bootstrap'],
  ['git', 'Git'],
  ['github', 'GitHub', true],
  ['vitejs', 'Vite'],
  ['webpack', 'Webpack'],
  ['postman', 'Postman'],
]

const Row = memo(function Row({ items, reverse }) {
  // duplicated once so the loop is seamless
  const loop = [...items, ...items]
  return (
    <div className={`tech-row ${reverse ? 'is-reverse' : ''}`}>
      <div className="tech-track">
        {loop.map(([key, label, dark], i) => (
          <div className="tech-pill" key={i} aria-hidden={i >= items.length}>
            <img src={icon(key)} alt="" className={dark ? 'is-dark' : ''} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
})

export default function TechMarquee() {
  return (
    <div className="tech-marquee" aria-label="Technologies I use">
      <Row items={ROW_1} />
      <Row items={ROW_2} reverse />
    </div>
  )
}
