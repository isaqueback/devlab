import { createTranslation } from '@/i18n/server'

import { ConverterSection } from '../(components)/(converter)/converter-section'
import { ColorExplanationSection } from '../(components)/color-explanation-section'

export default async function RgbaToHex() {
  const { t } = await createTranslation('pages')

  return (
    <main className="flex w-screen flex-col gap-5 px-3 pb-10 sm:max-w-[calc(100vw-213.883px)]">
      <ConverterSection
        title={t('converter.rgb-to-hex.RGB to HEX')}
        description={t('converter.rgb-to-hex.Convert your RGB color to hex')}
        originalColorType="rgb"
        finalColorType="hex"
        placeholder="RGB"
        enterYourColorWarnText={t('converter.rgb-to-hex.Enter your rgb color')}
      />
      <ColorExplanationSection
        title={t(
          'converter.rgb-to-hex.Exploring the RGB Color Model (Red, Green, Blue)',
        )}
        paragraph={t(
          'converter.rgb-to-hex.The RGB color model, short for Red, Green, and Blue, is an additive color system widely used in representing colors on electronic devices such as computer monitors, television screens, and digital cameras. In this model, each color is represented as a combination of intensities of red, green, and blue, ranging from 0 to 255. By adjusting these intensities, it is possible to create a wide range of colors visible to the human eye.',
        )}
      />
      <ColorExplanationSection
        title={t(
          'converter.rgb-to-hex.Understanding the Hexadecimal Color Code (HEX)',
        )}
        paragraph={t(
          'converter.rgb-to-hex.The hexadecimal color code, commonly known as HEX, is a way of representing colors using a combination of six alphanumeric digits. Each pair of digits represents the intensity of red, green, and blue, respectively, ranging from 00 to FF. This notation is widely used in graphic design and web development to specify colors with precision and consistency across different platforms and devices.',
        )}
      />
      <ColorExplanationSection
        title={t(
          'converter.rgb-to-hex.Maximizing Design Efficiency with Color Conversions',
        )}
        paragraph={t(
          "converter.rgb-to-hex.The ability to convert colors from RGB to HEX is crucial for the efficiency of design processes, ensuring that colors are consistently represented across different mediums. Understanding these conversions not only enhances accuracy in graphic and digital design but also enhances visual communication. This ensures that the designer's vision is realized faithfully, regardless of the device or platform used for viewing.",
        )}
      />
      <ColorExplanationSection
        title={t(
          'converter.rgb-to-hex.The Importance of the Color Palette in Brand Communication',
        )}
        paragraph={t(
          "converter.rgb-to-hex.Choosing an appropriate color palette is vital for establishing and maintaining a brand's visual identity. Colors are powerful communication tools that can evoke emotions and convey messages, playing a key role in branding and marketing. A well-defined and consistently applied color palette promotes brand recognition and connectivity with the audience, reinforcing the brand's image in an impactful and memorable way.",
        )}
      />
    </main>
  )
}
