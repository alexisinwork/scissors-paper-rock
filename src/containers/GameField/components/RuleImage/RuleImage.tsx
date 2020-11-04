import React from 'react'
import { RuleOption, ROCK, PAPER, SCISSORS } from '../../rulesMap'
import rockImage from './images/rock.png'
import paperImage from './images/paper.png'
import scissorsImage from './images/scissors.png'
import spockImage from './images/spock.png'

export type PlayerImage = {
  src: string
  alt: RuleOption | 'default'
}

/**
 * Renders the RuleImage for the Player
 *
 * @param {RuleOption} option is responsible for diffirentiate images
 */
const RuleImage = ({
  option
}: {
  option: RuleOption | undefined
}): React.ReactElement => {
  const getImage = (option: RuleOption | undefined): PlayerImage => {
    if (option === ROCK) return { src: rockImage, alt: ROCK }
    if (option === PAPER) return { src: paperImage, alt: PAPER }
    if (option === SCISSORS) return { src: scissorsImage, alt: SCISSORS }

    return { src: spockImage, alt: 'default' }
  }

  const image = getImage(option)

  return (
    <div className="image">
      <img src={image.src} alt={image.alt} />
    </div>
  )
}

export default RuleImage
