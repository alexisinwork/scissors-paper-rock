import React from 'react'
// import getRandomNumber from '../../utils/getRandomNumber'
import { RuleOption, RuleOptions } from '../../rulesMap'
import toCapitalize from '../../../../shared/utils/toCapitalize'
import RuleImage from '../RuleImage/RuleImage'
import './index.css'

export type PlayerProps = {
  testId: string
  name: string
  option?: RuleOption
  onOptionSelected: (rule: RuleOption) => void
  wins: number
}

export type PlayerImage = {
  src: string
  alt: RuleOption | 'default'
}

/**
 * Renders the Player:
 *  - title
 *  - image
 *  - option
 *  - wins counter
 *
 * @param {string} testId is responsible for diffirentiate players
 */
const Player = ({
  testId,
  name,
  option,
  onOptionSelected,
  wins
}: PlayerProps): React.ReactElement => {
  return (
    <div data-testid={testId} className="container">
      <div className="player">
        <p className="name" data-testid={`${testId}-name`}>{name}</p>

        <div className="image">
          <RuleImage option={option} />
        </div>

        <select
          className="select"
          defaultValue={''}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
            onOptionSelected(e.target.value.toLowerCase() as RuleOption)}
          >
          <option value="">Select the option...</option>
          {RuleOptions.map((rule: RuleOption) => (
            <option
              key={rule}
              data-testid={`${testId}-option`}
            >
              {toCapitalize(rule)}
            </option>
          ))}
        </select>

        <p className="wins" data-testid={`${testId}-wins`}>Wins: {wins}</p>
      </div>
    </div>
  )
}

export default Player
