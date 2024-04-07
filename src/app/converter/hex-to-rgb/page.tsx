import { useTranslationServer } from '@/hooks/use-translation/use-translation-server'

import { ConverterSection } from '../(components)/(converter)/converter-section'
import { ColorExplanationSection } from '../(components)/color-explanation-section'

export default function HexToRgb() {
  const { t } = useTranslationServer()

  return (
    <main className="flex w-screen flex-col gap-5 px-3 sm:max-w-[calc(100vw-213.883px)]">
      <ConverterSection
        title={t.pages.converter['hex-to-rgb']['HEX to RGB']}
        description={
          t.pages.converter['hex-to-rgb']['Convert your hex color to RGB']
        }
        prefix="#"
        originalColorType="hex"
        finalColorType="rgb"
        placeholder="Hex"
        enterYourColorWarnText={
          t.pages.converter['hex-to-rgb']['Enter your hex color']
        }
      />
      <ColorExplanationSection
        title={
          t.pages.converter['hex-to-rgb'][
            'Exploring the Hexadecimal Color Code (HEX)'
          ]
        }
        paragraph={
          t.pages.converter['hex-to-rgb'][
            'The hexadecimal color code, commonly known as HEX, is a way of representing colors using a combination of six alphanumeric digits. Each pair of digits represents the intensity of red, green, and blue, respectively, ranging from 00 to FF. This notation is widely used in graphic design and web development to specify colors with precision and consistency across different platforms and devices.'
          ]
        }
      />
      <ColorExplanationSection
        title={
          t.pages.converter['hex-to-rgb']['Understanding the RGB Color Model']
        }
        paragraph={
          t.pages.converter['hex-to-rgb'][
            'The RGB color model, short for Red, Green, and Blue, is an additive color system widely used in representing colors on electronic devices such as computer monitors, television screens, and digital cameras. In this model, each color is represented as a combination of intensities of red, green, and blue, ranging from 0 to 255. By adjusting these intensities, it is possible to create a wide range of colors visible to the human eye.'
          ]
        }
      />
      <ColorExplanationSection
        title={
          t.pages.converter['hex-to-rgb'][
            'Maximizing Design Efficiency with Color Conversions'
          ]
        }
        paragraph={
          t.pages.converter['hex-to-rgb'][
            'Converting HEX colors to RGB plays a fundamental role in optimizing design processes, ensuring that colors remain consistent across various platforms and devices. Understanding these conversions not only enhances accuracy in graphic and digital design but also strengthens visual communication, ensuring that the original intent of the designer is maintained regardless of the medium used.'
          ]
        }
      />
      <ColorExplanationSection
        title={
          t.pages.converter['hex-to-rgb'][
            'The Importance of Color Palette in Visual Identity'
          ]
        }
        paragraph={
          t.pages.converter['hex-to-rgb'][
            'A well-chosen color palette is crucial for establishing the unique visual identity of a brand, profoundly influencing how the audience perceives and connects with it. Colors are not merely aesthetic; they evoke emotions and communicate values, playing an essential role in branding and marketing by creating a cohesive and impactful brand image.'
          ]
        }
      />
    </main>
  )
}
