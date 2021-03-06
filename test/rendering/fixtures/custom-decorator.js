/** @jsx h */

import h from '../../helpers/h'
import { Mark } from 'slate'

export const schema = {
  nodes: {
    paragraph: {
      decorate(text, block) {
        let { characters } = text
        let second = characters.get(1)
        const mark = Mark.create({ type: 'bold' })
        const marks = second.marks.add(mark)
        second = second.merge({ marks })
        characters = characters.set(1, second)
        return characters
      }
    }
  },
  marks: {
    bold: {
      fontWeight: 'bold',
    }
  }
}

export const state = (
  <state>
    <document>
      <paragraph>
        one
      </paragraph>
    </document>
  </state>
)
