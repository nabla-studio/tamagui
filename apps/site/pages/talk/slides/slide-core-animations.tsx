import { createCodeHighlighter } from '@lib/highlightCode'
import { AnimationsDemo, AnimationsHoverDemo } from '@tamagui/demos'
import { Slide } from 'components/Slide'
import { memo } from 'react'
import { YStack } from 'tamagui'

const highlightCode = createCodeHighlighter()

const snippet1 = highlightCode(
  `
import { createAnimations }
  from '@tamagui/animations-reanimated'

const animations = createAnimations({
  slow: {
    damping: 15,
    stiffness: 40,
  },
  fast: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
})
`,
  'tsx'
)

const snippet2 = highlightCode(
  `
import { createAnimations }
  from '@tamagui/animations-css'

const animations = createAnimations({
  slow: 'ease-in 500ms',
  fast: 'ease-in 100ms',
})
`,
  'tsx'
)

const snippetUsage = highlightCode(
  `
import { Stack } from '@tamagui/core'
  
export default (props) => (
  <Stack
    animation="fast"
    y={0}
    scale={1}

    hoverStyle={{
      scale: 1.1
    }}

    {...props.highlight && {
      y: -10,
      backgroundColor: '$color5'
    }}
  />
)
`,
  'tsx'
)

export default memo(() => {
  return (
    <Slide
      title="Animations"
      subTitle="@tamagui/core"
      stepsStrategy="replace"
      theme="pink"
      steps={[
        [
          {
            type: 'split-horizontal',
            content: [
              {
                type: 'code',
                title: `animations.native.ts`,
                content: snippet1,
              },
              {
                type: 'text',
                content: '',
              },
            ],
          },
        ],

        [
          {
            type: 'split-horizontal',
            content: [
              {
                type: 'code',
                title: `animations.native.ts`,
                content: snippet1,
              },
              {
                type: 'code',
                title: `animations.web.ts`,
                content: snippet2,
              },
            ],
          },
        ],

        [
          {
            type: 'split-horizontal',
            content: [
              {
                type: 'code',
                content: snippetUsage,
              },

              {
                type: 'content',
                content: (
                  <YStack scale={2} ai="center">
                    <AnimationsHoverDemo />
                  </YStack>
                ),
              },
            ],
          },
        ],
      ]}
    />
  )
})
