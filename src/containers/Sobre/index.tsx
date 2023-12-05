import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
      excepturi perferendis incidunt dolor? Minima dicta maiores vel aspernatur
      ratione fuga repellendus animi similique placeat? Aspernatur inventore
      nesciunt nisi magnam dignissimos.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=aldosds&layout=compact&langs_count=6&theme=tokyonight" />
    </GithubSecao>
  </section>
)

export default Sobre
