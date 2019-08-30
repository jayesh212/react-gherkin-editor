import React from 'react'
import { mount } from 'enzyme'
import GherkinEditor from './index'
import AceEditor from 'react-ace'

describe('<GherkinEditor />', () => {
  it('renders <AceEditor />', () => {
    const wrapper = mount(<GherkinEditor />)
    expect(wrapper.find(AceEditor)).toBeTruthy()
  })

  it('keeps track of the AceEditor ref', () => {
    const wrapper = mount(<GherkinEditor />)
    const { AceEditorRef } = wrapper.instance()
    expect(AceEditorRef).toBeTruthy()
  })

  it('triggers onValueChange when content is updated', () => {
    const onChangeMock = jest.fn()
    const wrapper = mount(<GherkinEditor onChange={onChangeMock} />)
    const { ace } = wrapper.instance()
    ace.session.setValue('Feature: User signup')
    expect(onChangeMock).toHaveBeenCalledWith(
      'Feature: User signup',
      expect.anything()
    )
  })

  describe('get ace', () => {
    it('returns the low level ace editor', () => {
      const wrapper = mount(<GherkinEditor />)
      const { ace } = wrapper.instance()
      expect(ace).toBeDefined()
      // TODO: find an easy way to assert a real Ace object
      expect(ace).toHaveProperty('$blockScrolling')
    })
  })
})
