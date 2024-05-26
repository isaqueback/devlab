import { createTranslation } from '@/i18n/server'

import { ConverterSection } from '../(components)/(converter)/converter-section'
import { ColorExplanationSection } from '../(components)/color-explanation-section'

export default async function HexToRgba() {
  const { t } = await createTranslation('pages')

  return (
    <main className="flex w-screen flex-col gap-5 px-3 pb-10 sm:max-w-[calc(100vw-213.883px)]">
      <ConverterSection
        title={t('converter.hex-with-opacity-to-rgba.HEX to RGBA')}
        description={t(
          'converter.hex-with-opacity-to-rgba.Convert your hex color to RGBA',
        )}
        prefix="#"
        originalColorType="hexWithOpacity"
        finalColorType="rgba"
        placeholder="Hex"
        enterYourColorWarnText={t(
          'converter.hex-with-opacity-to-rgba.Enter your hex color',
        )}
      />
      <ColorExplanationSection
        title={t(
          'converter.hex-with-opacity-to-rgba.Exploring HEX Color Code with Opacity (HEX with Alpha)',
        )}
        paragraph={t(
          "converter.hex-with-opacity-to-rgba.The hexadecimal color code with opacity, commonly represented as HEX with alpha, expands the traditional HEX code by including an additional component that defines the color's transparency. This format uses eight alphanumeric digits, where the first six represent the intensities of red, green, and blue, and the last two represent the level of opacity, ranging from 00 (completely transparent) to FF (completely opaque). This notation is widely used in graphic design and web development to create consistent and precise transparency effects.",
        )}
      />
      <ColorExplanationSection
        title={t(
          'converter.hex-with-opacity-to-rgba.Understanding the RGBA Color Model',
        )}
        paragraph={t(
          "converter.hex-with-opacity-to-rgba.The RGBA color model is an extension of the RGB model, incorporating a fourth component, the alpha, which represents the color's opacity. In electronic devices, each color is defined by the combination of red, green, and blue intensities, ranging from 0 to 255, while opacity (alpha) also ranges from 0 (transparent) to 255 (opaque). This addition allows designers to adjust color transparency, enabling the creation of more complex and dynamic visual effects.",
        )}
      />
      <ColorExplanationSection
        title={t(
          'converter.hex-with-opacity-to-rgba.Enhancing Design Flexibility with Opacity Conversions',
        )}
        paragraph={t(
          "converter.hex-with-opacity-to-rgba.Converting HEX colors with opacity to RGBA is essential for optimizing design processes, ensuring that transparency effects are consistent across various platforms and devices. Understanding these conversions improves accuracy in graphic and digital design and allows for richer and more varied visual communication, maintaining the designer's original intent regardless of the medium used.",
        )}
      />
      <ColorExplanationSection
        title={t(
          'converter.hex-with-opacity-to-rgba.The Role of Transparency in Modern Design',
        )}
        paragraph={t(
          "converter.hex-with-opacity-to-rgba.Transparency is a powerful tool in modern design, allowing for the creation of visual layers and effects that add depth and sophistication to compositions. Using a color palette with different levels of opacity can enhance a brand's visual identity, convey subtle messages, and create a more engaging user experience. The ability to manipulate transparency precisely is crucial for contemporary design, where aesthetics and functionality meet.",
        )}
      />
    </main>
  )
}
